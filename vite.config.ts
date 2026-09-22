import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, type Plugin} from 'vite';

function getInTouchPlugin(): Plugin {
  return {
    name: 'serve-routes-plugin',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url) {
          const [pathname, search] = req.url.split('?');
          if (pathname === '/get-in-touch' || pathname === '/get-in-touch/') {
            req.url = '/get-in-touch/index.html' + (search ? `?${search}` : '');
          } else if (
            pathname === '/terms-and-conditions' ||
            pathname === '/terms-and-conditions/' ||
            pathname === '/privacy-policy' ||
            pathname === '/privacy-policy/'
          ) {
            req.url = '/index.html' + (search ? `?${search}` : '');
          }
        }
        next();
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), getInTouchPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          getInTouch: path.resolve(__dirname, 'get-in-touch/index.html'),
        },
      },
    },
  };
});
