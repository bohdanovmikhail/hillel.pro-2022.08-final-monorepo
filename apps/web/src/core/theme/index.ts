import { createTheme, LinkProps } from '@mui/material';

import { NavigateLink } from './override';

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#ff0000',
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: NavigateLink,
      } as LinkProps,
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: NavigateLink,
      },
    },
  },
});

export const lightTheme = createTheme({
  components: {
    MuiLink: {
      defaultProps: {
        component: NavigateLink,
      } as LinkProps,
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: NavigateLink,
      },
    },
  },
});
