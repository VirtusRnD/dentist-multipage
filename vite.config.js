import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Shared Vite config used as the starting point for every one of the
// 6 template repos. Copy this workspace per repo and just swap the
// active theme in src/themes/index.js (see README).
export default defineConfig({
  plugins: [react()],
})
