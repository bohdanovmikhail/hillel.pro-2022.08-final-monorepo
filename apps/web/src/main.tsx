import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import 'normalize.css';

import { AuthProvider, ThemeProvider } from './core/context';
import routes from './core/router';
import store from './core/store';
import { darkTheme, lightTheme } from './core/theme';
import { initAPIAuthorization } from './core/api';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const themes = {
  light: lightTheme,
  dark: darkTheme,
};

root.render(
  <StrictMode>
    <ReduxProvider store={store}>
      <ThemeProvider themes={themes} defaultTheme="light">
        <AuthProvider onSignIn={initAPIAuthorization}>
          <RouterProvider router={routes} />
        </AuthProvider>
      </ThemeProvider>
    </ReduxProvider>
  </StrictMode>,
);
