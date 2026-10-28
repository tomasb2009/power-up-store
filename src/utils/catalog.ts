import type { Product, ProductType } from '../types/product'

export interface CollectionSummary {
  name: string
  count: number
  imageUrl: string
  description: string
}

export function getCollections(products: Product[]): CollectionSummary[] {
  const map = new Map<string, CollectionSummary>()

  for (const product of products) {
    const existing = map.get(product.collection)
    if (existing) {
      existing.count += 1
    } else {
      map.set(product.collection, {
        name: product.collection,
        count: 1,
        imageUrl: product.imageUrl,
        description: product.description,
      })
    }
  }

  return [...map.values()]
}

export function getProductTypes(products: Product[]): ProductType[] {
  return [...new Set(products.map((product) => product.productType))]
}
