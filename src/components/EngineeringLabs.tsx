import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Network, Eye, Sliders, Shield, Zap, RefreshCw } from 'lucide-react';

export default function EngineeringLabs() {
  const [activeTab, setActiveTab] = useState<'stream' | 'stealth' | 'vision'>('stream');

  // ── 1. Beacon-Pulse Stream Engine States ──
  const [fps, setFps] = useState(60);
  const [networkNoise, setNetworkNoise] = useState<'low' | 'med' | 'high'>('low');
  const [latency, setLatency] = useState(0.8);
  const [packetDropCount, setPacketDropCount] = useState(0);
  const [packetStream, setPacketStream] = useState<{ id: number; offset: number; dropped: boolean }[]>([]);
  const streamIdCounter = useRef(0);

  // Calculate simulated latency and drops based on noise and FPS
  useEffect(() => {
    let baseLatency = 0.5;
    if (networkNoise === 'med') baseLatency = 2.4;
    if (networkNoise === 'high') baseLatency = 8.6;
    
    // Add jitter
    const timer = setInterval(() => {
      const jitter = (Math.random() * 0.4 - 0.2);
      setLatency(parseFloat(Math.max(0.3, baseLatency + jitter).toFixed(2)));
    }, 1500);

    return () => clearInterval(timer);
  }, [networkNoise]);

  // Packet animation ticker
  useEffect(() => {
    if (activeTab !== 'stream') return;

    const intervalTime = Math.max(100, 1000 / fps);
    const ticker = setInterval(() => {
      const isDropped = networkNoise === 'med' ? Math.random() > 0.92 : 
                         networkNoise === 'high' ? Math.random() > 0.75 : false;

      if (isDropped) {
        setPacketDropCount((prev) => prev + 1);
      }

      setPacketStream((prev) => [
        ...prev.map(p => ({ ...p, offset: p.offset + 5 })), // Move existing packets
        { id: streamIdCounter.current++, offset: 0, dropped: isDropped } // Add new
      ].filter(p => p.offset <= 100)); // Remove finished
    }, intervalTime);

    return () => clearInterval(ticker);
  }, [activeTab, fps, networkNoise]);

  const injectJitter = () => {
    setLatency((prev) => parseFloat((prev + 12 + Math.random() * 8).toFixed(2)));
    setPacketDropCount((prev) => prev + 3);
    setPacketStream((prev) => [
      ...prev,
      { id: streamIdCounter.current++, offset: 15, dropped: true },
      { id: streamIdCounter.current++, offset: 35, dropped: true },
      { id: streamIdCounter.current++, offset: 55, dropped: true }
    ]);
  };


  // ── 2. FocusFlow Screen Exclusion States ──
  const [exclusionEnabled, setExclusionEnabled] = useState(false);


  // ── 3. MarkFlow CV Contour Analyzer States ──
  const [hsvThreshold, setHsvThreshold] = useState(65);
  const [isProcessingModel, setIsProcessingModel] = useState(false);
  const [recognizedMarks, setRecognizedMarks] = useState<{ id: string; val: number; matched: boolean }[]>([
    { id: 'Q1', val: 9, matched: false },
    { id: 'Q2', val: 8, matched: false }
  ]);

  // Simulate TF Lite model compilation delays on slider change
  useEffect(() => {
    if (activeTab !== 'vision') return;
    setIsProcessingModel(true);
    const delay = setTimeout(() => {
      setIsProcessingModel(false);
      setRecognizedMarks([
        { id: 'Q1', val: 9, matched: hsvThreshold >= 50 && hsvThreshold <= 85 },
        { id: 'Q2', val: 8, matched: hsvThreshold >= 50 && hsvThreshold <= 85 }
      ]);
    }, 300);

    return () => clearTimeout(delay);
  }, [hsvThreshold, activeTab]);

  return (
    <section id="labs" className="py-24 md:py-32 relative border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-mono uppercase tracking-widest text-accent mb-6">// engineering playground</p>
        <h2 className="font-sans font-bold text-3xl md:text-4xl text-text-primary mb-4 font-display">
          Interactive Operations Lab
        </h2>
        <p className="text-text-secondary text-sm md:text-base max-w-[65ch] mb-12">
          Toggle options, adjust parameters, and visually simulate the core systems, protocols, and CV codebases running in real-time.
        </p>

        {/* Outer Dashboard Card */}
        <div className="acrylic-glass neumorphic-out rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
          
          {/* Left Column: Tabs list */}
          <div className="lg:col-span-3 border-r border-border/80 bg-bg/20 p-6 flex flex-col gap-3 shrink-0 select-none">
            <p className="text-[10px] font-mono text-text-muted uppercase tracking-wider mb-2">// Select Sandbox</p>
            
            <button
              onClick={() => setActiveTab('stream')}
              className={`p-4 rounded-xl flex items-center gap-3 text-left transition-all duration-300 ${
                activeTab === 'stream'
                  ? 'bg-accent/15 border border-accent/20 text-accent font-semibold'
                  : 'border border-transparent text-text-secondary hover:text-text-primary hover:bg-surface/30'
              }`}
            >
              <Network className="w-5 h-5 shrink-0" />
              <div>
                <p className="text-xs font-sans">Beacon-Pulse</p>
                <p className="text-[10px] font-mono text-text-muted mt-0.5">UDP Network Streamer</p>
              </div>
            </button>

            <button
              onClick={() => setActiveTab('stealth')}
              className={`p-4 rounded-xl flex items-center gap-3 text-left transition-all duration-300 ${
                activeTab === 'stealth'
                  ? 'bg-accent/15 border border-accent/20 text-accent font-semibold'
                  : 'border border-transparent text-text-secondary hover:text-text-primary hover:bg-surface/30'
              }`}
            >
              <Shield className="w-5 h-5 shrink-0" />
              <div>
                <p className="text-xs font-sans">FocusFlow</p>
                <p className="text-[10px] font-mono text-text-muted mt-0.5">HUD Capture Excluder</p>
              </div>
            </button>

            <button
              onClick={() => setActiveTab('vision')}
              className={`p-4 rounded-xl flex items-center gap-3 text-left transition-all duration-300 ${
                activeTab === 'vision'
                  ? 'bg-accent/15 border border-accent/20 text-accent font-semibold'
                  : 'border border-transparent text-text-secondary hover:text-text-primary hover:bg-surface/30'
              }`}
            >
              <Eye className="w-5 h-5 shrink-0" />
              <div>
                <p className="text-xs font-sans">MarkFlow</p>
                <p className="text-[10px] font-mono text-text-muted mt-0.5">CV Red-Ink Contourer</p>
              </div>
            </button>
          </div>

          {/* Right Column: Active Simulation Panel */}
          <div className="lg:col-span-9 p-6 md:p-8 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              
              {/* ── 1. Beacon-Pulse Simulator Workspace ── */}
              {activeTab === 'stream' && (
                <motion.div
                  key="stream"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 flex-1 flex flex-col justify-between"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border/60 pb-5">
                    <div>
                      <h3 className="font-sans font-bold text-lg text-text-primary">UDP Frame Stream Lab</h3>
                      <p className="text-xs text-text-secondary mt-0.5">Visually simulate UDP frame rendering pipelines over local network environments.</p>
                    </div>
                    {/* Live metrics indicator */}
                    <div className="flex items-center gap-4 text-xs font-mono bg-bg/40 border border-border px-4 py-2 rounded-xl">
                      <div><span className="text-text-muted">LATENCY:</span> <span className="text-accent font-bold">{latency}ms</span></div>
                      <div><span className="text-text-muted">DROPPED:</span> <span className="text-red-400 font-bold">{packetDropCount}</span></div>
                    </div>
                  </div>

                  {/* Visual animation canvas */}
                  <div className="h-44 bg-bg/40 rounded-2xl border border-border flex items-center justify-between px-8 relative overflow-hidden neumorphic-in">
                    {/* Sender node */}
                    <div className="flex flex-col items-center z-10">
                      <div className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center font-bold text-xs text-text-primary shadow-md">
                        Host
                      </div>
                      <span className="font-mono text-[9px] text-text-muted mt-1.5">WGC Capture</span>
                    </div>

                    {/* Network Pipe Line */}
                    <div className="flex-1 h-[2px] bg-border relative mx-6 select-none">
                      {packetStream.map((p) => {
                        if (p.dropped && p.offset > 50) return null; // Drop half way
                        return (
                          <motion.span
                            key={p.id}
                            className={`absolute -top-1.5 w-3 h-3 rounded-full ${
                              p.dropped ? 'bg-red-500 shadow-[0_0_8px_red]' : 'bg-accent shadow-[0_0_8px_#DFB15B]'
                            }`}
                            style={{ left: `${p.offset}%` }}
                          />
                        );
                      })}
                    </div>

                    {/* Receiver node */}
                    <div className="flex flex-col items-center z-10">
                      <div className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center font-bold text-xs text-text-primary shadow-md">
                        Client
                      </div>
                      <span className="font-mono text-[9px] text-text-muted mt-1.5">Pulse Render</span>
                    </div>
                  </div>

                  {/* Controls Sidebar / Bottom */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                    {/* FPS Slider */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-text-secondary uppercase">Stream Framerate</span>
                        <span className="text-accent font-bold">{fps} FPS</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Sliders className="w-4 h-4 text-text-muted" />
                        <input
                          type="range"
                          min="30"
                          max="120"
                          value={fps}
                          onChange={(e) => setFps(Number(e.target.value))}
                          className="flex-1 accent-accent"
                        />
                      </div>
                    </div>

                    {/* Network Noise Selector */}
                    <div className="space-y-2">
                      <span className="text-xs font-mono text-text-secondary uppercase block">Network Noise Jitter</span>
                      <div className="flex gap-2">
                        {['low', 'med', 'high'].map((mode) => (
                          <button
                            key={mode}
                            onClick={() => setNetworkNoise(mode as any)}
                            className={`flex-1 py-2 rounded-xl font-mono text-xs uppercase transition-all duration-300 border ${
                              networkNoise === mode
                                ? 'bg-accent/15 border-accent/30 text-accent font-bold'
                                : 'border-border text-text-secondary hover:text-text-primary hover:bg-surface/30'
                            }`}
                          >
                            {mode}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Manual Jitter Injector */}
                    <div className="space-y-2">
                      <span className="text-xs font-mono text-text-secondary uppercase block">Manual Jitter Injector</span>
                      <button
                        onClick={injectJitter}
                        className="w-full py-2 px-4 rounded-xl font-mono text-xs uppercase transition-all duration-300 border border-red-500/30 bg-red-500/10 text-red-400 hover:bg-red-500/20 active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                        Inject Spike
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ── 2. FocusFlow Simulator Workspace ── */}
              {activeTab === 'stealth' && (
                <motion.div
                  key="stealth"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 flex-1 flex flex-col justify-between"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border/60 pb-5">
                    <div>
                      <h3 className="font-sans font-bold text-lg text-text-primary">HUD Screen Affinity Excluder</h3>
                      <p className="text-xs text-text-secondary mt-0.5">Simulate screen capture bypass affinity calls hiding overlays from targeted capture tools.</p>
                    </div>
                    {/* Exclusion Status */}
                    <div className="flex items-center gap-2 text-xs font-mono bg-bg/40 border border-border px-4 py-2 rounded-xl">
                      <span className="text-text-muted">EXCLUSION:</span>
                      <span className={`font-bold ${exclusionEnabled ? 'text-accent' : 'text-text-muted'}`}>
                        {exclusionEnabled ? 'WDA_EXCLUDE (ON)' : 'NONE (OFF)'}
                      </span>
                    </div>
                  </div>

                  {/* Dual monitor screen visualization */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Monitor View (Physical screen) */}
                    <div className="space-y-2">
                      <p className="text-[10px] font-mono text-text-muted uppercase tracking-wider">// 1. Physical Monitor (User view)</p>
                      <div className="aspect-[16/10] bg-bg/50 rounded-2xl border border-border/80 relative overflow-hidden flex items-center justify-center neumorphic-in">
                        <div className="text-center space-y-1 select-none">
                          <p className="text-xs text-text-secondary font-semibold">Mock Desktop Context</p>
                          <p className="text-[10px] text-text-muted">General document study notes</p>
                        </div>
                        {/* Interactive floating HUD overlays */}
                        <div className="absolute bottom-4 right-4 p-4 rounded-xl border border-accent/20 bg-surface/80 backdrop-blur-md text-[10px] font-mono leading-relaxed text-accent max-w-[180px] shadow-lg">
                          <p className="font-bold border-b border-accent/20 pb-1 flex items-center gap-1.5">
                            <Zap className="w-3 h-3 animate-pulse" />
                            <span>Stealth Socratic HUD</span>
                          </p>
                          <p className="mt-1 text-text-secondary">Q: Solve Integral x*e^x</p>
                          <p className="text-text-primary font-semibold mt-0.5">A: Apply integration by parts...</p>
                        </div>
                      </div>
                    </div>

                    {/* Captured buffer View (OBS / Recorder capture) */}
                    <div className="space-y-2">
                      <p className="text-[10px] font-mono text-text-muted uppercase tracking-wider">// 2. Screen Capture Buffer (OBS/Teams view)</p>
                      <div className="aspect-[16/10] bg-bg/50 rounded-2xl border border-border/80 relative overflow-hidden flex items-center justify-center neumorphic-in">
                        <div className="text-center space-y-1 select-none">
                          <p className="text-xs text-text-secondary font-semibold">Mock Desktop Context</p>
                          <p className="text-[10px] text-text-muted">General document study notes</p>
                        </div>
                        {/* Capture HUD visible only if exclusion is disabled */}
                        <AnimatePresence>
                          {!exclusionEnabled && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.95 }}
                              className="absolute bottom-4 right-4 p-4 rounded-xl border border-accent/20 bg-surface/80 backdrop-blur-md text-[10px] font-mono leading-relaxed text-accent max-w-[180px]"
                            >
                              <p className="font-bold border-b border-accent/20 pb-1 flex items-center gap-1.5">
                                <Zap className="w-3 h-3" />
                                <span>Stealth Socratic HUD</span>
                              </p>
                              <p className="mt-1 text-text-secondary">Q: Solve Integral x*e^x</p>
                              <p className="text-text-primary font-semibold mt-0.5">A: Apply integration by parts...</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                        {exclusionEnabled && (
                          <div className="absolute inset-0 bg-accent/[0.02] flex items-center justify-center">
                            <span className="font-mono text-[9px] text-accent/40 bg-accent/5 border border-accent/10 px-3 py-1.5 rounded-lg select-none">
                              HUD Excluded From Frame Buffer
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Switch toggle control */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/60">
                    <div className="font-sans">
                      <p className="text-sm font-semibold text-text-primary">Apply WDA_EXCLUDEFROMCAPTURE Affinity</p>
                      <p className="text-xs text-text-secondary mt-0.5">Calls ctypes to set layout exclusion properties preventing capturing pipelines.</p>
                    </div>
                    {/* Toggle Switch */}
                    <button
                      onClick={() => setExclusionEnabled(!exclusionEnabled)}
                      className={`w-12 h-6 rounded-full transition-all duration-300 relative ${
                        exclusionEnabled ? 'bg-accent shadow-[0_0_8px_#DFB15B]' : 'bg-border'
                      }`}
                    >
                      <span
                        className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-all duration-300 ${
                          exclusionEnabled ? 'translate-x-6' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* ── 3. MarkFlow CV Contour Analyzer Workspace ── */}
              {activeTab === 'vision' && (
                <motion.div
                  key="vision"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 flex-1 flex flex-col justify-between"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border/60 pb-5">
                    <div>
                      <h3 className="font-sans font-bold text-lg text-text-primary">OpenCV Contour Segmenter</h3>
                      <p className="text-xs text-text-secondary mt-0.5">Filter red-ink HSV channels and isolate handwritten scores with TF Lite contour trackers.</p>
                    </div>
                    {/* Models outputs */}
                    <div className="flex items-center gap-4 text-xs font-mono bg-bg/40 border border-border px-4 py-2 rounded-xl">
                      <div>
                        <span className="text-text-muted">CALIBRATED:</span>{' '}
                        <span className={`font-bold ${recognizedMarks[0].matched ? 'text-accent' : 'text-red-400'}`}>
                          {recognizedMarks[0].matched ? 'YES' : 'NO'}
                        </span>
                      </div>
                      <div>
                        <span className="text-text-muted">COMPILED:</span>{' '}
                        <span className="text-text-primary font-bold">
                          {recognizedMarks[0].matched ? '17/20' : '0/20'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Image filter rendering */}
                  <div className="aspect-[21/9] bg-bg/50 rounded-2xl border border-border flex items-center justify-center relative overflow-hidden neumorphic-in p-6">
                    {/* Grading Sheet representation */}
                    <div className="flex gap-12 items-center justify-center w-full max-w-lg select-none">
                      
                      {/* Left: Input exam paper */}
                      <div className="flex-1 p-4 bg-surface border border-border rounded-xl aspect-square flex flex-col justify-between relative shadow-md">
                        <span className="text-[8px] font-mono text-text-muted uppercase tracking-wider">// 1. Raw Camera Frame</span>
                        <div className="space-y-1.5 my-3 font-sans text-[10px] text-text-secondary leading-normal">
                          <p>Question 1: Explain memory safety.</p>
                          <p className="text-text-muted">Answer details: Rust manages memory using ownership rules...</p>
                        </div>
                        {/* Red pen circle marking */}
                        <div className="absolute top-3 right-3 w-8 h-8 rounded-full border border-red-500/80 flex items-center justify-center text-[10px] font-bold text-red-500/80 select-none">
                          9
                        </div>
                      </div>

                      {/* Right: CV filtered Output */}
                      <div className="flex-1 p-4 bg-surface border border-border rounded-xl aspect-square flex flex-col justify-between relative shadow-md">
                        <span className="text-[8px] font-mono text-text-muted uppercase tracking-wider">// 2. OpenCV Processing</span>
                        
                        {/* Threshold simulation mask */}
                        <div className="flex-1 flex flex-col items-center justify-center my-3 relative">
                          {isProcessingModel ? (
                            <RefreshCw className="w-5 h-5 animate-spin text-accent" />
                          ) : recognizedMarks[0].matched ? (
                            <>
                              <div className="absolute top-0 right-0 w-8 h-8 rounded-full border-2 border-accent flex items-center justify-center text-[10px] font-bold text-accent shadow-[0_0_8px_#DFB15B] animate-pulse">
                                9
                              </div>
                              <span className="font-mono text-[9px] text-accent/60 bg-accent/5 border border-accent/10 px-2.5 py-1 rounded-md mt-6">
                                Contour Tracked [9]
                              </span>
                            </>
                          ) : (
                            <span className="text-[9px] font-mono text-text-muted text-center leading-normal">
                              {hsvThreshold < 50 ? 'Threshold too low: filter noise' : 'Threshold too high: signal lost'}
                            </span>
                          )}
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* HSV Slider */}
                  <div className="space-y-2 pt-4">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-text-secondary uppercase">HSV Target Threshold</span>
                      <span className="text-accent font-bold">HUE Range: 50 – {hsvThreshold}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Sliders className="w-4 h-4 text-text-muted" />
                      <input
                        type="range"
                        min="20"
                        max="100"
                        value={hsvThreshold}
                        onChange={(e) => setHsvThreshold(Number(e.target.value))}
                        className="flex-1 accent-accent"
                      />
                    </div>
                  </div>

                </motion.div>
              )}

            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
