import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from '../components/header/Header';
import '../styles/App.css';
import Home from './home/Home';
import { useCallback, useEffect } from 'react';

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const setHeightMobile = useCallback(() => {
    if (isMobile) {
      document.documentElement.style.setProperty(
        '--vh-mobile',
        `${window.innerHeight}px`
      );
    }
  }, [isMobile]);

  useEffect(setHeightMobile, []);

  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
