import React from "react";
import { Magnet } from "./Magnet";
import { FadeIn } from "./FadeIn";
import { ContactButton } from "./ContactButton";

export const HeroSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full flex flex-col justify-between overflow-hidden bg-dark-bg select-none">
      {/* Background Grids & Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 z-0 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mesh-glow-purple scale-125 z-0 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 mesh-glow-orange scale-110 z-0 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 mesh-glow-blue scale-110 z-0 pointer-events-none" />

      {/* Floating Pill Navbar */}
      <FadeIn as="nav" delay={0} y={-20} className="fixed top-6 left-1/2 -translate-x-1/2 flex items-center justify-between bg-dark-bg/60 backdrop-blur-xl px-6 py-3.5 sm:px-8 sm:py-4 rounded-full border border-light-text/10 shadow-2xl z-50 w-[90%] max-w-[800px] pointer-events-auto">
        <span className="font-bold tracking-widest text-light-text cursor-pointer hover:text-white transition-colors text-xs sm:text-sm">
          ADARSH.DEV
        </span>
        <div className="flex gap-4 sm:gap-6 md:gap-8 items-center">
          <Magnet padding={15} strength={1.2}>
            <button
              onClick={() => scrollToSection("about")}
              className="text-light-text/80 hover:text-white font-medium uppercase tracking-wider transition-colors text-[10px] sm:text-xs cursor-pointer"
            >
              About
            </button>
          </Magnet>
          <Magnet padding={15} strength={1.2}>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-light-text/80 hover:text-white font-medium uppercase tracking-wider transition-colors text-[10px] sm:text-xs cursor-pointer"
            >
              Skills
            </button>
          </Magnet>
          <Magnet padding={15} strength={1.2}>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-light-text/80 hover:text-white font-medium uppercase tracking-wider transition-colors text-[10px] sm:text-xs cursor-pointer"
            >
              Projects
            </button>
          </Magnet>
          <Magnet padding={15} strength={1.2}>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-light-text/80 hover:text-white font-medium uppercase tracking-wider transition-colors text-[10px] sm:text-xs cursor-pointer"
            >
              Contact
            </button>
          </Magnet>
        </div>
      </FadeIn>

      {/* Hero Heading Container */}
      <div className="w-full flex-grow flex items-center justify-center relative z-10 pointer-events-none mt-20 sm:mt-10 md:mt-0">
        <div className="w-full overflow-hidden px-4">
          <FadeIn as="h1" delay={0.15} y={40} className="hero-heading w-full text-center font-black uppercase tracking-tight leading-none text-[8.5vw] sm:text-[9.5vw] md:text-[10vw] lg:text-[11vw] flex items-center justify-center flex-wrap gap-x-[1.5vw] gap-y-[0.5vw]">
            <span>Hi,</span>
            <span 
              className="inline-block w-[12vw] h-[5vw] rounded-full align-middle bg-cover bg-center border border-light-text/20 shadow-[0_0_30px_rgba(187,204,215,0.25)] hover:scale-105 hover:border-light-text/40 transition-all duration-500 pointer-events-auto cursor-pointer" 
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=400&auto=format&fit=crop")',
              }}
            ></span>
            <span>i&apos;m adarsh</span>
          </FadeIn>
        </div>
      </div>

      {/* Hero Portrait - Center Magnet */}
      <div className="absolute left-1/2 -translate-x-1/2 z-20 w-[170px] sm:w-[220px] md:w-[270px] lg:w-[320px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto">
        <FadeIn delay={0.6} y={30} className="w-full h-full flex justify-center items-end">
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="w-full"
          >
            <img
              src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
              alt="Adarsh Kumar Singh"
              className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)] hover:brightness-110 transition-all duration-300"
              loading="eager"
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="w-full flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 z-30 relative gap-4">
        {/* Left Subtitle */}
        <FadeIn as="p" delay={0.35} y={20} className="text-light-text/70 font-light uppercase tracking-wide leading-snug text-left max-w-[160px] sm:max-w-[220px] md:max-w-[260px] lg:max-w-[340px]" style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}>
          a systems developer driven by crafting low-latency and high-performance software solutions
        </FadeIn>

        {/* Right Button */}
        <FadeIn delay={0.5} y={20} className="pointer-events-auto">
          <Magnet padding={50} strength={2.5} activeTransition="transform 0.2s ease-out" inactiveTransition="transform 0.4s ease-in-out">
            <ContactButton className="px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base border border-white/20 shadow-2xl" />
          </Magnet>
        </FadeIn>
      </div>
    </section>
  );
};
