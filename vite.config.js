// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import imageminPlugin from 'vite-plugin-imagemin';

export default defineConfig({
  plugins: [
    react(),
    imageminPlugin({
      gifsicle: { interlaced: false },
      mozjpeg: { progressive: true, quality: 65 },
      optipng: { optimizationLevel: 5 },
      pngquant: { quality: [0.65, 0.9], speed: 4 },
      svgo: {
        plugins: [
          { removeViewBox: false },
          { removeUnusedNS: false },
          { removeUselessStrokeAndFill: false },
          { cleanupIDs: false },
        ],
      },
    }),
  ],
  css: {
    preprocessorOptions: {
      css: {
        import: ['./src/styles/index.css'],
      },
    },
  },
});
