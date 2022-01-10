import {
  Resource,
  ResourceDeclareRequest,
  ResourceDeclareResponse,
  ResourceType,
  Action,
} from '@nitric/api/proto/resource/v1/resource_pb';
import resourceClient from './client';
import { queues, Queue } from '../api/';
import { ActionsList, make, Resource as Base } from './common';

type QueuePermission = 'sending' | 'receiving';

/**
 * Queue resource for async send/receive messaging
 */
class QueueResource extends Base<QueuePermission> {
  /**
   * Register this queue as a required resource for the calling function/container
   * @returns a promise that resolves when the registration is complete
   */
  protected async register(): Promise<void> {
    const req = new ResourceDeclareRequest();
    const resource = new Resource();
    resource.setName(this.name);
    resource.setType(ResourceType.QUEUE);
    req.setResource(resource);

    return new Promise<void>((resolve, reject) => {
      resourceClient.declare(
        req,
        (error, response: ResourceDeclareResponse) => {
          if (error) {
            // TODO: remove this ignore when not using link
            // @ts-ignore
            reject(fromGrpcError(error));
          } else {
            resolve();
          }
        }
      );
    });
  }

  protected permsToActions(...perms: QueuePermission[]): ActionsList {
    return perms.reduce((actions, p) => {
      switch(p) {
        case "sending":
          return [
            ...actions, 
            Action.QUEUESEND, 
          ];
        case "receiving":
          return [
            ...actions,
            Action.QUEUERECEIVE,
          ];
      }
    }, []);
  }

  /**
   * Return a queue reference and register the permissions required by the currently scoped function for this resource.
   *
   * e.g. const taskQueue = resources.queue('work').for('sending')
   *
   * @param perm
   * @param perms
   * @returns
   */
  public for(
    ...perms: QueuePermission[]
  ): Queue {
    // Register policy resources
    this.setPolicies(...perms);

    return queues().queue(this.name);
  }
}

export const queue = make(QueueResource)
