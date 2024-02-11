import { Box, IconButton, useTheme } from '@mui/material';
import {
  DarkModeOutlined,
  LightModeOutlined,
  NotificationsOutlined,
  PersonOutlineOutlined,
  Search,
  SettingsOutlined,
} from '@mui/icons-material';
import { tokens, useColorModeContext } from './theme';

import { InputBase } from '@mui/material';

export const TopBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { colorMode } = useColorModeContext();

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/** Search Bar */}
      <Box
        display="flex"
        sx={{ backgroundColor: colors.primary[400], borderRadius: '3px' }}
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <Search />
        </IconButton>
      </Box>

      {/** Icons */}
      <Box display="flex">
        <IconButton onClick={() => colorMode.toggleColorMode()}>
          {theme.palette.mode === 'dark' ? (
            <DarkModeOutlined />
          ) : (
            <LightModeOutlined />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlined />
        </IconButton>
        <IconButton>
          <SettingsOutlined />
        </IconButton>
        <IconButton>
          <PersonOutlineOutlined />
        </IconButton>
      </Box>
    </Box>
  );
};
