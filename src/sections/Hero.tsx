import { ArrowRight } from 'lucide-react'
import { site } from '../config/site'
import { products } from '../data/products'
import { publicAsset } from '../utils/asset'
import { getGeneralWhatsAppUrl } from '../utils/whatsapp'
import { WhatsAppButton } from '../components/WhatsAppButton'

export function Hero() {
  const accentImages = [
    products.find((product) => product.collection === '30th Celebration')?.imageUrl,
    products.find((product) => product.collection === 'Pitch Black')?.imageUrl,
    products.find((product) => product.collection === 'Chaos Rising')?.imageUrl,
  ].filter((value): value is string => Boolean(value))

  return (
    <section id="inicio" className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(18,58,115,0.08),transparent_42%)]" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div>
          <p className="inline-flex rounded-full border border-gold/50 bg-gold-soft/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-navy-800">
            Pokémon TCG
          </p>
          <h1 className="mt-5 max-w-xl text-4xl font-extrabold leading-tight tracking-tight text-navy-900 sm:text-5xl">
            Tu próxima gran colección empieza acá.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-muted">
            Descubrí productos Pokémon TCG sellados, colecciones para explorar y nuevas
            incorporaciones para tu colección.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#catalogo"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
            >
              Explorar catálogo
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <WhatsAppButton
              href={getGeneralWhatsAppUrl()}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white px-5 py-3 text-sm font-semibold text-navy-900 hover:border-navy-700"
            >
              Consultar por WhatsApp
            </WhatsAppButton>
          </div>
        </div>

        <div className="relative mx-auto h-[340px] w-full max-w-[420px] sm:h-[420px]">
          {accentImages[0] ? (
            <img
              src={accentImages[0]}
              alt=""
              aria-hidden="true"
              className="absolute left-2 top-10 hidden h-44 w-32 -rotate-12 rounded-xl border-4 border-gold bg-white object-contain p-2 shadow-lg sm:block"
            />
          ) : null}
          {accentImages[1] ? (
            <img
              src={accentImages[1]}
              alt=""
              aria-hidden="true"
              className="absolute right-0 top-6 hidden h-44 w-32 rotate-12 rounded-xl border-4 border-gold bg-white object-contain p-2 shadow-lg sm:block"
            />
          ) : null}
          <div className="absolute left-1/2 top-1/2 z-10 w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-[28px] border-4 border-gold bg-navy-50 p-4 shadow-2xl">
            <img
              src={publicAsset(site.logoPath)}
              alt={site.logoAlt}
              className="h-auto w-full rounded-2xl object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
