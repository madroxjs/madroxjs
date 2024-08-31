import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup';
import { fileURLToPath } from 'url';



export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);


// https://vitejs.dev/config/
export default defineConfig(() => {
  console.log("parent config")


  return ({
    base: '/madroxjs/',  // Set this to your repository name
    plugins: [
      react({
        include: /\.(jsx|js|tsx|ts)$/,
      }),
      mdx()
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  })
})
