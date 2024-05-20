import { createLazyFileRoute } from '@tanstack/react-router';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useCallback, useEffect } from 'react';
import '../components/index/_index.css';
import { Box } from '@mui/material';
import HomeWelcome from '../components/index/welcome/HomeWelcome';
import HomeAbout from '../components/index/aboutPortfolio/HomeAbout';
import HomeRoadmap from '../components/index/roadmap/HomeRoadmap';

export const Route = createLazyFileRoute('/')({
  component: App,
});

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
    <Box role="main" className="home">
      <HomeWelcome />
      <HomeAbout />
      <HomeRoadmap />
    </Box>
  );
}
