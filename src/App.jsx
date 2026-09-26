import Hero from './components/Hero.jsx'
import Mosaic from './components/Mosaic.jsx'
import Capabilities from './components/Capabilities.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import BackToTop from './components/BackToTop.jsx'

function App() {
  return (
    <main className="min-h-screen bg-ink-navy font-body text-warm-white">
      <Hero />
      <Mosaic />
      <Capabilities />
      <Skills />
      <Contact />
      <BackToTop />
    </main>
  )
}

export default App
