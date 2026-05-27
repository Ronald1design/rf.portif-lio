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
    desc: 'Traduza a essência do seu evento em peças que conectam. Criação ágil e de alta performance focada na linguagem visual do nicho gospel para atrair e engajar.',
    num: '01',
    projects: [
      {
        id: 'project/poster-evangelismo',
        title: 'Poster Evangelismo no Hospital',
        client: 'Igreja Local',
        coverImg: 'img/behance_poster_evangelismo.jpg',
        desc: 'Comunicação visual sensível e empática para ação de evangelismo em hospitais.',
        behanceUrl: 'https://www.behance.net/gallery/248656305/POSTER-EVANGELISMO-NO-HOSPITAL'
      },
      {
        id: 'project/culto-libertacao',
        title: 'Culto de Libertação e Adoração',
        client: 'Igreja Local',
        coverImg: 'img/behance_culto_libertacao.jpg',
        desc: 'Identidade visual para o Culto de Libertação e Adoração, com design profundo e focado em espiritualidade.',
        behanceUrl: 'https://www.behance.net/gallery/248656241/CULTO-DE-LIBERTACAO-E-ADORACAO'
      },
      {
        id: 'project/culto-domingo',
        title: 'Culto de Domingo',
        client: 'Igreja Local',
        coverImg: 'img/behance_culto_domingo.jpg',
        desc: 'Comunicação visual e flyers para as celebrações do Culto de Domingo.',
        behanceUrl: 'https://www.behance.net/gallery/248656185/CULTO-DE-DOMINGO'
      },
      {
        id: 'project/pre-cruzada',
        title: 'Pré-Cruzada Cantinho do Céu para Cristo',
        client: 'Igreja Local',
        coverImg: 'img/behance_precruzada.jpg',
        desc: 'Identidade visual e comunicação para a Pré-Cruzada Evangelística Cantinho do Céu para Cristo.',
        behanceUrl: 'https://www.behance.net/gallery/248656113/PRE-CRUZADA-CANTINHO-DO-CEU-PARA-CRISTO'
      },
      {
        id: 'project/culto-maes',
        title: 'Mães de Joelhos e Filhos de Pé',
        client: 'Igreja Local',
        coverImg: 'img/behance_culto_maes.jpg',
        desc: 'Identidade visual para o culto especial "Mães de Joelhos e Filhos de Pé", com foco em fé e intercessão familiar.',
        behanceUrl: 'https://www.behance.net/gallery/248653771/CULTO-MAES-DE-JOELHOS-E-FILHOS-DE-PE'
      },
      {
        id: 'project/batalha-espiritual',
        title: 'Culto de Batalha Espiritual',
        client: 'AD.E.C.A',
        coverImg: 'img/behance_culto_batalha.jpg',
        desc: 'Identidade visual agressiva e poderosa para o evento principal de batalha espiritual. O projeto exigiu uma estética focada em impacto e autoridade.',
        behanceUrl: 'https://www.behance.net/gallery/216000321/SOCIAL-MEDIA-CULTO-DE-BATALHA-ESPIRITUAL'
      },
      {
        id: 'project/cruzada',
        title: 'Cruzada',
        client: 'Igreja Local',
        coverImg: 'img/behance_cruzada.jpg',
        desc: 'Projeto de comunicação visual focado em impacto e grande alcance para Cruzada Evangelística.',
        behanceUrl: 'https://www.behance.net/gallery/248436261/CRUZADA'
      },
      {
        id: 'project/evangelistico',
        title: 'Culto Evangelístico',
        client: 'Igreja Local',
        coverImg: 'img/behance_evangelistico.jpg',
        desc: 'Design para culto evangelístico, com forte apelo visual para atrair o público e comunicar a mensagem principal.',
        behanceUrl: 'https://www.behance.net/gallery/248436607/EVAGELISTICO'
      },
      {
        id: 'project/projeto-pai',
        title: 'Projeto Pai',
        client: 'Igreja Local',
        coverImg: 'img/behance_projeto_pai.jpg',
        desc: 'Projeto visual voltado para celebração ou série temática, transmitindo força e paternidade espiritual.',
        behanceUrl: 'https://www.behance.net/gallery/248437929/PROJETO-PAI'
      },
      {
        id: 'project/campanha-restituicao',
        title: 'Campanha da Restituição',
        client: 'Igreja Local',
        coverImg: 'img/behance_restituicao.jpg',
        desc: 'Identidade visual para campanha focada em renovação e restituição, com estética que inspira esperança e fé.',
        behanceUrl: 'https://www.behance.net/gallery/248438131/CAMPANHA-DA-RESTITUICAO'
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
        id: 'project/flyer-esportivo',
        title: 'Flyer Esportivo',
        client: 'Esportes',
        coverImg: 'img/behance_flyer_esportivo.jpg',
        desc: 'Flyer esportivo dinâmico e impactante para jogos e eventos esportivos.',
        behanceUrl: 'https://www.behance.net/gallery/248653387/FLYER-ESPORTIVO'
      },
      {
        id: 'project/story-agenda-aberta',
        title: 'Story Agenda Aberta',
        client: 'Geral',
        coverImg: 'img/behance_story_agenda.jpg',
        desc: 'Design de story focado em aviso de agenda aberta e captação de clientes.',
        behanceUrl: 'https://www.behance.net/gallery/248653313/STORY-AGENDA-ABERTA'
      },
      {
        id: 'project/social-media-bolo-fe',
        title: 'Social Media Bolo da Fé',
        client: 'Bolo da Fé',
        coverImg: 'img/behance_social_bolo.jpg',
        desc: 'Projeto de Social Media focado em divulgação e vendas para a confeitaria Bolo da Fé.',
        behanceUrl: 'https://www.behance.net/gallery/248653201/SOCIAL-MEDIA-BOLO-DA-FE'
      },
      {
        id: 'project/banner-krbrindes',
        title: 'Banner Site KR Brindes',
        client: 'KR Brindes',
        coverImg: 'img/behance_banner_krbrindes.jpg',
        desc: 'Design de banner focado em conversão e comunicação visual para o site da KR Brindes.',
        behanceUrl: 'https://www.behance.net/gallery/248498005/BANNER-PARA-SITE-KRBRINDES'
      },
      {
        id: 'project/social-media-curso',
        title: 'Curso Produção Audiovisual',
        client: 'Audiovisual',
        coverImg: 'img/behance_social_curso.jpg',
        desc: 'Projetos focados em conversão e engajamento para curso de produção audiovisual.',
        behanceUrl: 'https://www.behance.net/gallery/248496315/SOCIAL-MEDIA-CURSO-DE-PRODUCAO-AUDIOVISUAL'
      },
      {
        id: 'project/social-media-diversos',
        title: 'Social Media Diversos',
        client: 'Vários Clientes',
        coverImg: 'img/behance_social_media.png',
        desc: 'Projetos diversos focados em engajamento e conversão para redes sociais.',
        behanceUrl: 'https://www.behance.net/gallery/162296397/SOCIAL-MEDIA-DIVERSOS'
      },
      {
        id: 'project/social-media-acaiteria',
        title: 'Social Media Açaíteria',
        client: 'Açaíteria',
        coverImg: 'img/behance_social_acaiteria.jpg',
        desc: 'Estratégia de feed magnético. Foco em imagens apetitosas e design escuro para aumentar vendas no IFood.',
        behanceUrl: 'https://www.behance.net/gallery/167402651/SOCIAL-MEDIA-ACAITERIA'
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
        id: 'project/caneca-karate',
        title: 'Caneca Projeto Karatê',
        client: 'Projeto Karatê',
        coverImg: 'img/behance_caneca_karate.jpg',
        desc: 'Design de caneca personalizada para o Projeto Karatê.',
        behanceUrl: 'https://www.behance.net/gallery/248497461/CANECA-PROJETO-KARATE'
      },
      {
        id: 'project/camisa-percussao',
        title: 'Camisa Grupo de Percussão',
        client: 'Ministério de Louvor',
        desc: 'Design e mockup realista para a nova camisa do ministério, focada em conforto e elegância minimalista.',
        behanceUrl: 'https://www.behance.net/'
      },
      {
        id: 'project/brindes-copa',
        title: 'Kit Copa do Mundo',
        client: 'KR Brindes',
        desc: 'Personalização e simulação visual de kits corporativos entregues em massa para a temporada de copa.',
        behanceUrl: 'https://www.behance.net/'
      }
    ]
  },
  packaging: {
    eyebrow: '04 — Design de Produto',
    title: 'EMBALAGEM',
    script: 'Design',
    desc: 'Embalagens que comunicam qualidade e criam a primeira impressão do produto nas prateleiras.',
    num: '04',
    projects: []
  },
  print: {
    eyebrow: '05 — Comunicação Visual',
    title: 'MÍDIA',
    script: 'Impressa',
    desc: 'Banners, flyers, standees e peças impressas que fortalecem a presença da marca no mundo físico.',
    num: '05',
    projects: []
  },
  ui: {
    eyebrow: '06 — Interfaces Digitais',
    title: 'UI/UX',
    script: 'Design',
    desc: 'Interfaces funcionais e esteticamente sólidas — apps, sites e sistemas que unem usabilidade e beleza.',
    num: '06',
    projects: []
  },
  collage: {
    eyebrow: '07 — Colagem e Composição',
    title: 'COMPOSIÇÃO',
    script: '& Colagem',
    desc: 'Criação de composições únicas através de colagens digitais, misturando elementos para contar novas histórias visuais.',
    num: '07',
    projects: [
      {
        id: 'project/elon-musk-espacial',
        title: 'Inovação Espacial',
        client: 'Projeto Autoral',
        coverImg: 'img/behance_elon_collage.png',
        desc: 'Composição visual de Elon Musk no centro da inovação espacial. Estudo de manipulação, iluminação e ambientação sci-fi.',
        behanceUrl: 'https://www.behance.net/gallery/216677185/Elon-Musk-no-Centro-da-Inovacao-Espacial-Collage'
      },
      {
        id: 'project/surrealismo-colagem',
        title: 'Surrealismo',
        client: 'Projeto Autoral',
        coverImg: 'img/behance_surrealismo_collage.png',
        desc: 'Colagem digital surrealista explorando conceitos oníricos. Uma mistura de elementos inusitados para expansão da criatividade.',
        behanceUrl: 'https://www.behance.net/gallery/247469557/Surrealismo-Colagem-Digital'
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
  { id: 'ui', label: 'UI/UX' },
  { id: 'collage', label: 'Colagem' }
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
        <div className="font-mono text-[11px] tracking-[3px] uppercase text-accent mb-4 flex items-center gap-3 animate-fade-up [animation-delay:100ms]">
          <div className="w-8 h-px bg-accent"></div>
          {data.eyebrow}
        </div>
        <h1 className="font-display text-[clamp(60px,9vw,120px)] leading-[0.9] tracking-[3px] animate-fade-up [animation-delay:200ms]">
          {data.title}
        </h1>
        <span className="font-script text-[clamp(28px,4vw,52px)] text-accent block mt-1 animate-fade-up [animation-delay:300ms]">
          {data.script}
        </span>
        <p className="mt-5 text-[15px] text-text-secondary max-w-[500px] leading-[1.7] animate-fade-up [animation-delay:400ms]">
          {data.desc}
        </p>
        <span className="absolute right-10 -bottom-5 font-display text-[clamp(120px,18vw,220px)] text-text-muted opacity-[0.08] leading-none pointer-events-none tracking-[4px]">
          {data.num}
        </span>
      </div>

      <div className="px-5 md:px-10 py-[40px] md:py-[60px] pb-[100px]">
        {data.projects && data.projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.projects.map((project: any, idx: number) => (
              <div key={project.id || idx} className="project-card bg-card-bg border border-border-color rounded-[4px] overflow-hidden transition-all duration-250 hover:border-accent hover:-translate-y-1 relative cursor-none group">
                <a 
                  href={project.behanceUrl || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-img-placeholder w-full aspect-4/3 bg-elevated-bg flex flex-col items-center justify-center gap-3 border-b border-border-color relative overflow-hidden cursor-none"
                >
                  {project.coverImg ? (
                    <img src={`/${project.coverImg}`} alt={project.title} className="w-full h-full object-cover relative z-1" />
                  ) : (
                    <>
                      <div className="w-10 h-10 border-[1.5px] border-text-muted rounded-full flex items-center justify-center relative z-1">
                        <ImageIcon className="w-[18px] h-[18px] text-text-muted" />
                      </div>
                      <span className="font-mono text-[10px] tracking-[2px] uppercase text-text-muted relative z-1">
                        Em breve
                      </span>
                    </>
                  )}
                  
                  {/* Visual affordance for clicking if it's a real project */}
                  {!project.isPlaceholder && (
                    <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-300 z-0"></div>
                  )}
                </a>
                <div className="p-5">
                  <span className="font-mono text-[10px] tracking-[2px] uppercase text-accent mb-1.5 flex items-center gap-1.5">
                    <div className="w-4 h-px bg-accent"></div>
                    {project.client}
                  </span>
                  <h3 className="font-display text-[22px] tracking-[1.5px] mb-2 leading-[1.1]">{project.title}</h3>
                  <p className="text-[13px] text-text-secondary leading-[1.6]">{project.desc}</p>
                  {project.behanceUrl && project.behanceUrl !== 'https://www.behance.net/' && project.behanceUrl !== '#' && (
                    <a 
                      href={project.behanceUrl} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-3.5 font-mono text-[10px] tracking-[2px] uppercase text-accent no-underline border-b border-accent/30 pb-0.5 transition-colors duration-200 hover:border-accent cursor-none"
                    >
                      Ver no Behance
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full py-24 flex flex-col items-center justify-center border border-border-color/50 border-dashed rounded-[4px] bg-elevated-bg/20 animate-fade-up [animation-delay:500ms]">
            <div className="w-16 h-16 mb-6 flex items-center justify-center border border-border-color rounded-full bg-card-bg">
              <ImageIcon className="w-6 h-6 text-text-muted" />
            </div>
            <h3 className="font-display text-[28px] tracking-[2px] mb-3 text-text-primary">EM BREVE</h3>
            <p className="font-mono text-[12px] uppercase tracking-[1px] text-text-secondary max-w-[400px] text-center leading-[1.8]">
              Ainda não temos projetos deste ramo.<br/>Estamos preparando coisas incríveis!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
