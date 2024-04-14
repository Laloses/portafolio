import MenuIcon from '@mui/icons-material/Menu';
import Settings from '@mui/icons-material/Settings';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useTheme, type SxProps } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useCallback, useMemo, useState } from 'react';
import logoTransparent from '../../assets/image/logo M.png';
import useToogleTheme from '../../hooks/useToggleTheme';
import MobileDrawer from '../drawer/MobileDrawer';
import SearchBar from '../search/SearchBar';
import './_header.css';
import { menus } from './header.utils';

//   const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function Header() {
  // Misc
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const toggleColorMode = useToogleTheme();
  // State
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  // Handlers
  const handleDrawerToggle = useCallback(() => {
    setDrawerOpen((prevState) => !prevState);
  }, []);

  const handleMobileSearch = useCallback((isFocused: boolean) => {
    setIsSearching(isFocused);
  }, []);

  const styleSearchBarWrapper: SxProps = useMemo(
    () => ({
      [theme.breakpoints.down('sm')]: {
        transition: theme.transitions.create('flex-grow', { duration: '0.5s' }),
      },
    }),
    [isSearching, theme]
  );

  const styleTitleMobile: SxProps = useMemo(
    () => ({
      [theme.breakpoints.down('sm')]: {
        transition: theme.transitions.create(['transform', 'opacity'], {
          duration: '0.5s',
        }),
      },
    }),
    [theme]
  );

  return (
    <>
      <AppBar position="absolute" color="primary">
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
          <Typography
            variant="h6"
            sx={styleTitleMobile}
            className={`${isSearching ? 'hide' : 'show'}`}
          >
            {isMobile && 'Lalo'}
            <Box
              className="logo"
              sx={{
                paddingRight: theme.spacing(1),
                paddingLeft: isMobile ? theme.spacing(1) : 0,
              }}
            >
              <img alt="Lalo Matell logo" src={logoTransparent} />
            </Box>
            {!isMobile && 'Eduardo Martell'}
            {isMobile && 'Dev'}
            <Typography
              className="title-developer"
              variant="overline"
              sx={{ paddingLeft: theme.spacing(1) }}
            >
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
          <Box
            className={`search ${isSearching ? 'searching' : ''}`}
            sx={styleSearchBarWrapper}
          >
            <SearchBar
              placeholder={'Busdcar en toda la página'}
              widthExpand={25}
              onFocusChange={handleMobileSearch}
            />
          </Box>
          {/* Theme */}
          {!isMobile && (
            <Button variant="contained" onClick={toggleColorMode}>
              Tema {theme.palette.mode}
            </Button>
          )}
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
        mobileOpen={drawerOpen}
        menus={menus}
      />
    </>
  );
}
