import { Camera } from 'lucide-react'
import { site } from '../config/site'
import { WhatsAppButton } from '../components/WhatsAppButton'
import { getGeneralWhatsAppUrl, isWhatsAppConfigured } from '../utils/whatsapp'

export function Contact() {
  const hasInstagram = site.instagramUrl.trim().length > 0

  return (
    <section id="contacto" className="scroll-mt-24 bg-navy-900 py-16 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-soft">Contacto</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-extrabold">
          Consultá disponibilidad y productos por WhatsApp
        </h2>
        <p className="mt-4 max-w-2xl text-white/80">
          Si te interesa un producto del catálogo, escribinos y te confirmamos si está disponible.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <WhatsAppButton
            href={getGeneralWhatsAppUrl()}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white hover:bg-accent-dark"
          >
            Escribir por WhatsApp
          </WhatsAppButton>
          {hasInstagram ? (
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              <Camera className="h-4 w-4" aria-hidden="true" />
              Instagram
            </a>
          ) : null}
        </div>
        {!isWhatsAppConfigured() ? (
          <p className="mt-4 max-w-xl text-sm text-white/70">
            El número de WhatsApp todavía no está configurado. Completalo en{' '}
            <code className="text-gold-soft">src/config/site.ts</code> para activar las consultas.
          </p>
        ) : null}
      </div>
    </section>
  )
}
