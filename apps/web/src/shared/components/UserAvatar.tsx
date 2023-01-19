import { useEffect } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { UserModel } from '@chat/models';

import { IState, selectUserById, usersGetInfo } from '../../core/store';

function UserAvatarView({ userInfo, getUser }: IProps) {
  useEffect(() => {
    if (!userInfo) {
      getUser();
    }
  }, []);

  return null;
}

const mapState = (state: IState, { userId }: IProps) => ({
  userInfo: selectUserById(state, userId),
});
const mapDispatch = (dispatch: Dispatch, { userId }: IProps) => ({
  getUser: () => dispatch(usersGetInfo(userId)),
});

export const UserAvatar = connect(mapState, mapDispatch)(UserAvatarView);

interface IProps {
  userId: string;
  userInfo: UserModel;
  getUser: () => void;
}
