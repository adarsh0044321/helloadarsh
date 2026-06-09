import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const logs = [
    "sys.init(): booting adarsh-core...",
    "subsystems: loading UDP streaming sockets...",
    "compiler: checking OpenCV HSV channel filters...",
    "models: loading DigitRecognizer.tflite weights...",
    "status: resources ready."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 8) + 6;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 400); // Trigger transition callback
          }, 400);
          return 100;
        }
        return next;
      });
    }, 70);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    if (progress > 20 && logIndex === 0) setLogIndex(1);
    if (progress > 45 && logIndex === 1) setLogIndex(2);
    if (progress > 70 && logIndex === 2) setLogIndex(3);
    if (progress > 90 && logIndex === 3) setLogIndex(4);
  }, [progress, logIndex]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-bg z-[999] flex flex-col items-center justify-center font-mono"
        >
          <div className="flex flex-col items-center max-w-sm w-full px-6">
            {/* Spinning loader ring */}
            <div className="relative w-16 h-16 mb-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                className="w-full h-full rounded-full border-[2px] border-border border-t-accent"
              />
              <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-accent">
                {Math.min(progress, 100)}%
              </div>
            </div>

            {/* Simulated compile logs */}
            <div className="w-full bg-surface/30 border border-border p-4 rounded-xl text-left h-[76px] flex flex-col justify-end overflow-hidden">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={logIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="text-[10px] text-text-secondary leading-relaxed"
                >
                  <p className="text-accent/60">// system pipeline boot</p>
                  <p className="text-text-primary font-semibold mt-0.5 truncate">{logs[logIndex]}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
