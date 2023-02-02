import { Injectable } from '@nestjs/common';

import { UserModel } from '@chat/models';
import { createMockUser } from '@chat/mocks';

import { BaseMemoryRepository } from '../../common/repositories';

@Injectable()
export class UsersRepository extends BaseMemoryRepository<UserModel> {
  constructor() {
    const initialData = [
      createMockUser({ id: '1', userName: 'admin', password: 'admin' }),
      createMockUser({ id: '2' }),
      createMockUser({ id: '3' }),
      createMockUser({ id: '4' }),
      createMockUser({ id: '5' }),
    ];

    super(initialData);
  }

  public getByUserName(login: string): Promise<UserModel> {
    const result = this.getFromStorageBy('userName', login);
    return Promise.resolve(result);
  }

  protected createMockEntity(override?: Partial<UserModel>): UserModel {
    return createMockUser(override);
  }
}
