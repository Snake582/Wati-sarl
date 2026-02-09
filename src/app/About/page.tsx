'use client'

export default function AboutPage() {
  return (
    <section className="relative min-h-screen bg-black px-6 py-24 overflow-hidden">
      {/* Motif de fond */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[length:24px_24px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto z-10">
        {/* Titre */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
          À propos de WATI SARL
        </h1>

        {/* Intro */}
        <div className="text-gray-300 leading-relaxed space-y-6 mb-16">
          <p>
            <span className="font-semibold text-white">
              WATI SARL – West African Trading & Investment
            </span>{' '}
            intervient dans l’immobilier, le conseil et l’accompagnement des
            sociétés, ainsi que l’intermédiation en Afrique de l’Ouest.
          </p>

          <p>
            Nous opérons à la fois comme acteur de terrain et partenaire
            stratégique, en structurant des projets, en exécutant des missions
            ciblées et en reliant les bons acteurs autour d’opportunités
            concrètes.
          </p>
        </div>

        {/* Vision */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Notre vision
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Créer de la valeur durable en Afrique de l’Ouest en structurant des
            projets solides, en facilitant l’accès aux opportunités et en
            connectant les bons acteurs autour d’objectifs clairs et réalistes.
          </p>
        </div>

        {/* Approche */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Notre approche
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Nous combinons intervention opérationnelle, lecture fine du terrain
            et intermédiation stratégique. Chaque mission est menée avec méthode,
            exigence et adaptation aux réalités économiques et réglementaires.
          </p>
        </div>

        {/* Valeurs */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Nos valeurs
          </h2>

          <ul className="grid gap-6 sm:grid-cols-2">
            <li className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">Rigueur</h3>
              <p className="text-gray-300 text-sm">
                Agir avec méthode, précision et professionnalisme.
              </p>
            </li>

            <li className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">Transparence</h3>
              <p className="text-gray-300 text-sm">
                Des relations claires, des engagements maîtrisés.
              </p>
            </li>

            <li className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">Engagement</h3>
              <p className="text-gray-300 text-sm">
                S’impliquer concrètement dans chaque mission.
              </p>
            </li>

            <li className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">Pragmatisme</h3>
              <p className="text-gray-300 text-sm">
                Privilégier des solutions applicables et efficaces.
              </p>
            </li>
          </ul>
        </div>

        {/* Pourquoi WATI */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Pourquoi WATI SARL ?
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Parce qu’un projet ne se limite pas à une idée ou à un conseil.
            <br />
            <br />
            WATI SARL se positionne comme un acteur de terrain et un intermédiaire
            stratégique, capable de structurer, d’exécuter et de connecter les
            opportunités dans les marchés publics comme dans les affaires
            privées.
          </p>
        </div>
      </div>
    </section>
  )
}