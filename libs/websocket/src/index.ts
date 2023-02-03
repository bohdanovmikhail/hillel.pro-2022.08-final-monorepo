import { MessageModel } from '@chat/models';

export enum WebSocketEvents {
  ToServerMessage = 'ToServerMessage',
  ToClientMessage = 'ToClientMessage',
  RequestLastMessages = 'RequestLastMessages',
  ResponseLastMessages = 'ResponseLastMessages',
}

export interface IWebSocketClientMessage {
  chatId: string;
  text: string;
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
