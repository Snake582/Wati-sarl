'use client'

import { useRef, useState, useEffect } from 'react'

const items = [
  {
    title: 'Conseil & Accompagnement',
    desc: 'Stratégie, organisation, transformation digitale et gestion de projets.',
  },
  {
    title: 'Immobilier apres plan rajouter architecturaux',
    desc: 'Études de faisabilité, gestion de projets immobiliers et conseils en investissement.',
  },
  {
    title: 'Représentation commerciale',
    desc: 'Prospection, négociation et gestion de comptes pour développer votre présence commerciale.',
  },
]

export default function ServiceHighlights() {
  const revealRefs = useRef<(HTMLElement | null)[]>([])
  const [show, setShow] = useState<boolean[]>(items.map(() => false))

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'))
          if (entry.isIntersecting) {
            setShow((prev) => {
              const newState = [...prev]
              newState[index] = true
              return newState
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    revealRefs.current.forEach((el) => el && observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative py-24 px-6 bg-black overflow-hidden">
      {/* Motif radial subtil */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[length:24px_24px] pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto text-center mb-16 z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Nos expertises clés
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
          WATI accompagne ses clients sur des domaines stratégiques, avec expertise et fiabilité.
        </p>
      </div>

      <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-3 z-10">
        {items.map((item, i) => (
          <div
            key={i}
            ref={(el) => { revealRefs.current[i] = el }}
            data-index={i}
            className={`p-8 rounded-2xl bg-white/5 backdrop-blur-md border-4 border-white
                        shadow-sm hover:shadow-lg transition-all duration-700 ease-out
                        transform ${show[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
