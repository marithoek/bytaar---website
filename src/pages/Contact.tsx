import { useState, FormEvent } from "react";
import { motion } from "motion/react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to a backend
    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 space-y-12"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-sage-green text-center mb-8">
        Neem Contact Op
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-1 space-y-8">
          <div className="bg-white p-8 rounded-lg shadow-sm space-y-4">
            <h2 className="text-2xl font-bold text-light-brown">Contactgegevens</h2>
            <div className="space-y-2 text-text-light">
              <p className="font-bold text-text-dark">Tara Visser - bytaar</p>
              <p>Email: tara.visser@hotmail.com</p>
              <p>Telefoon: +31 6 37 56 00 37</p>
              <p>Locatie: Wormerveer, Nederland</p>
            </div>
            <div className="pt-4">
              <p className="text-sm font-bold text-sage-green uppercase tracking-wider mb-2">Instagram</p>
              <a href="https://instagram.com/bytaar" target="_blank" rel="noopener noreferrer" className="text-light-brown hover:underline">
                @bytaar
              </a>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm space-y-4">
            <h2 className="text-2xl font-bold text-light-brown">Atelier</h2>
            <p className="text-text-light leading-relaxed">
              Bezoek aan mijn atelier is mogelijk op afspraak. Neem contact op om een bezoek in te plannen.
            </p>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-20 h-20 bg-sage-green/10 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-10 h-10 text-sage-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-sage-green">Bedankt!</h2>
                <p className="text-text-light text-lg">
                  Je bericht is verzonden. Ik neem zo snel mogelijk contact met je op.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-light-brown font-bold hover:underline"
                >
                  Nog een bericht sturen
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-2xl font-bold text-light-brown mb-6">Stuur een Bericht</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block font-semibold text-text-dark">Naam *</label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full p-3 border-2 border-gray-100 rounded-md focus:outline-none focus:border-sage-green transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block font-semibold text-text-dark">E-mailadres *</label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full p-3 border-2 border-gray-100 rounded-md focus:outline-none focus:border-sage-green transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="block font-semibold text-text-dark">Telefoonnummer</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full p-3 border-2 border-gray-100 rounded-md focus:outline-none focus:border-sage-green transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="block font-semibold text-text-dark">Onderwerp *</label>
                  <input
                    type="text"
                    id="subject"
                    required
                    className="w-full p-3 border-2 border-gray-100 rounded-md focus:outline-none focus:border-sage-green transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block font-semibold text-text-dark">Bericht *</label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    className="w-full p-3 border-2 border-gray-100 rounded-md focus:outline-none focus:border-sage-green transition-colors resize-vertical"
                  ></textarea>
                </div>

                <button type="submit" className="cta-button w-full">
                  Verzenden
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
