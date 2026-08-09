import { Star, UtensilsCrossed, Wine } from 'lucide-react'
import { RevealGroup } from './Reveal'

// Lucide's stock "Bean" icon is a generic legume/kidney-bean shape, not a
// coffee bean specifically - so this is a small hand-built one instead: an
// oval outline with the characteristic center crease. The crease is drawn
// in the surface color (the section's own background) so it reads as a
// carved groove rather than a colored line, regardless of theme.
function CoffeeBeanIcon({ size = 18, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <path
        d="M12 2.5C7.3 2.5 3.5 6.7 3.5 12S7.3 21.5 12 21.5 20.5 17.3 20.5 12 16.7 2.5 12 2.5z"
        fill="currentColor"
      />
      <path
        d="M13.6 4.4c-2.7 2.5-2.7 5.9-.3 8.3.1.1.2.2.3.3 2.4 2.4 2.4 5.8-.3 8.3"
        fill="none"
        stroke="var(--color-surface)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

// Lucide has no tooth icon at all (open, unresolved request in their repo).
// This path is Font Awesome Free's "tooth" glyph (CC BY 4.0, fontawesome.com) -
// used verified/as-is rather than freehanding a shape and risking it not
// reading as a tooth.
function ToothIcon({ size = 18, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 384 512" className={className} fill="currentColor">
      <path d="M154.1 52.1C137.3 39.1 116.7 32 95.5 32C42.7 32 0 74.7 0 127.5v6.2c0 15.8 3.7 31.3 10.7 45.5l23.5 47.1c4.5 8.9 7.6 18.4 9.4 28.2L80.4 460.2c2 11.2 11.6 19.4 22.9 19.8s21.4-7.4 24-18.4l28.9-121.3C160.2 323.7 175 312 192 312s31.8 11.7 35.8 28.3l28.9 121.3c2.6 11.1 12.7 18.8 24 18.4s20.9-8.6 22.9-19.8l36.7-205.8c1.8-9.8 4.9-19.3 9.4-28.2l23.5-47.1c7.1-14.1 10.7-29.7 10.7-45.5v-2.1c0-55-44.6-99.6-99.6-99.6c-24.1 0-47.4 8.8-65.6 24.6l-3.2 2.8 19.5 15.2c7 5.4 8.2 15.5 2.8 22.5s-15.5 8.2-22.5 2.8l-24.4-19-37-28.8z" />
    </svg>
  )
}

const RATING_ICONS = {
  star: Star,
  bean: CoffeeBeanIcon,
  utensils: UtensilsCrossed,
  wine: Wine,
  tooth: ToothIcon,
}

/**
 * reviews: [{ quote, author, rating }]
 * icon: 'star' | 'bean' | 'utensils' | 'wine' | 'tooth' - which icon fills the rating row.
 * Pass SITE[ACTIVE_THEME].ratingIcon from data/site.js so it stays consistent per business.
 */
export default function Testimonials({ title = 'What Guests Say', reviews = [], icon = 'star' }) {
  const Icon = RATING_ICONS[icon] || Star

  return (
    <section className="bg-brand-surface py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-heading text-4xl text-brand-text mb-12 text-center">{title}</h2>
        <RevealGroup className="grid md:grid-cols-3 gap-8" stagger={0.15}>
          {reviews.map((r, i) => (
            <div key={i} className="text-center">
              <div className="flex justify-center gap-1 text-brand-accent mb-3">
                {Array.from({ length: r.rating || 5 }).map((_, j) => (
                  <Icon key={j} size={18} fill="currentColor" strokeWidth={1.5} />
                ))}
              </div>
              <p className="font-body text-brand-text italic mb-4">"{r.quote}"</p>
              <p className="font-body text-sm text-brand-muted">— {r.author}</p>
            </div>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
