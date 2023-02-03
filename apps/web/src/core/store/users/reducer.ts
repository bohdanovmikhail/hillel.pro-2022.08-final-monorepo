import { UserModel } from '@chat/models';

import { createMappedReducer } from "../_utils";

import * as actions from './actions';

export default createMappedReducer<UserModel>({
  actions: {
    ADD: actions.usersGetInfo.SUCCESS_TYPE,
    UPDATE: '',
    REMOVE: '',
  },
});
