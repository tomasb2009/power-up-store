import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navLinks, site } from '../config/site'
import { publicAsset } from '../utils/asset'
import { getGeneralWhatsAppUrl } from '../utils/whatsapp'
import { WhatsAppButton } from './WhatsAppButton'

export function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  function closeMenu() {
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#inicio" className="flex min-w-0 items-center gap-3" onClick={closeMenu}>
          <img
            src={publicAsset(site.logoPath)}
            alt={site.logoAlt}
            className="h-11 w-11 rounded-full border border-gold/40 object-cover"
          />
          <span className="truncate text-lg font-bold tracking-tight text-navy-900">{site.name}</span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-navy-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <WhatsAppButton
            href={getGeneralWhatsAppUrl()}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
          >
            Consultar por WhatsApp
          </WhatsAppButton>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line lg:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div id="menu-movil" className="border-t border-line bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-2" aria-label="Móvil">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-base font-medium text-navy-900 hover:bg-navy-50"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4">
            <WhatsAppButton
              href={getGeneralWhatsAppUrl()}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-4 py-3 text-sm font-semibold text-white"
            >
              Consultar por WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      ) : null}
    </header>
  )
}
