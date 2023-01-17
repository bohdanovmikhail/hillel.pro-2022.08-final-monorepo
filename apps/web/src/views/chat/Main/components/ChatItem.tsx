import { styled, Typography, ListItem, ListItemAvatar, Avatar, ListItemText, Link } from '@mui/material';
import { faker } from '@faker-js/faker';
import { useParams } from 'react-router-dom';

import { ChatModel } from '@chat/models';

const ChatTitle = styled(Typography)({
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
});

const LastMessageText = styled(Typography)(({ theme }) => ({
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  ...theme.typography.body2,
}));

export function ChatItem({ chat }: IProps) {
  const { roomId } = useParams();

  return (
    <Link href={`/${chat.id}`}>
      <ListItem alignItems="flex-start" style={{ background: chat.id === roomId ? 'silver' : '' }}>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={faker.image.avatar()} />
        </ListItemAvatar>
        <ListItemText
          primary={(
            <ChatTitle>
              {chat.title}: #{chat.id}
            </ChatTitle>
          )}
          secondary={chat.lastMessage && (
            <LastMessageText>
              {chat.lastMessage?.text}
            </LastMessageText>
          )}
        />
      </ListItem>
    </Link>
  );
}

interface IProps {
  chat: ChatModel;
}
