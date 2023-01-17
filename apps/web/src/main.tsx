import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import 'normalize.css';

import routes from './core/router';
import store from './core/store';
import theme from './core/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={routes} />
      </ThemeProvider>
    </ReduxProvider>
  </StrictMode>,
);
