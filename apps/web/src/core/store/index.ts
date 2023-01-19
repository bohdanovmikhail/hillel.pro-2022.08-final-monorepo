import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';

import rootReducer from './rootReducer';

import socketsMiddleware from './sockets/middleware';
import messagesMiddleware from './messages/middleware';

const middlewares = [
  createLogger({ collapsed: true }),
  socketsMiddleware,
  messagesMiddleware,
];

export default createStore(rootReducer, compose(applyMiddleware(...middlewares)));

export type { IState } from './rootReducer';

export * from './chats';
export * from './messages';
export * from './users';
