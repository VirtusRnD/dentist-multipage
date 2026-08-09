import ContactForm from '../components/ContactForm'

export default function Appointments() {
  return (
    <ContactForm
      title="Book an Appointment"
      subtitle="We'll confirm by email within 24 hours. For urgent concerns, please call us directly."
      showReservationFields
      dateFieldOnly
      submitLabel="Request Appointment"
      messagePlaceholder="Anything we should know? (concerns, insurance questions, etc.)"
    />
  )
}
