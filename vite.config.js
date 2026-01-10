import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@services': path.resolve(__dirname, 'services'),
    },
  },
  server: {
    host: true, // 👈 ESSENCIAL para cloud/container
  },
});
