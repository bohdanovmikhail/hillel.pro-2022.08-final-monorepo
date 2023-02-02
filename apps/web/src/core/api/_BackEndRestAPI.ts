import { _BaseModel } from '@chat/models';

import { RestAPI } from './_RestAPI';

export abstract class BackEndRestAPI<E extends _BaseModel> extends RestAPI<E> {
  protected abstract entityType: string;

  constructor(protected connectionUrl: string) {
    super();
  }

  public getAll() {
    return fetch(this.baseUrl)
      .then(response => response.json());
  }

  public get(id: string): Promise<E> {
    return fetch(`${this.baseUrl}/${id}`)
      .then(response => response.json());
  }

  public create(entity: Omit<E, 'id'>): Promise<E> {
    return fetch(this.baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(entity),
    })
      .then(response => response.json());
  }

  public update(entity: E): Promise<E> {
    return fetch(this.baseUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(entity),
    })
      .then(response => response.json());
  }

  public remove(entityOrId: E | string): Promise<E> {
    if (typeof entityOrId !== 'string') {
      entityOrId = entityOrId.id;
    }

    return fetch(`${this.baseUrl}/${entityOrId}`, {
      method: 'DELETE',
    })
      .then(response => response.json());
  }

  protected get baseUrl(): string {
    return `${this.connectionUrl}/${this.entityType}`;
  }
}
