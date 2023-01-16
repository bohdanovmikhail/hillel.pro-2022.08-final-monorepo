import { combineReducers } from 'redux';

import messagesReducer from './messages/reducer';

const rootReducer = combineReducers({
  messages: messagesReducer,
});

export default rootReducer;

export type IState = ReturnType<typeof rootReducer>;
