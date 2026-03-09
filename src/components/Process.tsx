import { MessageSquare, Ruler, Scissors, Package } from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Consulta inicial',
    description:
      'Nos reunimos contigo para entender las necesidades de tu empresa, cantidad de uniformes, estilos y preferencias.',
  },
  {
    icon: Ruler,
    step: '02',
    title: 'Diseno y medidas',
    description:
      'Creamos propuestas de diseno personalizadas y tomamos medidas individuales de cada empleado.',
  },
  {
    icon: Scissors,
    step: '03',
    title: 'Confeccion',
    description:
      'Nuestro equipo experto confecciona cada prenda con materiales de primera calidad y atencion al detalle.',
  },
  {
    icon: Package,
    step: '04',
    title: 'Entrega',
    description:
      'Realizamos control de calidad y entregamos los uniformes perfectamente empaquetados y listos para usar.',
  },
]

export function Process() {
  return (
    <section id="proceso" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
            Como trabajamos
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Un proceso simple y transparente
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            De la idea al uniforme terminado en cuatro pasos claros.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={step.step} className="relative text-center">
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary-300 to-transparent" />
              )}
              <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary-600 text-white mb-6 mx-auto">
                <step.icon className="h-9 w-9" />
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-accent-400 text-primary-950 text-xs font-extrabold rounded-full flex items-center justify-center">
                  {step.step}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
