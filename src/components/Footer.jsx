// ============================================================
// Footer.jsx — Company info, nav links, socials, copyright
// ============================================================
import './Footer.css'

const FOOTER_LINKS = {
  Company: [
    { label: 'About Us',   href: '#about'    },
    { label: 'Services',   href: '#services' },
    { label: 'Products',   href: '#products' },
    { label: 'Gallery',    href: '#gallery'  },
    { label: 'Contact',    href: '#contact'  },
  ],
  Solutions: [
    { label: 'Smart Vending',      href: '#services' },
    { label: 'Automated Retail',   href: '#services' },
    { label: 'Analytics Platform', href: '#services' },
    { label: 'Enterprise Fleet',   href: '#products' },
    { label: 'Maintenance Plans',  href: '#services' },
  ],
  Support: [
    { label: 'Help Center',     href: '#' },
    { label: 'Documentation',   href: '#' },
    { label: 'API Reference',   href: '#' },
    { label: 'Status Page',     href: '#' },
    { label: 'Contact Support', href: '#contact' },
  ],
}

const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 18 18" fill="currentColor">
        <path d="M4.5 6H2v9h2.5V6zM3.25 4.75a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM16 9.6C16 7.6 14.8 6 12.9 6c-.9 0-1.7.4-2.2 1V6H8.5v9H11V10c0-.8.5-1.5 1.4-1.5.9 0 1.1.8 1.1 1.5v5H16V9.6z"/>
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 18 18" fill="currentColor">
        <path d="M14.5 2h2.1L11.8 7.6 17.4 16h-4.6l-3.4-4.4L5.2 16H3.1l5.2-6L2.6 2h4.7l3.1 4 3.1-4zm-.7 12.5h1.2L4.3 3.2H3L13.8 14.5z"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 18 18" fill="currentColor">
        <path d="M9 5.8a3.2 3.2 0 100 6.4A3.2 3.2 0 009 5.8zm0 5.3a2.1 2.1 0 110-4.2 2.1 2.1 0 010 4.2zm4.1-5.5a.75.75 0 100-1.5.75.75 0 000 1.5zM16 6.5C16 4 14 2 11.5 2h-5C4 2 2 4 2 6.5v5C2 14 4 16 6.5 16h5C14 16 16 14 16 11.5v-5zm-1.1 5c0 1.9-1.5 3.4-3.4 3.4h-5c-1.9 0-3.4-1.5-3.4-3.4v-5c0-1.9 1.5-3.4 3.4-3.4h5c1.9 0 3.4 1.5 3.4 3.4v5z"/>
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 18 18" fill="currentColor">
        <path d="M16.5 5.2s-.2-1.3-.8-1.8c-.7-.8-1.6-.8-2-.9C11.5 2.4 9 2.4 9 2.4s-2.5 0-4.7.1c-.4.1-1.3.1-2 .9-.6.5-.8 1.8-.8 1.8S1.4 6.7 1.4 8.2v1.4c0 1.5.1 3 .1 3s.2 1.3.8 1.8c.7.8 1.7.7 2.1.8C5.7 15.4 9 15.4 9 15.4s2.5 0 4.7-.2c.4-.1 1.3-.1 2-.9.6-.5.8-1.8.8-1.8s.1-1.5.1-3V8.2c0-1.5-.1-3-.1-3zM7.4 11.4V6.6l5.4 2.4-5.4 2.4z"/>
      </svg>
    ),
  },
]

export default function Footer() {
  const handleNavClick = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      {/* ── CTA Banner ─────────────────────────────────── */}
      <div className="footer__cta-banner">
        <div className="container footer__cta-inner">
          <div className="footer__cta-text">
            <h3 className="footer__cta-title">Ready to go smart?</h3>
            <p className="footer__cta-sub">
              Join 1,200+ operators already running on SmarVe.
            </p>
          </div>
          <div className="footer__cta-actions">
            <button
              className="btn btn--primary"
              onClick={() => handleNavClick('#contact')}
            >
              Request a Demo
            </button>
            <button
              className="btn btn--outline-white"
              onClick={() => handleNavClick('#products')}
            >
              View Products
            </button>
          </div>
        </div>
      </div>

      {/* ── Main Footer ────────────────────────────────── */}
      <div className="footer__main">
        <div className="container footer__grid">

          {/* Brand column */}
          <div className="footer__brand">
            {/* Logo */}
            <a href="#home" className="footer__logo" onClick={() => handleNavClick('#home')}>
              <span className="footer__logo-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <rect width="28" height="28" rx="8" fill="#22C55E"/>
                  <rect x="8" y="6" width="4" height="16" rx="2" fill="white"/>
                  <rect x="15" y="6" width="4" height="10" rx="2" fill="white" opacity="0.7"/>
                  <circle cx="20" cy="20" r="2.5" fill="white"/>
                </svg>
              </span>
              <span className="footer__logo-text">
                Smar<span style={{ color: 'var(--green)' }}>Ve</span>
              </span>
            </a>

            <p className="footer__brand-desc">
              SmarVe transforms traditional vending machines into connected,
              intelligent retail systems — making automated commerce smarter,
              faster, and more profitable for operators worldwide.
            </p>

            {/* Social icons */}
            <div className="footer__socials">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="footer__social-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([groupName, links]) => (
            <div key={groupName} className="footer__link-group">
              <h4 className="footer__link-heading">{groupName}</h4>
              <ul className="footer__links">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="footer__link"
                      onClick={(e) => {
                        if (link.href.startsWith('#')) {
                          e.preventDefault()
                          handleNavClick(link.href)
                        }
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>

      {/* ── Bottom Bar ─────────────────────────────────── */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copyright">
            © 2026 SmarVe Technologies Ltd. All rights reserved.
          </p>
          <div className="footer__legal-links">
            <a href="#" className="footer__legal-link">Privacy Policy</a>
            <a href="#" className="footer__legal-link">Terms of Service</a>
            <a href="#" className="footer__legal-link">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
