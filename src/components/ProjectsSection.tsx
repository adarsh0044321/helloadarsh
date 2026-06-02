import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { LiveProjectButton } from "./LiveProjectButton";
import { Magnet } from "./Magnet";

interface ProjectData {
  id: string;
  category: string;
  name: string;
  url: string;
  imgCol1Row1: string;
  imgCol1Row2: string;
  imgCol2: string;
  objectFit?: "cover" | "contain";
}

const PROJECTS: ProjectData[] = [
  {
    id: "01",
    category: "Rust & Remote Streaming",
    name: "Beacon-Pulse",
    url: "https://github.com/adarsh0044321/beacon-pulse",
    imgCol1Row1: "/beacon_server_cli.png",
    imgCol1Row2: "/beacon_player_cli.png",
    imgCol2: "/beacon_pulse_promo.png",
    objectFit: "contain",
  },
  {
    id: "02",
    category: "Systems & Network Capture",
    name: "Net-Analyzer",
    url: "https://github.com/adarsh0044321",
    imgCol1Row1:
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
    imgCol1Row2:
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
    imgCol2:
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85",
  },
  {
    id: "03",
    category: "Windows Deployments",
    name: "Installer Builder",
    url: "https://github.com/adarsh0044321",
    imgCol1Row1:
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
    imgCol1Row2:
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
    imgCol2:
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85",
  },
];

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  range: [number, number];
  targetScale: number;
  scrollYProgress: MotionValue<number>;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  range,
  targetScale,
  scrollYProgress,
}) => {
  const scale = useTransform(scrollYProgress, range, [1, targetScale]);

  return (
    <div
      className="sticky top-24 md:top-32 w-full h-[72vh] sm:h-[76vh] md:h-[80vh] flex items-center justify-center select-none"
      style={{
        zIndex: index + 1,
      }}
    >
      <motion.div
        style={{
          scale,
          top: `${index * 28}px`,
        }}
        className="w-full h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between overflow-hidden shadow-2xl"
      >
        {/* Top Row */}
        <div className="flex justify-between items-center gap-4 z-10 w-full">
          <div className="flex items-center gap-3 sm:gap-5">
            <span
              className="font-black text-light-text leading-none tracking-tight"
              style={{ fontSize: "clamp(2rem, 6vw, 80px)" }}
            >
              {project.id}
            </span>
            <div className="flex flex-col text-left">
              <span className="text-[10px] sm:text-xs uppercase tracking-widest opacity-60 text-light-text mb-1">
                {project.category}
              </span>
              <h3
                className="font-bold text-light-text uppercase leading-none"
                style={{ fontSize: "clamp(1.1rem, 2.5vw, 2.5rem)" }}
              >
                {project.name}
              </h3>
            </div>
          </div>
          <Magnet padding={35} strength={2}>
            <LiveProjectButton url={project.url} />
          </Magnet>
        </div>

        {/* Bottom Row - Two-column image grid */}
        <div className="grid grid-cols-10 gap-3 w-full flex-grow mt-4 sm:mt-6 overflow-hidden max-h-[70%]">
          {/* Left Column (40%) */}
          <div className="col-span-4 flex flex-col gap-3 h-full overflow-hidden">
            <div className="w-full h-1/2 overflow-hidden rounded-[20px] sm:rounded-[30px] md:rounded-[40px] bg-black/30 border border-light-text/5 flex items-center justify-center">
              <img
                src={project.imgCol1Row1}
                alt="Col1 Row1"
                className={`w-full h-full ${project.objectFit === "contain" ? "object-contain p-3 sm:p-4" : "object-cover"}`}
                loading="lazy"
              />
            </div>
            <div className="w-full h-1/2 overflow-hidden rounded-[20px] sm:rounded-[30px] md:rounded-[40px] bg-black/30 border border-light-text/5 flex items-center justify-center">
              <img
                src={project.imgCol1Row2}
                alt="Col1 Row2"
                className={`w-full h-full ${project.objectFit === "contain" ? "object-contain p-3 sm:p-4" : "object-cover"}`}
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column (60%) */}
          <div className="col-span-6 h-full overflow-hidden rounded-[20px] sm:rounded-[30px] md:rounded-[40px] bg-black/30 border border-light-text/5 flex items-center justify-center">
            <img
              src={project.imgCol2}
              alt="Col2 Full"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const totalCards = PROJECTS.length;

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative bg-dark-bg px-5 sm:px-8 md:px-10 pb-20 sm:pb-24 md:pb-32 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-20 flex flex-col items-center"
    >
      {/* Background Grids & Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 z-0 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 mesh-glow-orange scale-125 z-0 pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 mesh-glow-purple scale-125 z-0 pointer-events-none" />

      <div className="max-w-5xl w-full flex flex-col items-center z-10">
        {/* Section Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase text-center mt-20 sm:mt-24 md:mt-32 mb-10 md:mb-16 leading-none tracking-tight flex items-center justify-center flex-wrap gap-x-[1.5vw] gap-y-[0.5vw]"
            style={{ fontSize: "clamp(3rem, 10vw, 120px)" }}
          >
            <span>Selected</span>
            <span 
              className="inline-block w-[12vw] h-[5vw] rounded-full align-middle bg-cover bg-center border border-light-text/20 shadow-[0_0_35px_rgba(249,115,22,0.25)] hover:scale-105 hover:border-light-text/40 transition-all duration-500 cursor-pointer" 
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop")',
              }}
            ></span>
            <span>Projects</span>
          </h2>
        </FadeIn>

        {/* Stacking Cards Container */}
        <div className="w-full flex flex-col gap-[8vh] sm:gap-[12vh] md:gap-[15vh]">
          {PROJECTS.map((project, index) => {
            const targetScale = 1 - (totalCards - 1 - index) * 0.03;
            // Spread the range across scroll progress
            const start = index / totalCards;
            const end = 1;

            return (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                range={[start, end]}
                targetScale={targetScale}
                scrollYProgress={scrollYProgress}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
