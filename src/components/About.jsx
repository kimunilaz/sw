// ============================================================
// About.jsx — Mission, Vision, Innovation section
// ============================================================
import './About.css'

const PILLARS = [
  {
    icon: '🎯',
    title: 'Our Mission',
    text: 'To empower businesses with intelligent vending infrastructure that reduces waste, increases sales, and delivers seamless consumer experiences.',
  },
  {
    icon: '🔭',
    title: 'Our Vision',
    text: 'A world where every touchpoint between product and consumer is smart, connected, and effortlessly efficient — powered by SmarVe technology.',
  },
  {
    icon: '🚀',
    title: 'Innovation',
    text: 'We leverage IoT sensors, machine learning, and real-time analytics to reinvent automated retail from the ground up.',
  },
]

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about__inner">

          {/* ── Left: Image stack ──────────────────────── */}
          <div className="about__visuals reveal">
            {/*
              REPLACE IMAGES:
              about-main.jpg  → team or office photo
              about-accent.jpg → product close-up or tech detail
            */}
            <div className="about__img-main">
              <img
                src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80"
                alt="SmarVe smart vending installation"
                className="placeholder-img"
                loading="lazy"
              />
            </div>
            <div className="about__img-accent">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&q=80"
                alt="SmarVe technology detail"
                className="placeholder-img"
                loading="lazy"
              />
            </div>
            {/* Decorative green chip */}
            <div className="about__chip">
              <span className="about__chip-icon">🏆</span>
              <div>
                <div className="about__chip-title">Award Winning</div>
                <div className="about__chip-sub">Best Smart Retail Tech 2025</div>
              </div>
            </div>
          </div>

          {/* ── Right: Text ────────────────────────────── */}
          <div className="about__content">
            <div className="reveal">
              <span className="section__eyebrow">Who We Are</span>
              <h2 className="section__title" style={{ textAlign: 'left', marginBottom: '1rem' }}>
                Redefining the Future<br />of Automated Retail
              </h2>
              <p className="about__intro">
                Founded in 2020, SmarVe has grown from a two-person startup into
                the industry's most trusted smart vending platform. We combine
                cutting-edge hardware with cloud-based software to give operators
                complete control of their retail fleet — anywhere, anytime.
              </p>
            </div>

            {/* Pillars */}
            <div className="about__pillars">
              {PILLARS.map((p, i) => (
                <div
                  key={p.title}
                  className={`about__pillar reveal reveal-delay-${i + 1}`}
                >
                  <div className="about__pillar-icon">{p.icon}</div>
                  <div>
                    <h3 className="about__pillar-title">{p.title}</h3>
                    <p className="about__pillar-text">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
