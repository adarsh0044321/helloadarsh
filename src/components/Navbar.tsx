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
    const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/90 backdrop-blur-md py-4 border-b border-border shadow-lg shadow-black/10'
          : 'bg-transparent py-6 border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="font-sans text-xl font-bold tracking-tight text-text-primary hover:text-accent transition-colors">
          Adarsh<span className="text-accent">.</span>
        </a>

        <div className="flex items-center gap-6 md:gap-8">
          {['about', 'skills', 'projects', 'contact'].map((item) => {
            const isActive = activeSection === item;
            return (
              <a
                key={item}
                href={`#${item}`}
                className={`font-sans text-xs md:text-sm tracking-wide transition-all duration-300 relative py-1 ${
                  isActive
                    ? 'text-accent font-medium'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-accent shadow-[0_0_8px_#E8663C]" />
                )}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
