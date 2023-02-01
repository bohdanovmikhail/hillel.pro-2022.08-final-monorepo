import { faker } from '@faker-js/faker';

import { _BaseModel } from '@chat/models';

import { DataRepository } from '../../interfaces';

import { deepClone } from './_utils';

export abstract class BaseMemoryRepository<Entity extends _BaseModel> implements DataRepository<Entity> {
  protected storage: Entity[] = [];

  constructor(initialData: Entity[] = []) {
    this.storage = deepClone(initialData);
  }

  public getAll(): Promise<Entity[]> {
    const allCloned = deepClone(this.storage);
    return Promise.resolve(allCloned);
  }

  public getById(id: string): Promise<Entity | null> {
    const entity = this.getFromStorage(id);

    if (!entity) {
      return Promise.resolve(null);
    }

    const cloned = deepClone(entity);
    return Promise.resolve(cloned);
  }

  public add(entity: Partial<Omit<Entity, 'id'>>): Promise<Entity> {
    const newId = faker.datatype.uuid();
    const newEntity = this.createMockEntity({
      ...entity,
      id: newId,
    } as Entity);

    this.storage.push(newEntity);
    return this.getById(newId);
  }

  public update(entity: Pick<Entity, 'id'> & Partial<Entity>): Promise<Entity | null> {
    let entityToUpdate = this.getFromStorage(entity.id);

    if (!entityToUpdate) {
      return Promise.resolve(null);
    }

    entityToUpdate = {
      ...entityToUpdate,
      ...entity,
    };

    this.setToStorage(entityToUpdate);
    return this.getById(entityToUpdate.id);
  }

  public delete(entityOrId: string | Entity): Promise<Entity | null> {
    if (typeof entityOrId === 'object') {
      entityOrId = entityOrId.id;
    }

    const entity = this.getFromStorage(entityOrId);

    if (!entity) {
      return Promise.resolve(null);
    }

    this.removeInStorage(entityOrId);
    return Promise.resolve(entity);
  }

  protected abstract createMockEntity(override?: Partial<Entity>): Entity;

  protected getFromStorage(id: string): Entity {
    return this.getFromStorageBy('id', id);
  }

  protected getFromStorageBy(key: keyof Entity, value: any): Entity | null {
    return this.storage.find((entity: Entity) => entity[key] === value) || null;
  }

  protected setToStorage(entity: Entity): void {
    const index = this.getIndexInStorage(entity.id);

    this.storage.splice(index, 1, entity);
  }

  protected removeInStorage(id: string): void {
    const index = this.getIndexInStorage(id);

    this.storage.splice(index, 1);
  }

  protected getIndexInStorage(id: string): number {
    return this.storage.findIndex((entity: Entity) => entity.id === id);
  }
}
