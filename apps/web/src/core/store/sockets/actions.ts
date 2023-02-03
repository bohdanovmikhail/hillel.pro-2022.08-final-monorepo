import { createAction, createPayloadAction, createPayloadActionWith, IWSMessage } from '../_utils';

// Connection actions
export const socketsConnect = createPayloadAction('ws.connect');
export const socketsDisconnect = createAction('ws.disconnect');

// Actions
const wsMessageCreator = (type: string, data: any): IWSMessage => ({ type, data });

export const socketsEmit = createPayloadActionWith('ws.emit', wsMessageCreator);
export const socketsReceive = createPayloadActionWith('ws.receive', wsMessageCreator);

// Request Entity
// export const socketsRequestEntity = createPayloadActionWith();
