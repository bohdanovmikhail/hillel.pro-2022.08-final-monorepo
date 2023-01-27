import { Injectable } from '@nestjs/common';

import { UserModel } from '@chat/models';
import { createMockUser } from '@chat/mocks';

import { BaseMemoryRepository } from './_base-memory.repository';

@Injectable()
export class UsersRepository extends BaseMemoryRepository<UserModel> {
  constructor() {
    const initialData = [
      createMockUser({ id: '1' }),
      createMockUser({ id: '2' }),
      createMockUser({ id: '3' }),
      createMockUser({ id: '4' }),
      createMockUser({ id: '5' }),
    ];

    super(initialData);
  }

  protected createMockEntity(override?: Partial<UserModel>): UserModel {
    return createMockUser(override);
  }
}
