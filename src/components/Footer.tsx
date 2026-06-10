export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="mb-4">
              <img
                src="/images/logo.jpg"
                alt="Uniformes D'Johanna"
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              Confeccion profesional de uniformes empresariales. Calidad,
              puntualidad y diseno personalizado para cada sector industrial.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Confeccion a medida
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Diseno personalizado
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Reposicion continua
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li>+52 (55) 1234-5678</li>
              <li>contacto@djohanna.com</li>
              <li>Ciudad de Mexico, Mexico</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Uniformes D&apos;Johanna. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
