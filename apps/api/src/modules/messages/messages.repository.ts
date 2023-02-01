import { Injectable } from '@nestjs/common';

import { MessageModel } from '@chat/models';
import { createMockMessage } from '@chat/mocks';

import { BaseMappedMemoryRepository } from '../../common/repositories';

@Injectable()
export class MessagesRepository extends BaseMappedMemoryRepository<MessageModel> {

  public async getLimit(key: string, limit: number): Promise<MessageModel[]> {
    const allMessages = await this.getAll(key);
    const result = [];

    const startOffset = allMessages.length - 1 - limit;
    for (let i = startOffset; i <= limit; i++) {
      result.push(allMessages[i]);
    }

    return result;
  }

  protected createMockEntity(override?: Partial<MessageModel>): MessageModel {
    return createMockMessage(override);
  }
}
