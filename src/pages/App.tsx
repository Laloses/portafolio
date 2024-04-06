import CssBaseline from '@mui/material/CssBaseline';
import Header from '../components/header/Header';
import { ThemeAppProvider } from '../context/ThemeContext';
import '../styles/App.css';
import Home from './home/Home';

function App() {
  return (
    <ThemeAppProvider>
      <CssBaseline />
      <Header />
      <Home />
    </ThemeAppProvider>
  );
}

export default App;
