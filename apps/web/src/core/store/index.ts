import { applyMiddleware, compose, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from './rootReducer';

import socketsMiddleware from './sockets/middleware';

const middlewares = [
  reduxThunk,
  createLogger({ collapsed: true }),
  socketsMiddleware,
];

export default createStore(rootReducer, compose(applyMiddleware(...middlewares)));

export type { IState } from './rootReducer';

export * from './chats';
export * from './messages';
export * from './users';
