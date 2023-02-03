import { useState, useRef, KeyboardEvent } from 'react';
import { Box, TextField, Button, styled } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const Container = styled(Box)({
  display: 'flex',
  flexWrap: 'nowrap',
  alignItems: 'stretch',
});

const MessageInput = styled(TextField)({
  flex: '1 1 auto',
});

const SendButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: theme.spacing(1),
}));

export function SendingForm({ onSend }: IProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    if (!message) {
      return;
    }

    onSend(message);
    setMessage('');
    inputRef.current?.focus();
  };

  const handleEnterClick = (event: KeyboardEvent<HTMLInputElement>) => {
    if(event.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <Container>
      <MessageInput
        required
        ref={inputRef}
        id="outlined-required"
        label="Message text"
        value={message}
        onChange={e => setMessage(e.target.value)}
        onKeyDown={handleEnterClick}
      />

      <SendButton color="secondary" variant="contained" onClick={sendMessage}>
        <SendIcon />
      </SendButton>
    </Container>
  );
}

interface IProps {
  onSend: (text: string) => void;
  onStartWriting?: () => void;
  onStopWriting?: () => void;
}
