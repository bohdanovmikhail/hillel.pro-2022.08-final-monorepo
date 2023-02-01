import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';

import { ChatModel } from '@chat/models';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

import { ChatsRepository } from './chats.repository';

@Controller('chats')
export class ChatsController {
  constructor(private readonly chatsRepository: ChatsRepository) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getAll(): Promise<ChatModel[]> {
    return this.chatsRepository.getAll();
  }

  @Get(':id')
  get(@Param('id') userId: string): Promise<ChatModel> {
    return this.chatsRepository.getById(userId);
  }

  @Post()
  create(@Body() userData: ChatModel): Promise<ChatModel> {
    return this.chatsRepository.add(userData);
  }

  @Put()
  update(@Body() userData: ChatModel): Promise<ChatModel> {
    return this.chatsRepository.update(userData)
  }

  @Delete(':id')
  delete(@Param('id') userId: string): Promise<ChatModel> {
    return this.chatsRepository.delete(userId);
  }
}
