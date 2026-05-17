import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/iyf-s10-weeek-09-blis608/',
  build: {
    outDir: 'docs',
  },
  plugins: [react()],
});
