/**
 * Business info lives here so it's not duplicated across Navbar, Footer,
 * and the Contact page. Keyed by theme variant so the name changes along
 * with the colors/photos. Address/phone/hours/social stay the same across
 * variants (same physical practice); only name and rating icon vary here.
 */
const SHARED = {
  address: '210 Maple Ave, Your City',
  phone: '(555) 234-5678',
  email: 'hello@example.com', // replace before launch: the form falls back to this address
  hours: 'Mon–Fri: 8am – 5pm, Sat: 9am – 1pm',
  ratingIcon: 'tooth',
  social: [
    { label: 'Instagram', href: '#' },
    { label: 'Facebook', href: '#' },
  ],
}

export const SITE = {
  classic: { ...SHARED, name: 'Willowbrook Dental' },
  pediatric: { ...SHARED, name: 'Willowbrook Dental — Kids' },
  cosmetic: { ...SHARED, name: 'Willowbrook Dental — Smile Studio' },
}
