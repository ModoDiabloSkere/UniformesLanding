import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { Services } from '../components/Services'
import { Industries } from '../components/Industries'
import { Process } from '../components/Process'
import { Gallery } from '../components/Gallery'
import { Benefits } from '../components/Benefits'
import { Testimonials } from '../components/Testimonials'
import { Clients } from '../components/Clients'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Industries />
      <Process />
      <Gallery />
      <Benefits />
      <Testimonials />
      <Clients />
      <Contact />
      <Footer />
    </div>
  )
}
