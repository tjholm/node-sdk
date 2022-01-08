import {
  Resource as ProtoResource,
  ResourceType,
  PolicyResource,
  ResourceDeclareRequest,
  ResourceDeclareResponse,
  ActionMap,
} from '@nitric/api/proto/resource/v1/resource_pb';
import resourceClient from './client';

export type Permission = 'reading' | 'writing' | 'deleting';

const everything: Permission[] = ['reading', 'writing', 'deleting'];

export type ResourcePermMap = Record<Permission, ActionMap[keyof ActionMap][]>;

type ActionsList = ActionMap[keyof ActionMap][];

export const permsToActions = (
  resourcePermMap: ResourcePermMap,
  ...perms: Permission[]
): ActionsList => {
  return perms.reduce((actions, perm) => {
    if (!['deleting', 'reading', 'writing'].includes(perm)) {
      throw new Error(
        `unknown bucket permission ${perm}, supported permissions are ${everything.join(
          ', '
        )}`
      );
    }

    return [...actions, ...resourcePermMap[perm]];
  }, []);
};

export abstract class Resource {
  /**
   * Unique name for the resource by type within the stack.
   *
   * This name can be used in all future references, it will be resolved automatically at runtime.
   */
  protected readonly name: string;
  public resourcePromise: Promise<ProtoResource>;

  constructor(name: string) {
    this.name = name;
  }

  setPolicies(resourcePermMap: ResourcePermMap, ...perms: Permission[]) {
    const req = new ResourceDeclareRequest();
    const policyResource = new ProtoResource();
    policyResource.setType(ResourceType.POLICY);

    const policy = new PolicyResource();
    const actions = permsToActions(resourcePermMap, ...perms);
    policy.setActionsList(actions);

    req.setResource(policyResource);
    req.setPolicy(policy);

    this.resourcePromise.then((resource) => {
      policy.setResourcesList([resource]);

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
  }

  protected abstract register(): Promise<void>;
}

// This singleton helps avoid duplicate references to bucket('name')
// will return the same bucket resource
const cache: Record<string, Record<string, Resource>> = {};

type newer = <T>(name: string) => T;

/**
 * Provides a new resource instance.
 *
 * @param name the _unique_ name of the resource within the stack
 * @returns the resource
 */
export const make = <T extends Resource>(
  T: new (name: string) => T
): ((name: string) => T) => {
  const typename = typeof T;
  return (name: string) => {
    if (!cache[typename]) {
      cache[typename] = {};
    }
    if (!cache[typename][name]) {
      cache[typename][name] = new T(name);
      cache[typename][name]['register']();
    }

    return cache[typename][name] as T;
  };
};
