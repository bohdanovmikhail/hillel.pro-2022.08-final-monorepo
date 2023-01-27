import { Injectable } from '@nestjs/common';

import { ChatModel } from '@chat/models';
import { createMockChat } from '@chat/mocks';

import { BaseMemoryRepository } from './_base-memory.repository';

@Injectable()
export class ChatsRepository extends BaseMemoryRepository<ChatModel> {
  protected createMockEntity(override?: Partial<ChatModel>): ChatModel {
    return createMockChat(override);
  }
}
