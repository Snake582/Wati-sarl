'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen min-h-[100svh] overflow-hidden">
      
      {/* Image de fond */}
      <div
        className="
          absolute inset-0
          bg-cover
          bg-[position:center_top]
          md:bg-center
          lg:bg-center
        "
        style={{
          backgroundImage:
            "url('/images/WhatsApp Image 2026-02-04 at 15.40.58.jpeg')",
        }}
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />

      {/* Texte haut */}
      <div className="absolute top-24 md:top-28 lg:top-32 left-1/2 -translate-x-1/2 z-10 text-center px-6 sm:px-10 md:px-12 max-w-4xl">
        <p className="text-2xl sm:text-3xl md:text-4xl tracking-[0.35em] text-white uppercase">
          Bienvenue chez
        </p>
      </div>

      {/* CTA bas */}
      <div className="absolute bottom-20 sm:bottom-24 md:bottom-28 left-1/2 -translate-x-1/2 z-10">
        <Link
          href="/Services"
          className="
            inline-block
            px-6 py-4
            rounded-md
            bg-gradient-to-r from-gray-50 to-gray-200
            hover:from-gray-800 hover:to-black
            text-black hover:text-white
            font-semibold
            transition
          "
        >
          Découvrir nos services
        </Link>
      </div>
    </section>
  )
}
