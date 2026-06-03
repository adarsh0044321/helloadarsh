export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="font-mono text-accent text-lg font-semibold">
          adarsh_<span className="cursor-blink">|</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#about"
            className="font-mono text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            About
          </a>
          <a
            href="#skills"
            className="font-mono text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="font-mono text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="font-mono text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
