import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig({
  plugins: [react(), viteSingleFile()],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@components', replacement: '/src/components' },
      { find: '@lib', replacement: '/src/lib' },
    ],
  },
});
