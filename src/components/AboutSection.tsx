import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-label">// about</p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16"
        >
          <div className="md:col-span-3">
            <h2 className="font-sans font-semibold text-2xl md:text-3xl text-text-primary leading-snug mb-8">
              Building systems that don&apos;t compromise.
            </h2>
            <div className="max-w-[55ch]">
              <p className="text-text-secondary text-base leading-relaxed mb-5">
                I work at the intersection of systems programming and network
                engineering. My focus is on desktop applications that need to be
                fast — not &ldquo;fast enough,&rdquo; but genuinely low-latency.
                Rust is my primary tool because it lets me control exactly what
                the machine does.
              </p>
              <p className="text-text-secondary text-base leading-relaxed">
                When I&apos;m not writing systems code, I&apos;m building
                real-time communication tools, remote desktop protocols, and
                deployment pipelines. I care about software that ships clean and
                runs lean.
              </p>
            </div>
          </div>

          <div className="md:col-span-2">
            <img
              src="https://framerusercontent.com/images/ajFhk3hDzd27LtsxPDROntb2jA.png"
              alt="Adarsh Kumar Singh"
              className="w-full aspect-[3/4] object-cover rounded-lg border border-border"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
