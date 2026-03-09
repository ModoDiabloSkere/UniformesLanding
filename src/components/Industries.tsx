import {
  Building2,
  Stethoscope,
  GraduationCap,
  UtensilsCrossed,
  HardHat,
  Hotel,
} from 'lucide-react'

const industries = [
  {
    icon: Building2,
    name: 'Corporativo',
    description: 'Trajes ejecutivos, camisas y blusas corporativas',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Stethoscope,
    name: 'Salud',
    description: 'Batas, scrubs y uniformes clinicos',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: GraduationCap,
    name: 'Educacion',
    description: 'Uniformes escolares y de personal docente',
    color: 'bg-violet-50 text-violet-600',
  },
  {
    icon: UtensilsCrossed,
    name: 'Restaurantes',
    description: 'Filipinas, mandiles y uniformes de cocina',
    color: 'bg-orange-50 text-orange-600',
  },
  {
    icon: HardHat,
    name: 'Industrial',
    description: 'Overoles, chalecos y ropa de seguridad',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: Hotel,
    name: 'Hoteleria',
    description: 'Uniformes de recepcion, limpieza y servicio',
    color: 'bg-rose-50 text-rose-600',
  },
]

export function Industries() {
  return (
    <section id="industrias" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
            Sectores que atendemos
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Uniformes para cada industria
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Tenemos experiencia confeccionando uniformes para los sectores mas
            exigentes del mercado.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="group relative bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div
                  className={`w-16 h-16 rounded-2xl ${industry.color} flex items-center justify-center mb-5 group-hover:bg-white/20 group-hover:text-white transition-colors duration-300`}
                >
                  <industry.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-white transition-colors mb-2">
                  {industry.name}
                </h3>
                <p className="text-gray-500 group-hover:text-primary-100 transition-colors">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
