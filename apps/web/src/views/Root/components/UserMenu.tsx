import { Avatar, Box, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';

import { useAuth } from '../../../core/context';

export function UserMenu({ items }: IProps) {
  const { user } = useAuth();

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src={user?.avatar} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={false}
      >
        {items.map((item, index) => (
          <MenuItem key={index}>
            <Typography textAlign="center">{item.title}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

interface IProps {
  items: IUserMenuItem[];
}

interface IUserMenuItem {
  title: string;
}
