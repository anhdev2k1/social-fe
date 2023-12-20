import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import requireTransform from 'vite-plugin-require-transform';
import typescript from '@rollup/plugin-typescript'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), typescript(),
    requireTransform({}),
  ],
})
