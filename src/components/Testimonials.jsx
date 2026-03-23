// ============================================================
// Testimonials.jsx — 3 customer testimonials with avatars
// ============================================================
import './Testimonials.css'

/*
 * REPLACE IMAGES:
 * avatar src values should be replaced with actual customer photos.
 * Recommended: square headshots, minimum 200x200px.
 */
const TESTIMONIALS = [
  {
    id: 1,
    avatar: '/images/tineyi.jpg',
    name: 'Tineyi Madungwe',
    role: 'Entreprenuership Facilitator',
    company: 'ALCHE',
    rating: 5,
    text: "As a staff member, I really appreciate SmarVe. The machine is always ready, stocked, and easy to use. It saves us time and keeps students happy. We are very happy to have this machine here on campus and we thank these young entreprenuers for this amazing work",
  },
  {
    id: 2,
    avatar: '/images/ikuzwe.jpg',
    name: 'Kevin Ikuzwe',
    role: 'Student',
    company: 'ALCHE',
    rating: 5,
    text: "SmarVe machine is amazing! I can grab a snack or a cold drink anytime between lectures without wasting time waiting. It’s so convenient.",
  },
  {
    id: 3,
    avatar: '/images/sylvie.jpg',
    name: 'Syvie',
    role: 'Student',
    company: 'ALCHE',
    rating: 5,
    text: "I love how SmarVe makes campus life simple. I don’t have to carry cash or worry about the machine being empty — everything is quick and smooth.",
  },
]

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 1l1.8 3.6 4 .6-2.9 2.8.7 4L8 10.2l-3.6 1.8.7-4L2.2 5.2l4-.6L8 1z"/>
  </svg>
)

export default function Testimonials() {
  return (
    <section className="section testimonials" id="testimonials">
      {/* Background accent */}
      <div className="testimonials__bg" aria-hidden="true" />

      <div className="container">
        <div className="section__header reveal">
          <span className="section__eyebrow">Customer Stories</span>
          <h2 className="section__title">Trusted by Customers We Serve</h2>
          <p className="section__subtitle">
            Don't just take our word for it, here's what customers
            have to say.
          </p>
        </div>

        <div className="testimonials__grid">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.id}
              className={`testimonial-card reveal reveal-delay-${i + 1}`}
            >
              {/* Quote icon */}
              <div className="testimonial-card__quote-icon" aria-hidden="true">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path
                    d="M8 20c0-4.4 3.6-8 8-8V8C9.4 8 4 13.4 4 20v4h8v-4zm16 0c0-4.4-3.6-8-8-8v-4c6.6 0 12 5.4 12 12v4h-8v-4z"
                    fill="var(--green)"
                    opacity="0.15"
                  />
                  <path
                    d="M6 18c0-3.3 2.7-6 6-6V9C6.5 9 2 13.5 2 19v5h10v-6zm14 0c0-3.3 2.7-6 6-6V9c-5.5 0-10 4.5-10 10v5h10v-6z"
                    fill="var(--green)"
                    opacity="0.6"
                  />
                </svg>
              </div>

              {/* Stars */}
              <div className="testimonial-card__stars">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <span key={idx} className="testimonial-card__star">
                    <StarIcon />
                  </span>
                ))}
              </div>

              {/* Body text */}
              <p className="testimonial-card__text">"{t.text}"</p>

              {/* Author */}
              <div className="testimonial-card__author">
                {/*
                  REPLACE: Replace src with actual customer avatar photo.
                  Minimum size: 100x100px, square crop.
                */}
                <div className="testimonial-card__avatar-wrap">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="testimonial-card__avatar"
                    loading="lazy"
                  />
                </div>
                <div className="testimonial-card__author-info">
                  <span className="testimonial-card__name">{t.name}</span>
                  <span className="testimonial-card__role">
                    {t.role} · <strong>{t.company}</strong>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="testimonials__trust reveal">
          <div className="testimonials__trust-item">
            <span className="testimonials__trust-number">4.9/5</span>
            <span className="testimonials__trust-label">Average Rating</span>
          </div>
          <div className="testimonials__trust-divider" />
          <div className="testimonials__trust-item">
            <span className="testimonials__trust-number">200+</span>
            <span className="testimonials__trust-label">Happy Customer</span>
          </div>
          <div className="testimonials__trust-divider" />
          <div className="testimonials__trust-item">
            <span className="testimonials__trust-number">98%</span>
            <span className="testimonials__trust-label">Accuracy</span>
          </div>
        </div>
      </div>
    </section>
  )
}
