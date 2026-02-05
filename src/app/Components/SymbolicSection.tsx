import Link from "next/link";

export default function SymbolicSection() {
  return (
    <section className="relative py-28 px-6 bg-black text-white overflow-hidden">
      {/* Motif discret */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Notre expertise au service du développement Ouest Africain
        </h2>

        <p className="text-gray-200 max-w-3xl mx-auto mb-10">
         Une expertise fondée sur l’expérience terrain, au contact des acteurs économiques locaux, combinant analyse stratégique et compréhension des réalités économiques, permettant une lecture fine des enjeux et des opportunités du développement ouest-africain.
        </p>

        <Link
          href="/About"
          className="inline-block bg-gradient-to-r from-gray-50 to-gray-200 hover:from-gray-800 hover:to-black text-black hover:text-white font-semibold px-10 py-4 rounded-full  transition"
        >
          Découvrir WATI
        </Link>
      </div>
    </section>
  )
}
