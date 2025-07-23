import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; // Import the Tailwind CSS plugin

export default defineConfig({
  plugins: [
    tailwindcss(), // Add the Tailwind CSS plugin
    react(),
  ],
});