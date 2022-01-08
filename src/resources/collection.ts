import {
  Resource,
  ResourceDeclareRequest,
  ResourceDeclareResponse,
  ResourceType,
  Action,
} from '@nitric/api/proto/resource/v1/resource_pb';
import { fromGrpcError } from '../api/errors';
import { documents } from '../api/documents';
import resourceClient from './client';
import { make, Permission, Resource as Base, ResourcePermMap } from './common';

const RESOURCE_PERM_MAP: ResourcePermMap = {
  reading: [
    Action.COLLECTIONDOCUMENTREAD,
    Action.COLLECTIONLIST,
    Action.COLLECTIONQUERY,
  ],
  writing: [Action.COLLECTIONDOCUMENTWRITE],
  deleting: [Action.COLLECTIONDOCUMENTDELETE],
};

/**
 * A document collection resources, such as a collection/table in a document database.
 */
class CollectionResource extends Base {
  /**
   * Register this collection as a required resource for the calling function/container
   * @returns a promise that resolves when the registration is complete
   */
  protected async register(): Promise<void> {
    const req = new ResourceDeclareRequest();

    const resource = new Resource();
    resource.setName(this.name);
    resource.setType(ResourceType.COLLECTION);
    req.setResource(resource);

    const prom = new Promise<void>((resolve, reject) => {
      resourceClient.declare(
        req,
        (error, response: ResourceDeclareResponse) => {
          if (error) {
            // TODO: remove this ignore when not using link
            reject(fromGrpcError(error));
          } else {
            resolve();
          }
        }
      );
    });

    this.resourcePromise = new Promise<Resource>((res, rej) => {
      prom.then(() => res(resource)).catch(rej);
    });

    return prom;
  }

  /**
   * Return a collection reference and register the permissions required by the currently scoped function for this resource.
   *
   * e.g. const customers = resources.collection('customers').for('reading', 'writing')
   *
   * @param perms the required permission set
   * @returns a usable collection reference
   */
  public for<T = Record<string, any>>(...perms: Permission[]) {
    this.setPolicies(RESOURCE_PERM_MAP, ...perms);

    return documents().collection<T>(this.name);
  }
}

export const collection = make(CollectionResource);
