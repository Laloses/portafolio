import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ChatIcon from '@mui/icons-material/Chat';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import People from '@mui/icons-material/People';
import School from '@mui/icons-material/School';

export const menus = [
  { name: 'Sobre mí', icon: <AccountBoxIcon />, to: 'aboutme' },
  { name: 'Hablidades', icon: <School />, to: '#skills' },
  { name: 'Proyectos', icon: <People />, to: '#projects' },
  { name: 'Experiencias', icon: <GraphicEqIcon />, to: '#experiences' },
  { name: 'Contacto', icon: <ChatIcon />, to: '#contact' },
];
