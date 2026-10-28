import type { Product } from '../types/product'
import { formatPrice } from '../utils/formatPrice'
import { getProductWhatsAppUrl } from '../utils/whatsapp'
import { ProductImage } from './ProductImage'
import { WhatsAppButton } from './WhatsAppButton'

const availabilityCopy: Record<Product['availability'], { label: string; className: string }> = {
  disponible: {
    label: 'Disponible',
    className: 'bg-emerald-50 text-emerald-800',
  },
  consultar: {
    label: 'Consultar disponibilidad',
    className: 'bg-gold-soft text-navy-900',
  },
  agotado: {
    label: 'Agotado',
    className: 'bg-slate-200 text-slate-700',
  },
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const availability = availabilityCopy[product.availability]
  const soldOut = product.availability === 'agotado'

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-[0_8px_24px_rgba(11,31,74,0.06)] transition-transform duration-200 hover:-translate-y-0.5">
      <div className="relative aspect-[4/3] border-b border-line">
        <ProductImage
          src={product.imageUrl}
          alt={`${product.collection} - ${product.name}`}
        />
        {product.tag ? (
          <span className="absolute left-3 top-3 rounded-full bg-navy-900 px-3 py-1 text-xs font-semibold text-white">
            {product.tag}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-navy-700">
            {product.collection}
          </p>
          <h3 className="mt-1 text-lg font-bold text-navy-900">{product.name}</h3>
          <p className="mt-1 text-sm leading-6 text-muted">{product.description}</p>
        </div>

        <div className="mt-auto flex flex-wrap items-end justify-between gap-3">
          <p className="text-2xl font-extrabold text-navy-900">{formatPrice(product.price)}</p>
          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${availability.className}`}>
            {availability.label}
          </span>
        </div>

        {soldOut ? (
          <p className="rounded-xl bg-navy-50 px-3 py-2 text-sm text-muted">
            Este producto está agotado. Podés consultar si vuelve a ingresar.
          </p>
        ) : null}

        <WhatsAppButton
          href={soldOut ? null : getProductWhatsAppUrl(product)}
          disabledLabel={
            soldOut
              ? 'Este producto está agotado.'
              : 'Configurá el número de WhatsApp en src/config/site.ts para activar las consultas.'
          }
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-navy-900 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
        >
          {soldOut ? 'No disponible para consulta' : 'Consultar por WhatsApp'}
        </WhatsAppButton>
      </div>
    </article>
  )
}
