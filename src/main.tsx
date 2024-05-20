import CssBaseline from '@mui/material/CssBaseline';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeAppProvider } from './context/ThemeContext';
// Import the generated route tree
import { routeTree } from './routeTree.gen';
import './styles/index.css';

// Create a new router instance
const router = createRouter({
  routeTree,
  defaultPendingComponent: () => {
    //component loading animation when the page first loads
    return <div className="loadingApp" />;
  },
});
// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById('root');
if (rootElement && !rootElement.innerHTML) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ThemeAppProvider>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeAppProvider>
    </React.StrictMode>
  );
}
