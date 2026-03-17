// ============================================================
// Home.jsx — Assembles all sections in order
// ============================================================
import Hero        from '../components/Hero'
import About       from '../components/About'
import Services    from '../components/Services'
import Products    from '../components/Products'
import Gallery     from '../components/Gallery'
import Testimonials from '../components/Testimonials'
import Contact     from '../components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Products />
      <Gallery />
      <Testimonials />
      <Contact />
    </main>
  )
}
