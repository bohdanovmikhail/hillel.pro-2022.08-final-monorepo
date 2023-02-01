import { Injectable } from '@nestjs/common';

import { ChatModel } from '@chat/models';
import { createMockChat } from '@chat/mocks';

import { BaseMemoryRepository } from '../../common/repositories';

@Injectable()
export class ChatsRepository extends BaseMemoryRepository<ChatModel> {
  constructor() {
    super([
      createMockChat({ id: 'chat1' }),
      createMockChat({ id: 'chat2' }),
      createMockChat({ id: 'chat3' }),
      createMockChat({ id: 'chat4' }),
      createMockChat({ id: 'chat5' }),
    ]);
  }

  protected createMockEntity(override?: Partial<ChatModel>): ChatModel {
    return createMockChat(override);
  }
}
