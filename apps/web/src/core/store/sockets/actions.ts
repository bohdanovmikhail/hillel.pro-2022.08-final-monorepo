import { createAction, createPayloadActionWith, IWSEmit } from '../_utils';

// Connection actions
export const socketsConnect = createAction('ws.connect');
export const socketsDisconnect = createAction('ws.disconnect');

// Emit actions
export const socketsEmit = createPayloadActionWith('ws.emit', (type: string, data: any): IWSEmit => ({ type, data }));
