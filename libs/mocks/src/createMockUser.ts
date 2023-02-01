import { faker } from '@faker-js/faker';

import { UserModel } from '@chat/models';

export function createMockUser(override?: Partial<UserModel>): UserModel {
  return {
    id: faker.datatype.uuid(),
    userName: faker.internet.userName(),
    avatar: faker.image.avatar(),
    password: '123456',
    ...override,
  };
}
