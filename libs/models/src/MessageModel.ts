import { BaseModel } from './_BaseModel';

export interface MessageModel extends BaseModel {
  fromUserId: string;
  created: number;
  text: string;
}

export type NewMessageModel = Omit<MessageModel, 'id' | 'fromUserId' | 'created'>;
