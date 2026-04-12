import { ArrowLeft } from 'lucide-react';

interface ProjectPageProps {
  projectId: string;
  onBack: () => void;
}

// Temporary hardcoded project data. In a real app, this might come from an API or a data file.
const PROJECT_DATA: Record<string, any> = {
  'batalha-espiritual': {
    eyebrow: 'Design para Eventos',
    title: 'CULTO DE BATALHA',
    script: 'Espiritual',
    client: 'AD.E.C.A',
    description: 'Identidade visual agressiva e poderosa para o evento principal de batalha espiritual. O projeto exigiu uma estética focada em impacto, autoridade e engajamento visual nas redes da igreja.',
    images: [
      { id: 1, url: '/img/pr felipe 2.png', aspect: 'aspect-square' },
      { id: 2, url: 'COLE_A_URL_DA_IMAGEM_AQUI_2', aspect: 'aspect-[4/5]' },
      { id: 3, url: 'COLE_A_URL_DA_IMAGEM_AQUI_3', aspect: 'aspect-video' }
    ]
  },
  'conferencia-jovens': {
    eyebrow: 'Design para Juventude',
    title: 'CONFERÊNCIA',
    script: 'Jovens 2025',
    client: 'Igreja Local',
    description: 'Sistema visual dinâmico com texturas modernas, tipografia arrojada e paleta de cores forte, criado para gerar antecipação e pertencimento juvenil.',
    images: [
      { id: 1, url: 'COLE_A_URL_DA_IMAGEM_AQUI_1', aspect: 'aspect-square' },
      { id: 2, url: 'COLE_A_URL_DA_IMAGEM_AQUI_2', aspect: 'aspect-square' }
    ]
  },
  'kr-brindes': {
    eyebrow: 'Marketing Promocional',
    title: 'LANÇAMENTO',
    script: 'KR Brindes',
    client: 'KR Brindes',
    description: 'Campanha de lançamento de catálogo com foco em empresários. Peças projetadas para demonstrar proximidade, rapidez e o poder estratégico de brindes personalizados.',
    images: [
      { id: 1, url: 'COLE_A_URL_DA_IMAGEM_AQUI_1', aspect: 'aspect-[4/5]' },
      { id: 2, url: 'COLE_A_URL_DA_IMAGEM_AQUI_2', aspect: 'aspect-square' }
    ]
  },
  'social-hamburgueria': {
    eyebrow: 'Food Design',
    title: 'REBRANDING',
    script: 'Digital Burger',
    client: 'Hamburgueria Artesanal',
    description: 'Feed escuro que ressalta os tons quentes de queijo derretido e carne artesanal, despertando fome imediata e facilitando as vendas via app de delivery.',
    images: [
      { id: 1, url: 'COLE_A_URL_DA_IMAGEM_AQUI_1', aspect: 'aspect-video' },
      { id: 2, url: 'COLE_A_URL_DA_IMAGEM_AQUI_2', aspect: 'aspect-square' }
    ]
  },
  'camisa-percussao': {
    eyebrow: 'Vestuário Premium',
    title: 'CAMISAS DO',
    script: 'Ministério',
    client: 'Ministério de Louvor',
    description: 'Simulação 3D (mockups automotores) super realistas apresentando a coleção de camisetas de performance do grupo de percussão, unindo estampa limpa e modernidade.',
    images: [
      { id: 1, url: 'COLE_A_URL_DA_IMAGEM_AQUI_1', aspect: 'aspect-square' },
      { id: 2, url: 'COLE_A_URL_DA_IMAGEM_AQUI_2', aspect: 'aspect-square' }
    ]
  },
  'brindes-copa': {
    eyebrow: 'Personalização Exclusiva',
    title: 'AÇÃO DE',
    script: 'Inverno 2026',
    client: 'KR Brindes',
    description: 'Visualização da aplicação de marcas em produtos de alto giro e utilidade corporativa em época de temporada global de esportes.',
    images: [
      { id: 1, url: 'COLE_A_URL_DA_IMAGEM_AQUI_1', aspect: 'aspect-[4/5]' }
    ]
  },
  'linha-suplementos': {
    eyebrow: 'Packaging Desportivo',
    title: 'LINHA PRO',
    script: 'Nutrition',
    client: 'Nutrition Pro',
    description: 'Estudo de packaging com foco em diferenciação prateleira (retail design). Hierarquia visual afiada para comunicar performance limpa e benefícios instantâneos.',
    images: [
      { id: 1, url: 'COLE_A_URL_DA_IMAGEM_AQUI_1', aspect: 'aspect-square' },
      { id: 2, url: 'COLE_A_URL_DA_IMAGEM_AQUI_2', aspect: 'aspect-video' }
    ]
  },
  'standee-evento': {
    eyebrow: 'Sinalização Física',
    title: 'STANDEE &',
    script: 'Experiência',
    client: 'Summit 2025',
    description: 'Comunicação macro projetada para leitura à distância, guiando participantes através dos stands até o palco principal sem perder a coesão da trilha visual da marca.',
    images: [
      { id: 1, url: 'COLE_A_URL_DA_IMAGEM_AQUI_1', aspect: 'aspect-[4/5]' }
    ]
  },
  'app-delivery': {
    eyebrow: 'UX / UI Design',
    title: 'FOODEXPRESS',
    script: 'App UI',
    client: 'FoodExpress',
    description: 'Interface de usuário centrada num onboarding rápido, categorização baseada em heurísticas e minimização de decisões de checkout.',
    images: [
      { id: 1, url: 'COLE_A_URL_DA_IMAGEM_AQUI_1', aspect: 'aspect-square' },
      { id: 2, url: 'COLE_A_URL_DA_IMAGEM_AQUI_2', aspect: 'aspect-square' },
      { id: 3, url: 'COLE_A_URL_DA_IMAGEM_AQUI_3', aspect: 'aspect-[4/5]' }
    ]
  }
};

export default function ProjectPage({ projectId, onBack }: ProjectPageProps) {
  const project = PROJECT_DATA[projectId] || {
    eyebrow: 'Projeto Genérico',
    title: 'PROJETO',
    script: 'Exemplo',
    client: 'Nome do Cliente',
    description: 'Descrição detalhada do projeto: o desafio, a solução e os resultados.',
    images: [
      { id: 1, url: 'COLE_A_URL_DA_IMAGEM_AQUI', aspect: 'aspect-square' }
    ]
  };

  return (
    <div className="min-h-screen bg-page-bg text-text-primary selection:bg-accent selection:text-bg-dark">
      <nav className="fixed top-0 left-0 right-0 z-100 flex items-center gap-5 px-5 md:px-10 py-4 md:py-5 border-b border-border-color bg-page-bg/90 backdrop-blur-md">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 font-mono text-[11px] tracking-[2px] uppercase text-text-secondary bg-transparent border border-border-color px-4 py-2 rounded-full transition-colors duration-200 hover:border-accent hover:text-accent cursor-none"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Voltar
        </button>
        <span className="font-display text-[20px] tracking-[3px] text-text-primary ml-auto md:ml-0">
          RF <span className="font-script text-[16px] text-accent tracking-normal">Design</span>
        </span>
      </nav>

      {/* Project Header */}
      <div className="pt-[140px] px-5 md:px-10 pb-[60px] max-w-4xl mx-auto">
        <div className="font-mono text-[11px] tracking-[3px] uppercase text-accent mb-6 flex items-center gap-3 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <div className="w-8 h-px bg-accent"></div>
          {project.eyebrow}
        </div>
        <h1 className="font-display text-[clamp(40px,7vw,90px)] leading-[0.9] tracking-[2px] mb-2 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          {project.title}
        </h1>
        <span className="font-script text-[clamp(28px,4vw,52px)] text-accent block mb-8 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          {project.script}
        </span>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 mt-12 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <div className="md:w-1/4">
            <span className="font-mono text-[10px] tracking-[2px] uppercase text-text-muted block mb-2">Cliente</span>
            <p className="text-[14px] text-text-primary font-medium">{project.client}</p>
          </div>
          <div className="md:w-3/4">
            <span className="font-mono text-[10px] tracking-[2px] uppercase text-text-muted block mb-2">O Desafio</span>
            <p className="text-[15px] text-text-secondary leading-[1.7]">{project.description}</p>
          </div>
        </div>
      </div>

      {/* Stacked Images - Behance Style */}
      <div className="w-full pb-[100px] bg-page-bg flex flex-col items-center">
        {project.images.map((img: any, index: number) => (
          <div 
            key={img.id} 
            className={`w-full max-w-5xl bg-card-bg flex items-center justify-center border-y border-border-color ${img.aspect} relative group animate-fade-up`}
            style={{ animationDelay: `${0.2 + (index * 0.1)}s` }}
          >
            {img.url.startsWith('COLE_') ? (
              <div className="flex flex-col items-center gap-3 opacity-50">
                <div className="w-12 h-12 border border-text-muted rounded-full flex items-center justify-center">
                  <span className="text-[20px]">+</span>
                </div>
                <span className="font-mono text-[10px] tracking-[2px] uppercase">{img.url}</span>
              </div>
            ) : (
              <img src={img.url} alt={`Project visualization ${index + 1}`} className="w-full h-full object-cover" />
            )}
            
            {/* Optional glow overlay mapping to the accent color subtly */}
            <div className="absolute inset-0 bg-accent/0 transition-colors duration-500 group-hover:bg-accent/5 pointer-events-none"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
