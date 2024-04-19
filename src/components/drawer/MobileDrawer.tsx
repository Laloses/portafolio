import Settings from '@mui/icons-material/Settings';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { useMemo, type JSX } from 'react';

interface Props {
  handleDrawerToggle: () => void;
  mobileOpen: boolean;
  menus: { name: string; icon: JSX.Element; href: string }[];
}

export default function MobileDrawer(props: Props) {
  // State
  const isiOS = useMemo(
    () =>
      typeof navigator !== 'undefined' &&
      /iPad|iPhone|iPod/.test(navigator.userAgent),
    []
  );

  return (
    <nav>
      <SwipeableDrawer
        anchor="left"
        onOpen={props.handleDrawerToggle}
        onClose={props.handleDrawerToggle}
        open={props.mobileOpen}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        disableBackdropTransition={!isiOS}
        disableDiscovery={isiOS}
      >
        <Box onClick={props.handleDrawerToggle} sx={{ height: '100vh' }}>
          <Divider />
          <List
            sx={{ height: '99vh', display: 'flex', flexDirection: 'column' }}
          >
            <ListItem divider>
              <Typography variant="h6" sx={{ padding: '1rem' }}>
                Menu
              </Typography>
            </ListItem>
            {props.menus.map((menu) => (
              <ListItem disablePadding key={menu.name} divider>
                <ListItemButton>
                  <ListItemIcon>{menu.icon}</ListItemIcon>
                  <ListItemText primary={menu.name} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding sx={{ marginTop: 'auto' }}>
              <ListItemButton>
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <ListItemText primary={'Settings'} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </SwipeableDrawer>
    </nav>
  );
}
