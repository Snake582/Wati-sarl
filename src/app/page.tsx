'use client'

import Hero from './Components/Hero'
import ServiceHighlights from './Components/ServiceHighlights'
import SymbolicSection from './Components/SymbolicSection'
import ContactPage from './Components/ContactPage'
import Footer from './Components/Footer'

export default function Page() {
  return (
    <>
      {/* HERO */}
      <Hero />

      {/* SERVICES (version symbolique / premium) */}
      <ServiceHighlights />

      {/* SECTION SYMBOLIQUE + BOUTON ABOUT */}
      <SymbolicSection />

      {/* CONTACT */}
      <section className="max-w-3xl mx-auto text-center px-2 mt-16 md:mt-20">
        <ContactPage />
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  )
}
