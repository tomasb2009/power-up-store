import { site } from '../config/site'
import { publicAsset } from '../utils/asset'

export function About() {
  return (
    <section id="sobre-nosotros" className="scroll-mt-24 bg-white py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="mx-auto max-w-xs">
          <img
            src={publicAsset(site.logoPath)}
            alt={site.logoAlt}
            className="w-full rounded-[28px] border-4 border-gold object-contain"
          />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-700">{site.aboutTitle}</p>
          <h2 className="mt-2 text-3xl font-extrabold text-navy-900">Coleccionar, con claridad.</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">{site.aboutText}</p>
        </div>
      </div>
    </section>
  )
}
