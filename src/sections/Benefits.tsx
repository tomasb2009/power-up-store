import { Layers, MessageCircle, Package, Sparkles } from 'lucide-react'

const benefits = [
  {
    title: 'Productos sellados',
    text: 'Trabajamos con productos Pokémon TCG sellados y originales, listos para coleccionar.',
    icon: Package,
  },
  {
    title: 'Atención personalizada',
    text: 'Consultá antes de comprar para confirmar disponibilidad, precio y el producto que estás buscando.',
    icon: MessageCircle,
  },
  {
    title: 'Coleccionismo para todos los niveles',
    text: 'Desde un sobre hasta cajas y colecciones completas, según lo que quieras sumar.',
    icon: Layers,
  },
  {
    title: 'Consulta directa',
    text: 'La compra se coordina de forma simple, con información clara sobre cada producto publicado.',
    icon: Sparkles,
  },
]

export function Benefits() {
  return (
    <section className="bg-navy-50 py-14 sm:py-16">
      <div className="mx-auto grid max-w-6xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {benefits.map((benefit) => (
          <article
            key={benefit.title}
            className="rounded-2xl border border-line bg-white p-5 shadow-[0_8px_24px_rgba(11,31,74,0.04)]"
          >
            <benefit.icon className="h-6 w-6 text-accent" aria-hidden="true" />
            <h2 className="mt-4 text-lg font-bold text-navy-900">{benefit.title}</h2>
            <p className="mt-2 text-sm leading-6 text-muted">{benefit.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
