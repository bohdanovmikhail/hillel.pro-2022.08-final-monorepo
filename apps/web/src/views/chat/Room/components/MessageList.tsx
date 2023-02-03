import { useState, useEffect } from 'react';
import { Paper } from '@mui/material';

import { MessageModel } from '@chat/models';

import { Message } from './Message';

function groupMessages(list: MessageModel[]): IGroupedMessages[] {
  const groups: IGroupedMessages[] = [];
  let lastGroup: IGroupedMessages;

  list.forEach((message: MessageModel) => {
    if (!lastGroup || lastGroup.userId !== message.fromUserId) {
      lastGroup = {
        userId: message.fromUserId,
        messages: [],
      };
    }

    lastGroup.messages.push(message.text);
  });

  return groups;
}

export function MessageList({ list }: IProps) {
  const [groupedMessages, setGroupedMessages] = useState<IGroupedMessages[]>([]);

  useEffect(() => {
    setGroupedMessages(groupMessages(list));
  }, [list]);

  return (
    <Paper style={{ maxHeight: '500px', overflow: 'auto' }}>
      {groupedMessages.map(({ userId, messages }: IGroupedMessages, index: number) => (
        <Message
          key={index}
          userId={userId}
          messages={messages}
        />
      ))}
    </Paper>
  );
}

interface IProps {
  list: MessageModel[];
}

interface IGroupedMessages {
  userId: string;
  messages: string[];
}
