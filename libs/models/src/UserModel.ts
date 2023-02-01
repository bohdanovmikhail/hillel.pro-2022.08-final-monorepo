import { BaseModel } from './_BaseModel';

export interface UserModel extends BaseModel {
  userName: string;
  avatar: string;
  password: string;
}

export type NewUserModel = Omit<UserModel, 'id'>;
export type PublicUserModel = Omit<UserModel, 'password'>;
