import { motion } from 'framer-motion';

const skills = [
  {
    name: 'Systems Programming',
    description:
      'Memory-safe, low-latency desktop software in Rust and C#. No garbage collection surprises.',
  },
  {
    name: 'Network Engineering',
    description:
      'Client-server architectures, remote desktop protocols, real-time LAN communication.',
  },
  {
    name: 'Interface Design',
    description:
      "Clean desktop and web UIs that don't fight the backend. Function dictates form.",
  },
  {
    name: 'Performance Work',
    description:
      'Profiling, optimizing, reducing CPU and memory footprint until the numbers stop lying.',
  },
  {
    name: 'Deployment & Packaging',
    description:
      'NSIS installers, tray services, Windows system-level integration that actually works.',
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-light-bg py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-[0.8125rem] tracking-wide text-light-text-secondary mb-10">
          // skills
        </p>
        <h2 className="font-sans font-semibold text-2xl md:text-3xl text-light-text mb-12">
          What I work with
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white border border-light-surface/80 rounded-xl p-6 transition-colors duration-300 hover:border-accent/30"
            >
              <h3 className="font-sans font-medium text-lg text-light-text mb-2">
                {skill.name}
              </h3>
              <p className="font-mono text-sm text-light-text-secondary leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
