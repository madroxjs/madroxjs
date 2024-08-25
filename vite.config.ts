import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import mdx from '@mdx-js/rollup';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/madroxjs/',  // Set this to your repository name
  plugins: [
    react({
      include: /\.(jsx|js|md|mdx|tsx|ts)$/,
    }),
    // mdx()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
