import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Network, Cpu, Shield, ChevronDown, ChevronUp, FileCode } from 'lucide-react';

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
  flowchart: string;
}

const projects: Project[] = [
  {
    name: 'Beacon-Pulse',
    description:
      'A low-latency, hardware-accelerated remote desktop and LAN screen sharing system. Designed for fluid high-framerate streaming over local networks with layout-independent key scan-code injection.',
    tech: ['rust', 'tokio', 'media-foundation', 'win32-api', 'udp-streaming', 'lan'],
    github: 'https://github.com/adarsh0044321/beacon-pulse',
    image: '/helloadarsh/beacon_pulse_diagram.png',
    icon: <Network className="w-5 h-5 text-accent" />,
    specs: [
      { name: 'Capture Engine', detail: 'Zero-copy desktop frame retrieval via Windows Graphics Capture (WGC).' },
      { name: 'MF H.264 Encoder', detail: 'Direct-on-GPU compression using NVENC/AMF/QSV hardware pipelines.' },
      { name: 'watchdog service', detail: 'Registry-backed persistence service with exponential backoff auto-recovery.' },
      { name: 'input injection', detail: 'Tag-isolated loopback prevention and auto-release guards for stuck keys.' }
    ],
    flowchart: `[WGC Capture Engine] ──(GPU zero-copy)──> [MF H.264 HW Encoder] ──(UDP Streaming)──> [Pulse Client Render]
                                                                                           │ (Inputs Captured)
[Beacon Host Keyboard Injection Guard] <───────(TCP Control Channel)───────────────────────┘`
  },
  {
    name: 'FocusFlow',
    description:
      'An ultra-stealth hybrid offline-online educational assistance assistant. Excludes its HUD rendering context from desktop screenshots and video recording tools using Windows layout affinity calls.',
    tech: ['python', 'tauri', 'nextjs', 'llama.cpp', 'opencv', 'tesseract'],
    github: 'https://github.com/adarsh0044321',
    image: '/helloadarsh/focus_flow_mockup.png',
    icon: <Shield className="w-5 h-5 text-accent" />,
    specs: [
      { name: 'stealth display', detail: 'ctypes affinity call exclusions (WDA_EXCLUDEFROMCAPTURE) for zero screen footprint.' },
      { name: 'ocr pipeline', detail: 'Grayscale thresholding, sharpening filters, and structural spacing text cleaners.' },
      { name: 'hybrid router', detail: 'Threaded local llama.cpp GGUF solver fallbacks to rotated OpenAI API endpoints.' },
      { name: 'manual query drawer', detail: 'Glassmorphic draggable HUD overlays with mouse-reactive particles canvas.' }
    ],
    flowchart: `[Screen Capture Select] ──> [Grayscale + Sharpen Preprocess] ──> [Tesseract OCR Parser] ──> [Text Cleanup]
                                                                                                    │
[Stealth Answer HUD] <────── [llama.cpp Local Solver / GPT Router API] <─── [Local Knowledge Base Match] ──┘`
  },
  {
    name: 'MarkFlow',
    description:
      'An automated exam paper evaluation and grading Android application. Employs computer vision red ink filter thresholds to automatically capture marks, verify totals, and compute confidence ratings.',
    tech: ['kotlin', 'android', 'opencv', 'tensorflow-lite', 'jetpack-compose', 'di'],
    github: 'https://github.com/adarsh0044321',
    image: '/helloadarsh/mark_flow_visual.png',
    icon: <Cpu className="w-5 h-5 text-accent" />,
    specs: [
      { name: 'red-ink analyzer', detail: 'Custom HSV thresholding arrays filtering grading lines from black/blue student answers.' },
      { name: 'contour bounding', detail: 'Contours outline tracking detecting circle bounds and answer region separations.' },
      { name: 'digit classification', detail: 'Embedded MobileNet tflite model recognizing handwritten numbers (0-9).' },
      { name: 'audit validator', detail: 'Unchecked page checkouts, double-check filters, and statistical calculations.' }
    ],
    flowchart: `[Exam Paper Camera Frame] ──> [HSV Channel Red Filter] ──> [OpenCV Contour Finder] ──> [Segmented Mark Regions]
                                                                                                │
[Grades Database Compile] <──────── [DigitRecognizer TF Lite] <───────── [Confidence Verification Layer] ┘`
  }
];

export default function ProjectsSection() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const toggleExpand = (name: string) => {
    setExpandedProject(expandedProject === name ? null : name);
  };

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-label">// engineering works</p>
        <h2 className="font-sans font-semibold text-2xl md:text-3xl text-text-primary mb-12">
          Featured systems & utilities
        </h2>

        <div className="space-y-6">
          {projects.map((project, index) => {
            const isExpanded = expandedProject === project.name;
            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="terminal-card border border-border bg-surface overflow-hidden hover:border-accent/30 transition-all duration-300"
              >
                {/* Main Card Header */}
                <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                  {/* Left part: Mockup graphic */}
                  <div className="w-full md:w-2/5 aspect-[16/10] bg-bg rounded-lg border border-border overflow-hidden relative group">
                    <img
                      src={project.image}
                      alt={`${project.name} interface mockup`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg/40 to-transparent pointer-events-none" />
                  </div>

                  {/* Right part: Details */}
                  <div className="w-full md:w-3/5 flex flex-col justify-between h-full min-h-[190px]">
                    <div>
                      <div className="flex justify-between items-center gap-4">
                        <div className="flex items-center gap-2.5">
                          {project.icon}
                          <h3 className="font-sans font-semibold text-xl text-text-primary">
                            {project.name}
                          </h3>
                        </div>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-xs text-text-secondary hover:text-accent transition-colors flex items-center gap-1"
                        >
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                            <path d="M9 18c-4.51 2-5-2-7-2" />
                          </svg>
                          src ↗
                        </a>
                      </div>

                      <p className="mt-4 text-text-secondary text-sm leading-relaxed">
                        {project.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="font-mono text-[10px] px-2.5 py-1 rounded bg-bg/50 border border-border text-text-secondary"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-border flex justify-between items-center">
                      <button
                        onClick={() => toggleExpand(project.name)}
                        className="font-mono text-xs text-accent hover:text-accent/80 transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        {isExpanded ? (
                          <>
                            Hide specifications
                            <ChevronUp className="w-3.5 h-3.5" />
                          </>
                        ) : (
                          <>
                            View specifications & system flow
                            <ChevronDown className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Expanded Subsystems / Flowchart */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="border-t border-border bg-bg/40"
                    >
                      <div className="p-6 md:p-8 space-y-6">
                        {/* Subsystem Specifications */}
                        <div>
                          <p className="font-mono text-[10px] text-text-muted uppercase tracking-wider mb-3">// subsystem specifications</p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {project.specs.map((spec) => (
                              <div key={spec.name} className="p-4 rounded-lg bg-surface border border-border/80">
                                <p className="font-mono text-xs font-semibold text-text-primary uppercase tracking-wide flex items-center gap-1.5">
                                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                                  {spec.name}
                                </p>
                                <p className="mt-1.5 font-mono text-[11px] text-text-secondary leading-relaxed">
                                  {spec.detail}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* System Flow Diagram */}
                        <div>
                          <p className="font-mono text-[10px] text-text-muted uppercase tracking-wider mb-3 flex items-center gap-1.5">
                            <FileCode className="w-3 h-3 text-accent" />
                            // system architecture pipeline
                          </p>
                          <pre className="p-4 rounded-lg bg-surface border border-border font-mono text-[10px] text-accent/80 overflow-x-auto whitespace-pre leading-relaxed select-text shadow-inner">
                            {project.flowchart}
                          </pre>
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
