import { combineReducers } from 'redux';

import messagesReducer from './messages/reducer';
import chatsReducer from './chats/reducer';

const rootReducer = combineReducers({
  messages: messagesReducer,
  chats: chatsReducer,
});

export default rootReducer;

export type IState = ReturnType<typeof rootReducer>;
