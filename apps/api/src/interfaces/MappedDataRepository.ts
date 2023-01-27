import { _BaseModel } from '@chat/models';

export interface MappedDataRepository<Entity extends _BaseModel> {
  getAll(key: string): Promise<Entity[]>;

  getById(key: string, id: string): Promise<Entity>;

  add(key: string, entity: Omit<Entity, 'id'>): Promise<Entity>;

  update(key: string, entity: Pick<Entity, 'id'> & Partial<Entity>): Promise<Entity>;

  delete(key: string, entityOrId: string | Entity): Promise<Entity>;
}
