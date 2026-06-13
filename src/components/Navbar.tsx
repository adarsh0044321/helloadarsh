import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = ['hero', 'about', 'skills', 'labs', 'projects', 'contact'];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: '-30% 0px -60% 0px' }
      );
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300 pointer-events-none flex justify-center w-full">
      <nav
        className={`transition-all duration-500 pointer-events-auto flex items-center justify-between gap-8 md:gap-12 px-6 w-full max-w-6xl rounded-2xl ${
          scrolled
            ? 'bg-surface/85 backdrop-blur-md backdrop-saturate-150 py-3.5 border border-border shadow-lg shadow-black/20 max-w-[580px]'
            : 'bg-transparent py-4 border border-transparent'
        }`}
      >
        <a href="#hero" className="font-sans text-lg md:text-xl font-bold tracking-tight text-text-primary hover:text-accent transition-colors shrink-0">
          Adarsh<span className="text-accent">.</span>
        </a>

        <div className="flex items-center gap-5 md:gap-6">
          {['about', 'skills', 'labs', 'projects', 'contact'].map((item) => {
            const isActive = activeSection === item;
            const displayLabel = item === 'labs' ? 'Labs' : item.charAt(0).toUpperCase() + item.slice(1);
            return (
              <a
                key={item}
                href={`#${item}`}
                className={`font-sans text-xs md:text-sm tracking-wide transition-all duration-300 relative px-2.5 py-1 rounded-lg border ${
                  isActive
                    ? 'text-accent font-medium bg-accent/[0.04] border-accent/25 shadow-[0_0_10px_rgba(223,177,91,0.2)]'
                    : 'text-text-secondary hover:text-text-primary border-transparent'
                }`}
              >
                {displayLabel}
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
