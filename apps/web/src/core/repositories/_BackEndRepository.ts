import { _BaseModel } from '@shared/models';
import { BaseRepository } from './_BaseRepository';

export class BackEndRepository<E extends _BaseModel> extends BaseRepository<E> {
  public getAll(): Promise<E[]> {
    return Promise.resolve([]);
  }

  public get(id: string): Promise<E> {
    return Promise.resolve({} as unknown as E);
  }

  public create(entity: Omit<E, 'id'>): Promise<E> {
    return Promise.resolve({} as unknown as E);
  }

  public update(entity: E): Promise<E> {
    return Promise.resolve({} as unknown as E);
  }

  public remove(entityOrId: E | string): Promise<E> {
    return Promise.resolve({} as unknown as E);
  }
}
