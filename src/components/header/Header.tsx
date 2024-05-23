import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useTheme, type SxProps } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate } from '@tanstack/react-router';
import { useCallback, useMemo, useState } from 'react';
import logoTransparent from '../../assets/image/logo M.png';
import MobileDrawer from '../drawer/MobileDrawer';
import WebSettingButtonMenu from '../menu/WebSettingButtonMenut';
import SearchBar from '../search/SearchBar';
import './_header.css';
import { menus } from './header.utils';

export default function Header() {
  // Misc
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
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
    [theme]
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
      <AppBar position="sticky" color="primary">
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
            onClick={() => navigate({ to: '/' })}
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
            {menus.map((menu) => (
              <Button
                key={menu.name}
                color="inherit"
                onClick={() => navigate({ to: `/${menu.to}` })}
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
              placeholder={
                isSearching ? 'Buscar en toda la página' : 'Buscar...'
              }
              widthExpand={25}
              onFocusChange={handleMobileSearch}
            />
          </Box>
          {/* Web Settings */}
          <WebSettingButtonMenu />
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
