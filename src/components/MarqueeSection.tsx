import React, { useEffect, useState, useRef } from "react";

const IMAGES = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif",
];

export const MarqueeSection: React.FC = () => {
  const [scrollOffset, setScrollOffset] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setScrollOffset(offset);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const row1Images = IMAGES.slice(0, 11);
  const row2Images = IMAGES.slice(11);

  // Triple for seamless effect
  const row1 = [...row1Images, ...row1Images, ...row1Images];
  const row2 = [...row2Images, ...row2Images, ...row2Images];

  const row1Translate = scrollOffset - 200;
  const row2Translate = -(scrollOffset - 200);

  return (
    <section
      ref={sectionRef}
      className="bg-dark-bg py-24 sm:py-32 md:py-40 overflow-hidden flex flex-col gap-3 select-none"
    >
      {/* Row 1 - Moves Right */}
      <div className="w-full overflow-hidden">
        <div
          className="flex gap-3 transition-transform duration-75 ease-out"
          style={{
            transform: `translate3d(${row1Translate}px, 0px, 0px)`,
            willChange: "transform",
          }}
        >
          {row1.map((url, idx) => (
            <div
              key={`row1-${idx}`}
              className="flex-shrink-0 w-[420px] h-[270px] rounded-2xl overflow-hidden border border-[#D7E2EA]/10 shadow-lg bg-black/40 group cursor-pointer"
            >
              <img
                src={url}
                alt="Showcase project"
                className="w-full h-full object-cover filter grayscale opacity-70 contrast-125 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - Moves Left */}
      <div className="w-full overflow-hidden">
        <div
          className="flex gap-3 transition-transform duration-75 ease-out"
          style={{
            transform: `translate3d(${row2Translate}px, 0px, 0px)`,
            willChange: "transform",
          }}
        >
          {row2.map((url, idx) => (
            <div
              key={`row2-${idx}`}
              className="flex-shrink-0 w-[420px] h-[270px] rounded-2xl overflow-hidden border border-[#D7E2EA]/10 shadow-lg bg-black/40 group cursor-pointer"
            >
              <img
                src={url}
                alt="Showcase project"
                className="w-full h-full object-cover filter grayscale opacity-70 contrast-125 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
