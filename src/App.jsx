import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { applyTheme, ACTIVE_THEME } from './themes'
import Layout from './layout/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import AboutPage from './pages/About'
import Appointments from './pages/Appointments'
import Contact from './pages/Contact'

// Multi-page counterpart to dentist-onepage - same theme, same
// components, same motion, just routed instead of scroll-anchored.
// Layout.jsx carries Navbar/Footer/SmoothScroll across every route.
export default function App() {
  useEffect(() => {
    applyTheme(ACTIVE_THEME)
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
