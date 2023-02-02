import { UserModel } from '@chat/models';

import { BackEndRestAPI } from './_BackEndRestAPI';

export class UsersAPI extends BackEndRestAPI<UserModel> {
  protected entityType = 'users';
}
