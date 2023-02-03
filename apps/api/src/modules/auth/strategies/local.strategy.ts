import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy } from 'passport-local';

import { PublicUserModel } from '@chat/models';

import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'userName',
      passwordField: 'password',
    });
  }

  async validate(username: string, password: string): Promise<PublicUserModel> {
    const user = await this.authService.validateUser(username, password);

    if (!user) {
      // return { test: 'test' } as any;
      throw new UnauthorizedException();
    }

    return user;
  }
}
