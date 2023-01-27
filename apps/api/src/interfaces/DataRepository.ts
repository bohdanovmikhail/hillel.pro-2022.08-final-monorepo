import { _BaseModel } from '@chat/models';

export interface DataRepository<Entity extends _BaseModel> {
  getAll(): Promise<Entity[]>;

  getById(id: string): Promise<Entity>;

  add(entity: Partial<Omit<Entity, 'id'>>): Promise<Entity>;

  update(entity: Pick<Entity, 'id'> & Partial<Entity>): Promise<Entity>;

  delete(entityOrId: string | Entity): Promise<Entity>;
}
