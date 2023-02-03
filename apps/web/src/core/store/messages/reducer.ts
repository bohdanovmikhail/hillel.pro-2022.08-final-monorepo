import { combineReducers } from 'redux';

import {
  createListReducer,
  IPayloadAction,
} from '../_utils';

import * as actions from './actions';

const listReducer = createListReducer({
  actions: {
    ADD: actions.messagesReceive.TYPE,
    REMOVE: '',
  },
});

function activeChatIdReducer(state: string | null = null, action: IPayloadAction<string>) {
  switch (action.type) {
    case actions.messagesSetCurrentChat.TYPE:
      return action.payload;

    default:
      return state;
  }
}

export default combineReducers({
  list: listReducer,
  activeChatId: activeChatIdReducer,
});
