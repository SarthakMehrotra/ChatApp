import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

build: {
  rollupOptions: {
      output:{
          manualChunks(id) {
              if (id.includes('node_modules')) {
                  return id.toString().split('node_modules/')[1].split('/')[0].toString();
              }
          }
      }
  }
},
server: {
  port: 5173,
  strictPort: true,
  hmr: {
    port: 5173,
    protocol: 'ws',
    host: 'localhost',
  },
},
});
