import { Injectable } from '@nestjs/common';

import { MessageModel } from '@chat/models';
import { createMockMessage } from '@chat/mocks';

import { BaseMappedMemoryRepository } from './_base-mapped-memory.repository';

@Injectable()
export class MessagesRepository extends BaseMappedMemoryRepository<MessageModel> {
  protected createMockEntity(override?: Partial<MessageModel>): MessageModel {
    return createMockMessage(override);
  }
}
