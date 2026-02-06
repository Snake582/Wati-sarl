'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">

      {/* Image de fond */}
      <Image
        src="/images/WhatsApp Image 2026-02-04 at 15.40.58.jpeg"
        alt="WATI background"
        fill
        priority
        className="
          object-cover
          object-top
          md:object-center
        "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 z-10" />

      {/* Texte haut */}
      <div className="absolute top-24 md:top-28 left-1/2 -translate-x-1/2 z-20 text-center px-6 max-w-4xl">
        <p className="text-2xl sm:text-3xl md:text-4xl tracking-[0.35em] text-white uppercase">
          Bienvenue chez
        </p>
      </div>

      {/* CTA */}
      <div className="absolute bottom-20 md:bottom-28 left-1/2 -translate-x-1/2 z-20">
        <Link
          href="/Services"
          className="px-6 py-4 rounded-md bg-white text-black font-semibold"
        >
          Découvrir nos services
        </Link>
      </div>
    </section>
  )
}
