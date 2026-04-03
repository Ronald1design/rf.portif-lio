import { useEffect, useRef } from 'react';
import { MousePointer2 } from 'lucide-react';

export default function About() {
  const frameRef = useRef<HTMLDivElement>(null);
  const darkRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    const dark = darkRef.current;
    const glow = glowRef.current;
    const hint = hintRef.current;

    if (!frame || !dark || !glow) return;

    const R = 85;

    const applyLight = (x: number, y: number) => {
      dark.style.background = `radial-gradient(circle ${R}px at ${x}px ${y}px,
        transparent 0%,
        rgba(12,12,12,0.1) ${R * 0.55}px,
        rgba(12,12,12,0.75) ${R * 0.9}px,
        #0c0c0c ${R * 1.15}px
      )`;
      glow.style.left = `${x}px`;
      glow.style.top = `${y}px`;
      glow.style.transform = 'translate(-50%, -50%) scale(1)';
      glow.style.opacity = '1';
    };

    const resetLight = () => {
      dark.style.background = 'radial-gradient(circle 0px at 50% 50%, transparent 0%, #0c0c0c 1px)';
      glow.style.transform = 'translate(-50%, -50%) scale(0)';
      glow.style.opacity = '0';
      setTimeout(() => hint && hint.classList.remove('opacity-0'), 1400);
    };

    const handleMouseEnter = () => {
      if (hint) hint.classList.add('opacity-0');
    };

    const handleMouseLeave = () => {
      resetLight();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const r = frame.getBoundingClientRect();
      applyLight(e.clientX - r.left, e.clientY - r.top);
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (hint) hint.classList.add('opacity-0');
    };

    const handleTouchMove = (e: TouchEvent) => {
      const r = frame.getBoundingClientRect();
      const t = e.touches[0];
      applyLight(t.clientX - r.left, t.clientY - r.top);
    };

    frame.addEventListener('mouseenter', handleMouseEnter);
    frame.addEventListener('mouseleave', handleMouseLeave);
    frame.addEventListener('mousemove', handleMouseMove);
    frame.addEventListener('touchstart', handleTouchStart, { passive: true });
    frame.addEventListener('touchmove', handleTouchMove, { passive: true });
    frame.addEventListener('touchend', resetLight);

    return () => {
      frame.removeEventListener('mouseenter', handleMouseEnter);
      frame.removeEventListener('mouseleave', handleMouseLeave);
      frame.removeEventListener('mousemove', handleMouseMove);
      frame.removeEventListener('touchstart', handleTouchStart);
      frame.removeEventListener('touchmove', handleTouchMove);
      frame.removeEventListener('touchend', resetLight);
    };
  }, []);

  return (
    <section id="about" className="relative z-1 px-4 md:px-10 py-[60px] md:py-[100px] bg-card-bg border-y border-border-color">
      <div className="flex flex-wrap items-baseline gap-2 md:gap-4 mb-10 md:mb-16 pb-6 border-b border-border-color">
        <span className="font-mono text-[11px] text-text-muted tracking-[2px]">02</span>
        <div>
          <div className="font-display text-[clamp(36px,9vw,80px)] leading-none tracking-[2px]">SOBRE</div>
          <div className="font-script text-[clamp(20px,3vw,36px)] text-accent -mt-2">Mim</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        <div className="relative h-[280px] md:h-[340px] lg:h-[480px] block">
          <div className="absolute top-0 right-0 font-mono text-[10px] tracking-[2px] text-text-muted px-3 py-1.5 border border-border-color rounded-[4px] bg-card-bg z-5">
            RONALD FERRAZ // DESIGNER GRÁFICO
          </div>

          <div ref={frameRef} className="absolute inset-5 border border-dashed border-border-dashed rounded-[4px] flex items-center justify-center overflow-hidden">
            <div className="absolute w-4 h-4 bg-text-muted opacity-50 top-2 left-2"></div>
            <div className="absolute w-4 h-4 bg-text-muted opacity-50 top-2 right-2"></div>
            <div className="absolute w-4 h-4 bg-text-muted opacity-50 bottom-2 left-2"></div>
            <div className="absolute w-4 h-4 bg-text-muted opacity-50 bottom-2 right-2"></div>

            <div ref={hintRef} className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 font-mono text-[9px] md:text-[10px] tracking-[2px] uppercase text-accent bg-page-bg/85 px-3.5 py-1.5 rounded-full border border-accent/25 pointer-events-none whitespace-nowrap animate-hint-pulse transition-opacity duration-500">
              <MousePointer2 className="w-3.5 h-3.5" />
              Passe o mouse aqui
            </div>

            <div className="w-full h-full relative flex items-center justify-center">
              <div ref={darkRef} className="portrait-dark"></div>

              <img src="/img/profile-nobg.png" alt="Ronald Ferraz" className="w-[85%] h-auto object-contain relative z-0 drop-shadow-2xl filter contrast-125 pointer-events-none" />

              <div ref={glowRef} className="portrait-glow"></div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-display text-[40px] md:text-[52px] tracking-[2px] leading-[0.95] mb-2">
            CRIATIVO<br /><em className="font-script text-[32px] md:text-[40px] text-accent not-italic">& Movido</em>
          </h2>
          <p className="text-[15px] leading-[1.8] text-text-secondary mt-6 mb-8">
            Sou <em className="text-text-primary not-italic font-medium">Ronald Ferraz</em> — Designer Gráfico apaixonado por transformar ideias em peças visuais bem executadas. Meu trabalho é focado na criação prática e na entrega de materiais de alta qualidade para o mercado promocional, vestuário e comunicação de eventos (religiosos e corporativos).
          </p>
          <p className="text-[15px] leading-[1.8] text-text-secondary mb-8">
            Meu objetivo é simples: entender a sua necessidade e entregar um design limpo, moderno e com o arquivo perfeitamente fechado para produção.
          </p>

          <div className="flex flex-wrap gap-2 mt-6">
            {['Redes Sociais', 'Design Impresso', 'UI/UX'].map(skill => (
              <span key={skill} className="font-mono text-[10px] tracking-[1.5px] uppercase px-3.5 py-1.5 rounded-full transition-colors duration-200 text-accent bg-accent-dim border border-accent/30">
                {skill}
              </span>
            ))}
            {['Design de Logo', 'Identidade Visual', 'Embalagem', 'Ilustração', 'Tipografia'].map(skill => (
              <span key={skill} className="font-mono text-[10px] tracking-[1.5px] uppercase px-3.5 py-1.5 rounded-full transition-colors duration-200 text-text-secondary border border-border-color bg-card-bg hover:border-accent hover:text-accent">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
