import { HeroSection } from "./components/HeroSection";
import { MarqueeSection } from "./components/MarqueeSection";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";

function App() {
  return (
    <main className="w-full min-h-screen bg-dark-bg text-light-text font-sans selection:bg-[#B600A8]/30 selection:text-white">
      {/* Hero Landing */}
      <HeroSection />

      {/* horizontal image showcase */}
      <MarqueeSection />

      {/* About summary and character animate */}
      <AboutSection />

      {/* High contrast Services expertise list */}
      <ServicesSection />

      {/* Sticky stacking projects cards */}
      <ProjectsSection />

      {/* Footer Contact Details */}
      <ContactSection />
    </main>
  );
}

export default App;
