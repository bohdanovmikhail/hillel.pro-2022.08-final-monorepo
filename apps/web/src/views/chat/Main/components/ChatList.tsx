import { Fragment } from 'react';
import {
  List,
  Divider,
} from '@mui/material';

import { ChatModel } from '@chat/models';

import { ChatItem } from './ChatItem';

export function ChatList({ list }: IProps) {
  return (
    <List sx={{ bgcolor: 'background.paper', padding: '0' }}>
      <Divider component="li" />

      {list.map((item, index) => (
        <Fragment key={index}>
          <ChatItem chat={item} />
          <Divider component="li" />
        </Fragment>
      ))}
    </List>
  );
}

interface IProps {
  list: ChatModel[];
}
