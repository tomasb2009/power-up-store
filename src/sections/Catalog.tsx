import { Search, SlidersHorizontal, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { ProductCard } from '../components/ProductCard'
import { products } from '../data/products'
import { useCatalogFilters } from '../hooks/useCatalogFilters'
import type { ProductType } from '../types/product'
import { getCollections, getProductTypes } from '../utils/catalog'

interface CatalogProps {
  requestedCollection?: { name: string; nonce: number }
}

export function Catalog({ requestedCollection }: CatalogProps) {
  const collections = getCollections(products)
  const types = getProductTypes(products)
  const [filtersOpen, setFiltersOpen] = useState(false)
  const {
    query,
    setQuery,
    collection,
    setCollection,
    productType,
    setProductType,
    sort,
    setSort,
    filteredProducts,
    hasActiveFilters,
    clearFilters,
  } = useCatalogFilters(products)

  useEffect(() => {
    if (requestedCollection?.name) {
      setCollection(requestedCollection.name)
      setQuery('')
      setProductType('all')
      setSort('featured')
    }
  }, [requestedCollection, setCollection, setQuery, setProductType, setSort])

  return (
    <section id="catalogo" className="scroll-mt-24 bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-700">Catálogo</p>
            <h2 className="mt-2 text-3xl font-extrabold text-navy-900">Productos disponibles para consultar</h2>
            <p className="mt-2 max-w-2xl text-muted">
              Precios en pesos argentinos. La disponibilidad se confirma al momento de la consulta.
            </p>
          </div>
          <p className="text-sm font-medium text-muted" aria-live="polite">
            {filteredProducts.length} resultado{filteredProducts.length === 1 ? '' : 's'}
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-line bg-navy-50 p-4">
          <div className="flex items-center justify-between gap-3 md:hidden">
            <label className="relative block flex-1">
              <span className="sr-only">Buscar producto</span>
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Buscar por nombre"
                className="w-full rounded-xl border border-line bg-white py-3 pl-10 pr-3 text-sm"
              />
            </label>
            <button
              type="button"
              className="inline-flex h-12 items-center gap-2 rounded-xl border border-line bg-white px-3 text-sm font-semibold"
              aria-expanded={filtersOpen}
              onClick={() => setFiltersOpen((value) => !value)}
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filtros
            </button>
          </div>

          <div className={`mt-4 grid gap-3 md:mt-0 md:grid-cols-4 ${filtersOpen ? 'grid' : 'hidden md:grid'}`}>
            <label className="hidden md:block">
              <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-muted">Buscar</span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Nombre del producto"
                className="w-full rounded-xl border border-line bg-white px-3 py-3 text-sm"
              />
            </label>

            <label>
              <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-muted">Colección</span>
              <select
                value={collection}
                onChange={(event) => setCollection(event.target.value)}
                className="w-full rounded-xl border border-line bg-white px-3 py-3 text-sm"
              >
                <option value="all">Todas las colecciones</option>
                {collections.map((item) => (
                  <option key={item.name} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            </label>

            <label>
              <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-muted">Tipo</span>
              <select
                value={productType}
                onChange={(event) => setProductType(event.target.value as 'all' | ProductType)}
                className="w-full rounded-xl border border-line bg-white px-3 py-3 text-sm"
              >
                <option value="all">Todos los tipos</option>
                {types.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </label>

            <label>
              <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-muted">Ordenar</span>
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value as typeof sort)}
                className="w-full rounded-xl border border-line bg-white px-3 py-3 text-sm"
              >
                <option value="featured">Orden del catálogo</option>
                <option value="price-asc">Precio: menor a mayor</option>
                <option value="price-desc">Precio: mayor a menor</option>
              </select>
            </label>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={clearFilters}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-navy-900"
            >
              <X className="h-4 w-4" />
              Mostrar todos
            </button>
            {hasActiveFilters ? (
              <button
                type="button"
                onClick={clearFilters}
                className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold text-accent"
              >
                Limpiar filtros
              </button>
            ) : null}
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-dashed border-line bg-navy-50 px-6 py-16 text-center">
            <h3 className="text-xl font-bold text-navy-900">No encontramos coincidencias</h3>
            <p className="mt-2 text-muted">Probá con otro nombre, colección o tipo de producto.</p>
            <button
              type="button"
              onClick={clearFilters}
              className="mt-5 rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white"
            >
              Limpiar filtros
            </button>
          </div>
        ) : (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
