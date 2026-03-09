import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Maria Garcia',
    role: 'Directora de RH',
    company: 'Grupo Empresarial MX',
    text: 'Excelente servicio. Los uniformes tienen una calidad superior y la atencion fue personalizada de principio a fin.',
  },
  {
    name: 'Carlos Rodriguez',
    role: 'Gerente General',
    company: 'Hotel Riviera',
    text: 'Llevamos 3 anos trabajando con ellos. Siempre cumplen con los tiempos de entrega y la calidad es consistente.',
  },
  {
    name: 'Ana Martinez',
    role: 'Coordinadora de Imagen',
    company: 'Clinica San Rafael',
    text: 'Los scrubs y batas que nos confeccionaron son comodos, duraderos y con excelentes acabados. Muy recomendados.',
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
            Testimonios
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-accent-400 text-accent-400"
                  />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold text-lg">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">
                    {t.role} - {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
