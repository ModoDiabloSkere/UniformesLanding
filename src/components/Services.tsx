import { Ruler, Palette, Truck, ShieldCheck, Repeat, Users } from 'lucide-react'

const services = [
  {
    icon: Ruler,
    title: 'Confeccion a medida',
    description:
      'Tomamos medidas individuales para garantizar un ajuste perfecto en cada prenda.',
  },
  {
    icon: Palette,
    title: 'Diseno personalizado',
    description:
      'Creamos disenos unicos que reflejan la imagen corporativa de tu empresa.',
  },
  {
    icon: ShieldCheck,
    title: 'Calidad garantizada',
    description:
      'Materiales de primera calidad y acabados impecables en cada uniforme.',
  },
  {
    icon: Truck,
    title: 'Entrega puntual',
    description:
      'Cumplimos con los plazos de entrega establecidos sin comprometer la calidad.',
  },
  {
    icon: Repeat,
    title: 'Reposicion continua',
    description:
      'Servicio de reposicion para mantener uniformes en optimas condiciones.',
  },
  {
    icon: Users,
    title: 'Atencion dedicada',
    description:
      'Un asesor asignado a tu cuenta para acompanar todo el proceso.',
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
            Nuestros servicios
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Todo lo que necesitas en un solo lugar
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Ofrecemos un servicio integral para la confeccion de uniformes
            corporativos de alta calidad.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl border border-gray-100 hover:border-primary-100 hover:shadow-xl hover:shadow-primary-500/5 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-5 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
