import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   proxy: {
  //     '/authenticate': {
  //       target: 'https://us-central1-ria-server-b1103.cloudfunctions.net',
  //       changeOrigin: true,
  //     }
  //   }
  // },
  plugins: [react()],
})
