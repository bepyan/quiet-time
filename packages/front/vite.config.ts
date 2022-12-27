import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/quiet-time/',
  plugins: [react()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    include: ['@qt/common'],
  },
  build: {
    commonjsOptions: {
      include: [/common/, /node_modules/],
    },
  },
});
