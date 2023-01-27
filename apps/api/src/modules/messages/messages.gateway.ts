import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

import { WebSocketEvents } from '@chat/websocket';
import { NewMessageModel } from '@chat/models';

import { MessagesRepository } from '../../repositories';
import { MessagesService } from './messages.service';

@WebSocketGateway({ cors: '*' })
export class MessagesGateway {
  @WebSocketServer()
  server: Server;

  constructor(
    private messagesService: MessagesService,
    private messagesRepository: MessagesRepository,
  ) {}

  @SubscribeMessage(WebSocketEvents.MessageToServer)
  async receiveMessageFromClient(
    @MessageBody() data: IWSMessageRequestData,
    @ConnectedSocket() socket: Socket,
  ) {
    const { chatId, userId, message } = data;

    // TODO: use this when Auth functionality will be implemented
    // const author = await this.messagesService.getUserFromSocket(socket);

    const newMessage = await this.messagesRepository.add(chatId, {
      ...message,
      fromUserId: userId,
    })

    this.server.sockets.emit(WebSocketEvents.MessageToClient, newMessage);
  }

  @SubscribeMessage('request_all_messages')
  async requestAllMessages(
    @ConnectedSocket() socket: Socket,
  ) {
    // await this.chatService.getUserFromSocket(socket);
    // const messages = await this.chatService.getAllMessages();

    // socket.emit('send_all_messages', messages);

    return Promise.resolve();
  }
}

interface IWSMessageRequestData {
  // TODO: replace it with direct subscription to chat stream
  chatId: string;
  // TODO: remove it, when Auth functionality will be implemented
  userId: string;
  message: NewMessageModel;
}
