import { Injectable } from '@nestjs/common';
import { WsException } from '@nestjs/websockets';
import { Socket } from 'socket.io';

import { PublicUserModel } from '@chat/models';

import { AuthService } from '../auth/auth.service';

@Injectable()
export class MessagesService {
  constructor(private authService: AuthService) {}

  async getUserFromSocket(socket: Socket): Promise<PublicUserModel> {
    const authToken = socket.handshake.headers.authorization.split(' ')[1];

    const user = await this.authService.getUserFromToken(authToken);

    if (!user) {
      throw new WsException('Invalid credentials.');
    }

    return user;
  }
}
