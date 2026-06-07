import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, Check } from 'lucide-react';

export default function ContactSection() {
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLabel(label);
    setTimeout(() => setCopiedLabel(null), 2000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border relative">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-mono uppercase tracking-widest text-accent mb-6">// contact connection</p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Biography & Interactive copy cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary leading-tight mb-6">
              Let&apos;s build something.
            </h2>
            <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-10">
              Have a project that needs low-level performance, low-latency streaming networks, or customized computer vision logic? Let&apos;s open a channel.
            </p>

            {/* Clean, copyable contact info cards */}
            <div className="space-y-4">
              <div
                onClick={() => handleCopy('adarshkumarsingh004@gmail.com', 'email address')}
                className="acrylic-glass neumorphic-out rounded-2xl p-4 flex justify-between items-center cursor-pointer hover:border-accent/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-bg border border-border group-hover:border-accent/20 transition-colors">
                    <Mail className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-[10px] text-text-muted font-mono uppercase tracking-wider mb-0.5">Email</p>
                    <p className="text-sm font-semibold text-text-primary group-hover:text-accent transition-colors font-sans">
                      adarshkumarsingh004@gmail.com
                    </p>
                  </div>
                </div>
                <span className="text-[10px] text-text-muted border border-border px-2 py-1 rounded-lg bg-bg group-hover:border-accent/30 group-hover:text-accent transition-colors shrink-0">
                  copy
                </span>
              </div>

              <div
                onClick={() => handleCopy('https://github.com/adarsh0044321', 'GitHub URL')}
                className="acrylic-glass neumorphic-out rounded-2xl p-4 flex justify-between items-center cursor-pointer hover:border-accent/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-bg border border-border group-hover:border-accent/20 transition-colors">
                    <svg className="w-4 h-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-text-muted font-mono uppercase tracking-wider mb-0.5">GitHub</p>
                    <p className="text-sm font-semibold text-text-primary group-hover:text-accent transition-colors font-sans">
                      github.com/adarsh0044321
                    </p>
                  </div>
                </div>
                <span className="text-[10px] text-text-muted border border-border px-2 py-1 rounded-lg bg-bg group-hover:border-accent/30 group-hover:text-accent transition-colors shrink-0">
                  copy
                </span>
              </div>

              <div
                onClick={() => handleCopy('https://www.linkedin.com/in/adarsh-kumar-singh-166b76317', 'LinkedIn URL')}
                className="acrylic-glass neumorphic-out rounded-2xl p-4 flex justify-between items-center cursor-pointer hover:border-accent/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-bg border border-border group-hover:border-accent/20 transition-colors">
                    <svg className="w-4 h-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-text-muted font-mono uppercase tracking-wider mb-0.5">LinkedIn</p>
                    <p className="text-sm font-semibold text-text-primary group-hover:text-accent transition-colors font-sans">
                      linkedin.com/in/adarsh-kumar-singh
                    </p>
                  </div>
                </div>
                <span className="text-[10px] text-text-muted border border-border px-2 py-1 rounded-lg bg-bg group-hover:border-accent/30 group-hover:text-accent transition-colors shrink-0">
                  copy
                </span>
              </div>
            </div>


            {/* Copy success bubble */}
            <div className="h-8 mt-6">
              <AnimatePresence>
                {copiedLabel && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="text-xs text-accent flex items-center gap-1.5"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>Copied {copiedLabel} to clipboard!</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right Column: Clean glassmorphic form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="acrylic-glass neumorphic-out rounded-2xl p-6 md:p-8">
              
              <form name="contact" method="POST" data-netlify="true" className="space-y-6">
                <input type="hidden" name="form-name" value="contact" />

                <div className="space-y-6">
                  {/* Name field */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="font-sans text-xs text-text-muted uppercase tracking-wider font-semibold select-none"
                    >
                      Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        className="peer w-full bg-bg/50 border border-border/80 rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-muted outline-none focus:border-accent/40 transition-all duration-300 neumorphic-in"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent origin-center scale-x-0 transition-transform duration-300 peer-focus:scale-x-100" />
                    </div>
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="font-sans text-xs text-text-muted uppercase tracking-wider font-semibold select-none"
                    >
                      Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="your@email.com"
                        required
                        className="peer w-full bg-bg/50 border border-border/80 rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-muted outline-none focus:border-accent/40 transition-all duration-300 neumorphic-in"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent origin-center scale-x-0 transition-transform duration-300 peer-focus:scale-x-100" />
                    </div>
                  </div>

                  {/* Message field */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="message"
                      className="font-sans text-xs text-text-muted uppercase tracking-wider font-semibold select-none"
                    >
                      Message
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Describe your project requirements..."
                        required
                        rows={5}
                        className="peer w-full bg-bg/50 border border-border/80 rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-muted outline-none focus:border-accent/40 transition-all duration-300 resize-none neumorphic-in"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent origin-center scale-x-0 transition-transform duration-300 peer-focus:scale-x-100" />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full font-sans text-xs uppercase tracking-wider py-3 bg-accent text-white font-bold rounded-xl hover:bg-accent/90 transition-colors flex items-center justify-center gap-2 cursor-pointer border-none shadow-[0_4px_12px_rgba(232,102,60,0.15)] hover:shadow-[0_4px_16px_rgba(232,102,60,0.25)]"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="font-mono text-xs text-text-muted">
            © 2026 adarsh kumar singh
          </span>
          <span className="font-mono text-xs text-text-muted">
            built with rust-colored determination
          </span>
        </div>
      </div>
    </section>
  );
}
