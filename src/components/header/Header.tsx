import MenuIcon from '@mui/icons-material/Menu';
import Settings from '@mui/icons-material/Settings';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useCallback, useState } from 'react';
import MobileDrawer from '../drawer/MobileDrawer';
import SearchBar from '../search/SearchBar';
import './_header.css';
import { menus } from './header.utils';

//   const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  // State

  const handleDrawerToggle = useCallback(() => {
    setMobileOpen((prevState) => !prevState);
  }, []);

  return (
    <>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          {/* Mobile button */}
          <IconButton
            id="menu-icon"
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          {/* Title */}
          <Typography variant="h6">
            Eduardo Martell &nbsp;
            <Typography className="title-developer" variant="overline">
              Developer
            </Typography>
          </Typography>
          {/* Web Menu */}
          <Box className="menus">
            {menus.map((menu, index) => (
              <Button
                key={index}
                color="inherit"
                href={menu.href}
                startIcon={menu.icon}
              >
                &nbsp; {menu.name}
              </Button>
            ))}
          </Box>
          {/* Search bar */}
          <Box className="search">
            <SearchBar
              placeholder={'Search on all the page'}
              widthExpand={25}
            />
          </Box>
          {/* Settings */}
          <IconButton
            id="web-settings"
            size="large"
            aria-label="display more actions"
            edge="end"
            color="inherit"
          >
            <Settings />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Menu */}
      <MobileDrawer
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
        menus={menus}
      />
    </>
  );
}
