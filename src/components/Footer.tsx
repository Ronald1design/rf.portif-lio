export default function Footer() {
  return (
    <footer className="relative z-1 border-t border-border-color px-5 md:px-10 py-5 md:py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
      <div className="font-display text-[18px] tracking-[3px] text-text-muted">RONALD</div>
      <span className="font-mono text-[10px] tracking-[2px] text-text-muted">© 2025 Ronald Ferraz — Todos os Direitos Reservados</span>
      <ul className="flex justify-center gap-6 list-none">
        <li><a href="https://www.behance.net/ronaldferraz" target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] tracking-[2px] uppercase text-text-muted no-underline transition-colors duration-200 hover:text-accent">Behance</a></li>
        <li><a href="https://www.linkedin.com/in/ronald-ferraz-sousa-228087347/?isSelfProfile=true" target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] tracking-[2px] uppercase text-text-muted no-underline transition-colors duration-200 hover:text-accent">LinkedIn</a></li>
        <li><a href="https://www.instagram.com/ronaldf.design/" target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] tracking-[2px] uppercase text-text-muted no-underline transition-colors duration-200 hover:text-accent">Instagram</a></li>
      </ul>
    </footer>
  );
}
