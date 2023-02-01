import { Module } from '@nestjs/common';

import { ChatsController } from './chats.controller';
import { ChatsRepository } from './chats.repository';

@Module({
  imports: [],
  controllers: [ChatsController],
  providers: [ChatsRepository],
})
export class ChatsModule {}
