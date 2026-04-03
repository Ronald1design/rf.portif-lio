export default function Process() {
  const steps = [
    {
      num: '01',
      label: 'ENTENDER',
      script: 'O Briefing',
      desc: 'Análise do briefing em um alinhamento rápido e prático. É o momento de entender a sua necessidade, as referências visuais e o formato ideal para o projeto, seja para redes sociais, comunicação de eventos ou produtos físicos.'
    },
    {
      num: '02',
      label: 'CRIAR',
      script: 'Mão na Massa',
      desc: 'Hora de abrir os softwares de edição. Desenvolvimento de um layout visualmente limpo, moderno e com alto impacto, desenhado sob medida para alcançar o seu objetivo.'
    },
    {
      num: '03',
      label: 'REVISAR',
      script: 'Aprovação',
      desc: 'Apresentação da arte para a sua avaliação. Envio prévio do layout (seja aplicado em mockups de produtos ou em visualizações digitais) para alinharmos os detalhes e fazermos os ajustes finais.'
    },
    {
      num: '04',
      label: 'ENTREGAR',
      script: 'Fechamento',
      desc: 'Entrega dos arquivos em altíssima qualidade. Tudo devidamente organizado e exportado nos padrões técnicos corretos, pronto para a máquina da gráfica ou direto para o seu feed.'
    }
  ];

  return (
    <section id="process" className="relative z-1 px-4 md:px-10 py-[60px] md:py-[100px]">
      <div className="flex flex-wrap items-baseline gap-2 md:gap-4 mb-10 md:mb-16 pb-6 border-b border-border-color">
        <span className="font-mono text-[11px] text-text-muted tracking-[2px]">03</span>
        <div>
          <div className="font-display text-[clamp(36px,9vw,80px)] leading-none tracking-[2px]">PROCESSO</div>
          <div className="font-script text-[clamp(20px,3vw,36px)] text-accent -mt-2">Como trabalho</div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-0 relative md:pl-0 pl-5">
        <div className="hidden md:block absolute top-8 left-8 right-8 h-px bg-border-color"></div>
        
        {steps.map((step, index) => (
          <div key={step.num} className="flex-1 flex flex-row md:flex-col items-start md:items-center gap-4 relative text-left md:text-center w-full md:w-auto group">
            <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 border border-border-color rounded-full flex items-center justify-center bg-card-bg relative z-1 transition-all duration-200 font-display text-[16px] md:text-[20px] text-text-muted group-hover:border-accent group-hover:text-accent group-hover:shadow-[0_0_30px_rgba(163,230,53,0.25)]">
              {step.num}
            </div>
            <div>
              <div className="font-display text-[16px] md:text-[18px] tracking-[2px] mt-0 md:mt-2">{step.label}</div>
              <div className="font-script text-[14px] text-accent">{step.script}</div>
              <p className="text-[12px] text-text-secondary leading-[1.6] max-w-full md:max-w-[140px] mt-1 md:mx-auto">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
