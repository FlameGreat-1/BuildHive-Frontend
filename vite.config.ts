import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  optimizeDeps:{
    include:['react-router-dom']
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // This allows you to use '@' as an alias for the 'src' directory,
    },
    dedupe:['react-router-dom']
  }
})
