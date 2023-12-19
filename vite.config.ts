// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/Joshdollars/',
  }

  if (command !== 'serve') {
    config.base = '/Joshdollars/'
  }

  return config
})