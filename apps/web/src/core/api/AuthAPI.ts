import { SignInDTO, SignedInDTO } from '@chat/models';
import { BaseAPI } from './_BaseAPI';

export class AuthAPI extends BaseAPI {
  constructor(baseUrl: string) {
    super(`${baseUrl}/auth`);
  }

  public signIn(data: SignInDTO): Promise<SignedInDTO> {
    return this.fetchPost('signin', data);
  }

  public async signUp() {}

  public async forgot() {}
}
