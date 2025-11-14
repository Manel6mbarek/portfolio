import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio/', // <-- ajoute cette ligne
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
