import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Terminal, Send, Cpu, Wifi, ShieldAlert, Sparkles, RefreshCw } from "lucide-react";

export default function HeroSection() {
  const [logs, setLogs] = useState<string[]>([
    "sys.init(): booting adarsh_core...",
    "kernel: localized network modules initialized.",
    "subsystem: beacon-watchdog daemon [active]",
    "subsystem: focusflow-hud affin [exclusion_ready]",
    "subsystem: markflow-cv-engine loaded.",
    "Ready. Type 'help' or click a macro to run diagnostics.",
  ]);
  const [inputVal, setInputVal] = useState("");
  const [sysCpu, setSysCpu] = useState(4);
  const [sysLatency, setSysLatency] = useState(0.8);
  const [isProcessing, setIsProcessing] = useState(false);
  const logsEndRef = useRef<HTMLDivElement>(null);

  // Typewriter effect states
  const roles = ["rust systems developer", "computer vision developer", "low-latency protocol engineer"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState("");
  const [isDeletingRole, setIsDeletingRole] = useState(false);

  // Typewriter ticker
  useEffect(() => {
    let timer: number;
    const fullText = roles[roleIndex];
    
    const tick = () => {
      if (!isDeletingRole) {
        setTypedRole(fullText.substring(0, typedRole.length + 1));
        if (typedRole === fullText) {
          timer = setTimeout(() => setIsDeletingRole(true), 2000);
          return;
        }
      } else {
        setTypedRole(fullText.substring(0, typedRole.length - 1));
        if (typedRole === "") {
          setIsDeletingRole(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          return;
        }
      }
      timer = setTimeout(tick, isDeletingRole ? 30 : 70);
    };

    timer = setTimeout(tick, 100);
    return () => clearTimeout(timer);
  }, [typedRole, isDeletingRole, roleIndex]);

  // Auto-scroll logs to bottom
  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  // Simulate CPU and Latency fluctuation
  useEffect(() => {
    const interval = setInterval(() => {
      setSysCpu((prev) => {
        const change = Math.floor(Math.random() * 5) - 2;
        const next = prev + change;
        return next < 2 ? 2 : next > 12 ? 12 : next;
      });
      setSysLatency((prev) => {
        const change = (Math.random() * 0.4 - 0.2);
        const next = parseFloat((prev + change).toFixed(2));
        return next < 0.4 ? 0.4 : next > 2.5 ? 2.5 : next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleCommand = (cmdStr: string) => {
    if (!cmdStr.trim() || isProcessing) return;

    const query = cmdStr.trim().toLowerCase();
    const args = query.split(" ");
    const mainCommand = args[0];

    const newLogs = [...logs, `visitor@adarsh_core:~$ ${cmdStr}`];
    setLogs(newLogs);
    setInputVal("");
    setIsProcessing(true);

    setTimeout(() => {
      let output: string[] = [];

      switch (mainCommand) {
        case "help":
          output = [
            "Available diagnostics commands:",
            "  help          Display this menu",
            "  neofetch      Show system specification overview",
            "  ping          Measure current network latency metrics",
            "  scan          Trigger FocusFlow OCR screen capture sequence",
            "  grade         Initiate MarkFlow exam grading contour test",
            "  projects      List active research and engineering projects",
            "  clear         Reset the terminal logs",
          ];
          break;
        case "clear":
          setLogs(["logs cleared. system ready."]);
          setIsProcessing(false);
          return;
        case "neofetch":
          output = [
            "   \u039B\u0394\u039B  Adarsh Kumar Singh @ Systems Core",
            "   ---  -----------------------------",
            "   OS:       AdarshOS v2026.06.03",
            "   Kernel:   Rust Tokio Stream Core",
            "   Uptime:   108d 14h 23m",
            "   Shell:    JetBrains-Mono-Terminal",
            "   Engine:   OpenCV + MediaFoundation H.264",
            "   Status:   Looking for active engineering roles",
          ];
          break;
        case "ping":
          output = [
            "PING 192.168.1.100 (host.beacon)...",
            `64 bytes from 192.168.1.100: seq=1 time=${(sysLatency * 0.9).toFixed(2)}ms`,
            `64 bytes from 192.168.1.100: seq=2 time=${sysLatency.toFixed(2)}ms`,
            `64 bytes from 192.168.1.100: seq=3 time=${(sysLatency * 1.1).toFixed(2)}ms`,
            "--- 192.168.1.100 beacon ping statistics ---",
            "3 packets transmitted, 3 received, 0% packet loss",
            `rtt min/avg/max = ${(sysLatency * 0.9).toFixed(2)}/${sysLatency.toFixed(2)}/${(sysLatency * 1.1).toFixed(2)} ms`,
          ];
          break;
        case "scan":
          output = [
            "[FocusFlow-Subsystem]: initiating stealth capture...",
            "WDA_EXCLUDEFROMCAPTURE affinity applied successfully [invisible to capture]",
            "capturing screenshot buffer [1920x1080]...",
            "ocr: preprocessing (grayscale -> contrast x1.5 -> denoise)...",
            "ocr: character segmentation complete.",
            'ocr: extracted -> "Solve: Integral of x*e^x dx from 0 to 1"',
            "ai_solver: query routed to offline Phi-3-mini-4k-instruct-q4...",
            "ai_solver: [Concept Socratic Mode] integrated.",
            'ai_solver: response -> "Apply integration by parts. u = x, dv = e^x dx..."',
            "status: solved successfully.",
          ];
          break;
        case "grade":
          output = [
            "[MarkFlow-Subsystem]: loading cv analysis pipeline...",
            "cv: filtering red ink channels [hsv filter target: 0-10, 150-255, 150-255]...",
            "cv: contour analysis triggered, isolated handwritten markings...",
            "cv: duplicate verification -> image checksum unique.",
            "ml: loading DigitRecognizer.tflite weights...",
            "ml: digits recognized: [Score Circle 1: 9/10] [Score Circle 2: 8/10]",
            "ml: confidence level: 98.42% verified.",
            "status: marks compiled. unchecked answers: 0 detected.",
          ];
          break;
        case "projects":
          output = [
            "Active Production Projects:",
            "  1. Beacon-Pulse   - Low-latency remote desktop streaming in Rust",
            "  2. FocusFlow      - Screen capture evasion & offline Socratic tutor",
            "  3. MarkFlow       - CV red-ink contour examiner and marks digit compiler",
            "Type 'project [name]' (e.g. 'project focusflow') for specifications.",
          ];
          break;
        case "project":
          if (args[1] === "beacon-pulse" || args[1] === "beacon") {
            output = [
              "Project: Beacon-Pulse",
              "  Type: Rust low-latency LAN streaming protocol",
              "  Features: WGC Capture API, MF H.264 Encoder, UDP Stream",
              "  Status: Production Release v1.0.5 [active]",
            ];
          } else if (args[1] === "focusflow" || args[1] === "focus") {
            output = [
              "Project: FocusFlow",
              "  Type: Stealth Educational solving assistance",
              "  Features: Stealth HUD, Tesseract Preprocessing, Hybrid routing",
              "  Status: Wave 11 Stability v1.1.0 [active]",
            ];
          } else if (args[1] === "markflow" || args[1] === "mark") {
            output = [
              "Project: MarkFlow",
              "  Type: Android Smart exam grading app",
              "  Features: OpenCV contour analyzer, red ink isolator, TF Lite classifier",
              "  Status: Prototype v1.0.0 [active]",
            ];
          } else {
            output = [
              "Error: specify a valid project. Try:",
              "  project beacon-pulse",
              "  project focusflow",
              "  project markflow",
            ];
          }
          break;
        default:
          output = [
            `command not found: '${mainCommand}'.`,
            "type 'help' to review diagnostic subsystems list.",
          ];
      }

      setLogs((prev) => [...prev, ...output]);
      setIsProcessing(false);
    }, 450);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(inputVal);
    }
  };

  return (
    <section id="hero" className="min-h-[100dvh] flex items-center pt-24 pb-16 relative">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Typography & Bio */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="font-mono text-xs md:text-sm text-text-muted mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-ping"></span>
              <span>// systems engineer & developer</span>
            </p>

            <h1 className="font-sans font-bold text-5xl md:text-7xl tracking-tighter leading-[0.95] mb-5 bg-gradient-to-r from-text-primary via-white to-text-secondary bg-clip-text text-transparent">
              Adarsh Kumar Singh
            </h1>

            <p className="font-mono text-base md:text-lg text-accent mb-8 h-8 flex items-center">
              <span>{typedRole}</span>
              <span className="w-1.5 h-4 bg-accent ml-1 animate-pulse"></span>
            </p>

            <p className="text-text-secondary text-sm md:text-base leading-relaxed max-w-[50ch] mb-10">
              I build low-latency desktop engines, automated computer vision pipelines, and system utilities. 
              Focused on crafting clean, high-performance, and high-integrity code in Rust, Python, and Kotlin.
            </p>

            <div className="flex flex-wrap gap-4 items-center mb-10 w-full max-w-lg">
              <motion.div 
                whileHover={{ y: -5, scale: 1.02, borderColor: 'var(--color-accent)' }}
                transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                className="terminal-card px-4 py-3 flex-1 min-w-[140px] cursor-default border border-border"
              >
                <p className="font-mono text-[10px] text-text-muted uppercase tracking-wider mb-1">
                  location
                </p>
                <p className="font-mono text-xs md:text-sm text-text-secondary">
                  palamu, india
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5, scale: 1.02, borderColor: 'var(--color-accent)' }}
                transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                className="terminal-card px-4 py-3 flex-1 min-w-[140px] cursor-default border border-border"
              >
                <p className="font-mono text-[10px] text-text-muted uppercase tracking-wider mb-1">
                  primary tool
                </p>
                <p className="font-mono text-xs md:text-sm text-text-secondary">
                  rust / systems
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5, scale: 1.02, borderColor: 'var(--color-accent)' }}
                transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                className="terminal-card px-4 py-3 flex-1 min-w-[140px] cursor-default border border-border"
              >
                <p className="font-mono text-[10px] text-text-muted uppercase tracking-wider mb-1">
                  status
                </p>
                <p className="font-mono text-xs md:text-sm text-accent flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                  open for work
                </p>
              </motion.div>
            </div>

            <a
              href="#projects"
              className="font-mono text-xs md:text-sm text-text-secondary hover:text-accent transition-colors flex items-center gap-2 group"
            >
              Explore engineering works
              <span className="group-hover:translate-y-1 transition-transform">↓</span>
            </a>
          </motion.div>

          {/* Right Column: Interactive Dashboard Widget */}
          <motion.div
            className="lg:col-span-5 w-full flex flex-col gap-4"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            {/* Real-time Status Panel */}
            <div className="terminal-card p-4 flex flex-col gap-3.5 border border-border bg-surface">
              <div className="flex justify-between items-center gap-4">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-accent animate-pulse" />
                  <span className="font-mono text-xs text-text-secondary">CPU:</span>
                  <span className="font-mono text-xs font-semibold text-text-primary">
                    {sysCpu}%
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Wifi className="w-4 h-4 text-accent" />
                  <span className="font-mono text-xs text-text-secondary">LAN Latency:</span>
                  <span className="font-mono text-xs font-semibold text-text-primary">
                    {sysLatency}ms
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-accent" />
                  <span className="font-mono text-xs text-text-secondary">HUD Exclusion:</span>
                  <span className="font-mono text-xs font-semibold text-accent text-glow">
                    ACTIVE
                  </span>
                </div>
              </div>
              
              {/* Cores thread activity display */}
              <div className="flex justify-between items-center border-t border-border/60 pt-3">
                <span className="font-mono text-[10px] text-text-muted">CORE LOGIC LOADS:</span>
                <div className="flex gap-1.5 items-center">
                  {[...Array(8)].map((_, i) => {
                    const isActive = sysCpu > (i * 1.3);
                    return (
                      <span
                        key={i}
                        className={`w-2 h-2 rounded-sm transition-colors duration-500 ${
                          isActive ? 'bg-accent shadow-[0_0_6px_#E8663C]' : 'bg-border/60'
                        }`}
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Interactive Terminal */}
            <div className="terminal-card flex flex-col h-[280px] bg-surface border border-border overflow-hidden">
              {/* Terminal header */}
              <div className="px-4 py-2 bg-bg/50 border-b border-border flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-text-secondary" />
                  <span className="font-mono text-xs text-text-secondary">system_diagnostics.sh</span>
                </div>
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-border"></span>
                  <span className="w-2 h-2 rounded-full bg-border"></span>
                  <span className="w-2 h-2 rounded-full bg-accent/40"></span>
                </div>
              </div>

              {/* Terminal Logs */}
              <div className="flex-1 p-4 overflow-y-auto font-mono text-xs text-text-secondary leading-relaxed space-y-1 select-text scrollbar-thin">
                {logs.map((log, index) => (
                  <div key={index} className="whitespace-pre-wrap">
                    {log.startsWith("visitor@adarsh_core") ? (
                      <span className="text-text-primary">{log}</span>
                    ) : log.includes("Error:") ? (
                      <span className="text-accent/80 font-semibold">{log}</span>
                    ) : log.includes("ai_solver:") || log.includes("ml:") || log.includes("cv:") ? (
                      <span className="text-accent/70">{log}</span>
                    ) : log.includes("status: solved") || log.includes("status: marks") ? (
                      <span className="text-accent font-semibold">{log}</span>
                    ) : (
                      <span>{log}</span>
                    )}
                  </div>
                ))}
                {isProcessing && (
                  <div className="flex items-center gap-1.5 text-text-muted">
                    <RefreshCw className="w-3 h-3 animate-spin" />
                    <span>calculating vectors...</span>
                  </div>
                )}
                <div ref={logsEndRef} />
              </div>

              {/* Terminal Input */}
              <div className="p-3 bg-bg/30 border-t border-border flex items-center gap-2">
                <span className="font-mono text-xs text-accent font-bold">&gt;</span>
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="type command (e.g. neofetch, ping)..."
                  disabled={isProcessing}
                  className="flex-1 bg-transparent border-none outline-none font-mono text-xs text-text-primary placeholder:text-text-muted p-0"
                />
                <button
                  onClick={() => handleCommand(inputVal)}
                  disabled={isProcessing}
                  className="text-text-secondary hover:text-accent transition-colors p-1"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Quick Macro Actions */}
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => handleCommand("ping")}
                disabled={isProcessing}
                className="font-mono text-[10px] uppercase tracking-wider py-2 rounded-lg bg-surface border border-border hover:border-accent/40 text-text-secondary hover:text-text-primary transition-colors flex items-center justify-center gap-1 cursor-pointer"
              >
                <Wifi className="w-3.5 h-3.5 text-accent" />
                Ping LAN
              </button>
              <button
                onClick={() => handleCommand("scan")}
                disabled={isProcessing}
                className="font-mono text-[10px] uppercase tracking-wider py-2 rounded-lg bg-surface border border-border hover:border-accent/40 text-text-secondary hover:text-text-primary transition-colors flex items-center justify-center gap-1 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                OCR Screen
              </button>
              <button
                onClick={() => handleCommand("grade")}
                disabled={isProcessing}
                className="font-mono text-[10px] uppercase tracking-wider py-2 rounded-lg bg-surface border border-border hover:border-accent/40 text-text-secondary hover:text-text-primary transition-colors flex items-center justify-center gap-1 cursor-pointer"
              >
                <Cpu className="w-3.5 h-3.5 text-accent" />
                CV Grade
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
