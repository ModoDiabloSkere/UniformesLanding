const placeholders = [
  { label: 'Corporativo', aspect: 'aspect-[4/5]' },
  { label: 'Medico', aspect: 'aspect-square' },
  { label: 'Industrial', aspect: 'aspect-[4/5]' },
  { label: 'Hoteleria', aspect: 'aspect-square' },
  { label: 'Restaurante', aspect: 'aspect-square' },
  { label: 'Escolar', aspect: 'aspect-[4/5]' },
]

export function Gallery() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
            Nuestro trabajo
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Galeria de uniformes
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Algunos ejemplos de nuestros trabajos mas recientes.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {placeholders.map((item, idx) => (
            <div
              key={idx}
              className={`${item.aspect} break-inside-avoid rounded-2xl bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center group hover:shadow-lg transition-shadow cursor-pointer overflow-hidden relative`}
            >
              <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/60 transition-colors duration-300" />
              <span className="text-gray-400 text-sm group-hover:opacity-0 transition-opacity">
                {item.label}
              </span>
              <span className="absolute bottom-4 left-4 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
