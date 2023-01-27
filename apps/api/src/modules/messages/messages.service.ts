import { Injectable } from '@nestjs/common';
// import { WsException } from '@nestjs/websockets';
// import { Socket } from 'socket.io';
// import { parse } from 'cookie';

@Injectable()
export class MessagesService {
  // async getUserFromSocket(socket: Socket) {
  //   const cookie = socket.handshake.headers.cookie;
  //   const { Authentication: authenticationToken } = parse(cookie);
  //   const user = await this.authenticationService.getUserFromAuthenticationToken(authenticationToken);
  //   if (!user) {
  //     throw new WsException('Invalid credentials.');
  //   }
  //   return user;
  // }
}
