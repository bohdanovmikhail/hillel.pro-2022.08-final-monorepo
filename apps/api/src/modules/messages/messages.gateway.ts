import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

import {
  WebSocketEvents,
  IWebSocketClientMessage,
  IWebSocketRequestLastMessages,
} from '@chat/websocket';

import { MessagesRepository } from './messages.repository';
import { MessagesService } from './messages.service';
import { createMockMessage } from '@chat/mocks';

@WebSocketGateway({ cors: '*' })
export class MessagesGateway {
  @WebSocketServer()
  server: Server;

  constructor(
    private messagesService: MessagesService,
    private messagesRepository: MessagesRepository,
  ) {}

  @SubscribeMessage(WebSocketEvents.ToServerMessage)
  async receiveMessageFromClient(
    @ConnectedSocket() socket: Socket,
    @MessageBody() data: IWebSocketClientMessage,
  ) {
    const { chatId, text } = data;

    const user = await this.messagesService.getUserFromSocket(socket);
    const message = createMockMessage({
      text,
      fromUserId: user.id,
    });

    const newMessage = await this.messagesRepository.add(chatId, message);

    this.server.sockets.emit(WebSocketEvents.ToClientMessage, {
      chatId,
      message: newMessage,
    });
  }

  @SubscribeMessage(WebSocketEvents.RequestLastMessages)
  async requestAllMessages(
    @ConnectedSocket() socket: Socket,
    @MessageBody() { chatId, quantity = 20 }: IWebSocketRequestLastMessages,
  ) {
    const messages = await this.messagesRepository.getLimit(chatId, quantity);

    socket.emit(WebSocketEvents.ResponseLastMessages, { chatId, messages });

  }
}
