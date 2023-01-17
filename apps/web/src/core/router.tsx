import { createBrowserRouter, createHashRouter } from 'react-router-dom';

import { Root } from '../views/Root';
import { ChatEmpty, ChatMain, ChatRoom } from '../views/chat';
import { UserProfile } from '../views/user';
import { AuthForgot, AuthSignIn, AuthSignUp } from '../views/auth';

const createRouter = process.env.ENV === 'gh-pages' ? createHashRouter : createBrowserRouter;

export default createRouter([
  {
    path: '/',
    element: <Root />,
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
    path: '/signin',
    element: <AuthSignIn />,
  },
  {
    path: '/signup',
    element: <AuthSignUp />,
  },
  {
    path: '/forgot',
    element: <AuthForgot />,
  },
]);
