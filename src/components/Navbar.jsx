import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/80 backdrop-blur-md border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-heading font-semibold text-primary text-lg tracking-tight">
          Geovana Pederneschi
        </span>
        <div className="flex items-center gap-4 sm:gap-8">
          <a
            href="#projetos"
            className="text-secondary hover:text-primary transition-colors duration-200 text-sm font-medium"
          >
            Projetos
          </a>
          <a
            href="#tecnologias"
            className="text-secondary hover:text-primary transition-colors duration-200 text-sm font-medium"
          >
            Tecnologias
          </a>
          <a
            href="#contato"
            className="text-secondary hover:text-primary transition-colors duration-200 text-sm font-medium"
          >
            Contato
          </a>
          <a
            href="https://github.com/GeovanaPederneschi/portf-lio-politico"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary/70 hover:text-primary transition-colors duration-200 text-sm font-medium"
          >
            Portfólio político ↗
          </a>
        </div>
      </div>
    </nav>
  )
}
