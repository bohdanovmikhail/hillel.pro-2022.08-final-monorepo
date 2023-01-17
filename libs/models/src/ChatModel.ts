import { BaseModel } from './_BaseModel';
import { MessageModel } from './MessageModel';

export interface ChatModel extends BaseModel {
  title: string;
  lastMessage?: MessageModel;
}
