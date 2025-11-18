import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  base: "tailwind-vite",
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
      }
    }
  }
})