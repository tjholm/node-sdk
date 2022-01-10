import {
  Resource,
  ResourceDeclareRequest,
  ResourceType,
  Action,
} from '@nitric/api/proto/resource/v1/resource_pb';
import { fromGrpcError } from '../api/errors';
import { documents } from '../api/documents';
import resourceClient from './client';
import { make, Resource as Base, ActionsList } from './common';

export type CollectionPermission = 'reading' | 'writing' | 'deleting';

/**
 * A document collection resources, such as a collection/table in a document database.
 */
class CollectionResource extends Base<CollectionPermission> {
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
        (error) => {
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

  protected permsToActions(...perms: CollectionPermission[]): ActionsList {
    return perms.reduce((actions, p) => {
      switch(p) {
        case "reading":
          return [
            ...actions, 
            Action.COLLECTIONLIST, 
            Action.COLLECTIONDOCUMENTREAD, 
            Action.COLLECTIONQUERY
          ];
        case "writing":
          return [
            ...actions,
            Action.COLLECTIONDOCUMENTWRITE,
          ];
        case "deleting":
          return [
            ...actions,
            Action.COLLECTIONDOCUMENTDELETE
          ];
      }
    }, []);
  }

  /**
   * Return a collection reference and register the permissions required by the currently scoped function for this resource.
   *
   * e.g. const customers = resources.collection('customers').for('reading', 'writing')
   *
   * @param perms the required permission set
   * @returns a usable collection reference
   */
  public for<T = Record<string, any>>(...perms: CollectionPermission[]) {
    this.setPolicies(...perms);

    return documents().collection<T>(this.name);
  }
}

export const collection = make(CollectionResource);
