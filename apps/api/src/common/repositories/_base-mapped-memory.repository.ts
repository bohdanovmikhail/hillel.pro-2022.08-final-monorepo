import { _BaseModel } from '@chat/models';

import { MappedDataRepository, DataRepository } from '../../interfaces';

import { BaseMemoryRepository } from './_base-memory.repository';

export abstract class BaseMappedMemoryRepository<Entity extends _BaseModel> implements MappedDataRepository<Entity> {
  protected storage: Record<string, DataRepository<Entity>>;

  constructor(initialData: Record<string, Entity[]> = {}) {
    this.storage = {};

    Object.entries(initialData)
      .forEach(([key, data]) => {
        this.addRepository(key, data);
      });
  }

  public getAll(key: string): Promise<Entity[]> {
    const repository = this.getRepository(key);

    if (!repository) {
      return Promise.resolve([]);
    }

    return repository.getAll();
  }

  public getById(key: string, id: string): Promise<Entity | null> {
    const repository = this.getRepository(key);

    if (!repository) {
      return Promise.resolve(null);
    }

    return repository.getById(id);
  }

  public add(key: string, entity: Partial<Omit<Entity, 'id'>>): Promise<Entity> {
    const repository = this.getRepository(key, true);

    return repository.add(entity);
  }

  public update(key: string, entity: Pick<Entity, 'id'> & Partial<Entity>): Promise<Entity | null> {
    const repository = this.getRepository(key);

    if (!repository) {
      return Promise.resolve(null);
    }

    return repository.update(entity);
  }

  public delete(key: string, entityOrId: string | Entity): Promise<Entity | null> {
    const repository = this.getRepository(key);

    if (!repository) {
      return Promise.resolve(null);
    }

    return repository.delete(entityOrId);
  }

  protected abstract createMockEntity(override?: Partial<Entity>): Entity;

  protected getRepository(key: string, createOnFallBack = false): DataRepository<Entity> | null {
    if (!this.storage[key] && createOnFallBack) {
      this.addRepository(key);
    }

    return this.storage[key];
  }

  protected addRepository(key: string, initialData?: Entity[]): void {
    this.storage[key] = this.createRepository(initialData);
  }

  protected createRepository(initialData?: Entity[]): BaseMemoryRepository<Entity> {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const parent = this;

    class Repository extends BaseMemoryRepository<Entity> {
      protected createMockEntity(override: Partial<Entity> | undefined): Entity {
        return parent.createMockEntity(override);
      }
    }

    return new Repository();
  }
}
