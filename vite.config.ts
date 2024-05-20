import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { browserslistToTargets } from 'lightningcss';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      devTarget: 'esnext',
      plugins: [['@swc/plugin-styled-components', {}]],
    }),
    TanStackRouterVite(),
  ],
  server: {
    open: true,
  },
  build: {
    cssMinify: 'lightningcss',
  },
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      targets: browserslistToTargets(['>= 0.25%']),
    },
  },
});
