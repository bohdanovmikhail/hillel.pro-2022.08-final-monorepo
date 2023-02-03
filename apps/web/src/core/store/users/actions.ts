import { usersAPI } from '../../api';
import { createRequestAction } from '../_utils';

export const usersGetInfo = createRequestAction(
  'users.getInfo',
  (uId: string) => usersAPI.get(uId),
);
