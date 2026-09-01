import { useState, useEffect } from 'react'

const links = [
  { href: '#projetos', label: 'Projetos' },
  { href: '#tecnologias', label: 'Tecnologias' },
  { href: '#contato', label: 'Contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

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

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-secondary hover:text-primary transition-colors duration-200 text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://portf-lio-politico.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary/70 hover:text-primary transition-colors duration-200 text-sm font-medium"
          >
            Portfólio político ↗
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          className="md:hidden flex flex-col justify-center gap-1.5 p-2"
        >
          <span className={`block w-6 h-0.5 bg-primary rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-primary rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-primary rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      <div
        className={`md:hidden border-t border-white/[0.06] overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-bg py-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-3.5 text-secondary hover:text-primary hover:bg-white/[0.03] text-sm font-medium border-b border-white/[0.04] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://portf-lio-politico.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-3.5 text-secondary/70 hover:text-primary hover:bg-white/[0.03] text-sm font-medium transition-colors"
          >
            Portfólio político ↗
          </a>
        </div>
      </div>
    </nav>
  )
}
