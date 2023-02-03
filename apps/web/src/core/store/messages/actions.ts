import { WebSocketEvents, IWebSocketServerMessage } from '@chat/websocket';

import { createPayloadAction, createBindAction } from '../_utils';
import { socketsEmit } from '../sockets';

export const messagesSend = createBindAction(socketsEmit, WebSocketEvents.ToServerMessage);

export const messagesReceive = createPayloadAction<IWebSocketServerMessage>('messages.receive');
export const messagesReceiveLast = createPayloadAction('messages.receiveLast');

export const messagesGetLastMessages = createPayloadAction('');

export const messagesSetCurrentChat = createPayloadAction<string>('messages.selectChat');
