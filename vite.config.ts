import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Dr.-Fareed-Kanaan/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
