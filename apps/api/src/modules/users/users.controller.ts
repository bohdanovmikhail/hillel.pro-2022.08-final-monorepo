import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';

import { UserModel } from '@chat/models';

import { UsersRepository } from '../../repositories';

@Controller('users')
export class UsersController {
  constructor(private readonly usersRepository: UsersRepository) {}

  @Get()
  getAll(): Promise<UserModel[]> {
    return this.usersRepository.getAll();
  }

  @Get(':id')
  get(@Param('id') userId: string): Promise<UserModel> {
    return this.usersRepository.getById(userId);
  }

  @Post()
  create(@Body() userData: UserModel): Promise<UserModel> {
    return this.usersRepository.add(userData);
  }

  @Put()
  update(@Body() userData: UserModel): Promise<UserModel> {
    return this.usersRepository.update(userData)
  }

  @Delete(':id')
  delete(@Param('id') userId: string): Promise<UserModel> {
    return this.usersRepository.delete(userId);
  }
}
