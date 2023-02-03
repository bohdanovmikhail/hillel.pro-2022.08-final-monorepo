import { Container, CssBaseline, styled } from '@mui/material';
import { Outlet } from 'react-router-dom';

import { Header } from './components/Header';
import { WSConnector } from './components/WSConnector';

const RootContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  maxHeight: '100vh',
});

const Content = styled(Container)(({ theme }) => ({
  flex: '1 1 auto',
  display: 'flex',
  flexDirection: 'column',
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

export function Root() {
  return (
    <RootContainer disableGutters maxWidth={false}>
      <WSConnector />
      <Header />

      <Content disableGutters>
        <CssBaseline />

        <Outlet />
      </Content>
    </RootContainer>
  );
}
