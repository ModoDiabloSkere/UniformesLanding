import { ArrowRight, Star } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-400 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur rounded-full text-sm text-primary-200 mb-6">
              <Star className="h-4 w-4 text-accent-400" />
              Confeccion de uniformes empresariales
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Uniformes que{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-amber-300">
                reflejan
              </span>{' '}
              la identidad de tu empresa
            </h1>

            <p className="mt-6 text-lg text-primary-200 max-w-lg leading-relaxed">
              Diseno, confeccion y entrega de uniformes corporativos a la medida.
              Calidad premium para cada sector industrial con atencion personalizada.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-accent-400 text-primary-950 font-bold rounded-xl hover:bg-accent-500 transition-all hover:scale-105 text-base"
              >
                Solicitar cotizacion
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#proceso"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all text-base"
              >
                Conoce nuestro proceso
              </a>
            </div>

            <div className="mt-12 flex items-center gap-8">
              <div className="text-center">
                <p className="text-3xl font-extrabold text-white">500+</p>
                <p className="text-sm text-primary-300">Empresas atendidas</p>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="text-center">
                <p className="text-3xl font-extrabold text-white">15+</p>
                <p className="text-sm text-primary-300">Anos de experiencia</p>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="text-center">
                <p className="text-3xl font-extrabold text-white">50k+</p>
                <p className="text-sm text-primary-300">Uniformes entregados</p>
              </div>
            </div>
          </div>

          {/* Hero image placeholder */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="w-full aspect-[4/5] rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur border border-white/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent-400/30 to-primary-400/30 flex items-center justify-center">
                    <svg className="w-16 h-16 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-white/40 text-sm">Imagen de uniformes</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 px-6 py-4 bg-white rounded-xl shadow-2xl">
                <p className="text-sm font-semibold text-gray-900">Entrega puntual</p>
                <p className="text-xs text-gray-500">Cumplimos con cada pedido</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
