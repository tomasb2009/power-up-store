export type ProductAvailability = 'disponible' | 'consultar' | 'agotado'

export type ProductType =
  | 'Elite Trainer Box'
  | 'Booster Box'
  | 'Booster Bundle'
  | 'Booster Pack'
  | 'Binder Collection'
  | 'Mini Tins'

export interface Product {
  id: string
  name: string
  collection: string
  description: string
  price: number
  imageUrl: string
  productType: ProductType
  availability: ProductAvailability
  tag?: string
}
