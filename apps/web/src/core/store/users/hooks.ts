import { createUseLazyData } from '../_utils';

import { selectUserById } from './selectors';
import { usersGetInfo } from './actions';

export const useUserInfo = createUseLazyData(selectUserById, usersGetInfo);
