import { faker } from '@faker-js/faker';

import { ChatModel } from '@shared/models';
import { createMockMessage } from './createMockMessage';

export function createMockChat(override?: Partial<ChatModel>): ChatModel {
  return {
    id: faker.datatype.uuid(),
    title: faker.lorem.text(),
    lastMessage: createMockMessage(),
    ...override,
  };
}
