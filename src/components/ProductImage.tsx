import { ImageOff } from 'lucide-react'
import { useState } from 'react'

interface ProductImageProps {
  src: string
  alt: string
  className?: string
  eager?: boolean
}

export function ProductImage({ src, alt, className = '', eager = false }: ProductImageProps) {
  const [failed, setFailed] = useState(false)

  return (
    <div className={`relative flex items-center justify-center overflow-hidden bg-white ${className}`}>
      {failed ? (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-navy-100 px-4 text-center text-muted">
          <ImageOff className="h-8 w-8" aria-hidden="true" />
          <span className="text-sm">Imagen no disponible</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          onError={() => setFailed(true)}
          className="h-full w-full object-contain p-3"
        />
      )}
    </div>
  )
}
