import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],



  build: {
    // Customize build options
    // For example, specify output directory
    outDir: 'dist',
  },
  server: {
    // Customize development server options
    // For example, specify port
    port: 3000,
  },
  // Add other custom configuration options here
});
