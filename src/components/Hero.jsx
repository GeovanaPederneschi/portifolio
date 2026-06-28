export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 animate-fade-in">
      <div className="max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="max-w-3xl">
          <p
            className="font-mono text-xs mb-6 tracking-wide select-none"
            style={{ color: 'rgba(124, 92, 252, 0.6)' }}
          >
            // construindo o que ainda não existe
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-[1.1] mb-6">
            Desenvolvo sistemas que funcionam de verdade.
          </h1>
          <p className="text-secondary text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
            Fullstack developer com experiência real em produção — sites, apps,
            bots de WhatsApp e agentes de IA.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projetos"
              className="px-6 py-3 bg-accent hover:bg-accent-hover text-white font-medium rounded-lg transition-colors duration-200"
            >
              Ver projetos
            </a>
            <a
              href="#contato"
              className="px-6 py-3 border border-accent/40 hover:border-accent/70 text-primary font-medium rounded-lg transition-colors duration-200"
            >
              Entrar em contato
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
