import { AnyAction } from 'redux';

import { MessageModel } from '@chat/models';

import * as actions from './actions';

const initial: IMessagesState = {
  list: [],
};

export default function reducer(state: IMessagesState = initial, action: AnyAction) {
  switch (action.type) {
    case actions.messagesReceive.TYPE:
      return [
        ...state.list,
        action.payload,
      ];

    default:
      return state;
  }
}

type IMessagesState = {
  list: MessageModel[],
};
