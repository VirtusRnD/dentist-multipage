import { Link, Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import SmoothScroll from '../lib/SmoothScroll'
import ScrollProgress from '../components/ScrollProgress'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { SITE } from '../data/site'
import { ACTIVE_THEME } from '../themes'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Appointments', href: '/appointments' },
  { label: 'Contact', href: '/contact' },
]

export default function Layout() {
  const location = useLocation()
  const site = SITE[ACTIVE_THEME]

  useEffect(() => {
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true })
    else window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <SmoothScroll>
      <div className="font-body">
        <ScrollProgress />
        <Navbar
          logo={site.name}
          links={NAV_LINKS}
          ctaLabel="Book Appointment"
          renderLink={(link, props) => (
            <Link to={link.href} {...props}>
              {link.label}
            </Link>
          )}
        />
        <Outlet />
        <Footer
          logo={site.name}
          address={site.address}
          phone={site.phone}
          hours={site.hours}
          social={site.social}
        />
      </div>
    </SmoothScroll>
  )
}
