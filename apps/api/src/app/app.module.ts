import { Module } from '@nestjs/common';

import { RepositoriesModule } from '../repositories/repositories.module';
import { UsersModule } from '../modules/users/users.module';
import { MessagesModule } from '../modules/messages/messages.module';

@Module({
  imports: [
    RepositoriesModule,
    UsersModule,
    MessagesModule,
  ],
})
export class AppModule {}
