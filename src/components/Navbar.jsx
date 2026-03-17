// ============================================================
// Navbar.jsx — Sticky navigation with hamburger menu
// ============================================================
import { useState, useEffect } from 'react'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Home',     href: '#home'     },
  { label: 'About',    href: '#about'    },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'Contact',  href: '#contact'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#home')

  // ── Scroll shadow ───────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // ── Close menu on resize ────────────────────────────────
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // ── Lock body scroll when menu open ────────────────────
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = (href) => {
    setActiveLink(href)
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">

        {/* ── Logo ─────────────────────────────────────── */}
        <a href="#home" className="navbar__logo" onClick={() => handleNavClick('#home')}>
          <span className="navbar__logo-icon">
            {/* SVG mark */}
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect width="28" height="28" rx="8" fill="#22C55E"/>
              <rect x="8" y="6" width="4" height="16" rx="2" fill="white"/>
              <rect x="15" y="6" width="4" height="10" rx="2" fill="white" opacity="0.7"/>
              <circle cx="17" cy="20" r="2.5" fill="white"/>
            </svg>
          </span>
          <span className="navbar__logo-text">
            Smar<span className="navbar__logo-accent">Ve</span>
          </span>
        </a>

        {/* ── Desktop Links ────────────────────────────── */}
        <nav className="navbar__links" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`navbar__link${activeLink === link.href ? ' active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* ── CTA Button ───────────────────────────────── */}
        <a
          href="#contact"
          className="btn btn--primary navbar__cta"
          onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
        >
          Get Started
        </a>

        {/* ── Mobile Hamburger ─────────────────────────── */}
        <button
          className={`navbar__hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* ── Mobile Menu Overlay ──────────────────────────── */}
      <div className={`navbar__mobile${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        <nav>
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__mobile-link"
              style={{ transitionDelay: `${i * 60}ms` }}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn--primary"
            style={{ marginTop: '1rem', transitionDelay: '360ms' }}
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
          >
            Get Started
          </a>
        </nav>
      </div>
    </header>
  )
}
