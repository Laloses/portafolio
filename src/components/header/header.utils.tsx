import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ChatIcon from '@mui/icons-material/Chat';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import People from '@mui/icons-material/People';
import School from '@mui/icons-material/School';

export const menus = [
  { name: 'About me', icon: <AccountBoxIcon />, href: '#about' },
  { name: 'Skills', icon: <School />, href: '#skills' },
  { name: 'Projects', icon: <People />, href: '#projects' },
  { name: 'Experiences', icon: <GraphicEqIcon />, href: '#experiences' },
  { name: 'Contact', icon: <ChatIcon />, href: '#contact' },
];
