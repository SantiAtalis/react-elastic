import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/react-elastic/',
  server: {
    port: 5000,
    host: true
  },
  build: {
    outDir: 'dist'
  }
})