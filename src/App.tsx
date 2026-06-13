import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import EngineeringLabs from './components/EngineeringLabs'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'
import InteractiveBackground from './components/InteractiveBackground'
import PageLoader from './components/PageLoader'

function App() {
  const [loading, setLoading] = useState(true)
  const [showScrollTop, setShowScrollTop] = useState(false)

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`)
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`)
    }
    const handleScrollButton = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScrollButton)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScrollButton)
    }
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <PageLoader key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Scroll progress bar */}
            <motion.div 
              className="fixed top-0 left-0 right-0 h-[2px] bg-accent origin-left"
              style={{ scaleX, zIndex: 100 }}
            />

            {/* Global cursor radial glow effect */}
            <div 
              className="fixed inset-0 pointer-events-none -z-20 hidden md:block"
              style={{
                background: `radial-gradient(600px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(223, 177, 91, 0.045), transparent 80%)`
              }}
            />

            {/* Scroll to top button */}
            <AnimatePresence>
              {showScrollTop && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 15 }}
                  whileHover={{ y: -3, borderColor: "rgba(223, 177, 91, 0.4)" }}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="fixed bottom-6 right-6 z-[90] p-3 rounded-full border border-border bg-surface/90 text-accent cursor-pointer shadow-lg hover:text-accent/80 transition-colors acrylic-glass neumorphic-out"
                >
                  <ArrowUp className="w-4 h-4" />
                </motion.button>
              )}
            </AnimatePresence>

            <Navbar />
            <main className="bg-bg text-text-primary font-sans relative">
              <InteractiveBackground />
              <HeroSection />
              <AboutSection />
              <SkillsSection />
              <EngineeringLabs />
              <ProjectsSection />
              <ContactSection />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default App
