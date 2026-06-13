import { motion } from 'framer-motion';
import { Layers, Cpu, Zap } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 relative border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-mono uppercase tracking-widest text-accent mb-6">// core developer profile</p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Biography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary leading-tight mb-8">
              Building systems that run clean, fast, and stable.
            </h2>
            <div className="max-w-[60ch] space-y-6">
              <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                I work at the intersection of systems programming and computer vision. My focus is on writing desktop applications and streaming protocols that operate directly on hardware resources without garbage collection overheads or thread bottlenecks.
              </p>
              <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                I leverage Rust for native multi-threaded utilities and LAN stream capturing, Python for training and executing computer vision preprocessing masks, and Kotlin/C# for drafting responsive, decoupled front-ends.
              </p>
            </div>

            {/* Competency highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
              <div className="acrylic-glass neumorphic-out rounded-2xl p-4 flex flex-col items-start gap-3">
                <div className="p-2 bg-bg border border-border rounded-lg">
                  <Layers className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-xs text-text-primary uppercase tracking-wide">Infrastructure</h4>
                  <p className="text-[10px] text-text-muted mt-1 leading-normal">Win32 API, Tokio loop systems, UDP socket multiplexing</p>
                </div>
              </div>

              <div className="acrylic-glass neumorphic-out rounded-2xl p-4 flex flex-col items-start gap-3">
                <div className="p-2 bg-bg border border-border rounded-lg">
                  <Cpu className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-xs text-text-primary uppercase tracking-wide">Processing</h4>
                  <p className="text-[10px] text-text-muted mt-1 leading-normal">OpenCV preprocessing, HSV filters, NVENC encoding</p>
                </div>
              </div>

              <div className="acrylic-glass neumorphic-out rounded-2xl p-4 flex flex-col items-start gap-3">
                <div className="p-2 bg-bg border border-border rounded-lg">
                  <Zap className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-xs text-text-primary uppercase tracking-wide">Analytics</h4>
                  <p className="text-[10px] text-text-muted mt-1 leading-normal">TensorFlow Lite models, OCR, llama.cpp GGUF solvers</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Profile Image & Metric details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col gap-4 w-full"
          >
            {/* Minimalist image showcase */}
            <div className="w-full aspect-[4/3] max-w-sm mx-auto relative rounded-2xl overflow-hidden group shadow-lg shadow-black/10 acrylic-glass neumorphic-out hover-sheen">
              <img
                src="https://framerusercontent.com/images/ajFhk3hDzd27LtsxPDROntb2jA.png"
                alt="Adarsh Kumar Singh Profile"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/40 to-transparent pointer-events-none" />
            </div>

            {/* Key Skill Highlights Grid */}
            <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto w-full">
              <div className="acrylic-glass neumorphic-out rounded-2xl p-3.5 transition-all duration-300 hover:border-accent/30">
                <p className="text-[9px] font-mono text-accent uppercase tracking-wider font-semibold mb-1">Languages</p>
                <p className="text-xs text-text-secondary font-medium">Rust, Python, Kotlin, C#</p>
              </div>
              <div className="acrylic-glass neumorphic-out rounded-2xl p-3.5 transition-all duration-300 hover:border-accent/30">
                <p className="text-[9px] font-mono text-accent uppercase tracking-wider font-semibold mb-1">Network</p>
                <p className="text-xs text-text-secondary font-medium">TCP/UDP, Multicast, WebRTC</p>
              </div>
              <div className="acrylic-glass neumorphic-out rounded-2xl p-3.5 transition-all duration-300 hover:border-accent/30">
                <p className="text-[9px] font-mono text-accent uppercase tracking-wider font-semibold mb-1">Environments</p>
                <p className="text-xs text-text-secondary font-medium">Win32, Linux, Android</p>
              </div>
              <div className="acrylic-glass neumorphic-out rounded-2xl p-3.5 transition-all duration-300 hover:border-accent/30">
                <p className="text-[9px] font-mono text-accent uppercase tracking-wider font-semibold mb-1">Engines</p>
                <p className="text-xs text-text-secondary font-medium">WGC, OpenCV, TF Lite</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
