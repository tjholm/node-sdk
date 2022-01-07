import {
  Action,
  PolicyResource,
  Resource,
  ResourceDeclareRequest,
  ResourceDeclareResponse,
  ResourceType,
} from '@nitric/api/proto/resource/v1/resource_pb';
import resourceClient from './client';
import { storage, Bucket, File } from '../api/storage';
import { make, Resource as Base } from './common';

type BucketPermission = 'reading' | 'writing' | 'deleting';

const everything: BucketPermission[] = ['reading', 'writing', 'deleting'];

const permsToActions = (...perms: BucketPermission[]) => {
  return perms.reduce((actions, perm) => {
    switch (perm) {
      case 'reading':
        return [...actions, Action.BUCKETFILEGET, Action.BUCKETFILELIST];
      case 'writing':
        return [...actions, Action.BUCKETFILEPUT];
      case 'deleting':
        return [...actions, Action.BUCKETFILEDELETE];
      default:
        throw new Error(
          `unknown bucket permission ${perm}, supported permissions are ${everything.join(
            ', '
          )}`
        );
    }
  }, []);
};

/**
 * Cloud storage bucket resource for large file storage.
 */
class BucketResource extends Base {
  private resourcePromise: Promise<Resource>;

  /**
   * Register this bucket as a required resource for the calling function/container
   * @returns a promise that resolves when the registration is complete
   */
  protected async register(): Promise<void> {
    const req = new ResourceDeclareRequest();
    const resource = new Resource();
    resource.setName(this.name);
    resource.setType(ResourceType.BUCKET);
    req.setResource(resource);

    const prom = new Promise<void>((resolve, reject) => {
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

    this.resourcePromise = new Promise<Resource>((res, rej) => {
      prom.then(() => res(resource)).catch(rej);
    });

    return prom;
  }

  /**
   * Return a bucket reference and register the permissions required by the currently scoped function for this resource.
   *
   * e.g. const imgs = resources.bucket('image').for('writing')
   *
   * @param perms the required permission set
   * @returns a usable bucket reference
   */
  public for(...perms: BucketPermission[]): Bucket {
    // TODO: register required policy resources.
    const req = new ResourceDeclareRequest();
    const resource = new Resource();
    resource.setType(ResourceType.POLICY);
    const policy = new PolicyResource();
    // TODO: Should we set the principal in this case or let the Server assume from its state?
    // policyResource.setPrincipalsList()
    policy.setActionsList(permsToActions(...perms));
    policy.setResourcesList;

    req.setResource(resource);
    req.setPolicy(policy);

    this.resourcePromise.then(() => {
      resourceClient.declare(
        req,
        (error, response: ResourceDeclareResponse) => {
          if (error) {
            // TODO: remove this ignore when not using link
            // @ts-ignore
            throw new Error(fromGrpcError(error));
          }
        }
      );
    });

    return storage().bucket(this.name);
  }
}

export const bucket = make(BucketResource);
