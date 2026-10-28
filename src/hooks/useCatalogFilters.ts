import { useMemo, useState } from 'react'
import type { Product, ProductType } from '../types/product'

export type SortOption = 'featured' | 'price-asc' | 'price-desc'

export function useCatalogFilters(products: Product[]) {
  const [query, setQuery] = useState('')
  const [collection, setCollection] = useState('all')
  const [productType, setProductType] = useState<'all' | ProductType>('all')
  const [sort, setSort] = useState<SortOption>('featured')

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    const next = products.filter((product) => {
      const matchesQuery =
        normalizedQuery.length === 0 ||
        product.name.toLowerCase().includes(normalizedQuery) ||
        product.collection.toLowerCase().includes(normalizedQuery)
      const matchesCollection = collection === 'all' || product.collection === collection
      const matchesType = productType === 'all' || product.productType === productType
      return matchesQuery && matchesCollection && matchesType
    })

    if (sort === 'price-asc') {
      next.sort((a, b) => a.price - b.price)
    } else if (sort === 'price-desc') {
      next.sort((a, b) => b.price - a.price)
    }

    return next
  }, [products, query, collection, productType, sort])

  const hasActiveFilters =
    query.trim().length > 0 || collection !== 'all' || productType !== 'all' || sort !== 'featured'

  function clearFilters() {
    setQuery('')
    setCollection('all')
    setProductType('all')
    setSort('featured')
  }

  return {
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
  }
}
