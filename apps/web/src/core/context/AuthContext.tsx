import { createContext, useState, useContext, useMemo } from 'react';

import { PublicUserModel, SignInDTO } from '@chat/models';

import { authAPI } from '../api';

const AuthContext = createContext<IAuthContext>({
  isAuthorized: false,
  user: null,
  token: null,

  signIn: () => Promise.reject(),
});

export function AuthProvider({
  children,
  onSignIn,
}: IAuthParams) {
  const [user, setUser] = useState<PublicUserModel | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const signIn = async (data: SignInDTO) => {
    const { accessToken, user } = await authAPI.signIn(data);

    setToken(accessToken);
    setUser(user);

    if (onSignIn) {
      onSignIn(accessToken);
    }
  };

  const ctx = useMemo<IAuthContext>(() => ({
    isAuthorized: !!token,

    user,
    token,
    signIn,
  }), [user, token]);

  return (
    <AuthContext.Provider value={ctx}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

export interface IAuthContext {
  isAuthorized: boolean;
  user: PublicUserModel | null;
  token: string | null;

  signIn(data: SignInDTO): Promise<void>;
}

interface IAuthParams {
  children: JSX.Element;
  onSignIn?: (token: string) => void;
}
