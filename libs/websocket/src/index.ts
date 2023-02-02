import { MessageModel, NewMessageModel } from '@chat/models';

export enum WebSocketEvents {
  ClientMessage = 'ClientMessage',
  ServerMessage = 'ServerMessage',
  RequestLastMessages = 'RequestLastMessages',
  ResponseLastMessages = 'ResponseLastMessages',
}

export interface IWebSocketClientMessage {
  chatId: string;
  message: NewMessageModel;
}

export interface IWebSocketServerMessage {
  chatId: string;
  message: MessageModel;
}

export interface IWebSocketRequestLastMessages {
  chatId: string;
  quantity?: number;
}

export interface IWebSocketResponseLastMessages {
  chatId: string;
  messages: MessageModel[];
}
