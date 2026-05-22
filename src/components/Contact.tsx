import { Mail, Linkedin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative z-[1] px-4 md:px-10 py-[60px] md:py-[100px] border-t border-border-color">
      <div className="flex flex-wrap items-baseline gap-2 md:gap-4 mb-10 md:mb-16 pb-6 border-b border-border-color">
        <span className="font-mono text-[11px] text-text-muted tracking-[2px]">04</span>
        <div>
          <div className="font-display text-[clamp(36px,9vw,80px)] leading-none tracking-[2px]">CONTATO</div>
          <div className="font-script text-[clamp(20px,3vw,36px)] text-accent -mt-2">Vamos criar</div>
        </div>
        <div className="md:ml-auto flex items-center gap-2 font-mono text-[9px] md:text-[10px] tracking-[1.5px] uppercase text-accent border border-accent/25 bg-accent-dim px-3.5 py-1.5 rounded-full order-[-1] md:order-none">
          <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse-dot"></div>
          Disponível Agora
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">
        <div>
          <h2 className="font-display text-[clamp(36px,14vw,100px)] leading-[0.9] tracking-[3px] mb-2">
            VAMOS<br/>CRIAR<br/><em className="block font-script text-[clamp(32px,4vw,54px)] text-accent not-italic">Juntos</em>
          </h2>
          <p className="mt-6 text-[15px] text-text-secondary leading-[1.7] max-w-[400px]">
            Tem um projeto em mente? Uma marca para construir, uma campanha para lançar ou uma identidade para redesenhar?
            Adoraria ouvir sobre isso.
          </p>

          <div className="mt-10 flex flex-col gap-4">
            <div className="flex items-center gap-4 p-4 md:px-5 md:py-4 border border-border-color rounded-[4px] bg-card-bg transition-colors duration-200 hover:border-accent">
              <div className="w-9 h-9 bg-accent-dim rounded-full flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4 text-accent" />
              </div>
              <div>
                <span className="block font-mono text-[10px] tracking-[2px] uppercase text-text-muted">E-mail</span>
                <span className="block text-[13px] text-text-primary mt-0.5">ronaldferrazsousa1@gmail.com</span>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 md:px-5 md:py-4 border border-border-color rounded-[4px] bg-card-bg transition-colors duration-200 hover:border-accent">
              <div className="w-9 h-9 bg-accent-dim rounded-full flex items-center justify-center shrink-0">
                <Linkedin className="w-4 h-4 text-accent" />
              </div>
              <div>
                <span className="block font-mono text-[10px] tracking-[2px] uppercase text-text-muted">Behance / LinkedIn</span>
                <span className="block text-[13px] text-text-primary mt-0.5">@ronaldferraz</span>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 md:px-5 md:py-4 border border-border-color rounded-[4px] bg-card-bg transition-colors duration-200 hover:border-accent">
              <div className="w-9 h-9 bg-accent-dim rounded-full flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4 text-accent" />
              </div>
              <div>
                <span className="block font-mono text-[10px] tracking-[2px] uppercase text-text-muted">Tempo de Resposta</span>
                <span className="block text-[13px] text-text-primary mt-0.5">Em até 24 horas</span>
              </div>
            </div>
          </div>
        </div>

        <form 
          action="https://formsubmit.co/ronaldferrazsousa1@gmail.com" 
          method="POST"
          className="bg-card-bg border border-border-color rounded-[4px] p-6 md:p-10 relative"
        >
          <div className="absolute -inset-[1px] border border-dashed border-border-dashed rounded-[4px] pointer-events-none"></div>
          
          <div className="mb-5">
            <label className="block font-mono text-[10px] tracking-[2px] uppercase text-text-muted mb-2" htmlFor="name">Seu Nome</label>
            <input 
              className="w-full bg-elevated-bg border border-border-color rounded-[4px] px-4 py-3 font-body text-[14px] text-text-primary outline-none transition-colors duration-200 focus:border-accent placeholder:text-text-muted" 
              type="text" 
              id="name" 
              name="name"
              required
              placeholder="João Silva" 
            />
          </div>
          <div className="mb-5">
            <label className="block font-mono text-[10px] tracking-[2px] uppercase text-text-muted mb-2" htmlFor="email">E-mail</label>
            <input 
              className="w-full bg-elevated-bg border border-border-color rounded-[4px] px-4 py-3 font-body text-[14px] text-text-primary outline-none transition-colors duration-200 focus:border-accent placeholder:text-text-muted" 
              type="email" 
              id="email" 
              name="email"
              required
              placeholder="joao@empresa.com" 
            />
          </div>
          <div className="mb-5">
            <label className="block font-mono text-[10px] tracking-[2px] uppercase text-text-muted mb-2" htmlFor="project">Tipo de Projeto</label>
            <input 
              className="w-full bg-elevated-bg border border-border-color rounded-[4px] px-4 py-3 font-body text-[14px] text-text-primary outline-none transition-colors duration-200 focus:border-accent placeholder:text-text-muted" 
              type="text" 
              id="project" 
              name="project"
              required
              placeholder="Design de Logo, Identidade Visual, UI/UX..." 
            />
          </div>
          <div className="mb-5">
            <label className="block font-mono text-[10px] tracking-[2px] uppercase text-text-muted mb-2" htmlFor="message">Fale sobre seu projeto</label>
            <textarea 
              className="w-full bg-elevated-bg border border-border-color rounded-[4px] px-4 py-3 font-body text-[14px] text-text-primary outline-none transition-colors duration-200 focus:border-accent placeholder:text-text-muted resize-none" 
              id="message" 
              name="message"
              required
              rows={4} 
              placeholder="Descreva sua visão, objetivos e prazo..."
            ></textarea>
          </div>
          <button 
            type="submit"
            className="w-full text-center font-mono text-[11px] tracking-[2px] uppercase text-page-bg bg-accent px-8 py-4 rounded-full no-underline border-none transition-shadow duration-250 hover:shadow-[0_0_30px_rgba(163,230,53,0.25)] cursor-none"
          >
            Enviar Mensagem →
          </button>
        </form>
      </div>
    </section>
  );
}
