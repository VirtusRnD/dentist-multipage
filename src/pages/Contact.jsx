import ContactForm from '../components/ContactForm'
import Reveal from '../components/Reveal'
import { SITE } from '../data/site'
import { ACTIVE_THEME } from '../themes'

export default function Contact() {
  const site = SITE[ACTIVE_THEME]

  return (
    <>
      <ContactForm
        title="Get in Touch"
        subtitle="Questions, insurance, or feedback — we'd love to hear from you."
        showReservationFields={false}
      />
      <Reveal>
        <section className="max-w-2xl mx-auto px-6 pb-24 text-center">
          <div className="bg-brand-surface rounded-2xl p-10 border border-brand-border grid md:grid-cols-3 gap-6">
            <div>
              <p className="font-heading text-lg text-brand-primary mb-1">Address</p>
              <p className="font-body text-brand-muted text-sm">{site.address}</p>
            </div>
            <div>
              <p className="font-heading text-lg text-brand-primary mb-1">Phone</p>
              <p className="font-body text-brand-muted text-sm">{site.phone}</p>
            </div>
            <div>
              <p className="font-heading text-lg text-brand-primary mb-1">Hours</p>
              <p className="font-body text-brand-muted text-sm">{site.hours}</p>
            </div>
          </div>
        </section>
      </Reveal>
    </>
  )
}
