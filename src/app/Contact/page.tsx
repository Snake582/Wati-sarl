'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(false)

    const formData = new FormData(e.currentTarget)

    const res = await fetch('https://formspree.io/f/xnjzeyor', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
      }),
    })

    if (res.ok) {
      setSuccess(true)
    } else {
      setError(true)
    }

    setLoading(false)
  }

  return (
    <main className="relative min-h-screen bg-black px-6 py-24 flex items-center justify-center overflow-hidden">
      {/* Motif subtil */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[length:24px_24px] pointer-events-none" />

      <div className="relative w-full max-w-lg bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-10 shadow-[0_0_50px_rgba(255,255,255,0.05)] z-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          Contactez-nous
        </h1>

        <p className="text-gray-400 text-center mb-10 leading-relaxed">
          Un projet, une question ou une opportunité ?
          <br />
          Échangeons ensemble.
        </p>

        {success ? (
          <div className="text-center">
            <p className="text-green-400 text-lg font-medium mb-4">
              Message envoyé avec succès
            </p>
            <p className="text-gray-400 text-sm">
              Nous vous répondrons dans les plus brefs délais.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nom */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">
                Nom
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Votre nom"
                className="w-full bg-white border border-white/20 rounded-lg px-4 py-3 text-white placeholder-black font-semibold
                           focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="Votre email"
                className="w-full bg-white border border-white/20 rounded-lg px-4 py-3 text-white placeholder-black font-semibold
                           focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Décrivez votre besoin ou votre projet"
                className="w-full bg-white border border-white/20 rounded-lg px-4 py-3 text-white placeholder-black font-semibold resize-none
                           focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition"
              />
            </div>

            {error && (
              <p className="text-red-400 text-sm text-center">
                Une erreur est survenue. Veuillez réessayer.
              </p>
            )}

            {/* Bouton */}
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-6 bg-white text-black font-semibold py-3 rounded-lg
                         hover:bg-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Envoi en cours…' : 'Envoyer le message'}
            </button>
          </form>
        )}
      </div>
    </main>
  )
}
