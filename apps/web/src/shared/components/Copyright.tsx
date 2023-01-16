import { Link, Typography } from '@mui/material';

import { YOUR_SITE_DOMAIN, YOUR_SITE_NAME } from '@constants';

export function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href={YOUR_SITE_DOMAIN}>
        {YOUR_SITE_NAME}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
