import { faker } from '@faker-js/faker';

import { UserModel } from '@chat/models';

export function createMockUser(override?: Partial<UserModel>): UserModel {
  return {
    id: faker.datatype.uuid(),
    name: faker.internet.userName(),
    avatar: faker.image.avatar(),
    ...override,
  };
}
