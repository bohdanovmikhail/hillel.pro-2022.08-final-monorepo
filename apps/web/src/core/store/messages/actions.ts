import { createAction, createPayloadAction } from '../_utils';

export const messagesReceive = createPayloadAction('messages.receive');
export const messagesReceiveLast = createPayloadAction('messages.receiveLast');

// WebSocket connection
export const messagesWSConnect = createAction('messages.ws.connect');
export const messagesWSDisconnect = createAction('messages.ws.disconnect');
export const messagesWSSend = createAction('messages.ws.send');
