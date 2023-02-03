import { WEB_SOCKET_CONNECTION_URL } from '@chat/constants';
import { WebSocketEvents } from '@chat/websocket';

import { createWSMiddleware } from '../_utils';
import { messagesReceive } from '../messages';

import * as actions from './actions';

export default createWSMiddleware({
  connectionUrl: WEB_SOCKET_CONNECTION_URL,
  actions: {
    CONNECT: actions.socketsConnect,
    DISCONNECT: actions.socketsDisconnect,
    EMIT: actions.socketsEmit,
    // RECEIVE: actions.socketsReceive,
  },
  handlers: {
    [WebSocketEvents.ToClientMessage]: messagesReceive,
  },
});
