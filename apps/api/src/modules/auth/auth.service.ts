import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { PublicUserModel, SignedInDTO } from '@chat/models';

import { UsersRepository } from '../users/users.repository';

@Injectable()
export class AuthService {
  constructor(
    private usersRepository: UsersRepository,
    private jwtService: JwtService,
  ) {}

  async validateUser(userName: string, password: string): Promise<PublicUserModel> {
    const user = await this.usersRepository.getByUserName(userName);

    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  public async login(user: PublicUserModel): Promise<SignedInDTO> {
    const payload = {
      userName: user.userName,
      userId: user.id,
    };

    return {
      accessToken: this.jwtService.sign(payload),
      user: user,
    };
  }

  public getUserFromToken(token: string): Promise<PublicUserModel> {
    const { userId } = this.jwtService.decode(token) as any;

    return this.usersRepository.getById(userId);
  }
}
