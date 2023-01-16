import { WEB_SOCKET_CONNECTION_URL } from '@constants';

import { createWSMiddleware } from '../_utils';

import * as actions from './actions';

export default createWSMiddleware({
  connectionUrl: WEB_SOCKET_CONNECTION_URL,
  actions: {
    connect: actions.messagesWSConnect.TYPE,
    disconnect: actions.messagesWSDisconnect.TYPE,
    message: actions.messagesWSSend.TYPE,
  },
  handlers: {},
});
