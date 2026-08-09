/**
 * Full services list lives here so the Services page and any teaser on
 * Home read from the same data instead of hand-copied items. Keyed by
 * theme variant - pediatric and cosmetic get their own service lists, not
 * the classic one with a different color scheme painted on top.
 */
export const SERVICES = {
  classic: [
    {
      category: 'Preventive Care',
      items: [
        { name: 'Routine Cleaning & Exam', description: 'Includes full checkup', price: '$120' },
        { name: 'Digital X-Rays', description: 'Low-radiation digital imaging', price: '$60' },
        { name: 'Fluoride Treatment', description: 'Cavity prevention', price: '$35' },
      ],
    },
    {
      category: 'Restorative',
      items: [
        { name: 'Composite Filling', description: 'Tooth-colored, per tooth', price: '$180' },
        { name: 'Root Canal Therapy', description: 'Includes follow-up visit', price: '$900' },
        { name: 'Crown Placement', description: 'Custom-fitted', price: '$1,100' },
      ],
    },
    {
      category: 'Emergency Care',
      items: [
        { name: 'Same-Day Emergency Visit', description: 'Subject to availability', price: '$150' },
        { name: 'Tooth Extraction', description: 'Simple extraction', price: '$200' },
      ],
    },
    {
      category: 'Oral Surgery',
      items: [
        { name: 'Wisdom Tooth Removal', description: 'Per tooth', price: '$350' },
        { name: 'Dental Implant', description: 'Includes crown', price: '$2,800' },
      ],
    },
  ],
  pediatric: [
    {
      category: 'Checkups',
      items: [
        { name: 'Kids Cleaning & Exam', description: 'Ages 0-17', price: '$95' },
        { name: 'Fluoride Treatment', description: 'Cavity prevention', price: '$30' },
        { name: 'Dental Sealants', description: 'Per tooth', price: '$40' },
      ],
    },
    {
      category: 'Preventive',
      items: [
        { name: 'Space Maintainers', description: 'For early tooth loss', price: '$275' },
        { name: 'Custom Mouthguards', description: 'For sports', price: '$60' },
      ],
    },
    {
      category: 'Restorative',
      items: [
        { name: 'Tooth-Colored Filling', description: 'Per tooth', price: '$150' },
        { name: 'Pulpotomy', description: 'Baby tooth root canal', price: '$300' },
      ],
    },
    {
      category: 'Special Care',
      items: [
        { name: 'Nitrous Oxide Sedation', description: 'For anxious visits', price: '$50' },
        { name: 'Emergency Visit', description: 'Subject to availability', price: '$120' },
      ],
    },
  ],
  cosmetic: [
    {
      category: 'Whitening',
      items: [
        { name: 'In-Office Whitening', description: 'One visit, immediate results', price: '$450' },
        { name: 'Take-Home Whitening Kit', description: 'Custom trays included', price: '$180' },
      ],
    },
    {
      category: 'Veneers & Bonding',
      items: [
        { name: 'Porcelain Veneer', description: 'Per tooth', price: '$1,200' },
        { name: 'Cosmetic Bonding', description: 'Per tooth', price: '$350' },
      ],
    },
    {
      category: 'Orthodontics',
      items: [
        { name: 'Clear Aligner Treatment', description: 'Full course', price: '$4,500' },
        { name: 'Retainer', description: 'Custom-fitted', price: '$250' },
      ],
    },
    {
      category: 'Smile Design',
      items: [
        { name: 'Smile Makeover Consultation', description: 'Includes treatment plan', price: '$150' },
        { name: 'Digital Smile Preview', description: 'See your result first', price: '$100' },
      ],
    },
  ],
}

/**
 * Subset of the services for a Home page teaser. itemsPerCategory
 * optionally caps items per category if you just want a taste, not the
 * whole thing.
 */
export function serviceTeaser(themeName, categoryCount = 2, itemsPerCategory) {
  const categories = SERVICES[themeName].slice(0, categoryCount)
  if (!itemsPerCategory) return categories
  return categories.map((c) => ({ ...c, items: c.items.slice(0, itemsPerCategory) }))
}

/**
 * Pick specific categories by name instead of just the first N.
 */
export function servicesByCategories(themeName, categoryNames, itemsPerCategory) {
  const categories = categoryNames
    .map((name) => SERVICES[themeName].find((c) => c.category === name))
    .filter(Boolean)
  if (!itemsPerCategory) return categories
  return categories.map((c) => ({ ...c, items: c.items.slice(0, itemsPerCategory) }))
}
