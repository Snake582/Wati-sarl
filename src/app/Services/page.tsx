'use client'

import { motion } from 'framer-motion'

type Service = {
  title: string
  description: string
}

const servicesTop: Service[] = [
  {
    title: 'Représentation commerciale',
    description:
      "WATI assure la représentation commerciale de marques n’étant pas encore implantées au Sénégal, en accompagnant leur introduction sur le marché local, la prospection de partenaires et le développement de leur présence commerciale.",
    },
  {
    title: 'Immobilier',
    description:
      "WATI intervient dans la conception de plans, la construction et le suivi de projets immobiliers. L’entreprise assure, selon les besoins, l’accompagnement et le suivi durant les phases de construction, et intervient également dans le développement immobilier, de l’étude à la réalisation des projets.",
  },
  {
    title: 'Développement commercial & prospection',
    description:
      "WATI intervient dans l’identification d’opportunités commerciales, le développement de réseaux clients et la prospection ciblée, en appui à la croissance des activités de ses partenaires.",
  },
]

const servicesBottom: Service[] = [
  {
    title: 'Accompagnement et conseil',
    description:
      'WATI propose un accompagnement stratégique et opérationnel aux entreprises et porteurs de projets, issus du Sénégal et de l’international, souhaitant exercer au Sénégal. Grâce à son large réseau, WATI les accompagne afin de structurer leurs démarches, optimiser leurs décisions et sécuriser leur développement.',
  },
  {
    title: 'Marchés publics et Intermédiation',
    description:
      "WATI intervient directement dans les marchés publics en répondant aux appels d’offres. L’entreprise agit également comme intermédiaire dans le cadre de grands projets, en facilitant la coordination et la mise en relation entre les différents acteurs.",
  },
]

export default function ServicesSection() {

  return (
    <section className="py-24 px-4 md:px-12 bg-black/90">
  <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
    Nos Services
  </h2>

  {/* 🔹 TOP — 3 box */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    {servicesTop.map((service, index) => (
      <motion.article
        key={index}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{
          duration: 0.6,
          ease: 'easeOut',
          delay: index * 0.12,
        }}
        className="relative group overflow-hidden rounded-2xl
                   border border-white/10 bg-[#0E0E0E] p-8"
      >
        {/* Motif */}
        <div
          className="pointer-events-none absolute inset-0 opacity-10
          bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)]
          bg-[size:24px_24px]"
        />

        <div className="relative z-10">
          <h3 className="text-lg font-semibold text-white mb-3">
            {service.title}
          </h3>
          <p className="text-sm leading-relaxed text-gray-400">
            {service.description}
          </p>
        </div>

        <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
      </motion.article>
    ))}
  </div>

  {/* 🔹 BOTTOM — 2 box centrées */}
  <div className="max-w-6xl mx-auto mt-12 flex justify-center">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:max-w-[66%]">
      {servicesBottom.map((service, index) => (
        <motion.article
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{
            duration: 0.6,
            ease: 'easeOut',
            delay: index * 0.12,
          }}
          className="relative group overflow-hidden rounded-2xl
                     border border-white/10 bg-[#0E0E0E] p-8"
        >
          {/* Motif */}
          <div
            className="pointer-events-none absolute inset-0 opacity-10
            bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)]
            bg-[size:24px_24px]"
          />

          <div className="relative z-10">
            <h3 className="text-lg font-semibold text-white mb-3">
              {service.title}
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              {service.description}
            </p>
          </div>

          <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
        </motion.article>
      ))}
    </div>
  </div>
</section>
  )
}
