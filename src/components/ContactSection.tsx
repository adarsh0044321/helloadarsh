import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Send, Check } from 'lucide-react';

export default function ContactSection() {
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLabel(label);
    setTimeout(() => setCopiedLabel(null), 2500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border relative">
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-label">// remote contact portal</p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Typography & Interactive social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <h2 className="font-sans font-semibold text-3xl md:text-4xl text-text-primary leading-tight mb-6">
              Let&apos;s build something.
            </h2>
            <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-10">
              Have a project that needs low-level performance, low-latency streaming networks, or customized computer vision logic? Let&apos;s open a channel.
            </p>

            {/* Interactive Remote git clone copy blocks */}
            <div className="space-y-4">
              <div
                onClick={() => handleCopy('https://github.com/adarsh0044321', 'github link')}
                className="terminal-card p-4 bg-surface border border-border flex justify-between items-center cursor-pointer hover:border-accent/40 transition-all duration-300 group"
              >
                <div className="font-mono text-xs select-none">
                  <p className="text-text-muted font-mono text-[9px] uppercase tracking-wider mb-1">// github remote</p>
                  <p className="text-text-primary font-semibold group-hover:text-accent transition-colors font-mono">
                    git clone adarsh0044321
                  </p>
                </div>
                <span className="font-mono text-[10px] text-text-muted border border-border px-2 py-1 rounded bg-bg group-hover:border-accent/30 group-hover:text-accent transition-colors shrink-0">
                  copy
                </span>
              </div>

              <div
                onClick={() => handleCopy('adarshkumarsingh004@gmail.com', 'email address')}
                className="terminal-card p-4 bg-surface border border-border flex justify-between items-center cursor-pointer hover:border-accent/40 transition-all duration-300 group"
              >
                <div className="font-mono text-xs select-none">
                  <p className="text-text-muted font-mono text-[9px] uppercase tracking-wider mb-1">// email router</p>
                  <p className="text-text-primary font-semibold group-hover:text-accent transition-colors font-mono">
                    ping adarshkumarsingh004
                  </p>
                </div>
                <span className="font-mono text-[10px] text-text-muted border border-border px-2 py-1 rounded bg-bg group-hover:border-accent/30 group-hover:text-accent transition-colors shrink-0">
                  copy
                </span>
              </div>

              <div
                onClick={() => handleCopy('https://www.linkedin.com/in/adarsh-kumar-singh-166b76317', 'linkedin profile')}
                className="terminal-card p-4 bg-surface border border-border flex justify-between items-center cursor-pointer hover:border-accent/40 transition-all duration-300 group"
              >
                <div className="font-mono text-xs select-none">
                  <p className="text-text-muted font-mono text-[9px] uppercase tracking-wider mb-1">// linkedin link</p>
                  <p className="text-text-primary font-semibold group-hover:text-accent transition-colors font-mono">
                    connect adarsh-kumar-singh
                  </p>
                </div>
                <span className="font-mono text-[10px] text-text-muted border border-border px-2 py-1 rounded bg-bg group-hover:border-accent/30 group-hover:text-accent transition-colors shrink-0">
                  copy
                </span>
              </div>
            </div>

            {/* Copy success banner banner */}
            <div className="h-8 mt-6">
              <AnimatePresence>
                {copiedLabel && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="font-mono text-xs text-accent flex items-center gap-1.5"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>system: copied {copiedLabel} to clipboard successfully.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right Column: Sleek Netlify Form inside a terminal UI window */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="terminal-card bg-surface border border-border rounded-xl overflow-hidden shadow-lg">
              {/* Window Header */}
              <div className="px-4 py-2 bg-bg/50 border-b border-border flex items-center justify-between select-none">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-text-secondary" />
                  <span className="font-mono text-xs text-text-secondary">send_message.sh</span>
                </div>
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-border"></span>
                  <span className="w-2 h-2 rounded-full bg-border"></span>
                  <span className="w-2 h-2 rounded-full bg-accent/40"></span>
                </div>
              </div>

              {/* Form Content */}
              <form name="contact" method="POST" data-netlify="true" className="p-6 md:p-8 space-y-6">
                <input type="hidden" name="form-name" value="contact" />

                <div className="space-y-6">
                  {/* Name field */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="font-mono text-xs text-text-muted uppercase tracking-wider flex items-center gap-1.5 select-none"
                    >
                      <span className="text-accent">&gt;</span> name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="guest_user"
                        required
                        className="peer w-full bg-bg border border-border rounded-lg px-4 py-3 font-mono text-xs text-text-primary placeholder:text-text-muted outline-none focus:border-accent/40 transition-colors"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent origin-center scale-x-0 transition-transform duration-300 peer-focus:scale-x-100" />
                    </div>
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="font-mono text-xs text-text-muted uppercase tracking-wider flex items-center gap-1.5 select-none"
                    >
                      <span className="text-accent">&gt;</span> email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="guest@domain.com"
                        required
                        className="peer w-full bg-bg border border-border rounded-lg px-4 py-3 font-mono text-xs text-text-primary placeholder:text-text-muted outline-none focus:border-accent/40 transition-colors"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent origin-center scale-x-0 transition-transform duration-300 peer-focus:scale-x-100" />
                    </div>
                  </div>

                  {/* Message field */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="message"
                      className="font-mono text-xs text-text-muted uppercase tracking-wider flex items-center gap-1.5 select-none"
                    >
                      <span className="text-accent">&gt;</span> message_buffer
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        placeholder="write message here..."
                        required
                        rows={5}
                        className="peer w-full bg-bg border border-border rounded-lg px-4 py-3 font-mono text-xs text-text-primary placeholder:text-text-muted outline-none focus:border-accent/40 transition-colors resize-none"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent origin-center scale-x-0 transition-transform duration-300 peer-focus:scale-x-100" />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full font-mono text-xs uppercase tracking-wider py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors flex items-center justify-center gap-2 cursor-pointer border-none shadow-[0_4px_12px_rgba(232,102,60,0.15)] hover:shadow-[0_4px_16px_rgba(232,102,60,0.25)]"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Execute submit_form.sh</span>
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
