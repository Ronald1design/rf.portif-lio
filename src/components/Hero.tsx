export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen grid grid-rows-[1fr_auto] px-4 md:px-10 z-1 overflow-hidden">
      {/* dashed selection frame as background motif */}
      <div className="absolute border border-dashed border-border-dashed pointer-events-none top-[15%] left-[5%] right-[5%] bottom-[12%]">
        <div className="absolute w-2 h-2 bg-text-secondary opacity-40 -top-px -left-px"></div>
        <div className="absolute w-2 h-2 bg-text-secondary opacity-40 -top-px -right-px"></div>
        <div className="absolute w-2 h-2 bg-text-secondary opacity-40 -bottom-px -left-px"></div>
        <div className="absolute w-2 h-2 bg-text-secondary opacity-40 -bottom-px -right-px"></div>
        <div className="absolute w-2 h-2 bg-text-secondary opacity-40 -top-px left-1/2 -translate-x-1/2"></div>
        <div className="absolute w-2 h-2 bg-text-secondary opacity-40 -bottom-px left-1/2 -translate-x-1/2"></div>
      </div>

      <img src="/img/profile-nobg.png" alt="" className="absolute -right-10 md:right-0 top-1/2 -translate-y-1/2 w-[65vw] max-w-[500px] opacity-[0.08] grayscale pointer-events-none object-contain z-0" />

      <div className="relative z-2 flex flex-col justify-center pt-[80px] md:pt-[100px] pb-6 md:pb-10 max-w-[700px]">
        <div className="font-mono text-[11px] tracking-[3px] uppercase text-accent mb-5 flex items-center gap-3 animate-fade-up [animation-delay:0.1s]">
          <div className="w-8 h-px bg-accent"></div>
          Portfólio de Design Gráfico
        </div>
        <h1 className="font-display text-[clamp(48px,16vw,130px)] leading-[0.9] tracking-[2px] mb-8 animate-fade-up [animation-delay:0.2s]">
          RONALD<br />FERRAZ
        </h1>
        <p className="text-[13px] md:text-[15px] leading-[1.7] text-text-secondary max-w-[460px] mb-8 md:mb-12 animate-fade-up [animation-delay:0.4s]">
          Designer Gráfico focado na execução ágil e em <em className="text-text-primary not-italic font-medium">materializar ideias</em> através de peças digitais e produtos físicos de alto impacto.
          Criando comunicação direta e de alta performance — das redes sociais a materiais gráficos.
        </p>
        <div className="flex flex-wrap gap-3 md:gap-4 items-center animate-fade-up [animation-delay:0.5s]">
          <a href="#work" className="font-mono text-[10px] md:text-[11px] tracking-[2px] uppercase text-page-bg bg-accent px-6 md:px-8 py-3 md:py-3.5 rounded-full no-underline border-none transition-shadow duration-250 hover:shadow-[0_0_30px_rgba(163,230,53,0.25)]">
            Ver Trabalhos
          </a>
          <a href="#contact" className="font-mono text-[10px] md:text-[11px] tracking-[2px] uppercase text-text-secondary bg-transparent px-6 md:px-8 py-3 md:py-3.5 rounded-full no-underline border border-border-color transition-colors duration-200 hover:border-accent hover:text-accent">
            Vamos Conversar
          </a>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 md:gap-10 items-center py-5 md:py-6 md:pb-9 border-t border-border-color z-2">
        <div className="flex flex-col gap-1">
          <span className="font-display text-[24px] md:text-[36px] text-text-primary leading-none">06<span className="text-accent">+</span></span>
          <span className="font-mono text-[9px] md:text-[10px] tracking-[2px] uppercase text-text-muted">Disciplinas de Design</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-display text-[24px] md:text-[36px] text-text-primary leading-none">50<span className="text-accent">+</span></span>
          <span className="font-mono text-[9px] md:text-[10px] tracking-[2px] uppercase text-text-muted">Projetos Entregues</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-display text-[24px] md:text-[36px] text-text-primary leading-none">5<span className="text-accent text-[20px] ml-1">anos</span></span>
          <span className="font-mono text-[9px] md:text-[10px] tracking-[2px] uppercase text-text-muted">de Experiência</span>
        </div>
        <div className="ml-auto">
          <div className="flex items-center gap-2 font-mono text-[9px] md:text-[10px] tracking-[1.5px] uppercase text-accent border border-accent/25 bg-accent-dim px-2.5 md:px-3.5 py-1.5 rounded-full">
            <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse-dot"></div>
            Disponível para Projetos
          </div>
        </div>
      </div>
    </section>
  );
}
