import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';

import { ChatModel } from '@chat/models';

import { ChatsRepository } from '../../repositories';

@Controller('chats')
export class ChatsController {
  constructor(private readonly chatsRepository: ChatsRepository) {}

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
