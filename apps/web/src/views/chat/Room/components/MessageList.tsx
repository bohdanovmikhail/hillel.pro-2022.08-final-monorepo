import { Paper } from '@mui/material';

import { Message } from './Message';

export function MessageList() {
  return (
    <Paper style={{ maxHeight: '500px', overflow: 'auto' }}>
      <Message
        avatar=""
        messages={[
          'Hi Jenny, How r u today?',
          'Did you train yesterday',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.',
        ]}
      />

      <Message
        itsMe
        avatar=""
        messages={[
          'Great! What\'s about you?',
          'Of course I did. Speaking of which check this out',
        ]}
      />

      <Message
        avatar=""
        messages={[
          'Im good.',
          'See u later.',
        ]}
      />

      <Message
        avatar=""
        messages={[
          'Hi Jenny, How r u today?',
          'Did you train yesterday',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.',
        ]}
      />

      <Message
        itsMe
        avatar=""
        messages={[
          'Great! What\'s about you?',
          'Of course I did. Speaking of which check this out',
        ]}
      />

      <Message
        avatar=""
        messages={[
          'Im good.',
          'See u later.',
        ]}
      />
    </Paper>
  );
}
