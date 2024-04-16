import Box from '@mui/material/Box';
import './_home.css';
import HomeAbout from './aboutPortfolio/HomeAbout';
import HomeWelcome from './welcome/HomeWelcome';
import HomeRoadmap from './roadmap/HomeRoadmap';

export default function Home() {
  return (
    <Box role="main" className="home">
      <HomeWelcome />
      <HomeAbout />
      <HomeRoadmap />
    </Box>
  );
}
