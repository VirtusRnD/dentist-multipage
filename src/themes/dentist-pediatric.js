// Pediatric variant - bright, warm, playful. Cream background instead of
// clinical white-blue, cheerful teal/coral/yellow instead of the more
// muted classic palette. Same fonts as the classic dentist theme.
export const dentistPediatric = {
  name: 'dentist-pediatric',
  title: 'Willowbrook Dental — Kids',
  description: 'A calm, colorful space built to make dental visits easy for kids.',
  colors: {
    '--color-bg': '#FFFBF2',        // warm cream background
    '--color-surface': '#FFF0D6',   // soft yellow card surface
    '--color-primary': '#2FA8A0',   // bright playful teal — headings, buttons
    '--color-secondary': '#FF8A65', // coral/orange — CTAs, hover states
    '--color-accent': '#FFC845',    // cheerful yellow — small highlights, icons
    '--color-text': '#2B2419',      // warm near-black for body text
    '--color-muted': '#8A7A5C',
    '--color-border': '#F5DFAE',
  },
  fonts: {
    '--font-heading': "'Plus Jakarta Sans', sans-serif",
    '--font-body': "'Work Sans', sans-serif",
  },
}
