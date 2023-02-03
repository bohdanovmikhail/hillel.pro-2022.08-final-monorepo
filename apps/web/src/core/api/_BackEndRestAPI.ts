import { _BaseModel } from '@chat/models';

import { BaseAPI } from './_BaseAPI';

export abstract class BackEndRestAPI<E extends _BaseModel> extends BaseAPI {
  constructor(apiUrl: string, entityType: string) {
    super(`${apiUrl}/${entityType}`);
  }

  public getAll(): Promise<E[]> {
    return this.fetchGet();
  }

  public get(id: string): Promise<E> {
    return this.fetchGet(id);
  }

  public create(entity: Omit<E, 'id'>): Promise<E> {
    return this.fetchPost(null, entity);
  }

  public update(entity: E): Promise<E> {
    return this.fetchPut(null, entity);
  }

  public remove(entityOrId: E | string): Promise<E> {
    if (typeof entityOrId !== 'string') {
      entityOrId = entityOrId.id;
    }

    return this.fetchDelete(entityOrId);
  }
}
