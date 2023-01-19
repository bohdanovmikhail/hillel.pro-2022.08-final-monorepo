import { connect } from 'react-redux';
import { Box } from '@mui/material';

import { MessageModel } from '@chat/models';

import {
  IState,
  selectMessagesList,
} from '../../../core/store';

import { MessageList } from './components/MessageList';
import { SendingForm } from './components/SendingForm';

function Room({ messages }: IProps) {
  return (
    <Box>
      <MessageList list={messages} />
      <SendingForm onSend={text => {}} />
    </Box>
  );
}

const mapState = (state: IState) => ({
  messages: selectMessagesList(state),
});
const mapDispatch = (dispatch: any) => ({
});

export default connect(mapState, mapDispatch)(Room);

interface IProps {
  messages: MessageModel[];
}
