import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ChatIcon from '@mui/icons-material/Chat';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import People from '@mui/icons-material/People';
import School from '@mui/icons-material/School';

export const menus = [
  { name: 'Sobre mí', icon: <AccountBoxIcon />, href: '#about' },
  { name: 'Hablidades', icon: <School />, href: '#skills' },
  { name: 'Proyectos', icon: <People />, href: '#projects' },
  { name: 'Experiencias', icon: <GraphicEqIcon />, href: '#experiences' },
  { name: 'Contacto', icon: <ChatIcon />, href: '#contact' },
];
