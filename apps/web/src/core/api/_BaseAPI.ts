export abstract class BaseAPI {
  protected headers: Record<string, string> = {};

  constructor(protected baseUrl: string) {
  }

  public addHeader(name: string, value: string): void {
    this.headers[name] = value;
  }

  public removeHeader(name?: string): void {
    if (!name) {
      this.headers = {};
    } else {
      delete this.headers[name];
    }
  }

  protected fetchGet(path?: string): Promise<any> {
    return fetch(this.getBaseUrl(path), {
      headers: {
        ...this.headers,
      },
    })
      .then(response => response.json());
  }

  protected fetchPost(path: string | null, body?: any): Promise<any> {
    return fetch(this.getBaseUrl(path), {
      method: 'POST',
      headers: {
        ...this.headers,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then(response => response.json());
  }

  protected fetchPut(path: string | null, body?: any): Promise<any> {
    return fetch(this.getBaseUrl(path), {
      method: 'PUT',
      headers: {
        ...this.headers,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then(response => response.json());
  }

  protected fetchDelete(path: string | null): Promise<any> {
    return fetch(this.getBaseUrl(path), {
      method: 'DELETE',
      headers: {
        ...this.headers,
      },
    })
      .then(response => response.json());
  }

  protected getBaseUrl(addPath?: string | null): string {
    return this.baseUrl + (addPath ? `/${addPath}` : '');
  }
}

