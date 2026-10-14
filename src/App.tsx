import { motion, useScroll } from 'framer-motion'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { CosmicBackground } from './components/CosmicBackground'
import { CursorGlow } from './components/CursorGlow'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

export default function App() {
  const { scrollYProgress } = useScroll()

  return (
    <>
      <CosmicBackground />
      <CursorGlow />
      <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} aria-hidden="true" />
      <Navbar />
      <main id="main-content">
        <Hero />
        <div className="content-surface">
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  )
}
