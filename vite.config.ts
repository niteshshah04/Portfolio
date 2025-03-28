import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',
  build: {
    outDir: 'build'  // Change output directory to 'build'
  }
})
