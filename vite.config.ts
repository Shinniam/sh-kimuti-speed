import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'esbuild',
    sourcemap: false,
    outDir: 'dist',
    target: 'es2017',
    cssCodeSplit: true,
  },
});
