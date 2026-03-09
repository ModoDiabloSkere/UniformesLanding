const clients = [
  'Grupo Empresarial',
  'Hotel Riviera',
  'Clinica San Rafael',
  'Restaurantes Del Valle',
  'Colegio Internacional',
  'Constructora Atlas',
  'Banco Regional',
  'Laboratorios Norte',
]

export function Clients() {
  return (
    <section className="py-16 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-wider mb-10">
          Empresas que confian en nosotros
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client) => (
            <div
              key={client}
              className="h-16 rounded-xl bg-white border border-gray-100 flex items-center justify-center px-6 hover:shadow-md transition-shadow"
            >
              <span className="text-gray-400 font-semibold text-sm">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
