// Copyright 2021, Nitric Technologies Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
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
import { make, Resource as Base } from './common';
import { DocumentStructure } from 'src/api/documents/v0/document-ref';

type CollectionPermission = 'reading' | 'writing' | 'deleting';

const everything: CollectionPermission[] = ['reading', 'writing', 'deleting'];

/**
 * A document collection resources, such as a collection/table in a document database.
 */
export class CollectionResource<T extends DocumentStructure> extends Base<CollectionPermission> {
  /**
   * Register this collection as a required resource for the calling function/container
   * @returns a promise that resolves when the registration is complete
   */
  protected async register(): Promise<Resource> {
    const req = new ResourceDeclareRequest();

    const resource = new Resource();
    resource.setName(this.name);
    resource.setType(ResourceType.COLLECTION);
    req.setResource(resource);

    return new Promise<Resource>((resolve, reject) => {
      resourceClient.declare(
        req,
        (error, response: ResourceDeclareResponse) => {
          if (error) {
            reject(fromGrpcError(error));
          } else {
            resolve(resource);
          }
        }
      );
    });
  }

  protected permsToActions(...perms: CollectionPermission[]) {
    let actions = perms.reduce((actions, perm) => {
      switch (perm) {
        case 'reading':
          return [
            ...actions,
            Action.COLLECTIONDOCUMENTREAD,
            Action.COLLECTIONQUERY,
          ];
        case 'writing':
          return [...actions, Action.COLLECTIONDOCUMENTWRITE];
        case 'deleting':
          return [...actions, Action.COLLECTIONDOCUMENTDELETE];
        default:
          throw new Error(
            `unknown collection permission ${perm}, supported permissions are ${everything.join(
              ', '
            )}`
          );
      }
    }, []);

    if (actions.length > 0) {
      actions = [...actions, Action.COLLECTIONLIST]
    }

    return actions;
  }

  /**
   * Return a collection reference and register the permissions required by the currently scoped function for this resource.
   *
   * e.g. const customers = resources.collection('customers').for('reading', 'writing')
   *
   * @param perms the required permission set
   * @returns a usable collection reference
   */
  public for(...perms: CollectionPermission[]) {
    this.registerPolicy(...perms);

    return documents().collection<T>(this.name);
  }
}

const newCollection = make(CollectionResource);

export function collection<T extends DocumentStructure>(name: string): CollectionResource<T> {
  return newCollection(name) as CollectionResource<T>;
}
