import Settings from '@mui/icons-material/Settings';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Popper from '@mui/material/Popper';
import { useTheme, type SxProps } from '@mui/material/styles';
import {
  useCallback,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
} from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import useToggleTheme from '../../hooks/useToggleTheme';
import ClickAwayListener from '@mui/material/ClickAwayListener';

export default function WebSettingButtonMenu() {
  // Misc
  const theme = useTheme();
  const toggleColorMode = useToggleTheme();
  // State
  const anchorRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

  // Handlers
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleListKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }, []);

  // variables
  const styleMenu: SxProps = useMemo(
    () => ({
      backgroundColor: theme.palette.background.paper,
      [theme.breakpoints.down('sm')]: {
        transition: theme.transitions.create('transform', { duration: '0.5s' }),
        width: 150,
        maxWidth: '100%',
      },
      [theme.breakpoints.up('md')]: {
        width: 200,
        maxWidth: '100%',
      },
    }),
    [theme]
  );

  return (
    <>
      <IconButton
        ref={anchorRef}
        id="web-settings"
        size="large"
        aria-label="display more actions"
        edge="end"
        color="inherit"
        aria-controls={open ? 'composition-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <Settings />
      </IconButton>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        placement="bottom"
        sx={styleMenu}
        disablePortal
      >
        <ClickAwayListener onClickAway={handleClose}>
          <MenuList
            autoFocusItem={open}
            id="composition-menu"
            aria-labelledby="composition-button"
            onKeyDown={handleListKeyDown}
          >
            <MenuItem onClick={toggleColorMode}>
              <ListItemIcon>
                <Brightness4Icon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary="Cambiar a tema"
                secondary={theme.palette.mode === 'dark' ? 'Claro' : 'Oscuro'}
                primaryTypographyProps={{ color: 'textPrimary' }}
              />
            </MenuItem>
          </MenuList>
        </ClickAwayListener>
      </Popper>
    </>
  );
}
