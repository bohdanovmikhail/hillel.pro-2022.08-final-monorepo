import { Module } from '@nestjs/common';

import { AuthModule } from '../modules/auth/auth.module';
import { ChatsModule } from '../modules/chats/chats.module';
import { MessagesModule } from '../modules/messages/messages.module';
import { UsersModule } from '../modules/users/users.module';

@Module({
  imports: [
    AuthModule,
    ChatsModule,
    MessagesModule,
    UsersModule,
  ],
})
export class AppModule {}
