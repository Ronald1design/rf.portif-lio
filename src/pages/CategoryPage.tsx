import { ArrowLeft, Image as ImageIcon, ArrowUpRight } from 'lucide-react';

interface CategoryPageProps {
  category: string;
  onBack: () => void;
  onSelectCategory: (category: string) => void;
}

const CATEGORY_DATA: Record<string, { eyebrow: string, title: string, script: string, desc: string, num: string, projects?: Array<any> }> = {
  church: {
    eyebrow: '01 — Igrejas & Eventos',
    title: 'COMUNICAÇÃO',
    script: 'Visual',
    desc: 'Artes da igreja, banner da AD.E.C.A, flyers de congressos. Entendendo e comunicando a linguagem visual correta.',
    num: '01',
    projects: [
      {
        id: 'project/batalha-espiritual',
        title: 'Culto de Batalha Espiritual',
        client: 'AD.E.C.A',
        desc: 'Identidade visual agressiva e poderosa para o evento principal de batalha espiritual. O projeto exigiu uma estética focada em impacto e autoridade.',
      },
      {
        id: 'project/conferencia-jovens',
        title: 'Conferência de Jovens 2025',
        client: 'Igreja Local',
        desc: 'Identidade visual vibrante e enérgica para o congresso anual de jovens, focada em conexão com a Geração Z.',
      }
    ]
  },
  social_commercial: {
    eyebrow: '02 — Comercial',
    title: 'SOCIAL',
    script: 'Media',
    desc: 'Trabalho focado em vendas e engajamento para a KR Brindes e outros negócios locais.',
    num: '02',
    projects: [
      {
        id: 'project/kr-brindes',
        title: 'Lançamento Promocional',
        client: 'KR Brindes',
        desc: 'Campanha de redes sociais focada em conversão para novos produtos promocionais corporativos.',
      },
      {
        id: 'project/social-hamburgueria',
        title: 'Rebranding Digital',
        client: 'Hamburgueria Artesanal',
        desc: 'Estratégia de feed magnético. Foco em imagens apetitosas e design escuro para aumentar vendas no IFood.',
      }
    ]
  },
  premium_products: {
    eyebrow: '03 — Produtos Premium',
    title: 'ESTAMPARIA',
    script: '& Produtos',
    desc: 'Camisa do Grupo de Percussão, brindes da Copa do Mundo e projetos futuros de vestuário.',
    num: '03',
    projects: [
      {
        id: 'project/camisa-percussao',
        title: 'Camisa Grupo de Percussão',
        client: 'Ministério de Louvor',
        desc: 'Design e mockup realista para a nova camisa do ministério, focada em conforto e elegância minimalista.',
      },
      {
        id: 'project/brindes-copa',
        title: 'Kit Copa do Mundo',
        client: 'KR Brindes',
        desc: 'Personalização e simulação visual de kits corporativos entregues em massa para a temporada de copa.',
      }
    ]
  },
  packaging: {
    eyebrow: '04 — Design de Produto',
    title: 'EMBALAGEM',
    script: 'Design',
    desc: 'Embalagens que comunicam qualidade e criam a primeira impressão do produto nas prateleiras.',
    num: '04',
    projects: [
      {
        id: 'project/linha-suplementos',
        title: 'Linha de Suplementos',
        client: 'Nutrition Pro',
        desc: 'Design premium para potes e sachês de suplementos, transmitindo alta performance e credibilidade.',
      }
    ]
  },
  print: {
    eyebrow: '05 — Comunicação Visual',
    title: 'MÍDIA',
    script: 'Impressa',
    desc: 'Banners, flyers, standees e peças impressas que fortalecem a presença da marca no mundo físico.',
    num: '05',
    projects: [
      {
        id: 'project/standee-evento',
        title: 'Standee Evento Corporativo',
        client: 'Summit 2025',
        desc: 'Comunicação local e sinalização para o hall do evento de negócios. Leitura rápida e alto contraste.',
      }
    ]
  },
  ui: {
    eyebrow: '06 — Interfaces Digitais',
    title: 'UI/UX',
    script: 'Design',
    desc: 'Interfaces funcionais e esteticamente sólidas — apps, sites e sistemas que unem usabilidade e beleza.',
    num: '06',
    projects: [
      {
        id: 'project/app-delivery',
        title: 'App de Delivery',
        client: 'FoodExpress',
        desc: 'Estudo de caso focado em redução de atrito no carrinho e design moderno para o usuário final.',
      }
    ]
  }
};

const NAV_LINKS = [
  { id: 'church', label: 'Igrejas' },
  { id: 'social_commercial', label: 'Comercial' },
  { id: 'premium_products', label: 'Premium' },
  { id: 'packaging', label: 'Embalagem' },
  { id: 'print', label: 'Impresso' },
  { id: 'ui', label: 'UI/UX' }
];

export default function CategoryPage({ category, onBack, onSelectCategory }: CategoryPageProps) {
  const data = CATEGORY_DATA[category];

  if (!data) return null;

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-100 flex items-center gap-5 px-5 md:px-10 py-4 md:py-5 border-b border-border-color bg-page-bg/90 backdrop-blur-md">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 font-mono text-[11px] tracking-[2px] uppercase text-text-secondary bg-transparent border border-border-color px-4 py-2 rounded-full transition-colors duration-200 hover:border-accent hover:text-accent cursor-none"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Voltar
        </button>
        <span className="font-display text-[20px] tracking-[3px] text-text-primary">
          RF <span className="font-script text-[16px] text-accent tracking-normal">Design</span>
        </span>
        <ul className="hidden md:flex gap-6 ml-auto list-none">
          {NAV_LINKS.filter(link => link.id !== category).map(link => (
            <li key={link.id}>
              <button 
                onClick={() => onSelectCategory(link.id)}
                className="font-mono text-[10px] tracking-[2px] uppercase text-text-secondary bg-transparent border-none p-0 transition-colors duration-200 hover:text-accent cursor-none"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="pt-[120px] md:pt-[140px] px-5 md:px-10 pb-[40px] md:pb-[60px] border-b border-border-color relative overflow-hidden">
        <div className="font-mono text-[11px] tracking-[3px] uppercase text-accent mb-4 flex items-center gap-3 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <div className="w-8 h-px bg-accent"></div>
          {data.eyebrow}
        </div>
        <h1 className="font-display text-[clamp(60px,9vw,120px)] leading-[0.9] tracking-[3px] animate-fade-up" style={{ animationDelay: '0.2s' }}>
          {data.title}
        </h1>
        <span className="font-script text-[clamp(28px,4vw,52px)] text-accent block mt-1 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          {data.script}
        </span>
        <p className="mt-5 text-[15px] text-text-secondary max-w-[500px] leading-[1.7] animate-fade-up" style={{ animationDelay: '0.4s' }}>
          {data.desc}
        </p>
        <span className="absolute right-10 -bottom-5 font-display text-[clamp(120px,18vw,220px)] text-text-muted opacity-[0.08] leading-none pointer-events-none tracking-[4px]">
          {data.num}
        </span>
      </div>

      <div className="px-5 md:px-10 py-[40px] md:py-[60px] pb-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {(data.projects && data.projects.length > 0 ? data.projects : [
            { id: '#1', title: 'Título do Projeto', client: 'Nome do Cliente', desc: 'Descrição curta do projeto — o desafio, a solução e o resultado obtido.', isPlaceholder: true },
            { id: '#2', title: 'Título do Projeto', client: 'Nome do Cliente', desc: 'Descrição curta do projeto — o desafio, a solução e o resultado obtido.', isPlaceholder: true },
            { id: '#3', title: 'Título do Projeto', client: 'Nome do Cliente', desc: 'Descrição curta do projeto — o desafio, a solução e o resultado obtido.', isPlaceholder: true }
          ]).map((project: any, idx: number) => (
            <div key={project.id || idx} className="project-card bg-card-bg border border-border-color rounded-[4px] overflow-hidden transition-all duration-250 hover:border-accent hover:-translate-y-1 relative cursor-none group">
              <div 
                className="project-img-placeholder w-full aspect-4/3 bg-elevated-bg flex flex-col items-center justify-center gap-3 border-b border-border-color relative overflow-hidden cursor-none"
                onClick={() => !project.isPlaceholder && onSelectCategory(project.id)}
              >
                <div className="w-10 h-10 border-[1.5px] border-text-muted rounded-full flex items-center justify-center relative z-1">
                  <ImageIcon className="w-[18px] h-[18px] text-text-muted" />
                </div>
                <span className="font-mono text-[10px] tracking-[2px] uppercase text-text-muted relative z-1">
                  Cole a URL da imagem
                </span>
                
                {/* Visual affordance for clicking if it's a real project */}
                {!project.isPlaceholder && (
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-300 z-0"></div>
                )}
              </div>
              <div className="p-5">
                <span className="font-mono text-[10px] tracking-[2px] uppercase text-accent mb-1.5 flex items-center gap-1.5">
                  <div className="w-4 h-px bg-accent"></div>
                  {project.client}
                </span>
                <h3 className="font-display text-[22px] tracking-[1.5px] mb-2 leading-[1.1]">{project.title}</h3>
                <p className="text-[13px] text-text-secondary leading-[1.6]">{project.desc}</p>
                {project.isPlaceholder ? (
                  <a href="#" className="inline-flex items-center gap-1.5 mt-3.5 font-mono text-[10px] tracking-[2px] uppercase text-accent no-underline border-b border-accent/30 pb-0.5 transition-colors duration-200 hover:border-accent cursor-none">
                    Ver no Behance
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                ) : (
                  <button onClick={() => onSelectCategory(project.id)} className="inline-flex items-center gap-1.5 mt-3.5 font-mono text-[10px] tracking-[2px] uppercase text-accent bg-transparent border-none p-0 border-b border-accent/30 pb-0.5 transition-colors duration-200 hover:border-accent cursor-none">
                    Ver Projeto
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
