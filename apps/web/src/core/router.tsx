import { createBrowserRouter, createHashRouter } from 'react-router-dom';

import { Root } from '@views/Root';
import { ChatMain, ChatEmpty, ChatRoom } from '@views/chat';
import { AuthSignIn, AuthSignUp, AuthForgot } from '@views/auth';
import { UserProfile } from '@views/user';

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
