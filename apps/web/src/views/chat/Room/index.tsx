import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Box, styled, Checkbox } from '@mui/material';

import { MessageModel } from '@chat/models';
import { IWebSocketClientMessage } from '@chat/websocket';

import {
  IState,
  selectMessagesList,
  messagesSend,
} from '../../../core/store';

import { MessageList } from './components/MessageList';
import { SendingForm } from './components/SendingForm';

const Container = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
}));

const FormWrapper = styled(Box)(({ theme }) => ({
  bottom: theme.spacing(1),
  left: '0',
  right: '0',
}));

function Room({ messages, send }: IProps) {
  const { chatId } = useParams();

  const sendHandler = (text: string) => {
    if (chatId) {
      send({ text, chatId });
    }
  };

  return (
    <Container>
      <MessageList list={messages} />

      <FormWrapper>
        <SendingForm onSend={sendHandler} />
      </FormWrapper>
    </Container>
  );
}

const mapState = (state: IState) => ({
  messages: selectMessagesList(state),
});
const mapDispatch = {
  send: messagesSend,
};

export default connect(mapState, mapDispatch)(Room);

interface IProps {
  messages: MessageModel[];
  send: (data: IWebSocketClientMessage) => void;
}
