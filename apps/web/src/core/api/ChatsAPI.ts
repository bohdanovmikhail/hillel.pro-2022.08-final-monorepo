import { ChatModel } from '@chat/models';

import { BackEndRestAPI } from './_BackEndRestAPI';

export class ChatsAPI extends BackEndRestAPI<ChatModel> {
  constructor(baseUrl: string) {
    super(baseUrl, 'chats');
  }
}
