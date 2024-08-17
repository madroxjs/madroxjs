import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/madroxjs/',  // Set this to your repository name
  plugins: [
    react({
      include: /\.(jsx|js|mdx|md|tsx|ts)$/,
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
