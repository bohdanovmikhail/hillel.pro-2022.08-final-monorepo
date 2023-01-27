import { Module } from '@nestjs/common';

import { ChatsRepository } from './chats.repository';
import { MessagesRepository } from './messages.repository';
import { UsersRepository } from './users.repository';

const exportedProviders = [
  ChatsRepository,
  MessagesRepository,
  UsersRepository,
];

@Module({
  imports: [],
  providers: [
    ...exportedProviders,
  ],
  exports: [
    ...exportedProviders,
  ],
})
export class RepositoriesModule {}
