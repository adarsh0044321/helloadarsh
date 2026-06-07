import { useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'
import InteractiveBackground from './components/InteractiveBackground'

function App() {
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
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-accent origin-left"
        style={{ scaleX, zIndex: 100 }}
      />

      {/* Global cursor radial glow effect */}
      <div 
        className="fixed inset-0 pointer-events-none -z-20 hidden md:block"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(232, 102, 60, 0.045), transparent 80%)`
        }}
      />

      <Navbar />
      <main className="bg-bg text-text-primary font-sans relative">
        <InteractiveBackground />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  )
}

export default App

