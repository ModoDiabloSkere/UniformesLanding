import { Check } from 'lucide-react'

const benefits = [
  'Materiales de primera calidad importados y nacionales',
  'Disenos exclusivos para tu marca',
  'Toma de medidas presencial en tus instalaciones',
  'Entregas puntuales garantizadas',
  'Precios competitivos por volumen',
  'Atencion personalizada de principio a fin',
  'Garantia en costuras y acabados',
  'Servicio de reposicion y mantenimiento',
]

export function Benefits() {
  return (
    <section id="nosotros" className="py-24 bg-primary-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold text-accent-400 uppercase tracking-wider mb-3">
              Por que elegirnos
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
              La mejor opcion para uniformes empresariales
            </h2>
            <p className="text-primary-300 text-lg leading-relaxed mb-8">
              Con anos de experiencia confeccionando uniformes para empresas de
              todos los tamaños, ofrecemos un servicio que combina calidad,
              puntualidad y atencion al detalle.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-400/20 flex items-center justify-center mt-0.5">
                    <Check className="h-3.5 w-3.5 text-accent-400" />
                  </div>
                  <span className="text-sm text-primary-200">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image placeholder */}
          <div className="hidden lg:block">
            <div className="w-full aspect-square rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-white/30 text-sm">Imagen del taller</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
