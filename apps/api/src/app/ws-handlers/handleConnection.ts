import { Socket, Server as SocketServer } from 'socket.io';

import { createMockMessage } from '@chat/mocks';
import { WebSocketEvents } from '@chat/websocket';

export function handleConnection(socket: Socket, server: SocketServer) {


  socket.on(WebSocketEvents.MessageToServer, (msgData) => {
    server.emit(WebSocketEvents.MessageToClient, createMockMessage({
      text: msgData,
    }));
  });
}
