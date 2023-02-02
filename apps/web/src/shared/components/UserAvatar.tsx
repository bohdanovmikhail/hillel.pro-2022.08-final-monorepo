import { useUserInfo } from '../../core/store/users/hooks';

export function UserAvatar({ userId }: IProps) {
  const [userInfo, isUserInfoLoading] = useUserInfo(userId);

  return (
    <div>
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
