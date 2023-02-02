import { Navigate } from 'react-router-dom';

import { useAuth } from '../../context';
import { RoutePath } from '../constants';

export function UnauthorizedRoute({
  children,
  redirectTo = RoutePath.Home,
}: IParams) {
  const { isAuthorized } = useAuth();

  if (isAuthorized) {
    return (
      <Navigate to={redirectTo} />
    );
  }

  return children;
}

interface IParams {
  children: JSX.Element;
  redirectTo?: string | RoutePath;
}
