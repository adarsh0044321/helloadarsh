import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Network, Cpu, Shield, ChevronDown, ChevronUp, PlayCircle } from 'lucide-react';

interface Subsystem {
  name: string;
  detail: string;
}

interface Project {
  name: string;
  description: string;
  tech: string[];
  github: string;
  image: string;
  icon: React.ReactNode;
  specs: Subsystem[];
}

const projects: Project[] = [
  {
    name: 'Beacon-Pulse',
    description:
      'A low-latency, hardware-accelerated remote desktop and LAN screen sharing system. Designed for fluid high-framerate streaming over local networks with layout-independent key scan-code injection.',
    tech: ['Rust', 'Tokio', 'Media Foundation', 'Win32 API', 'UDP Streaming', 'LAN'],
    github: 'https://github.com/adarsh0044321/beacon-pulse',
    image: '/helloadarsh/beacon_pulse_diagram.png',
    icon: <Network className="w-5 h-5 text-accent" />,
    specs: [
      { name: 'Capture Engine', detail: 'Zero-copy desktop frame retrieval via Windows Graphics Capture (WGC).' },
      { name: 'MF H.264 Encoder', detail: 'Direct-on-GPU compression using NVENC/AMF/QSV hardware pipelines.' },
      { name: 'watchdog service', detail: 'Registry-backed persistence service with exponential backoff auto-recovery.' },
      { name: 'input injection', detail: 'Tag-isolated loopback prevention and auto-release guards for stuck keys.' }
    ]
  },
  {
    name: 'FocusFlow',
    description:
      'An ultra-stealth hybrid offline-online educational assistance assistant. Excludes its HUD rendering context from desktop screenshots and video recording tools using Windows layout affinity calls.',
    tech: ['Python', 'Tauri', 'Next.js', 'llama.cpp', 'OpenCV', 'Tesseract'],
    github: 'https://github.com/adarsh0044321',
    image: '/helloadarsh/focus_flow_mockup.png',
    icon: <Shield className="w-5 h-5 text-accent" />,
    specs: [
      { name: 'stealth display', detail: 'ctypes affinity call exclusions (WDA_EXCLUDEFROMCAPTURE) for zero screen footprint.' },
      { name: 'ocr pipeline', detail: 'Grayscale thresholding, sharpening filters, and structural spacing text cleaners.' },
      { name: 'hybrid router', detail: 'Threaded local llama.cpp GGUF solver fallbacks to rotated OpenAI API endpoints.' },
      { name: 'manual query drawer', detail: 'Glassmorphic draggable HUD overlays with mouse-reactive particles canvas.' }
    ]
  },
  {
    name: 'MarkFlow',
    description:
      'An automated exam paper evaluation and grading Android application. Employs computer vision red ink filter thresholds to automatically capture marks, verify totals, and compute confidence ratings.',
    tech: ['Kotlin', 'Android', 'OpenCV', 'TensorFlow Lite', 'Jetpack Compose', 'DI'],
    github: 'https://github.com/adarsh0044321',
    image: '/helloadarsh/mark_flow_visual.png',
    icon: <Cpu className="w-5 h-5 text-accent" />,
    specs: [
      { name: 'red-ink analyzer', detail: 'Custom HSV thresholding arrays filtering grading lines from black/blue student answers.' },
      { name: 'contour bounding', detail: 'Contours outline tracking detecting circle bounds and answer region separations.' },
      { name: 'digit classification', detail: 'Embedded MobileNet tflite model recognizing handwritten numbers (0-9).' },
      { name: 'audit validator', detail: 'Unchecked page checkouts, double-check filters, and statistical calculations.' }
    ]
  }
];

export default function ProjectsSection() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  useEffect(() => {
    if (!expandedProject) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setExpandedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [expandedProject]);

  const toggleExpand = (name: string) => {
    setExpandedProject(expandedProject === name ? null : name);
  };

  return (
    <section id="projects" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-mono uppercase tracking-widest text-accent mb-6">// engineering showcase</p>
        <h2 className="font-sans font-bold text-3xl md:text-4xl text-text-primary mb-12 font-display">
          Featured Projects & Utilities
        </h2>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => {
            const isExpanded = expandedProject === project.name;

            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="acrylic-glass neumorphic-out rounded-2xl overflow-hidden hover:border-accent/30 transition-all duration-300"
              >
                {/* Main Card Layout */}
                <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                  
                  {/* Left: Project Image Frame */}
                  <div className="w-full md:w-2/5 rounded-xl overflow-hidden relative aspect-[16/10] shrink-0 border border-border bg-bg/50 shadow-inner group">
                    <img
                      src={project.image}
                      alt={`${project.name} preview`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg/30 to-transparent pointer-events-none" />
                  </div>

                  {/* Right: Detailed Content */}
                  <div className="w-full md:w-3/5 flex flex-col justify-between h-full min-h-[190px]">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center gap-4">
                        <div className="flex items-center gap-2.5">
                          {project.icon}
                          <h3 className="font-sans font-bold text-lg md:text-xl text-text-primary">
                            {project.name}
                          </h3>
                        </div>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-sans text-xs font-semibold text-text-secondary hover:text-accent transition-colors flex items-center gap-1.5 border border-border bg-bg/40 px-3 py-1.5 rounded-lg hover:border-accent/20"
                        >
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                            <path d="M9 18c-4.51 2-5-2-7-2" />
                          </svg>
                          Repository ↗
                        </a>
                      </div>

                      <p className="text-text-secondary text-xs md:text-sm leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[9px] font-mono px-2.5 py-1 rounded bg-bg/60 border border-border/80 text-text-muted font-medium transition-colors hover:border-accent/40 hover:text-accent select-none"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-border flex justify-between items-center select-none">
                      <button
                        onClick={() => toggleExpand(project.name)}
                        className="font-sans text-xs font-semibold text-text-secondary hover:text-accent transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        {isExpanded ? (
                          <>
                            Hide specifications
                            <ChevronUp className="w-3.5 h-3.5 text-accent" />
                          </>
                        ) : (
                          <>
                            View specifications
                            <ChevronDown className="w-3.5 h-3.5 text-accent" />
                          </>
                        )}
                      </button>

                      <a
                        href="#labs"
                        className="font-sans text-xs font-bold text-accent hover:text-accent/80 transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <PlayCircle className="w-4 h-4" />
                        <span>Run Simulator ➔</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Expanded Specifications drawer */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="border-t border-border bg-bg/25"
                    >
                      <div className="p-6 md:p-8">
                        <p className="text-[10px] font-mono text-text-muted uppercase tracking-wider mb-3 select-none">// project core specifications</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {project.specs.map((spec) => (
                            <motion.div 
                              key={spec.name} 
                              whileHover={{ y: -2, borderColor: 'rgba(223, 177, 91, 0.2)' }}
                              className="acrylic-glass neumorphic-in rounded-xl p-4 transition-all duration-200"
                            >
                              <p className="font-sans font-bold text-xs text-text-primary uppercase tracking-wide flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                                {spec.name}
                              </p>
                              <p className="mt-1.5 text-xs text-text-secondary leading-relaxed">
                                {spec.detail}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
