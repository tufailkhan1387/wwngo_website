import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Tailwind runs via @tailwindcss/vite — block parent E:\postcss.config.js
  css: {
    postcss: {
      plugins: [],
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    proxy: {
      '/api': {
        target: 'http://192.168.100.16:3000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
