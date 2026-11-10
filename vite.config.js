import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Shared Vite config used as the starting point for every one of the
// 6 template repos. Copy this workspace per repo and just swap the
// active theme in src/themes/index.js (see README).
// GitHub Pages serves 404.html for unknown paths; a copy of index.html lets deep links load the app.
function spaFallback() {
  let outDir
  return {
    name: 'spa-404',
    configResolved(config) { outDir = resolve(config.root, config.build.outDir) },
    closeBundle() { copyFileSync(resolve(outDir, 'index.html'), resolve(outDir, '404.html')) },
  }
}

export default defineConfig({
  plugins: [react(), spaFallback()],
})
