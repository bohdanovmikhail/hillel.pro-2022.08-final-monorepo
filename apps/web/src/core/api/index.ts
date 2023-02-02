import { API_CONNECTION_URL } from '@chat/constants';

import { AuthAPI } from './AuthAPI';
import { ChatsAPI } from './ChatsAPI';
import { UsersAPI } from './UsersAPI';

export const authAPI = new AuthAPI(API_CONNECTION_URL);
export const chatsAPI = new ChatsAPI(API_CONNECTION_URL);
export const usersAPI = new UsersAPI(API_CONNECTION_URL);
