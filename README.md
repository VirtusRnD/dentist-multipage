# dentist-multipage — "Willowbrook Dental"

Routed version of the same site: Home, Services, About, Appointments, Contact as separate pages under one shared layout (Navbar + Footer + smooth scroll).

## Run it

```bash
npm install
npm run dev
```

## Before launch

- Real practice name/address/phone/hours (in `Layout.jsx` and `Contact.jsx`)
- Contact email in `src/data/site.js` (the form falls back to it)
- `VITE_FORM_ENDPOINT` in `.env` (copy `.env.example`): any URL that accepts a JSON POST, e.g. Formspree, Netlify Forms or your own API. Without it the form opens the visitor's mail app.
- Services/pricing in `Services.jsx`
- Testimonial quotes in `Home.jsx`
- Real photography
- A real booking backend

## Tests

```bash
npm test
```

Deep links of the routed version work on Netlify/Cloudflare (`public/_redirects`), Vercel (`vercel.json`) and GitHub Pages (`404.html` copied at build).
