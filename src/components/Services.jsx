// ============================================================
// Services.jsx — 4 service cards with hover animations
// ============================================================
import './Services.css'

const SERVICES = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="2" width="20" height="24" rx="3" stroke="currentColor" strokeWidth="1.8"/>
        <rect x="8" y="7" width="12" height="3" rx="1.5" fill="currentColor" opacity="0.4"/>
        <rect x="8" y="13" width="8" height="3" rx="1.5" fill="currentColor" opacity="0.4"/>
        <circle cx="20" cy="21" r="3" fill="currentColor"/>
        <path d="M19 21l1 1 2-2" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Smart Vending Machines',
    description:
      'IoT-enabled machines with touchscreen interfaces, cashless payments, and real-time remote monitoring for operators of any scale.',
    color: '#22C55E',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4L24 9V19L14 24L4 19V9L14 4Z" stroke="currentColor" strokeWidth="1.8"/>
        <circle cx="14" cy="14" r="4" fill="currentColor" opacity="0.3"/>
        <circle cx="14" cy="14" r="2" fill="currentColor"/>
      </svg>
    ),
    title: 'Automated Retail Solutions',
    description:
      'End-to-end micro-market and unattended retail setups tailored for offices, gyms, hospitals, and transit hubs.',
    color: '#0EA5E9',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="14" width="5" height="11" rx="1" fill="currentColor" opacity="0.5"/>
        <rect x="11" y="9" width="5" height="16" rx="1" fill="currentColor" opacity="0.7"/>
        <rect x="19" y="4" width="5" height="21" rx="1" fill="currentColor"/>
        <path d="M5 10l6-4 6 5 6-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Inventory & Analytics',
    description:
      'Predictive restocking, sales heatmaps, revenue dashboards, and custom reports — all accessible from a single cloud platform.',
    color: '#8B5CF6',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M14 9v6l4 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M8 4l-4 2v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
        <path d="M20 4l4 2v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
    title: 'Maintenance & Support',
    description:
      '24/7 remote diagnostics, certified field technicians, and guaranteed SLA response times to keep your fleet running perfectly.',
    color: '#F59E0B',
  },
]

export default function Services() {
  return (
    <section className="section section--alt services" id="services">
      <div className="container">
        <div className="section__header reveal">
          <span className="section__eyebrow">What We Offer</span>
          <h2 className="section__title">Services Built for Scale</h2>
          <p className="section__subtitle">
            From single-machine operators to enterprise fleets, our platform
            adapts to every use case with precision and reliability.
          </p>
        </div>

        <div className="services__grid">
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              className={`service-card reveal reveal-delay-${i + 1}`}
              style={{ '--accent': service.color }}
            >
              <div className="service-card__icon-wrap">
                {service.icon}
              </div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__text">{service.description}</p>
              <div className="service-card__link">
                Learn more
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
