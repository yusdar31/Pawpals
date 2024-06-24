// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer'; // Correct import

export default defineConfig({
  plugins: [
    react(),
    visualizer(), // Include the visualizer plugin here
  ],
  optimizeDeps: {
    include: [
      'firebase/app',
      'firebase/auth',
      'firebase/firestore',
      'react-router-dom'
    ],
  },
});
