export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-5 md:px-10 py-3.5 md:py-5 border-b border-border-color bg-[#0c0c0c]/85 backdrop-blur-md">
      <div className="font-display text-[18px] md:text-[22px] tracking-[3px] text-text-primary">
        RF <span className="text-accent font-script text-[18px] tracking-normal">Design</span>
      </div>
      <ul className="hidden md:flex gap-8 list-none">
        <li><a href="#work" className="font-mono text-[11px] tracking-[2px] uppercase text-text-secondary no-underline transition-colors duration-200 hover:text-accent">Trabalhos</a></li>
        <li><a href="#about" className="font-mono text-[11px] tracking-[2px] uppercase text-text-secondary no-underline transition-colors duration-200 hover:text-accent">Sobre</a></li>
        <li><a href="#process" className="font-mono text-[11px] tracking-[2px] uppercase text-text-secondary no-underline transition-colors duration-200 hover:text-accent">Processo</a></li>
        <li><a href="#contact" className="font-mono text-[11px] tracking-[2px] uppercase text-text-secondary no-underline transition-colors duration-200 hover:text-accent">Contato</a></li>
      </ul>
      <a href="#contact" className="hidden md:inline-block font-mono text-[10px] md:text-[11px] tracking-[2px] uppercase text-page-bg bg-accent px-4 md:px-5 py-2 rounded-full no-underline transition-shadow duration-200 hover:shadow-[0_0_30px_rgba(163,230,53,0.25)]">
        Me Contratar
      </a>
    </nav>
  );
}
