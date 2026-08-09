import { dentist } from './dentist'
import { dentistPediatric } from './dentist-pediatric'
import { dentistCosmetic } from './dentist-cosmetic'

// Three color variants, same fonts and layout across all of them:
// 'classic' (general dentistry, teal/coral), 'pediatric' (bright/playful),
// 'cosmetic' (elegant smile studio, gold/ivory). Switch ACTIVE_THEME to
// change which one applies - nothing else needs to change.
export const themes = {
  classic: dentist,
  pediatric: dentistPediatric,
  cosmetic: dentistCosmetic,
}

export const ACTIVE_THEME = 'classic'

export function applyTheme(themeName = ACTIVE_THEME) {
  const theme = themes[themeName]
  if (!theme) throw new Error(`Unknown theme: ${themeName}`)
  const root = document.documentElement
  Object.entries(theme.colors).forEach(([key, value]) => root.style.setProperty(key, value))
  Object.entries(theme.fonts).forEach(([key, value]) => root.style.setProperty(key, value))
  root.dataset.theme = theme.name

  if (theme.title) document.title = theme.title

  if (theme.description) {
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', theme.description)
  }

  return theme
}
