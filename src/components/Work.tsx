import { ArrowUpRight } from 'lucide-react';

interface WorkProps {
  onSelectCategory: (category: string) => void;
}

export default function Work({ onSelectCategory }: WorkProps) {
  return (
    <section id="work" className="relative z-1 px-4 md:px-10 py-[60px] md:py-[100px]">
      <div className="flex flex-wrap items-baseline gap-2 md:gap-4 mb-10 md:mb-16 pb-6 border-b border-border-color">
        <span className="font-mono text-[11px] text-text-muted tracking-[2px]">01</span>
        <div>
          <div className="font-display text-[clamp(36px,9vw,80px)] leading-none tracking-[2px]">TRABALHOS</div>
          <div className="font-script text-[clamp(20px,3vw,36px)] text-accent -mt-2">Portfólio</div>
        </div>
        <span className="md:ml-auto font-mono text-[10px] tracking-[2px] uppercase text-accent bg-accent-dim px-3 py-1 rounded-full border border-accent/20 whitespace-nowrap self-center -order-1 md:order-0">
          6 Disciplinas
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[180px] md:auto-rows-[200px] lg:auto-rows-[240px] gap-2 md:gap-3">
        
        {/* Igrejas e Eventos */}
        <div 
          className="bento-card lg:col-span-2 lg:row-span-2 md:col-span-2 bg-card-bg border border-border-color rounded-[4px] overflow-hidden relative transition-all duration-250 hover:border-accent hover:-translate-y-0.5 cursor-none group"
          onClick={() => onSelectCategory('church')}
        >
          <div className="card-glow"></div>
          <span className="absolute top-4 left-4 font-mono text-[9px] tracking-[2px] uppercase text-accent bg-accent-dim px-2 py-1 rounded-full border border-accent/20 z-3">
            01 — Igrejas & Eventos
          </span>
          <div className="flex flex-col pt-[60px] px-8 pb-8 justify-end h-full relative z-3 bg-linear-to-t from-bg-dark/80 to-transparent">
            <span className="font-display text-[100px] text-text-muted leading-none opacity-30 absolute top-4 right-6">01</span>
            <div className="font-display text-[28px] md:text-[38px] tracking-[2px] leading-none mb-2">COMUNICAÇÃO</div>
            <div className="font-script text-[16px] md:text-[22px] text-accent">Igrejas & Eventos</div>
            <p className="hidden md:block mt-3 text-[13px] text-text-secondary leading-[1.6]">Artes da igreja, o banner de R$ 135,00 da AD.E.C.A, flyers de congressos. Entendendo e aplicando a linguagem visual do seu nicho.</p>
          </div>
          <div className="card-arrow absolute bottom-5 right-5 w-8 h-8 border border-border-color rounded-full flex items-center justify-center transition-all duration-200 group-hover:border-accent group-hover:bg-accent z-3">
            <ArrowUpRight className="w-3.5 h-3.5 text-text-secondary transition-colors duration-200 group-hover:text-page-bg" />
          </div>
        </div>

        {/* Social Media Comercial */}
        <div 
          className="bento-card bg-card-bg border border-border-color rounded-[4px] overflow-hidden relative transition-all duration-250 hover:border-accent hover:-translate-y-0.5 cursor-none group"
          onClick={() => onSelectCategory('social_commercial')}
        >
          <div className="card-glow"></div>
          <span className="absolute top-4 left-4 font-mono text-[9px] tracking-[2px] uppercase text-accent bg-accent-dim px-2 py-1 rounded-full border border-accent/20 z-3">
            02 — Social Comercial
          </span>
          <div className="absolute bottom-4 left-4 right-4 font-display text-[26px] tracking-[2px] z-3 leading-tight mt-auto">SOCIAL MEDIA<br/><span className="text-accent">COMERCIAL</span></div>
          <div className="card-arrow absolute bottom-5 right-5 w-8 h-8 border border-border-color rounded-full flex items-center justify-center transition-all duration-200 z-3">
            <ArrowUpRight className="w-3.5 h-3.5 text-text-secondary group-hover:text-accent" />
          </div>
        </div>

        {/* Estamparia & Produtos Premium */}
        <div 
          className="bento-card bg-card-bg border border-border-color rounded-[4px] overflow-hidden relative transition-all duration-250 hover:border-accent hover:-translate-y-0.5 cursor-none group"
          onClick={() => onSelectCategory('premium_products')}
        >
          <div className="card-glow"></div>
          <span className="absolute top-4 left-4 font-mono text-[9px] tracking-[2px] uppercase text-accent bg-accent-dim px-2 py-1 rounded-full border border-accent/20 z-3">
            03 — Produtos Premium
          </span>
          <div className="absolute bottom-4 left-4 right-4 font-display text-[26px] tracking-[2px] z-3 leading-tight">ESTAMPARIA<br/><span className="text-accent">& PRODUTOS</span></div>
          <div className="card-arrow absolute bottom-5 right-5 w-8 h-8 border border-border-color rounded-full flex items-center justify-center transition-all duration-200 z-3">
            <ArrowUpRight className="w-3.5 h-3.5 text-text-secondary group-hover:text-accent" />
          </div>
        </div>


        {/* Packaging */}
        <div 
          className="bento-card bg-card-bg border border-border-color rounded-[4px] overflow-hidden relative transition-all duration-250 hover:border-accent hover:-translate-y-0.5 cursor-none"
          onClick={() => onSelectCategory('packaging')}
        >
          <div className="card-glow"></div>
          <span className="absolute top-4 left-4 font-mono text-[9px] tracking-[2px] uppercase text-accent bg-accent-dim px-2 py-1 rounded-full border border-accent/20 z-3">
            04 — Embalagem
          </span>
          
          <div className="package-viz">
            <div className="pack-bag">
              <div className="absolute top-1 left-1/2 -translate-x-1/2 w-[60%] h-2 border-[1.5px] border-white rounded-[2px]"></div>
            </div>
            <div className="pack-can">
              <div className="absolute top-1 left-1/2 -translate-x-1/2 w-[70%] h-1.5 bg-white/20 rounded-[1px]"></div>
            </div>
            <div className="pack-box">
              <div className="absolute top-0 left-0 right-0 h-3 border-b-[1.5px] border-white opacity-50"></div>
            </div>
          </div>

          <div className="absolute bottom-4 left-4 right-4 font-display text-[28px] tracking-[2px] z-3 leading-tight">DESIGN DE<br/>EMBALAGEM</div>
          <div className="card-arrow absolute bottom-5 right-5 w-8 h-8 border border-border-color rounded-full flex items-center justify-center transition-all duration-200 z-3">
            <ArrowUpRight className="w-3.5 h-3.5 text-text-secondary" />
          </div>
        </div>

        {/* Print Media */}
        <div 
          className="bento-card lg:col-span-2 md:col-span-2 bg-card-bg border border-border-color rounded-[4px] overflow-hidden relative transition-all duration-250 hover:border-accent hover:-translate-y-0.5 cursor-none"
          onClick={() => onSelectCategory('print')}
        >
          <div className="card-glow"></div>
          <span className="absolute top-4 left-4 font-mono text-[9px] tracking-[2px] uppercase text-accent bg-accent-dim px-2 py-1 rounded-full border border-accent/20 z-3">
            05 — Impresso
          </span>
          
          <div className="print-viz">
            <div className="print-stack">
              <div className="print-sheet" style={{ width: 60, height: 100, top: 30, left: 70, transform: 'rotate(8deg)', background: 'rgba(255,255,255,0.04)' }}></div>
              <div className="print-sheet" style={{ width: 70, height: 110, top: 20, left: 50, transform: 'rotate(3deg)', background: 'rgba(255,255,255,0.05)' }}></div>
              <div className="print-sheet" style={{ width: 75, height: 120, top: 10, left: 30, background: 'rgba(255,255,255,0.06)', borderColor: 'rgba(163,230,53,0.3)' }}></div>
              <div className="absolute -bottom-[30px] left-[62px] w-0.5 h-10 bg-[#444]"></div>
              <div className="absolute -bottom-[30px] left-[48px] w-7 h-[3px] bg-[#444] rounded-[2px]"></div>
            </div>
            <div className="relative ml-10">
              <div className="print-sheet relative w-[120px] h-[60px] bg-white/5 border-accent/30"></div>
              <div className="w-1 h-[50px] bg-[#444] mx-auto"></div>
            </div>
          </div>

          <div className="absolute bottom-4 left-4 z-3">
            <div className="font-display text-[40px] tracking-[2px] leading-none">MÍDIA IMPRESSA</div>
          </div>
          <div className="card-arrow absolute bottom-5 right-5 w-8 h-8 border border-border-color rounded-full flex items-center justify-center transition-all duration-200 z-3">
            <ArrowUpRight className="w-3.5 h-3.5 text-text-secondary" />
          </div>
        </div>

        {/* UI/UX */}
        <div 
          className="bento-card bg-card-bg border border-border-color rounded-[4px] overflow-hidden relative transition-all duration-250 hover:border-accent hover:-translate-y-0.5 cursor-none"
          onClick={() => onSelectCategory('ui')}
        >
          <div className="card-glow"></div>
          <span className="absolute top-4 left-4 font-mono text-[9px] tracking-[2px] uppercase text-accent bg-accent-dim px-2 py-1 rounded-full border border-accent/20 z-3">
            06 — UI/UX
          </span>
          
          <div className="ui-viz">
            <div className="ui-screen w-[44px] h-[80px]">
              <div className="h-2 border-b border-[#333] flex items-center px-1">
                <div className="w-2.5 h-[2px] bg-[#333] rounded-[1px] mx-auto"></div>
              </div>
              <div className="p-1 flex flex-col gap-[3px] opacity-40">
                <div className="h-4 bg-[#333] rounded-[1px]"></div>
                <div className="h-2 bg-border-dashed rounded-[1px]"></div>
                <div className="h-2 bg-border-dashed rounded-[1px] w-[70%]"></div>
              </div>
            </div>
            <div className="ui-screen w-[72px] h-[90px]">
              <div className="h-[6px] border-b border-[#333]"></div>
              <div className="p-1 flex gap-[3px] h-[calc(100%-6px)]">
                <div className="w-5 bg-[#222] rounded-[1px]"></div>
                <div className="flex-1 flex flex-col gap-[3px] py-[2px] opacity-40">
                  <div className="h-6 bg-[#333] rounded-[1px] border border-accent/20"></div>
                  <div className="h-2.5 bg-border-dashed rounded-[1px]"></div>
                  <div className="h-2.5 bg-border-dashed rounded-[1px] w-[70%]"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-4 left-4 right-4 font-display text-[28px] tracking-[2px] z-3 leading-tight">UI/UX<br/>DESIGN</div>
          <div className="card-arrow absolute bottom-5 right-5 w-8 h-8 border border-border-color rounded-full flex items-center justify-center transition-all duration-200 z-3">
            <ArrowUpRight className="w-3.5 h-3.5 text-text-secondary" />
          </div>
        </div>

      </div>
    </section>
  );
}
