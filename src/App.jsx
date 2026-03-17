// ============================================================
// App.jsx — Root application wrapper
// Mounts Navbar, Home page, Footer, and initialises scroll reveal
// ============================================================
import Navbar  from './components/Navbar'
import Home    from './pages/Home'
import Footer  from './components/Footer'
import { useScrollReveal } from './hooks/useScrollReveal'

export default function App() {
  // Initialise the IntersectionObserver for scroll-reveal animations
  useScrollReveal()

  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  )
}
