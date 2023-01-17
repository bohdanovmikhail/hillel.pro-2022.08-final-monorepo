import { Link } from '@mui/material';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { IState } from '../../../core/store';
// import { selectMessages } from '../../../core/store/messages';

import { MessageList } from './components/MessageList';
import { SendingForm } from './components/SendingForm';

function Room() {
  const { roomId } = useParams();

  return (
    <div>
      <div>
        <Link href="..">Back</Link>
      </div>
      Room ID: {roomId}

      <MessageList />
      <SendingForm />
    </div>
  );
}

const mapState = (state: IState) => ({
  // messages: selectMessages(state),
});
const mapDispatch = {};

export default connect(mapState, mapDispatch)(Room);
