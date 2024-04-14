import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeAppProvider } from './context/ThemeContext';
import App from './pages/App.tsx';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeAppProvider>
      <CssBaseline />
      <App />
    </ThemeAppProvider>
  </React.StrictMode>
);
