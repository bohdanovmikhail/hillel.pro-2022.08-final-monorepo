import {
  Container,
  Grid,
} from '@mui/material';
import { connect } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { ChatModel } from '@models';
import { IState } from '@core/store';
import { selectChatsList } from '@store/chats';

import { ChatList } from './components/ChatList';

function Main({ chatList }: IProps) {
  return (
    <Container>
      <Grid container>
        <Grid item md={4} mr={2}>
          <ChatList list={chatList} />
        </Grid>

        <Grid item md>
          <Outlet />
        </Grid>
      </Grid>
    </Container>
  );
}

const mapState = (state: IState) => ({
  chatList: selectChatsList(state),
});
const mapDispatch = {};

export default connect(mapState, mapDispatch)(Main);

interface IProps {
  chatList: ChatModel[];
}
