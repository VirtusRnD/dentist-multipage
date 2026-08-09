import ServiceCard from '../components/ServiceCard'
import { RevealGroup } from '../components/Reveal'
import { SERVICES } from '../data/services'
import { ACTIVE_THEME } from '../themes'

export default function Services() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <div className="text-center mb-14">
        <p className="font-body uppercase tracking-[0.2em] text-brand-accent text-sm mb-4">
          Transparent Pricing
        </p>
        <h1 className="font-heading text-5xl text-brand-text">Our Services</h1>
      </div>
      <RevealGroup className="grid md:grid-cols-2 gap-8" stagger={0.1}>
        {SERVICES[ACTIVE_THEME].map((section) => (
          <ServiceCard key={section.category} category={section.category} items={section.items} />
        ))}
      </RevealGroup>
    </section>
  )
}
