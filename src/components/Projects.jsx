import { useState, useMemo } from 'react'
import { projects } from '../data/projects'

const categoryStyle = {
  'Web App':        'text-sky-400 border-sky-500/20 bg-sky-500/10',
  'Mobile App':     'text-emerald-400 border-emerald-500/20 bg-emerald-500/10',
  'IA / RAG':       'text-violet-400 border-violet-500/20 bg-violet-500/10',
  'Automação':      'text-amber-400 border-amber-500/20 bg-amber-500/10',
  'Integração ERP': 'text-rose-400 border-rose-500/20 bg-rose-500/10',
}

function IconExternalLink() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function IconPlay() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  )
}

function IconGithub() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function IconLock() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0110 0v4" />
    </svg>
  )
}

function ActionButton({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-[11px] font-medium px-3 py-1.5 rounded-lg border border-white/10 text-secondary hover:text-primary hover:border-white/25 transition-all duration-150"
    >
      {icon}
      {label}
    </a>
  )
}

function ProjectCard({ project }) {
  const badgeClass =
    categoryStyle[project.category] ??
    'text-secondary border-white/10 bg-white/5'

  const hasActions = project.demoUrl || project.videoUrl || project.repoUrl
  const hasHighlights = project.highlights?.length > 0

  return (
    <article className="bg-card border border-white/[0.07] rounded-xl p-6 flex flex-col gap-4 hover:border-accent/25 hover:-translate-y-1 transition-all duration-200">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-heading font-semibold text-primary text-base leading-snug">
          {project.name}
        </h3>
        <div className="flex flex-col items-end gap-1.5 shrink-0">
          <span
            className={`text-[11px] font-medium px-2.5 py-1 rounded-full border ${badgeClass}`}
          >
            {project.category}
          </span>
          {project.isConfidential && (
            <span className="inline-flex items-center gap-1 text-[10px] text-secondary/40 font-mono">
              <IconLock />
              confidencial
            </span>
          )}
        </div>
      </div>

      <p className="text-secondary text-sm leading-relaxed">
        {project.description}
      </p>

      {hasHighlights && (
        <ul className="flex flex-col gap-1.5">
          {project.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-[12px] text-secondary/70 leading-snug">
              <span className="shrink-0 mt-[6px] w-1 h-1 rounded-full bg-accent/60" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="flex-1" />

      <div className="flex flex-wrap gap-1.5">
        {project.techs.map((tech) => (
          <span
            key={tech}
            className="text-[11px] px-2.5 py-1 bg-white/[0.04] text-secondary/80 rounded border border-white/[0.06]"
          >
            {tech}
          </span>
        ))}
      </div>

      {hasActions && (
        <div className="flex flex-wrap gap-2 pt-1 border-t border-white/[0.06]">
          {project.demoUrl && (
            <ActionButton href={project.demoUrl} icon={<IconExternalLink />} label="Ver site" />
          )}
          {project.videoUrl && (
            <ActionButton href={project.videoUrl} icon={<IconPlay />} label="Ver demo" />
          )}
          {project.repoUrl && (
            <ActionButton href={project.repoUrl} icon={<IconGithub />} label="Código" />
          )}
        </div>
      )}
    </article>
  )
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('Todos')
  const [visible, setVisible] = useState(true)

  const allTags = useMemo(() => {
    const tags = new Set()
    projects.forEach((p) => p.tags.forEach((t) => tags.add(t)))
    return ['Todos', ...Array.from(tags)]
  }, [])

  const filtered = useMemo(
    () =>
      activeFilter === 'Todos'
        ? projects
        : projects.filter((p) => p.tags.includes(activeFilter)),
    [activeFilter],
  )

  const handleFilter = (tag) => {
    if (tag === activeFilter) return
    setVisible(false)
    setTimeout(() => {
      setActiveFilter(tag)
      setVisible(true)
    }, 150)
  }

  return (
    <section id="projetos" className="py-24 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-3">
          O que já construí
        </h2>
        <p className="text-secondary text-sm mb-10">
          Projetos reais, em produção ou entregues para clientes.
        </p>

        <div className="flex gap-2 mb-8 overflow-x-auto pb-1 scrollbar-none">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleFilter(tag)}
              className={`shrink-0 text-sm font-medium px-4 py-1.5 rounded-lg border transition-all duration-200 ${
                activeFilter === tag
                  ? 'bg-accent border-accent text-white'
                  : 'border-white/10 text-secondary hover:border-white/25 hover:text-primary'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 transition-opacity duration-150 ${
            visible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
