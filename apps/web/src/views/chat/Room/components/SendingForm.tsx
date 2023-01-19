import { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export function SendingForm({ onSend }: IProps) {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    if (!message) {
      return;
    }

    onSend(message);
    setMessage('');
  };

  return (
    <Box>
      <TextField
        required
        id="outlined-required"
        label="Message text"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />

      <Button variant="contained" endIcon={<SendIcon />} onClick={sendMessage} />
    </Box>
  );
}

interface IProps {
  onSend: (text: string) => void;
}
