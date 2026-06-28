const techGroups = [
  {
    label: 'Frontend',
    items: ['React', 'React Native', 'Next.js', 'Tailwind CSS'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Python', 'REST APIs'],
  },
  {
    label: 'IA & Dados',
    items: ['LangChain', 'OpenAI API', 'RAG', 'AWS Bedrock'],
  },
  {
    label: 'Infra & Cloud',
    items: ['AWS', 'Vercel', 'Supabase', 'Docker'],
  },
  {
    label: 'Integrações',
    items: ['Protheus ERP', 'Telegram API', 'WhatsApp API', 'MQTT'],
  },
]

export default function Technologies() {
  return (
    <section id="tecnologias" className="py-24 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-3">
          Tecnologias
        </h2>
        <p className="text-secondary text-sm mb-12 max-w-lg">
          Trabalho com o stack certo para cada problema — não com o que está na
          moda.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {techGroups.map((group) => (
            <div key={group.label}>
              <p className="font-heading text-xs font-semibold text-accent uppercase tracking-widest mb-3">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1.5 bg-card border border-white/[0.07] text-secondary rounded-lg"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
