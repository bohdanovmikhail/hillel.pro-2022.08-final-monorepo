import { useState } from 'react';
import { Avatar, Box, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';

import { ActionOrPath, useNavi } from '@shared/hooks';

export function UserMenu({ items }: IProps) {
  const goTo = useNavi();

  // const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event: any) => {
    // setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    // setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        // anchorEl={anchorElUser}
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
          <MenuItem key={index} onClick={goTo(item.action)}>
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
  action: ActionOrPath;
}
