import { Link, useNavigate } from 'react-router-dom'
import Hero from '../components/Hero'
import About from '../components/About'
import ServiceCard from '../components/ServiceCard'
import { RevealGroup } from '../components/Reveal'
import Testimonials from '../components/Testimonials'
import { SITE } from '../data/site'
import { IMAGES } from '../lib/placeholderImages'
import { ACTIVE_THEME } from '../themes'
import { serviceTeaser } from '../data/services'
import { TESTIMONIALS } from '../data/testimonials'
import { ABOUT_COPY } from '../data/about'

export default function Home() {
  const navigate = useNavigate()
  const { HERO_IMAGE, ABOUT_IMAGE } = IMAGES[ACTIVE_THEME]
  const site = SITE[ACTIVE_THEME]
  const about = ABOUT_COPY[ACTIVE_THEME]

  return (
    <>
      <Hero
        eyebrow="Accepting New Patients"
        title="Dental Care Without the Dread"
        subtitle="Thorough, honest, and genuinely comfortable — the way a dentist visit should feel."
        ctaLabel="View Services"
        onCtaClick={() => navigate('/services')}
        imageUrl={HERO_IMAGE}
      />

      <About
        eyebrow={about.eyebrow}
        title={about.title}
        paragraphs={about.paragraphs}
        imageUrl={ABOUT_IMAGE}
      />

      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="font-heading text-4xl text-brand-text mb-10 text-center">
          A Few of Our Services
        </h2>
        <RevealGroup className="grid md:grid-cols-2 gap-8">
          {serviceTeaser(ACTIVE_THEME, 2, 2).map((section) => (
            <ServiceCard key={section.category} category={section.category} items={section.items} />
          ))}
        </RevealGroup>
        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full font-body font-medium tracking-wide border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-brand-bg transition-colors"
          >
            See All Services
          </Link>
        </div>
      </section>

      <Testimonials icon={site.ratingIcon} reviews={TESTIMONIALS[ACTIVE_THEME]} />

      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h2 className="font-heading text-3xl text-brand-text mb-4">Ready to Book?</h2>
        <p className="font-body text-brand-muted mb-8">
          New patients welcome — most requests are confirmed within a day.
        </p>
        <Link
          to="/appointments"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full font-body font-medium tracking-wide bg-brand-primary text-brand-bg hover:bg-brand-secondary transition-colors"
        >
          Book an Appointment
        </Link>
      </section>
    </>
  )
}
