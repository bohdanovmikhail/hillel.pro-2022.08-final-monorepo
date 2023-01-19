import { createPayloadAction } from '../_utils';

export const messagesSend = createPayloadAction('messages.send');

export const messagesReceive = createPayloadAction('messages.receive');
export const messagesReceiveLast = createPayloadAction('messages.receiveLast');

export const messagesGetLastMessages = createPayloadAction('');
