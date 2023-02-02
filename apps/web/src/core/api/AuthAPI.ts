import { SignInDTO, TokenDTO } from '@chat/models';

export class AuthAPI {
  constructor(protected connectionUrl: string) {
  }

  public async signIn(data: SignInDTO): Promise<TokenDTO> {
    const response = await fetch(`${this.baseUrl}/signin`, {
      method: 'POST',
      body: JSON.stringify({
        username: data.userName,
        password: data.password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return await response.json();
  }

  public async signUp() {}

  public async forgot() {}

  protected get baseUrl(): string {
    return `${this.connectionUrl}/auth`;
  }
}
