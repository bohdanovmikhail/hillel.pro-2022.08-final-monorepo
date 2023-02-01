import { Injectable } from '@nestjs/common';
import { WsException } from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { parse } from 'cookie';

import { UserModel } from '@chat/models';

@Injectable()
export class MessagesService {
  async getUserFromSocket(socket: Socket): Promise<UserModel> {
    const cookie = socket.handshake.headers.cookie;
    const { Authentication: authenticationToken } = parse(cookie);
    // const user = await this.authenticationService.getUserFromAuthenticationToken(authenticationToken);
    const user = null;

    if (!user) {
      throw new WsException('Invalid credentials.');
    }

    return user;
  }
}
