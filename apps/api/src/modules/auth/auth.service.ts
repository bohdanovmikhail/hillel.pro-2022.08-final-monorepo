import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { PublicUserModel, TokenDTO } from '@chat/models';

import { UsersRepository } from '../users/users.repository';

@Injectable()
export class AuthService {
  constructor(
    private usersRepository: UsersRepository,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<PublicUserModel> {
    const user = await this.usersRepository.getByUserName(username);

    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  public async login(user: PublicUserModel): Promise<TokenDTO> {
    const payload = {
      userName: user.userName,
      userId: user.id,
    };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
