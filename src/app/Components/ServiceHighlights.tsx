'use client'

import { useRef, useState, useEffect } from 'react'

const items = [
  {
    title: 'Conseil & Accompagnement',
    desc: `WATI SARL propose un accompagnement stratégique et opérationnel
    aux entreprises et porteurs de projets, au Sénégal et à l’international,
    souhaitant développer ou structurer leurs activités au Sénégal.
    Grâce à son réseau et à sa connaissance du terrain, WATI sécurise les
    décisions, structure les démarches et accompagne la croissance
    des projets.`,
  },
  {
    title: 'Immobilier',
    desc: `WATI SARL intervient dans la conception de projets immobiliers,
    la réalisation de plans, la construction et le suivi des opérations.
    L’entreprise accompagne également le développement immobilier,
    depuis l’étude initiale jusqu’à la réalisation complète des projets.`,
  },
  {
    title: 'Représentation commerciale',
    desc: `WATI SARL assure la représentation commerciale de marques et
    entreprises souhaitant s’implanter ou se développer sur le marché local.
    Elle accompagne l’introduction des activités, la prospection de partenaires
    et le développement durable de la présence commerciale.`,
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
      {/* Motif de fond */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[length:24px_24px] pointer-events-none" />

      {/* Titre */}
      <div className="relative max-w-6xl mx-auto text-center mb-16 z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Nos expertises clés
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
          WATI SARL accompagne ses partenaires à chaque étape de leurs projets,
          avec une approche structurée, pragmatique et orientée résultats.
        </p>
      </div>

      {/* Cartes */}
      <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-3 z-10">
        {items.map((item, i) => (
          <div
            key={i}
            ref={(el) => {
              revealRefs.current[i] = el
            }}
            data-index={i}
            className={`p-8 rounded-2xl bg-white/5 backdrop-blur-md
                        border border-white/10
                        shadow-sm transition-all duration-700 ease-out
                        transform ${
                          show[i]
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-10'
                        }`}
          >
            <h3 className="text-xl font-semibold text-white mb-4">
              {item.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
