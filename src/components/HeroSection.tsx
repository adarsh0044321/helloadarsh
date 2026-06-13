import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Interactive Constellation Canvas representing Adarsh's core technologies
function ConstellationCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = 450);
    let height = (canvas.height = 450);
    let animFrame: number;

    const mouse = { x: 0, y: 0, active: false };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = (e.clientX - rect.left) * (width / rect.width);
      mouse.y = (e.clientY - rect.top) * (height / rect.height);
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      width = canvas.width = rect.width;
      height = canvas.height = rect.height;
    };

    window.addEventListener('resize', handleResize);

    interface Node {
      x: number;
      y: number;
      label: string;
      vx: number;
      vy: number;
    }

    const labels = ["Rust", "Tokio", "UDP", "Win32", "OpenCV", "TFLite", "Kotlin", "Python", "MediaFoundation"];
    const nodes: Node[] = labels.map((l, i) => {
      const angle = (i / labels.length) * Math.PI * 2;
      const dist = 110 + Math.random() * 40;
      return {
        x: width / 2 + Math.cos(angle) * dist,
        y: height / 2 + Math.sin(angle) * dist,
        label: l,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4
      };
    });

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      const maxConnectDist = 135;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxConnectDist) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(223, 177, 91, ${0.15 * (1 - dist / maxConnectDist)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw and move nodes
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;

        // Bounce bounds
        if (n.x < 30 || n.x > width - 30) n.vx *= -1;
        if (n.y < 30 || n.y > height - 30) n.vy *= -1;

        // Gravitate to cursor
        if (mouse.active) {
          const dx = mouse.x - n.x;
          const dy = mouse.y - n.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            const force = (1 - dist / 180) * 0.5;
            n.x += (dx / dist) * force;
            n.y += (dy / dist) * force;
          }
        }

        // Calculate dynamic opacity based on mouse distance
        let textOpacity = 0.5;
        let dotScale = 1;
        if (mouse.active) {
          const dx = mouse.x - n.x;
          const dy = mouse.y - n.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            textOpacity = 0.5 + (1 - dist / 120) * 0.5;
            dotScale = 1 + (1 - dist / 120) * 0.8;
          } else {
            textOpacity = 0.35;
          }
        } else {
          textOpacity = 0.65;
        }

        // Draw gold anchor dot
        ctx.beginPath();
        ctx.arc(n.x, n.y, 3.5 * dotScale, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(223, 177, 91, ${textOpacity})`;
        ctx.shadowColor = "#DFB15B";
        ctx.shadowBlur = mouse.active ? 8 * (textOpacity - 0.3) : 3;
        ctx.fill();
        ctx.shadowBlur = 0; // reset

        // Draw tech label
        ctx.font = "500 9px monospace";
        ctx.fillStyle = `rgba(243, 244, 246, ${textOpacity})`;
        ctx.textAlign = "center";
        ctx.fillText(n.label, n.x, n.y - 12 - (dotScale - 1) * 3);
      });

      animFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return (
    <div className="relative w-full aspect-square max-w-[420px] mx-auto rounded-full bg-surface/5 border border-border/50 flex items-center justify-center overflow-hidden shadow-inner select-none neumorphic-in">
      <div className="absolute inset-0 bg-radial-gradient from-accent/[0.02] to-transparent pointer-events-none" />
      <canvas ref={canvasRef} className="w-full h-full cursor-crosshair" />
    </div>
  );
}

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
            <span className="text-[10px] font-mono uppercase tracking-widest text-accent mb-6 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full select-none">
              Systems & Network Engineering
            </span>

            <h1 className="font-display font-bold text-5xl md:text-7xl tracking-tight leading-[0.95] mb-6 bg-gradient-to-r from-text-primary via-white to-text-secondary bg-clip-text text-transparent">
              Adarsh Kumar Singh
            </h1>

            <p className="text-text-secondary text-sm md:text-base leading-relaxed max-w-[50ch] mb-10">
              I build low-latency desktop engines, real-time UDP communication protocols, and automated computer vision pipelines. Focused on crafting clean, high-performance code in Rust, Python, and Kotlin.
            </p>

            {/* Quick Metadata Stats */}
            <div className="grid grid-cols-3 gap-4 mb-10 w-full max-w-md select-none">
              <motion.div 
                whileHover={{ y: -4, borderColor: "rgba(223, 177, 91, 0.3)" }}
                className="acrylic-glass neumorphic-out rounded-2xl px-4 py-3.5 cursor-default transition-all duration-300"
              >
                <p className="text-[9px] text-text-muted uppercase tracking-wider font-semibold mb-1">
                  Location
                </p>
                <p className="text-xs font-semibold text-text-secondary">
                  Palamu, India
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -4, borderColor: "rgba(223, 177, 91, 0.3)" }}
                className="acrylic-glass neumorphic-out rounded-2xl px-4 py-3.5 cursor-default transition-all duration-300"
              >
                <p className="text-[9px] text-text-muted uppercase tracking-wider font-semibold mb-1">
                  Core Tool
                </p>
                <p className="text-xs font-semibold text-text-secondary">
                  Rust / Systems
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -4, borderColor: "rgba(223, 177, 91, 0.3)" }}
                className="acrylic-glass neumorphic-out rounded-2xl px-4 py-3.5 cursor-default transition-all duration-300"
              >
                <p className="text-[9px] text-text-muted uppercase tracking-wider font-semibold mb-1">
                  Status
                </p>
                <p className="text-xs font-semibold text-accent flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                  Open
                </p>
              </motion.div>
            </div>

            <a
              href="#labs"
              className="font-sans text-xs md:text-sm font-bold bg-accent text-bg px-6 py-3.5 rounded-xl hover:bg-accent/90 transition-colors flex items-center gap-2 group shadow-md shadow-accent/15 border-none cursor-pointer"
            >
              Try Engineering Labs
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Right Column: Constellation Canvas */}
          <motion.div
            className="lg:col-span-6 w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <ConstellationCanvas />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
