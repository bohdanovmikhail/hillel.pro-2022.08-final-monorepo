import { createTheme, LinkProps } from '@mui/material';

import { NavigateLink } from './override';

export default createTheme({
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
