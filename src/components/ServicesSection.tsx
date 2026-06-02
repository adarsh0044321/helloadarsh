import React from "react";
import { FadeIn } from "./FadeIn";

interface ServiceItem {
  id: string;
  name: string;
  description: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: "01",
    name: "Systems Programming",
    description:
      "Building efficient, memory-safe, and low-latency desktop software using Rust and C#.",
  },
  {
    id: "02",
    name: "Network Systems",
    description:
      "Developing client-server architectures, remote desktop systems, and real-time LAN communication protocols.",
  },
  {
    id: "03",
    name: "UI/UX Development",
    description:
      "Designing modern, clean desktop and web user interfaces integrated with high-performance backends.",
  },
  {
    id: "04",
    name: "Optimization",
    description:
      "Profiling and optimizing software for minimum CPU/memory footprint and maximum responsiveness.",
  },
  {
    id: "05",
    name: "Software Deployment",
    description:
      "Creating reliable installer packages (NSIS), tray services, and Windows system-level integrations.",
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="bg-white text-dark-bg px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] relative z-10 select-none"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="text-dark-bg font-black uppercase text-center mb-16 sm:mb-20 md:mb-28 leading-none tracking-tight"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            Services
          </h2>
        </FadeIn>

        {/* Services List */}
        <div className="flex flex-col border-t border-[#0C0C0C]/15">
          {SERVICES.map((item, index) => (
            <FadeIn
              key={item.id}
              delay={index * 0.1}
              y={30}
              className="group flex items-center gap-6 sm:gap-12 md:gap-16 py-8 sm:py-10 md:py-12 border-b border-[#0C0C0C]/15 text-left transition-all duration-300 hover:pl-4 sm:hover:pl-6 hover:bg-[#FAF9F6] cursor-pointer"
            >
              {/* Number ID */}
              <span
                className="font-black text-dark-bg/20 group-hover:text-orange-500 leading-none tracking-tight w-[20%] sm:w-[15%] md:w-[10%] transition-colors duration-300"
                style={{ fontSize: "clamp(2rem, 8vw, 110px)" }}
              >
                {item.id}
              </span>

              {/* Stacked Name & Description */}
              <div className="flex flex-col gap-2 w-[80%] sm:w-[85%] md:w-[90%] transition-transform duration-300 group-hover:translate-x-2">
                <h3
                  className="font-semibold text-dark-bg uppercase tracking-wide group-hover:text-black transition-colors duration-300"
                  style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
                >
                  {item.name}
                </h3>
                <p
                  className="text-dark-bg font-light leading-relaxed max-w-2xl opacity-60 group-hover:opacity-85 transition-opacity duration-300"
                  style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}
                >
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
