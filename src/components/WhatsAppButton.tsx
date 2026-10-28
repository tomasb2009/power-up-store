import { MessageCircle } from 'lucide-react'
import type { ReactNode } from 'react'
import { isWhatsAppConfigured } from '../utils/whatsapp'

interface WhatsAppButtonProps {
  href: string | null
  children: ReactNode
  className?: string
  disabledLabel?: string
}

export function WhatsAppButton({
  href,
  children,
  className = '',
  disabledLabel = 'Configurá el número de WhatsApp en src/config/site.ts para activar las consultas.',
}: WhatsAppButtonProps) {
  const enabled = Boolean(href) && isWhatsAppConfigured()

  if (!enabled) {
    return (
      <button
        type="button"
        disabled
        title={disabledLabel}
        className={`${className} cursor-not-allowed opacity-55`}
      >
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
        <span>{children}</span>
      </button>
    )
  }

  return (
    <a
      href={href ?? undefined}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <MessageCircle className="h-4 w-4" aria-hidden="true" />
      <span>{children}</span>
    </a>
  )
}
