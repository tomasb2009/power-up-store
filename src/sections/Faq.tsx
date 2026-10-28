import { ChevronDown } from 'lucide-react'
import { useId, useState } from 'react'

const faqs = [
  {
    question: '¿Los productos son sellados?',
    answer:
      'Sí. El catálogo incluye productos Pokémon TCG sellados y originales. Si tenés una duda puntual sobre un ítem, consultanos antes de coordinar la compra.',
  },
  {
    question: '¿Cómo consulto la disponibilidad?',
    answer:
      'La disponibilidad se confirma al momento de la consulta. Podés escribirnos por WhatsApp indicando el producto que te interesa.',
  },
  {
    question: '¿Cómo realizo una compra?',
    answer:
      'Elegí el producto en el catálogo y consultanos por WhatsApp. Te confirmamos disponibilidad y coordinamos los siguientes pasos.',
  },
  {
    question: '¿Qué medios de pago aceptan?',
    answer: 'Consultanos por WhatsApp para conocer las opciones disponibles.',
  },
  {
    question: '¿Hacen envíos?',
    answer: 'Consultanos por WhatsApp para conocer las opciones disponibles.',
  },
  {
    question: '¿Puedo reservar un producto?',
    answer: 'Consultanos por WhatsApp para conocer las opciones disponibles.',
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const baseId = useId()

  return (
    <section className="bg-navy-50 py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-3xl font-extrabold text-navy-900">Preguntas frecuentes</h2>
        <p className="mt-2 text-muted">Respuestas claras sobre cómo consultar y coordinar tu compra.</p>
        <div className="mt-8 divide-y divide-line rounded-2xl border border-line bg-white">
          {faqs.map((item, index) => {
            const open = openIndex === index
            const panelId = `${baseId}-panel-${index}`
            const buttonId = `${baseId}-button-${index}`

            return (
              <div key={item.question}>
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(open ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-navy-900"
                  >
                    {item.question}
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!open}
                  className="px-5 pb-4 text-sm leading-6 text-muted"
                >
                  {item.answer}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
