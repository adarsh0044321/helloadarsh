import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Server, Cpu, Database } from 'lucide-react';

interface ActivityNode {
  id: number;
  level: 0 | 1 | 2 | 3;
  date: string;
  log?: string;
}

// Seed mock activity logs matching Adarsh's actual project technologies
const activityData: ActivityNode[] = Array.from({ length: 119 }, (_, i) => {
  // Default values
  const node: ActivityNode = {
    id: i,
    level: 0,
    date: `2026-0${Math.floor(i / 30) + 1}-${(i % 30) + 1}`,
  };

  // Specific high activity nodes with real project specs
  if (i === 12) {
    node.level = 2;
    node.log = 'commit: "impl zero-copy windows capture loop via WGC [Rust]"';
  } else if (i === 18) {
    node.level = 3;
    node.log = 'commit: "optimize opencv red ink hsv channel matrix filters"';
  } else if (i === 27) {
    node.level = 1;
    node.log = 'commit: "patch: resolve ctypes affinity capture exclusions"';
  } else if (i === 35) {
    node.level = 3;
    node.log = 'commit: "integrate tflite model classifier for grade contours"';
  } else if (i === 42) {
    node.level = 2;
    node.log = 'commit: "inject user raw key codes bypassing OS focus limits"';
  } else if (i === 55) {
    node.level = 1;
    node.log = 'commit: "profile memory allocations, resolve C# thread leaks"';
  } else if (i === 62) {
    node.level = 3;
    node.log = 'commit: "optimize UDP streaming packet buffers for multicast"';
  } else if (i === 70) {
    node.level = 2;
    node.log = 'commit: "deploy registry-based supervisor daemon auto-restart"';
  } else if (i === 83) {
    node.level = 1;
    node.log = 'commit: "integrate local llama.cpp GGUF solver fallbacks"';
  } else if (i === 91) {
    node.level = 3;
    node.log = 'commit: "refactor: multi-threaded ring buffer for WGC frames"';
  } else if (i === 99) {
    node.level = 2;
    node.log = 'commit: "feat: add HSV calibration sliders for camera checkouts"';
  } else if (i === 105) {
    node.level = 3;
    node.log = 'commit: "release: Beacon-Pulse remote desktop stream engine v1.0.5"';
  } else if (i === 114) {
    node.level = 2;
    node.log = 'commit: "refactor: clean desktop HUD layouts, implement overlay particles"';
  } else if (Math.random() > 0.8) {
    node.level = 1;
    node.log = `commit: "optimize sub-routine pipeline #${i} compilation check"`;
  }

  return node;
});

export default function AboutSection() {
  const [activeLog, setActiveLog] = useState<string | null>(null);

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-label">// about core</p>

        {/* Top block: Bio and Portrait HUD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start">
          {/* Biography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <h2 className="font-sans font-semibold text-2xl md:text-3xl text-text-primary leading-snug mb-8">
              Building systems that don&apos;t compromise on constraints.
            </h2>
            <div className="max-w-[60ch] space-y-6">
              <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                I work at the intersection of systems programming and computer vision. My focus is on software engines that need to be fast, stable, and secure. I use Rust to command low-level hardware resource allocations, Python for structuring computer vision preprocessing pipelines, and Kotlin/C# for modern user interfaces.
              </p>
              <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                When I&apos;m not writing systems code, I build stealth screen overlay modules, automated grading models using contour analysis and deep learning frameworks, and real-time streaming tools. I care about writing clean, reliable code that runs exactly as compiled.
              </p>
            </div>

            {/* Diagnostic Readouts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
              <div className="border border-border/80 bg-surface/50 rounded-lg p-4 flex items-start gap-3">
                <Server className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans font-semibold text-xs text-text-primary uppercase tracking-wide">Infrastructure</h4>
                  <p className="font-mono text-[10px] text-text-secondary mt-1">UDP Sockets, Multi-threading, Windows Win32 API</p>
                </div>
              </div>

              <div className="border border-border/80 bg-surface/50 rounded-lg p-4 flex items-start gap-3">
                <Cpu className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans font-semibold text-xs text-text-primary uppercase tracking-wide">Processing</h4>
                  <p className="font-mono text-[10px] text-text-secondary mt-1">OpenCV CV2, HSV Threshold Filters, H.264 Encoder</p>
                </div>
              </div>

              <div className="border border-border/80 bg-surface/50 rounded-lg p-4 flex items-start gap-3">
                <Database className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans font-semibold text-xs text-text-primary uppercase tracking-wide">Models</h4>
                  <p className="font-mono text-[10px] text-text-secondary mt-1">TensorFlow Lite, OCR Tesseract, llama.cpp GGUF</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Portrait Scanner & Hardware Specs panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col gap-6 w-full"
          >
            {/* Image HUD */}
            <div className="w-full aspect-[4/3] max-w-md mx-auto relative rounded-lg border border-border bg-bg overflow-hidden group">
              {/* Sci-fi scanner corner decorations */}
              <span className="absolute top-2 left-2 text-accent/80 font-mono text-xs select-none">┌</span>
              <span className="absolute top-2 right-2 text-accent/80 font-mono text-xs select-none">┐</span>
              <span className="absolute bottom-2 left-2 text-accent/80 font-mono text-xs select-none">└</span>
              <span className="absolute bottom-2 right-2 text-accent/80 font-mono text-xs select-none">┘</span>
              <span className="absolute top-2 left-6 text-text-muted font-mono text-[9px] select-none">SCANNER_ACTIVE: SYS_OK</span>

              {/* Pulse scan line */}
              <motion.div
                animate={{ y: ['0%', '290px', '0%'] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
                className="absolute left-0 right-0 h-[2px] bg-accent/70 shadow-[0_0_12px_#E8663C] pointer-events-none z-10"
              />

              <img
                src="https://framerusercontent.com/images/ajFhk3hDzd27LtsxPDROntb2jA.png"
                alt="Adarsh Kumar Singh Portrait"
                className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500 filter contrast-[1.05]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Hardware Telemetry specs */}
            <div className="terminal-card p-4 border border-border bg-surface font-mono text-[11px] leading-relaxed text-text-secondary">
              <div className="flex items-center gap-1.5 text-accent text-xs font-semibold mb-2.5 uppercase tracking-wide">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>// Host Operator Telemetry</span>
              </div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                <div><span className="text-text-muted">CORE NAME:</span> adarsh-core</div>
                <div><span className="text-text-muted">HOST IP:</span> 127.0.0.1 (local)</div>
                <div><span className="text-text-muted">OS TARGET:</span> win32 / linux-x64</div>
                <div><span className="text-text-muted">LINK ROUTE:</span> rustc / llvm</div>
                <div><span className="text-text-muted">ACCEL TYPE:</span> NVENC / HW encoder</div>
                <div><span className="text-text-muted">HUD STATUS:</span> screen-exclude</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Heatmap logs segment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-12 border-t border-border/80"
        >
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-end">
              <div>
                <h3 className="font-sans font-semibold text-lg text-text-primary">
                  System Compilation & Updates Activity
                </h3>
                <p className="font-mono text-xs text-text-secondary mt-1">
                  Chronological representation of system compilations, commits, and optimizations.
                </p>
              </div>
              <div className="flex items-center gap-1.5 font-mono text-[10px] text-text-muted">
                <span>Less</span>
                <span className="w-2.5 h-2.5 rounded bg-surface border border-border" />
                <span className="w-2.5 h-2.5 rounded bg-accent/20 border border-border" />
                <span className="w-2.5 h-2.5 rounded bg-accent/50 border border-border" />
                <span className="w-2.5 h-2.5 rounded bg-accent shadow-[0_0_4px_#E8663C] border border-border" />
                <span>More</span>
              </div>
            </div>

            {/* Nodes calendar grid (Scrollable horizontally on mobile) */}
            <div className="w-full overflow-x-auto pb-2 scrollbar-thin">
              <div className="grid grid-flow-col grid-rows-7 gap-1.5 min-w-[760px] p-1.5 bg-surface/30 rounded-lg border border-border/50">
                {activityData.map((node) => {
                  let bgClass = 'bg-surface border-border/60';
                  let glowStyle = {};
                  if (node.level === 1) bgClass = 'bg-accent/25 border-accent/30';
                  if (node.level === 2) bgClass = 'bg-accent/50 border-accent/50';
                  if (node.level === 3) {
                    bgClass = 'bg-accent border-accent';
                    glowStyle = { boxShadow: '0 0 5px rgba(232, 102, 60, 0.6)' };
                  }

                  return (
                    <div
                      key={node.id}
                      onMouseEnter={() => {
                        if (node.log) {
                          setActiveLog(node.log);
                        } else {
                          setActiveLog(`inspecting compiler state: stable node on ${node.date}`);
                        }
                      }}
                      onMouseLeave={() => setActiveLog(null)}
                      style={glowStyle}
                      className={`w-3 h-3 rounded-[2px] border transition-all duration-200 cursor-crosshair hover:scale-125 hover:border-accent ${bgClass}`}
                    />
                  );
                })}
              </div>
            </div>

            {/* Live Logs streaming terminal console */}
            <div className="terminal-card p-3 bg-bg border border-border flex items-center gap-3">
              <span className="font-mono text-xs text-accent font-semibold animate-pulse shrink-0">&gt; COMPILER_LOG_STREAM:</span>
              <div className="font-mono text-xs text-text-secondary select-text overflow-hidden text-ellipsis whitespace-nowrap">
                {activeLog ? (
                  <span className="text-text-primary animate-[fadeUp_0.15s_ease-out]">{activeLog}</span>
                ) : (
                  <span className="text-text-muted">SYSTEM IDLE. Hover over high-activity nodes to inspect commit telemetry telemetry...</span>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
