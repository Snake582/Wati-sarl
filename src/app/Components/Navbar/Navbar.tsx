'use client'

import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const NavLinks = [
    { name: "Accueil", href: "/" },
    { name: "Services", href: "/Services" },
    { name: "À propos", href: "/About" },
    { name: "Contact", href: "/Contact" },
  ]

  return (
    <>
      <nav className="w-full bg-black/80 backdrop-blur border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <Image
            src="/WATI_logo_page_3.png"
            alt="WATI Logo"
            width={180}
            height={80}
            priority
            className="h-20 w-auto object-contain"
          />

          {/* Menu desktop */}
          <div className="hidden md:flex space-x-8 text-sm uppercase tracking-wide">
            {NavLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white hover:text-gray-400 transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Bouton mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
            aria-label="Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      {isOpen && (
        <div className="fixed top-[72px] w-full bg-black border-t border-white/10 md:hidden z-40">
          <div className="flex flex-col gap-6 px-6 py-8">
            {NavLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white text-lg uppercase tracking-wide hover:text-gray-400 transition"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
