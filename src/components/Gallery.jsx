// ============================================================
// Gallery.jsx — Media grid with hover effects & video placeholders
// ============================================================
import { useState } from 'react'
import './Gallery.css'

/*
 * MEDIA ITEMS — replace src values with actual images/video thumbnails.
 * type: 'image' | 'video'
 * For video items, src is the thumbnail image; videoSrc would be the actual video URL.
 */
const MEDIA = [
  {
    id: 1,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&q=80',
    alt: 'SmarVe machine in modern office lobby',
    span: 'wide',
  },
  {
    id: 2,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1569701813229-33284b643e3c?w=400&q=80',
    alt: 'Smart payment terminal close-up',
    span: 'normal',
  },
  {
    id: 3,
    type: 'video',
    src: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&q=80',
    alt: 'SmarVe product demo reel',
    span: 'normal',
  },
  {
    id: 4,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=80',
    alt: 'Warehouse inventory management',
    span: 'normal',
  },
  {
    id: 5,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&q=80',
    alt: 'SmarVe dashboard on tablet',
    span: 'wide',
  },
  {
    id: 6,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1581093196277-9f6e1ec2e2a7?w=400&q=80',
    alt: 'Technician installing SmarVe unit',
    span: 'normal',
  },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  const openLightbox = (item) => setLightbox(item)
  const closeLightbox = () => setLightbox(null)

  return (
    <section className="section section--alt gallery" id="gallery">
      <div className="container">
        <div className="section__header reveal">
          <span className="section__eyebrow">Media</span>
          <h2 className="section__title">See SmarVe in Action</h2>
          <p className="section__subtitle">
            A glimpse of our deployments, technology, and the teams making it happen.
          </p>
        </div>

        {/* ── Gallery Grid ─────────────────────────────── */}
        <div className="gallery__grid reveal">
          {MEDIA.map((item) => (
            <div
              key={item.id}
              className={`gallery__item gallery__item--${item.span}`}
              onClick={() => openLightbox(item)}
              role="button"
              tabIndex={0}
              aria-label={`View ${item.alt}`}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox(item)}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
              <div className="gallery__overlay">
                {item.type === 'video' ? (
                  <div className="gallery__play-btn">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M7 5l9 5-9 5V5Z" fill="white"/>
                    </svg>
                  </div>
                ) : (
                  <div className="gallery__zoom-btn">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M3 8V3h5M12 3h5v5M17 12v5h-5M8 17H3v-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
                <span className="gallery__caption">{item.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Lightbox ─────────────────────────────────────── */}
      {lightbox && (
        <div
          className="gallery__lightbox"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button className="gallery__lightbox-close" onClick={closeLightbox} aria-label="Close lightbox">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 4l12 12M16 4L4 16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          <div className="gallery__lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.alt} />
            <p className="gallery__lightbox-caption">{lightbox.alt}</p>
          </div>
        </div>
      )}
    </section>
  )
}
