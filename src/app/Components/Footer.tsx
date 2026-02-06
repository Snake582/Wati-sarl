'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative w-full bg-black/80 backdrop-blur border-t border-white/10 mt-20 overflow-hidden">

      {/* Motif */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-10
        bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)]
        bg-[size:24px_24px]"
      />

      {/* Contenu */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 text-center md:text-left">

          {/* Branding */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold text-white mb-4 tracking-wide">
              WATI
            </h3>
            <p className="text-sm text-white/70 leading-relaxed max-w-xs">
              WATI SARL – West African Trading & Investment
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-widest">
              Navigation
            </h4>

            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Accueil
                </Link>
              </li>

              <li>
                <Link href="/Services" className="hover:text-white transition">
                  Services
                </Link>
              </li>

              <li>
                <Link href="/About" className="hover:text-white transition">
                  À propos
                </Link>
              </li>

              <li>
                <Link href="/Contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-widest">
              Contact
            </h4>

            <ul className="space-y-3 text-sm text-white/70">
              <li>📍 Mermoz 7694, Dakar, Sénégal</li>

              <li>
                ✉️{' '}
                <a
                  href="mailto:watisarlsn@gmail.com"
                  className="hover:text-white transition"
                >
                  watisarlsn@gmail.com
                </a>
              </li>

              <li>
                📞{' '}
                <a
                  href="tel:+221774849696"
                  className="hover:text-white transition"
                >
                  +221 77 484 96 96
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-white/10 pt-6 text-center text-sm text-white/60">
          © {new Date().getFullYear()} <span className="text-white font-medium">WATI</span>. Tous droits réservés.
        </div>

      </div>
    </footer>
  )
}
