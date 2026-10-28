import { products } from '../data/products'
import { ProductImage } from '../components/ProductImage'
import { getCollections } from '../utils/catalog'

interface CollectionsProps {
  onSelectCollection: (collection: string) => void
}

export function Collections({ onSelectCollection }: CollectionsProps) {
  const collections = getCollections(products)

  return (
    <section id="colecciones" className="scroll-mt-24 bg-navy-50 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-700">Colecciones</p>
        <h2 className="mt-2 text-3xl font-extrabold text-navy-900">Explorá por colección</h2>
        <p className="mt-2 max-w-2xl text-muted">
          Estas colecciones se generan automáticamente a partir del catálogo publicado.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((collection) => (
            <button
              key={collection.name}
              type="button"
              onClick={() => onSelectCollection(collection.name)}
              className="overflow-hidden rounded-2xl border border-line bg-white text-left shadow-[0_8px_24px_rgba(11,31,74,0.04)] transition-transform hover:-translate-y-0.5"
            >
              <ProductImage src={collection.imageUrl} alt="" className="aspect-[16/9]" />
              <div className="p-4">
                <h3 className="text-lg font-bold text-navy-900">{collection.name}</h3>
                <p className="mt-1 text-sm text-muted">
                  {collection.count} producto{collection.count === 1 ? '' : 's'}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
