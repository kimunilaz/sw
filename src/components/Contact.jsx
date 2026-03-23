// ============================================================
// Contact.jsx — Contact form, address, map placeholder, socials
// ============================================================
import { useState } from 'react'
import './Contact.css'

const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
        <path d="M4.5 6H2v9h2.5V6zM3.25 4.75a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM16 9.6C16 7.6 14.8 6 12.9 6c-.9 0-1.7.4-2.2 1V6H8.5v9H11V10c0-.8.5-1.5 1.4-1.5.9 0 1.1.8 1.1 1.5v5H16V9.6z"/>
      </svg>
    ),
  },
  {
    name: 'Twitter / X',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
        <path d="M14.5 2h2.1L11.8 7.6 17.4 16h-4.6l-3.4-4.4L5.2 16H3.1l5.2-6L2.6 2h4.7l3.1 4 3.1-4zm-.7 12.5h1.2L4.3 3.2H3L13.8 14.5z"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
        <path d="M9 5.8a3.2 3.2 0 100 6.4A3.2 3.2 0 009 5.8zm0 5.3a2.1 2.1 0 110-4.2 2.1 2.1 0 010 4.2zm4.1-5.5a.75.75 0 100-1.5.75.75 0 000 1.5zM16 6.5C16 4 14 2 11.5 2h-5C4 2 2 4 2 6.5v5C2 14 4 16 6.5 16h5C14 16 16 14 16 11.5v-5zm-1.1 5c0 1.9-1.5 3.4-3.4 3.4h-5c-1.9 0-3.4-1.5-3.4-3.4v-5c0-1.9 1.5-3.4 3.4-3.4h5c1.9 0 3.4 1.5 3.4 3.4v5z"/>
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
        <path d="M16.5 5.2s-.2-1.3-.8-1.8c-.7-.8-1.6-.8-2-.9C11.5 2.4 9 2.4 9 2.4s-2.5 0-4.7.1c-.4.1-1.3.1-2 .9-.6.5-.8 1.8-.8 1.8S1.4 6.7 1.4 8.2v1.4c0 1.5.1 3 .1 3s.2 1.3.8 1.8c.7.8 1.7.7 2.1.8C5.7 15.4 9 15.4 9 15.4s2.5 0 4.7-.2c.4-.1 1.3-.1 2-.9.6-.5.8-1.8.8-1.8s.1-1.5.1-3V8.2c0-1.5-.1-3-.1-3zM7.4 11.4V6.6l5.4 2.4-5.4 2.4z"/>
      </svg>
    ),
  },
]

const INFO_ITEMS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2C7.2 2 5 4.2 5 7c0 4.5 5 11 5 11s5-6.5 5-11c0-2.8-2.2-5-5-5zm0 7a2 2 0 110-4 2 2 0 010 4z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    label: 'Address',
    /* REPLACE: Update with real office address */
    value: 'PowderMil Rd, Pamplemousses 21001, Mauritius',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 4h3l1.5 3.5-1.8 1.1a11 11 0 004.7 4.7l1.1-1.8L15 13v3c-6.6 0-12-5.4-12-9z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
    label: 'Phone',
    /* REPLACE: Update with real phone number */
    value: '+230 5519 8537',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="5" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M2 7l8 5 8-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    label: 'Email',
    /* REPLACE: Update with real email */
    value: 'k.zhakata@smarve-mu.com',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    // Simulate form submission — replace with actual API call
    setTimeout(() => setStatus('success'), 1500)
  }

  return (
    <section className="section section--alt contact" id="contact">
      <div className="container">
        <div className="section__header reveal">
          <span className="section__eyebrow">Get In Touch</span>
          <h2 className="section__title">Let's Start a Conversation</h2>
          <p className="section__subtitle">
            Ready to transform your busy locations? Our team is here to help
            you find the perfect SmarVe solution.
          </p>
        </div>

        <div className="contact__inner">

          {/* ── Left: Info + Map ───────────────────────── */}
          <div className="contact__info reveal">
            {/* Info cards */}
            <div className="contact__info-cards">
              {INFO_ITEMS.map((item) => (
                <div key={item.label} className="contact__info-card">
                  <div className="contact__info-icon">{item.icon}</div>
                  <div>
                    <div className="contact__info-label">{item.label}</div>
                    <div className="contact__info-value">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/*
              MAP PLACEHOLDER:
              Replace this div with an actual Google Maps embed or
              a mapping library component (react-leaflet, mapbox-gl, etc.)
              Recommended embed: Google Maps iframe with your office location.
            */}
            <div className="contact__map" aria-label="Office location map">
              <div className="contact__map-placeholder">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="18" stroke="var(--green)" strokeWidth="2"/>
                  <circle cx="20" cy="20" r="6" fill="var(--green)" opacity="0.3"/>
                  <circle cx="20" cy="20" r="3" fill="var(--green)"/>
                  <line x1="20" y1="2" x2="20" y2="10" stroke="var(--green)" strokeWidth="1.5"/>
                  <line x1="20" y1="30" x2="20" y2="38" stroke="var(--green)" strokeWidth="1.5"/>
                  <line x1="2" y1="20" x2="10" y2="20" stroke="var(--green)" strokeWidth="1.5"/>
                  <line x1="30" y1="20" x2="38" y2="20" stroke="var(--green)" strokeWidth="1.5"/>
                </svg>
                <p>Map</p>
                <span>Google</span>
              </div>
            </div>

            {/* Social links */}
            <div className="contact__socials">
              <p className="contact__socials-label">Follow us</p>
              <div className="contact__social-icons">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    aria-label={s.name}
                    className="contact__social-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: Form ────────────────────────────── */}
          <div className="contact__form-wrap reveal reveal-delay-2">
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <h3 className="contact__form-title">Send Us a Message</h3>

              <div className="contact__form-row">
                <div className="contact__field">
                  <label htmlFor="name" className="contact__label">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="contact__input"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="email" className="contact__label">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="contact__input"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact__field">
                <label htmlFor="subject" className="contact__label">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className="contact__input"
                  placeholder="How can we help?"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact__field">
                <label htmlFor="message" className="contact__label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="contact__textarea"
                  rows={5}
                  placeholder="Tell us about your project or inquiry..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className={`btn btn--primary contact__submit${status === 'sending' ? ' loading' : ''}`}
                disabled={status === 'sending' || status === 'success'}
              >
                {status === 'sending' && (
                  <svg className="contact__spinner" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="6" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
                    <path d="M8 2a6 6 0 016 6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                )}
                {status === 'success' ? '✓ Message Sent!' : status === 'sending' ? 'Sending…' : 'Send Message'}
                {!status && (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 8h12M10 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>

              {status === 'success' && (
                <p className="contact__success-msg">
                  Thanks! We'll get back to you within 24 hours.
                </p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
