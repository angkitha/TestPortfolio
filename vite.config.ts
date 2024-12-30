import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/TestPortfolio/',  // Ensure this is correct for GitHub Pages
  plugins: [react()],
});
