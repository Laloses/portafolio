import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import reactLogo from '../../assets/react.svg';
import useToogleTheme from '../../hooks/useToggleTheme';
import './_home.css';
import portfolioLogo from '/briefcase.png';

export default function Home() {
  // Misc
  const toggleColorMode = useToogleTheme();
  const theme = useTheme();
  // State
  const [count, setCount] = useState(0);

  return (
    <Grid className="home" container alignContent={'center'}>
      <Grid item xs={6} textAlign={'end'}>
        <a href="https://vitejs.dev" target="_blank">
          <img src={portfolioLogo} className="logo" alt="Portfolio logo" />
        </a>
      </Grid>
      <Grid item xs={6} textAlign={'start'}>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h1">Vite + React + Material UI + API</Typography>
      </Grid>
      <Grid item xs={12} padding={'2em'}>
        <Button
          variant="outlined"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>
      </Grid>
      <Grid item xs={12} padding={'2em'}>
        <Button variant="contained" onClick={toggleColorMode}>
          {theme.palette.mode} mode
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Typography paragraph>
          Edit <code>src/App.tsx</code> and save to test HMR
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography paragraph color={'GrayText'}>
          Click on the Vite and React logos to learn more
        </Typography>
      </Grid>
    </Grid>
  );
}
