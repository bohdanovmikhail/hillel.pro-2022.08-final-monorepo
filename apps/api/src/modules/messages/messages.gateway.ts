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

@WebSocketGateway({ cors: '*' })
export class MessagesGateway {
  @WebSocketServer()
  server: Server;

  constructor(
    private messagesService: MessagesService,
    private messagesRepository: MessagesRepository,
  ) {}

  @SubscribeMessage(WebSocketEvents.ClientMessage)
  async receiveMessageFromClient(
    @ConnectedSocket() socket: Socket,
    @MessageBody() data: IWebSocketClientMessage,
  ) {
    const { chatId, message } = data;

    const user = await this.messagesService.getUserFromSocket(socket);

    const newMessage = await this.messagesRepository.add(chatId, {
      ...message,
      fromUserId: user.id,
    });

    this.server.sockets.emit(WebSocketEvents.ServerMessage, {
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
