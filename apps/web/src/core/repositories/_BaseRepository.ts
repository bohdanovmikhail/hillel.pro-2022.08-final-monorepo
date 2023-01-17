import { _BaseModel } from '@chat/models';

export abstract class BaseRepository<E extends _BaseModel> {
  public abstract getAll(): Promise<E[]>;

  public abstract get(id: string): Promise<E>;

  public abstract create(entity: Omit<E, 'id'>): Promise<E>;

  public abstract update(entity: E): Promise<E>;

  public abstract remove(entity: E): Promise<E>;
  public abstract remove(id: string): Promise<E>;
}
