/**
 * Real photography from Unsplash's free tier (images.unsplash.com, not the
 * paid plus.unsplash.com), sized via their URL params - no download needed.
 * Still stock photos of someone else's practice though, not Willowbrook's
 * actual space. Swap before launch - see README for sourcing links.
 *
 * Keyed by theme variant so the images switch along with the colors -
 * pick 'pediatric' as ACTIVE_THEME and you get bright, kid-friendly photos
 * automatically, not the classic clinical set.
 *
 * Note on the pediatric set specifically: rather than using stock photos
 * of real children (a legitimate use case for pediatric dental marketing,
 * but not something to default a template to), this set leans on colorful
 * dental products and warm professional shots to convey "kid-friendly"
 * instead. Swap in real photos of your own patients (with consent) when
 * this goes live.
 */
export const IMAGES = {
  classic: {
    HERO_IMAGE: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600&h=900&fit=crop&auto=format&q=80',
    ABOUT_IMAGE: 'https://images.unsplash.com/photo-1667133295315-820bb6481730?w=800&h=1000&fit=crop&auto=format&q=80',
    GALLERY_IMAGES: [
      { src: 'https://images.unsplash.com/photo-1677026010083-78ec7f1b84ed?w=900&h=900&fit=crop&auto=format&q=80' },
      { src: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&h=600&fit=crop&auto=format&q=80' },
      { src: 'https://images.unsplash.com/photo-1643660526741-094639fbe53a?w=600&h=600&fit=crop&auto=format&q=80' },
      { src: 'https://images.unsplash.com/photo-1593022356769-11f762e25ed9?w=600&h=600&fit=crop&auto=format&q=80' },
      { src: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=600&fit=crop&auto=format&q=80' },
    ],
  },
  pediatric: {
    HERO_IMAGE: 'https://images.unsplash.com/photo-1532120308961-b163b7ae0791?w=1600&h=900&fit=crop&auto=format&q=80',
    ABOUT_IMAGE: 'https://images.unsplash.com/photo-1712845251490-645783eaa0c4?w=800&h=1000&fit=crop&auto=format&q=80',
    GALLERY_IMAGES: [
      { src: 'https://images.unsplash.com/photo-1532119421444-cb013aaed2e7?w=900&h=900&fit=crop&auto=format&q=80' },
      { src: 'https://images.unsplash.com/photo-1520013573795-38516d2661e4?w=600&h=600&fit=crop&auto=format&q=80' },
      { src: 'https://images.unsplash.com/photo-1625834319124-345137437603?w=600&h=600&fit=crop&auto=format&q=80' },
      { src: 'https://images.unsplash.com/photo-1574269909489-99666f1fefdc?w=600&h=600&fit=crop&auto=format&q=80' },
      { src: 'https://images.unsplash.com/photo-1532120308961-b163b7ae0791?w=600&h=600&fit=crop&auto=format&q=80' },
    ],
  },
  cosmetic: {
    HERO_IMAGE: 'https://images.unsplash.com/photo-1654373535457-383a0a4d00f9?w=1600&h=900&fit=crop&auto=format&q=80',
    ABOUT_IMAGE: 'https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?w=800&h=1000&fit=crop&auto=format&q=80',
    GALLERY_IMAGES: [
      { src: 'https://images.unsplash.com/photo-1663182234283-28941e7612da?w=900&h=900&fit=crop&auto=format&q=80' },
      { src: 'https://images.unsplash.com/photo-1660732205495-f65510d8180e?w=600&h=600&fit=crop&auto=format&q=80' },
      { src: 'https://images.unsplash.com/photo-1617812191081-2a24e3f30e45?w=600&h=600&fit=crop&auto=format&q=80' },
      { src: 'https://images.unsplash.com/photo-1663182245833-7dd667277043?w=600&h=600&fit=crop&auto=format&q=80' },
      { src: 'https://images.unsplash.com/photo-1655807946138-811bb2340d34?w=600&h=600&fit=crop&auto=format&q=80' },
    ],
  },
}
