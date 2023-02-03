import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { AuthModule } from '../auth/auth.module';

import { MessagesGateway } from './messages.gateway';
import { MessagesService } from './messages.service';
import { MessagesRepository } from './messages.repository';

@Module({
  imports: [
    AuthModule,
    JwtModule,
  ],
  controllers: [],
  providers: [
    MessagesGateway,
    MessagesService,
    MessagesRepository,
  ],
})
export class MessagesModule {}
