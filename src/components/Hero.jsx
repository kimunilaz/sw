// ============================================================
// Hero.jsx — Landing hero with headline, CTA, vending image
// ============================================================
import './Hero.css'

export default function Hero() {
  const handleScroll = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="home">
      {/* Background decoration */}
      <div className="hero__bg-blob hero__bg-blob--1" aria-hidden="true" />
      <div className="hero__bg-blob hero__bg-blob--2" aria-hidden="true" />
      <div className="hero__grid-pattern" aria-hidden="true" />

      <div className="container hero__inner">

        {/* ── Left: Text Content ─────────────────────── */}
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            The Future of Automated Retail
          </div>

          <h1 className="hero__headline">
            Smart
            <span className="hero__headline-accent">Vending</span>
          </h1>

          <p className="hero__subheadline">
            SmarVe is transforming vending machines into intelligent retail
            systems, powered by real-time data and AI
          </p>

          <div className="hero__cta-group">
            <button
              className="btn btn--primary hero__btn-primary"
              onClick={() => handleScroll('#contact')}
            >
              Get Started
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              className="btn btn--outline hero__btn-outline"
              onClick={() => handleScroll('#about')}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M7 9l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Learn More
            </button>
          </div>

          {/* Stats row */}
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">1st</span>
              <span className="hero__stat-label">Machine Deployed</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-number">24hr</span>
              <span className="hero__stat-label">Operation</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-number">200+</span>
              <span className="hero__stat-label">Customers</span>
            </div>
          </div>
        </div>

        {/* ── Right: Hero Visual ─────────────────────── */}
        <div className="hero__visual">
          {/* Floating accent cards */}
          <div className="hero__float-card hero__float-card--1">
            <div className="hero__float-icon">📊</div>
            <div>
              <div className="hero__float-title">Live Analytics</div>
              <div className="hero__float-sub">Real-time inventory tracking</div>
            </div>
          </div>

          <div className="hero__float-card hero__float-card--2">
            <div className="hero__float-icon">⚡</div>
            <div>
              <div className="hero__float-title">Smart Alerts</div>
              <div className="hero__float-sub">Instant restocking notifications</div>
            </div>
          </div>

          {/* Main machine image */}
          <div className="hero__image-frame">
            {/*
              REPLACE THIS IMAGE:
              Swap the src with a real vending machine photo.
              Recommended: a sleek, well-lit product shot on a light background.
              Aspect ratio: ~3:4 (portrait).
            */}
            <img
              src="/images/briansticking.jpeg"
              alt="SmarVe intelligent vending machine"
              className="hero__image"
              loading="eager"
            />
            <div className="hero__image-glow" />
          </div>

          {/* Decorative ring */}
          <div className="hero__ring hero__ring--outer" />
          <div className="hero__ring hero__ring--inner" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-hint" onClick={() => handleScroll('#about')}>
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel" />
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  )
}
