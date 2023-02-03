import { Avatar } from '@mui/material';

import { useUserInfo } from '../../core/store/users/hooks';

export function UserAvatar({ userId }: IProps) {
  const [userInfo, isUserInfoLoading] = useUserInfo(userId);

  return (
    <div>
      <Avatar alt="Remy Sharp" src={userInfo?.avatar} />
      <img src={userInfo?.avatar} />
    </div>
  );
}

export function UserName({ userId }: IProps) {
  const [userInfo] = useUserInfo(userId);

  if (!userInfo) {
    <span>Loading...</span>;
  }

  return <span>{userInfo?.userName}</span>;
}

interface IProps {
  userId: string;
}
