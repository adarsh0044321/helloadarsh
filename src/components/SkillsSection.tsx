import { motion } from 'framer-motion';
import { Cpu, Network, Layout, Gauge, Settings } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  description: string;
}

const skills: Skill[] = [
  {
    name: 'Systems Programming',
    level: 90,
    icon: <Cpu className="w-5 h-5 text-accent" />,
    description:
      'Memory-safe, low-latency desktop software in Rust and C#. Managing OS resource footprints and memory safety without GC pauses.',
  },
  {
    name: 'Network Engineering',
    level: 85,
    icon: <Network className="w-5 h-5 text-accent" />,
    description:
      'Client-server network topologies, UDP packet stream optimization, LAN communication systems, and custom protocol definitions.',
  },
  {
    name: 'Interface Design',
    level: 70,
    icon: <Layout className="w-5 h-5 text-accent" />,
    description:
      "High-integrity, clean client overlays and desktop dashboard modules that respect and highlight systems-level integrations.",
  },
  {
    name: 'Performance Profiling',
    level: 80,
    icon: <Gauge className="w-5 h-5 text-accent" />,
    description:
      'Memory heap tracking, thread scheduling optimizations, and frame-rate profiling to eliminate visual glitches and UI stutters.',
  },
  {
    name: 'Deployment & System Services',
    level: 75,
    icon: <Settings className="w-5 h-5 text-accent" />,
    description:
      'Windows background services, registry persistence daemons, tray tools, and NSIS automated installer scripts.',
  },
];

const getAsciiBar = (level: number) => {
  const totalChars = 15;
  const filledChars = Math.round((level / 100) * totalChars);
  const emptyChars = totalChars - filledChars;
  return `[${'█'.repeat(filledChars)}${'░'.repeat(emptyChars)}] ${level}%`;
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 relative border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-label">// technical skills</p>
        <h2 className="font-sans font-semibold text-2xl md:text-3xl text-text-primary mb-12">
          Systems Operations Matrix
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="terminal-card border border-border bg-surface rounded-xl p-6 hover:border-accent/40 transition-all duration-300"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-bg border border-border">
                    {skill.icon}
                  </div>
                  <h3 className="font-sans font-semibold text-lg text-text-primary">
                    {skill.name}
                  </h3>
                </div>
                {/* ASCII Console Bar */}
                <div className="font-mono text-[10px] text-accent/80 mt-1 select-none">
                  {getAsciiBar(skill.level)}
                </div>
              </div>

              <p className="mt-4 font-sans text-sm text-text-secondary leading-relaxed mb-6">
                {skill.description}
              </p>

              {/* Graphical Telemetry Progress Bar */}
              <div className="w-full bg-bg rounded-full h-1 overflow-hidden border border-border">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
                  className="h-full bg-accent rounded-full shadow-[0_0_8px_#E8663C]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
