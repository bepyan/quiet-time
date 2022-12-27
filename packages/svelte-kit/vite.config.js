import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
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
};

export default config;
