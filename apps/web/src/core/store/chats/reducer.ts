import { ChatModel } from '@chat/models';
import { createMockChat } from '@chat/mocks';

import { createMappedReducer } from '../_utils';

import * as actions from './actions';

export default createMappedReducer<ChatModel>({
  actions: {
    ADD: actions.actionTest.TYPE,
    UPDATE: actions.actionTest.TYPE,
    REMOVE: actions.actionTest.TYPE,
  },
  initial: [
    createMockChat({ id: '1111', title: 'Hillel Pro' }),
    createMockChat({ id: '2222', title: 'Hillel Basic' }),
    createMockChat({ id: '3333', title: 'Hillel Global' }),
    createMockChat({ id: '1111', title: 'Hillel Pro' }),
    createMockChat({ id: '2222', title: 'Hillel Basic' }),
    // createMockChat({ id: '3333', title: 'Hillel Global' }),
    // createMockChat({ id: '1111', title: 'Hillel Pro' }),
    // createMockChat({ id: '2222', title: 'Hillel Basic' }),
    // createMockChat({ id: '3333', title: 'Hillel Global' }),
    // createMockChat({ id: '1111', title: 'Hillel Pro' }),
    // createMockChat({ id: '2222', title: 'Hillel Basic' }),
    // createMockChat({ id: '3333', title: 'Hillel Global' }),
    // createMockChat({ id: '1111', title: 'Hillel Pro' }),
    // createMockChat({ id: '2222', title: 'Hillel Basic' }),
    // createMockChat({ id: '3333', title: 'Hillel Global' }),
  ]
});
