'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">

      {/* Background */}
      <Image
        src="/images/WhatsApp Image 2026-02-04 at 15.40.58.jpeg"
        alt="WATI background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 z-10" />

      {/* Contenu */}
      <div className="relative z-20 flex min-h-[100svh] flex-col items-center justify-between px-6 py-24 text-center">

        {/* Texte */}
        <p className="text-xl sm:text-2xl md:text-4xl tracking-[0.35em] text-white uppercase">
          Bienvenue chez
        </p>

        {/* CTA */}
        <Link
          href="/Services"
          className="mt-10 inline-flex items-center justify-center
                     rounded-md bg-white px-8 py-4
                     text-sm sm:text-base font-semibold text-black
                     transition active:scale-95"
        >
          Découvrir nos services
        </Link>

      </div>
    </section>
  )
}