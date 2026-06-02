import React from "react";
import { FadeIn } from "./FadeIn";
import { AnimatedText } from "./AnimatedText";
import { ContactButton } from "./ContactButton";
import { Magnet } from "./Magnet";

export const AboutSection: React.FC = () => {
  const textContent =
    "With a strong focus on systems programming and network engineering, i specialize in low-latency desktop applications, real-time communication, and performance optimization. I build robust tools in Rust that are designed for maximum efficiency and speed. Let's create something powerful!";

  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col justify-center items-center bg-dark-bg px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
    >
      {/* Background Grids & Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 z-0 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mesh-glow-blue scale-125 z-0 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 mesh-glow-purple z-0 pointer-events-none" />

      {/* Decorative Corner Icons */}
      
      {/* Top-Left Moon Icon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-10 select-none">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="Moon 3D"
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)] hover:rotate-6 transition-transform duration-500 ease-out"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Bottom-Left 3D Object */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-10 select-none">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="Object 3D"
            className="w-[100px] sm:w-[140px] md:w-[180px] h-auto object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)] hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Top-Right Lego Icon */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-10 select-none">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="Lego 3D"
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)] hover:-rotate-6 transition-transform duration-500 ease-out"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Bottom-Right 3D Group */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-10 select-none">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="Group 3D"
            className="w-[130px] sm:w-[170px] md:w-[220px] h-auto object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)] hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* About Content Wrapper */}
      <div className="flex flex-col items-center justify-center text-center z-20 max-w-5xl">
        {/* Title */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-10 sm:mb-14 md:mb-16 flex items-center justify-center flex-wrap gap-x-[1.5vw] gap-y-[0.5vw]"
            style={{ fontSize: "clamp(3rem, 10vw, 120px)" }}
          >
            <span>About</span>
            <span 
              className="inline-block w-[12vw] h-[5vw] rounded-full align-middle bg-cover bg-center border border-light-text/20 shadow-[0_0_35px_rgba(147,51,234,0.25)] hover:scale-105 hover:border-light-text/40 transition-all duration-500 cursor-pointer" 
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=400&auto=format&fit=crop")',
              }}
            ></span>
            <span>me</span>
          </h2>
        </FadeIn>

        {/* Scroll Reveal Text */}
        <AnimatedText
          text={textContent}
          className="text-light-text font-medium text-center leading-relaxed max-w-[760px] mb-16 sm:mb-20 md:mb-24"
          style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
        />

        {/* Contact Button */}
        <FadeIn delay={0.2} y={20}>
          <Magnet padding={50} strength={2.5} activeTransition="transform 0.2s ease-out" inactiveTransition="transform 0.4s ease-in-out">
            <ContactButton className="px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base border border-white/20 shadow-2xl animate-pulse" />
          </Magnet>
        </FadeIn>
      </div>
    </section>
  );
};
