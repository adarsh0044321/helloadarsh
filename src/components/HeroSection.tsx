import { motion } from "framer-motion";
import { Cpu, Network, Eye, ArrowRight } from "lucide-react";

interface Specialization {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
}

const specializations: Specialization[] = [
  {
    title: "Low-Latency Systems",
    subtitle: "RUST / WIN32 / TOKIO",
    description: "Multi-threaded desktop engines, lock-free ring buffers, and robust background watchdog services.",
    icon: <Cpu className="w-5 h-5 text-accent" />,
    tags: ["Memory-Safe", "Concurrence", "OS Integration"]
  },
  {
    title: "LAN Protocol Engineering",
    subtitle: "UDP MULTICAST / H.264 / MF",
    description: "Hardware-accelerated screen capture and compression streaming pipelines with key injection guards.",
    icon: <Network className="w-5 h-5 text-accent" />,
    tags: ["Direct GPU Encoder", "Multicast TCP/UDP", "Zero-Copy"]
  },
  {
    title: "Computer Vision & ML",
    subtitle: "OPENCV / TF LITE / KOTLIN",
    description: "Real-time red-ink HSV channel contour isolation and handwritten digit recognition networks.",
    icon: <Eye className="w-5 h-5 text-accent" />,
    tags: ["HSV Mask Thresholds", "MobileNet Classifiers", "Android Integration"]
  }
];

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-[100dvh] flex items-center pt-28 pb-16 relative">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Typography & Bio */}
          <motion.div
            className="lg:col-span-6 flex flex-col items-start text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-xs font-mono uppercase tracking-widest text-accent mb-6 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full">
              Software Systems Engineer
            </span>

            <h1 className="font-sans font-extrabold text-5xl md:text-7xl tracking-tight leading-[0.95] mb-6 bg-gradient-to-r from-text-primary via-white to-text-secondary bg-clip-text text-transparent">
              Adarsh Kumar Singh
            </h1>

            <p className="text-text-secondary text-sm md:text-base leading-relaxed max-w-[50ch] mb-10">
              I build low-latency desktop engines, automated computer vision pipelines, and system utilities. 
              Focused on crafting clean, high-performance, and high-integrity code in Rust, Python, and Kotlin.
            </p>

            {/* Quick Metadata Stats */}
            <div className="grid grid-cols-3 gap-4 mb-10 w-full max-w-md">
              <motion.div 
                whileHover={{ y: -4, borderColor: "rgba(232, 102, 60, 0.3)" }}
                className="bg-surface/30 border border-border rounded-xl px-4 py-3 cursor-default transition-all duration-300"
              >
                <p className="text-[10px] text-text-muted uppercase tracking-wider font-semibold mb-1">
                  Location
                </p>
                <p className="text-xs font-medium text-text-secondary">
                  Palamu, India
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -4, borderColor: "rgba(232, 102, 60, 0.3)" }}
                className="bg-surface/30 border border-border rounded-xl px-4 py-3 cursor-default transition-all duration-300"
              >
                <p className="text-[10px] text-text-muted uppercase tracking-wider font-semibold mb-1">
                  Focus
                </p>
                <p className="text-xs font-medium text-text-secondary">
                  Rust Systems
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -4, borderColor: "rgba(232, 102, 60, 0.3)" }}
                className="bg-surface/30 border border-border rounded-xl px-4 py-3 cursor-default transition-all duration-300"
              >
                <p className="text-[10px] text-text-muted uppercase tracking-wider font-semibold mb-1">
                  Availability
                </p>
                <p className="text-xs font-medium text-accent flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                  Active
                </p>
              </motion.div>
            </div>

            <a
              href="#projects"
              className="font-sans text-xs md:text-sm font-semibold text-text-primary hover:text-accent transition-colors flex items-center gap-2 group"
            >
              Explore engineering works
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Right Column: Sleek Spec Cards Stack */}
          <motion.div
            className="lg:col-span-6 w-full flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="flex flex-col gap-4">
              {specializations.map((spec, index) => (
                <motion.div
                  key={spec.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -5, x: 2, borderColor: "rgba(232, 102, 60, 0.4)", backgroundColor: "rgba(20, 20, 22, 0.7)" }}
                  className="bg-surface/40 backdrop-blur-md border border-border p-5 rounded-xl transition-all duration-300 flex items-start gap-4 shadow-lg shadow-black/10 group cursor-default"
                >
                  <div className="p-3 rounded-lg bg-bg border border-border shrink-0 transition-colors group-hover:border-accent/20">
                    {spec.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[9px] font-mono font-semibold tracking-wider text-accent">
                      {spec.subtitle}
                    </span>
                    <h3 className="font-sans font-bold text-base text-text-primary mt-0.5 mb-1.5">
                      {spec.title}
                    </h3>
                    <p className="text-text-secondary text-xs leading-relaxed mb-3">
                      {spec.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {spec.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="text-[9px] font-medium px-2 py-0.5 bg-bg/50 border border-border/80 text-text-muted rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
