import { Module } from '@nestjs/common';

import { RepositoriesModule } from '../../repositories/repositories.module';

import { ChatsController } from './chats.controller';

@Module({
  imports: [RepositoriesModule],
  controllers: [ChatsController],
  providers: [],
})
export class ChatsModule {}
