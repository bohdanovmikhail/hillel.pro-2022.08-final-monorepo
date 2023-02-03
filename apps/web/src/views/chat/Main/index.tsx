import {
  Container,
  Grid,
  styled,
} from '@mui/material';
import { connect } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { ChatModel } from '@chat/models';

import { IState, selectChatsList } from '../../../core/store';

import { ChatList } from './components/ChatList';

const MainPageContainer = styled(Container)({
  flex: '1 1 auto',
  display: 'flex',
  alignItems: 'stretch',
});

const ListContainer = styled(Grid)({
  overflow: 'auto',
  maxHeight: '100%',
});

function Main({ chatList }: IProps) {
  return (
    <MainPageContainer disableGutters>
      <Grid container>
        <ListContainer item md={4} mr={2}>
          <ChatList list={chatList} />
        </ListContainer>

        <Grid item md>
          <Outlet />
        </Grid>
      </Grid>
    </MainPageContainer>
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
