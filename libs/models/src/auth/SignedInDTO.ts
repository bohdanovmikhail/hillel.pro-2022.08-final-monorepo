import { PublicUserModel } from '../UserModel';

export interface SignedInDTO {
  accessToken: string;
  user: PublicUserModel;
}
