import About from '../components/About'
import Gallery from '../components/Gallery'
import { IMAGES } from '../lib/placeholderImages'
import { ACTIVE_THEME } from '../themes'
import { ABOUT_COPY } from '../data/about'

export default function AboutPage() {
  const { ABOUT_IMAGE, GALLERY_IMAGES } = IMAGES[ACTIVE_THEME]
  const about = ABOUT_COPY[ACTIVE_THEME]

  return (
    <>
      <About
        eyebrow="Since 2024"
        title={about.title}
        paragraphs={about.pageParagraphs}
        imageUrl={ABOUT_IMAGE}
      />
      <Gallery
        title="Our Space"
        images={GALLERY_IMAGES}
      />
    </>
  )
}
