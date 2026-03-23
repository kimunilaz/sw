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
                src="/images/back.jpg"
                alt="SmarVe smart vending installation"
                className="placeholder-img"
                loading="lazy"
              />
            </div>
            <div className="about__img-accent">
              <img
                src="/images/happycustomers2.jpeg"
                alt="SmarVe technology detail"
                className="placeholder-img"
                loading="lazy"
              />
            </div>
            {/* Decorative green chip */}
            <div className="about__chip">
              <span className="about__chip-icon">🏆</span>
              <div>
                <div className="about__chip-title">Digitalisation</div>
                <div className="about__chip-sub">Smart Retail in Mauritius</div>
              </div>
            </div>
          </div>

          {/* ── Right: Text ────────────────────────────── */}
          <div className="about__content">
            <div className="reveal">
              <span className="section__eyebrow">Who We Are</span>
              <h2 className="section__title" style={{ textAlign: 'centre', marginBottom: '1rem' }}>
                Automated Retail
              </h2>
              <p className="about__intro">
                Founded by a small, driven team, SmarVe has grown from a simple idea into a functional
                smart vending solution deployed at the African Leadership College of Higher Education in Mauritius,
                We combine Android-based hardware with smart, cloud-enabled software and reverse vending,
                enabling bottle collection, validation, and recycling rewards, while giving operators real-time visibility and control to make everyday retail more efficient, sustainable, and accessible.
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
