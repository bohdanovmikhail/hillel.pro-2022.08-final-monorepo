import { Container, CssBaseline, styled } from '@mui/material';
import { Outlet } from 'react-router-dom';

import { Header } from './components/Header';
import { WSConnector } from './components/WSConnector';

const Content = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

export function Root() {
  return (
    <Container disableGutters fixed>
      <WSConnector />
      <Header />

      <Content>
        <CssBaseline />

        <Outlet />
      </Content>
    </Container>
  );
}
