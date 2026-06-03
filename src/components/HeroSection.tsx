import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-[100dvh] flex items-center">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <motion.div
          className="flex flex-col items-start text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="font-mono text-sm text-text-muted mb-6">
            // systems developer
          </p>

          <h1 className="font-sans font-bold text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-none text-text-primary mb-4">
            Adarsh Kumar Singh
          </h1>

          <p className="font-mono text-lg md:text-xl text-accent mb-10">
            rust / systems / networking
          </p>

          <div className="terminal-card p-5 md:p-6 max-w-md">
            <p className="font-mono text-sm text-text-secondary mb-1.5">
              <span className="text-accent">&gt;</span> location: palamu, india
            </p>
            <p className="font-mono text-sm text-text-secondary mb-1.5">
              <span className="text-accent">&gt;</span> focus: low-latency systems
            </p>
            <p className="font-mono text-sm text-text-secondary">
              <span className="text-accent">&gt;</span> status: available for work
            </p>
          </div>

          <a
            href="#projects"
            className="mt-10 font-mono text-sm text-text-secondary hover:text-accent transition-colors"
          >
            View Projects ↓
          </a>
        </motion.div>
      </div>
    </section>
  );
}
