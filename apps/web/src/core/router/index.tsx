import React from 'react';
import { createBrowserRouter, createHashRouter } from 'react-router-dom';

import { Root } from '../../views/Root';
import { ChatEmpty, ChatMain, ChatRoom } from '../../views/chat';
import { UserProfile } from '../../views/user';
import { AuthForgot, AuthSignIn, AuthSignUp } from '../../views/auth';

import { UnauthorizedRoute, ProtectedRoute } from './routes';
import { RoutePath } from './constants';

const createRouter = process.env.ENV === 'gh-pages' ? createHashRouter : createBrowserRouter;

export * from './routes';
export * from './constants';

export default createRouter([
  {
    path: RoutePath.Home,
    element: (
      <ProtectedRoute>
        <Root />
      </ProtectedRoute>
    ),
    children: [
      {
        element: <ChatMain />,
        children: [
          {
            index: true,
            element: <ChatEmpty />,
          },
          {
            path: ':roomId',
            element: <ChatRoom />,
          },
        ]
      },
      {
        path: 'profile',
        element: <UserProfile />,
      },
    ],
  },
  {
    path: RoutePath.SignIn,
    element: (
      <UnauthorizedRoute>
        <AuthSignIn />
      </UnauthorizedRoute>
    ),
  },
  {
    path: RoutePath.SignUp,
    element: (
      <UnauthorizedRoute>
        <AuthSignUp />
      </UnauthorizedRoute>
    ),
  },
  {
    path: RoutePath.Forgot,
    element: (
      <UnauthorizedRoute>
        <AuthForgot />
      </UnauthorizedRoute>
    ),
  },
]);
