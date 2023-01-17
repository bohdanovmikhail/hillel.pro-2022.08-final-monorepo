import { ChatModel } from '@chat/models';

import { createMappedReducer } from '../_utils';

import * as actions from './actions';

export default createMappedReducer<ChatModel>({
  actions: {
    ADD: actions.actionTest.TYPE,
  },
});
