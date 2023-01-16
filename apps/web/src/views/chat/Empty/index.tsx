import {
  styled,
  Paper,
} from '@mui/material';

const ShadowContainer = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'red',
  padding: theme.spacing(1),
}));

export default function Empty() {
  return (
    <Paper>
      Empty Page
    </Paper>
  );
}
