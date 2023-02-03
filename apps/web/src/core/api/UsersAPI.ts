import { UserModel } from '@chat/models';

import { BackEndRestAPI } from './_BackEndRestAPI';

export class UsersAPI extends BackEndRestAPI<UserModel> {
  constructor(baseUrl: string) {
    super(baseUrl, 'users');
  }
}
