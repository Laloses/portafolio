import { Brightness4Outlined } from '@mui/icons-material';
import Settings from '@mui/icons-material/Settings';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grow from '@mui/material/Grow';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from '@tanstack/react-router';
import { useCallback, useMemo, useState, type JSX } from 'react';
import useToggleTheme from '../../hooks/useToggleTheme';

interface Props {
  handleDrawerToggle: () => void;
  mobileOpen: boolean;
  menus: { name: string; icon: JSX.Element; to: string }[];
}

export default function MobileDrawer(props: Props) {
  // Misc
  const navigate = useNavigate();
  // State
  const [openSettings, setOpenSettings] = useState(false);
  const isiOS = useMemo(
    () =>
      typeof navigator !== 'undefined' &&
      /iPad|iPhone|iPod/.test(navigator.userAgent),
    []
  );

  // handlers
  const handleDrawerToggle = useCallback(() => {
    setOpenSettings(false);
    props.handleDrawerToggle();
  }, [props.handleDrawerToggle]);

  const goTo = useCallback(
    (to: string) => {
      navigate({ to: `/${to}` });
      props.handleDrawerToggle();
    },
    [navigate, props.handleDrawerToggle]
  );

  return (
    <nav>
      <SwipeableDrawer
        anchor="left"
        onOpen={handleDrawerToggle}
        onClose={handleDrawerToggle}
        open={props.mobileOpen}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        disableBackdropTransition={!isiOS}
        disableDiscovery={isiOS}
      >
        <Box sx={{ height: '100vh', overflow: 'hidden' }}>
          <Divider />
          <List
            sx={{
              height: `${window.innerHeight}px`,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <ListItem divider>
              <Typography variant="h6" sx={{ padding: '1rem' }}>
                Menu
              </Typography>
            </ListItem>
            {props.menus.map((menu) => (
              <ListItem
                disablePadding
                key={menu.name}
                onClick={() => {
                  goTo(menu.to);
                }}
                divider
              >
                <ListItemButton>
                  <ListItemIcon>{menu.icon}</ListItemIcon>
                  <ListItemText primary={menu.name} />
                </ListItemButton>
              </ListItem>
            ))}
            <MobileSettingsMenu
              open={openSettings}
              onToggleSettings={() => {
                setOpenSettings((prev) => !prev);
              }}
            />
          </List>
        </Box>
      </SwipeableDrawer>
    </nav>
  );
}

function MobileSettingsMenu(props: {
  open: boolean;
  onToggleSettings: () => void;
}) {
  // Misc
  const theme = useTheme();
  // Misc
  const toggleColorMode = useToggleTheme();

  return (
    <>
      <ListItem
        disablePadding
        sx={{ marginTop: 'auto' }}
        onClick={props.onToggleSettings}
      >
        <ListItemButton>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText primary={'Settings'} />
        </ListItemButton>
      </ListItem>
      <Grow
        in={props.open}
        style={{
          height: props.open ? 'auto' : 0,
        }}
      >
        <ListItem onClick={toggleColorMode} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Brightness4Outlined />
            </ListItemIcon>
            <ListItemText
              primary={'Cambiar a modo'}
              secondary={theme.palette.mode === 'dark' ? 'Claro' : 'Oscuro'}
            />
          </ListItemButton>
        </ListItem>
      </Grow>
    </>
  );
}
