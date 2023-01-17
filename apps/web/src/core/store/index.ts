import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';

import rootReducer from './rootReducer';

// import messagesMiddleware from './messages/middleware';
// import roomsMiddleware from './rooms/middleware';
// import usersMiddleware from './users/middleware';

const middlewares = [
  createLogger({ collapsed: true }),
  // messagesMiddleware,
  // roomsMiddleware,
  // usersMiddleware,
];

export default createStore(rootReducer, compose(applyMiddleware(...middlewares)));

export type { IState } from './rootReducer';

export * from './chats';
export * from './messages';
export * from './users';
