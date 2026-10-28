import { site } from '../config/site'
import type { Product } from '../types/product'
import { formatPrice } from './formatPrice'

export function isWhatsAppConfigured(): boolean {
  return site.whatsappNumber.trim().length > 0
}

export function buildWhatsAppUrl(message: string): string | null {
  const number = site.whatsappNumber.trim()
  if (!number) return null
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

export function buildProductInquiryMessage(product: Product): string {
  return `¡Hola! Quería consultar por disponibilidad de ${product.collection} - ${product.name}. Precio publicado: ${formatPrice(product.price)}. ¿Está disponible?`
}

export function buildGeneralInquiryMessage(): string {
  return `¡Hola! Quería consultar por productos de ${site.name}.`
}

export function getProductWhatsAppUrl(product: Product): string | null {
  return buildWhatsAppUrl(buildProductInquiryMessage(product))
}

export function getGeneralWhatsAppUrl(): string | null {
  return buildWhatsAppUrl(buildGeneralInquiryMessage())
}
