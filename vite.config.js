import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'makeup-pro-basic': resolve(__dirname, 'makeup-pro-basic.html'),
        'makeup-pro-express': resolve(__dirname, 'makeup-pro-express.html'),
        'brow-master': resolve(__dirname, 'brow-master.html'),
        lamimaker: resolve(__dirname, 'lamimaker.html'),
        'brow-lash-master': resolve(__dirname, 'brow-lash-master.html'),
      },
    },
  },
});
