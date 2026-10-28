import { Camera, MessageCircle } from 'lucide-react'
import { navLinks, site } from '../config/site'
import { publicAsset } from '../utils/asset'
import { getGeneralWhatsAppUrl, isWhatsAppConfigured } from '../utils/whatsapp'

export function Footer() {
  const whatsappUrl = getGeneralWhatsAppUrl()
  const hasInstagram = site.instagramUrl.trim().length > 0

  return (
    <footer className="border-t border-white/10 bg-navy-950 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={publicAsset(site.logoPath)}
              alt={site.logoAlt}
              className="h-12 w-12 rounded-full border border-gold/40 object-cover"
            />
            <span className="text-lg font-bold">{site.name}</span>
          </div>
          <p className="mt-4 text-sm leading-6 text-white/70">{site.description}</p>
        </div>

        <nav aria-label="Pie de página">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold-soft">Navegación</p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-white/80 hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-gold-soft">Contacto</p>
          <div className="mt-4 flex flex-col gap-3">
            {isWhatsAppConfigured() && whatsappUrl ? (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            ) : (
              <p className="text-sm text-white/60">WhatsApp pendiente de configurar.</p>
            )}
            {hasInstagram ? (
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
              >
                <Camera className="h-4 w-4" />
                Instagram
              </a>
            ) : null}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-6 text-center text-xs leading-6 text-white/55 sm:px-6">
        {site.copyrightNotice}
      </div>
    </footer>
  )
}
