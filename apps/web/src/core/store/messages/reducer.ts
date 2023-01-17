import { AnyAction, combineReducers } from 'redux';

import { MessageModel } from '@chat/models';

import * as actions from './actions';

function listReducer(state: MessageModel[] = [], action: AnyAction) {
  switch (action.type) {
    case actions.messagesReceive.TYPE:
      return [
        ...state,
        action.payload,
      ];

    default:
      return state;
  }
}

export default combineReducers({
  list: listReducer,
});
