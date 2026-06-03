'use client';

import { motion } from 'framer-motion';

interface Project {
  name: string;
  description: string;
  tech: string[];
  github: string;
  images: string[];
}

const projects: Project[] = [
  {
    name: 'Beacon-Pulse',
    description:
      'A real-time LAN streaming and remote desktop system built in Rust. Server broadcasts media, clients discover and connect automatically.',
    tech: ['rust', 'tokio', 'webrtc', 'lan'],
    github: 'https://github.com/adarsh0044321/beacon-pulse',
    images: ['/helloadarsh/beacon_server_cli.png', '/helloadarsh/beacon_player_cli.png'],
  },
  {
    name: 'Net-Analyzer',
    description:
      'Network packet capture and analysis tool for real-time traffic monitoring and protocol inspection.',
    tech: ['rust', 'pcap', 'networking', 'cli'],
    github: 'https://github.com/adarsh0044321',
    images: [],
  },
  {
    name: 'Installer Builder',
    description:
      'Windows deployment pipeline for packaging desktop applications with NSIS, including tray services and auto-update mechanisms.',
    tech: ['nsis', 'windows', 'deployment', 'c#'],
    github: 'https://github.com/adarsh0044321',
    images: [],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-label">// projects</p>
        <h2 className="font-sans font-semibold text-2xl md:text-3xl text-text-primary mb-12">
          Selected work
        </h2>

        <div>
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              className={`py-10 md:py-14 ${index !== 0 ? 'border-t border-border' : ''}`}
            >
              <div className="flex justify-between items-start">
                <h3 className="font-sans font-semibold text-xl md:text-2xl text-text-primary">
                  {project.name}
                </h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-text-secondary hover:text-accent transition-colors"
                >
                  github ↗
                </a>
              </div>

              <p className="mt-3 text-text-secondary text-base leading-relaxed max-w-[60ch]">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-2.5 py-1 rounded-md bg-surface border border-border text-text-secondary"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {project.images.length > 0 && (
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.images.map((src) => (
                    <div
                      key={src}
                      className="w-full rounded-lg border border-border bg-surface overflow-hidden"
                    >
                      <img
                        src={src}
                        alt={`${project.name} screenshot`}
                        className="w-full h-auto object-contain p-2 hover:brightness-110 transition-all duration-300"
                      />
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
