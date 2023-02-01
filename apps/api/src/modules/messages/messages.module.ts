import { Module } from '@nestjs/common';

import { MessagesGateway } from './messages.gateway';
import { MessagesService } from './messages.service';
import { MessagesRepository } from './messages.repository';

@Module({
  imports: [],
  controllers: [],
  providers: [
    MessagesGateway,
    MessagesService,
    MessagesRepository,
  ],
})
export class MessagesModule {}
