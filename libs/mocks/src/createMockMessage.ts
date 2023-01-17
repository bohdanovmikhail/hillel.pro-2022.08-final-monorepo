import { faker } from '@faker-js/faker';

import { MessageModel } from '@shared/models';

export function createMockMessage(override?: Partial<MessageModel>): MessageModel {
  return {
    id: faker.datatype.uuid(),
    fromUserId: faker.datatype.uuid(),
    created: faker.date.past().getTime(),
    text: faker.lorem.text(),
    ...override,
  };
}
