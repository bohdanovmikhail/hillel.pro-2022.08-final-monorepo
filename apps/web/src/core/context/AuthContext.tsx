import { createContext, useState, useContext, useMemo } from 'react';

import { PublicUserModel, SignInDTO } from '@chat/models';

import { authAPI } from '../api';

const AuthContext = createContext<IAuthContext>({
  isAuthorized: false,
  user: null,
  token: null,

  signIn: () => Promise.reject(),
  signUp: () => Promise.reject(),
  signOut: () => Promise.reject(),
});

export function AuthProvider({
  children,
}: any) {
  const [user, setUser] = useState<PublicUserModel | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const signIn = async (data: SignInDTO) => {
    const { accessToken } = await authAPI.signIn(data);
    setToken(accessToken);
  };

  const signUp = async () => {
    console.log('sign up');
  };

  const signOut = async () => {
    // navigate('/', { replace: true });
  };

  const ctx = useMemo<IAuthContext>(() => ({
    isAuthorized: !!token,

    user,
    token,
    signIn,
    signUp,
    signOut,
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
  signUp(): Promise<void>;
  signOut(): Promise<void>;
}
