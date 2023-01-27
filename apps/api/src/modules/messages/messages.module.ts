import { Module } from '@nestjs/common';

import { RepositoriesModule } from '../../repositories/repositories.module';

import { MessagesGateway } from './messages.gateway';
import { MessagesService } from './messages.service';

@Module({
  imports: [
    RepositoriesModule,
  ],
  controllers: [],
  providers: [
    MessagesGateway,
    MessagesService,
  ],
})
export class MessagesModule {}
