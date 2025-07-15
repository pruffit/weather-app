import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwind from '@tailwindcss/vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: '/',
  root: path.resolve(__dirname, 'src'),
  publicDir: path.resolve(__dirname, 'public'),
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/app/index.html'),
      },
    },
  },
  plugins: [vue(), tailwind()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@app', replacement: path.resolve(__dirname, 'src/app') },
      { find: '@features', replacement: path.resolve(__dirname, 'src/features') },
      { find: '@shared', replacement: path.resolve(__dirname, 'src/shared') },
    ],
  },
  server: {
    open: '/app/index.html',
  },
});
