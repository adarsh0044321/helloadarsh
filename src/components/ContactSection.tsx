'use client';

import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-label">// contact</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-sans font-semibold text-3xl md:text-4xl text-text-primary leading-tight mb-6">
              Let&apos;s build something.
            </h2>
            <p className="text-text-secondary text-base leading-relaxed mb-10">
              Have a project that needs low-level performance or a system that needs to be built
              right? Let&apos;s talk.
            </p>

            <a
              href="mailto:adarshkumarsingh004@gmail.com"
              className="font-mono text-sm text-accent hover:underline"
            >
              adarshkumarsingh004@gmail.com
            </a>

            <div className="mt-6 flex gap-6">
              <a
                href="https://github.com/adarsh0044321"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                github
              </a>
              <a
                href="https://www.linkedin.com/in/adarsh-kumar-singh-166b76317"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                linkedin
              </a>
            </div>
          </motion.div>

          {/* Right column — Netlify form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form name="contact" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />

              <div className="flex flex-col gap-8">
                <div>
                  <label
                    htmlFor="name"
                    className="font-mono text-xs text-text-muted uppercase tracking-wider mb-2 block"
                  >
                    name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    className="w-full bg-surface border border-border rounded-lg px-4 py-3 font-sans text-sm text-text-primary placeholder:text-text-muted outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="font-mono text-xs text-text-muted uppercase tracking-wider mb-2 block"
                  >
                    email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                    className="w-full bg-surface border border-border rounded-lg px-4 py-3 font-sans text-sm text-text-primary placeholder:text-text-muted outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="font-mono text-xs text-text-muted uppercase tracking-wider mb-2 block"
                  >
                    message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    required
                    rows={5}
                    className="w-full bg-surface border border-border rounded-lg px-4 py-3 font-sans text-sm text-text-primary placeholder:text-text-muted outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 font-mono text-sm px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors cursor-pointer border-none"
              >
                Send message →
              </button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-border flex justify-between items-center">
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
