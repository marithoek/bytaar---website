import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-12 md:space-y-16"
    >
      <section className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden flex items-center justify-center">
        <img
          src="https://picsum.photos/seed/leather-hero/1920/1080"
          alt="Leren tassen hero"
          className="absolute inset-0 w-full h-full object-cover z-0"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-10 bg-black/40 p-8 md:p-20 rounded-lg text-center max-w-3xl mx-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-5 drop-shadow-md">
            Welkom bij Handgemaakte Leren Tassen
          </h1>
          <p className="text-lg md:text-2xl text-white mb-6 md:mb-8 drop-shadow-sm">
            Unieke, duurzame tassen met aandacht voor detail
          </p>
          <Link to="/tassen" className="cta-button">
            Bekijk Collectie
          </Link>
        </div>
      </section>

      <section className="max-w-3xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-sage-green mb-5">
          Vakmanschap & Kwaliteit
        </h2>
        <p className="text-lg text-text-light leading-relaxed">
          Elke tas wordt met de hand gemaakt van het beste leer. Ik creëer
          tijdloze stukken die een leven lang meegaan. Van klassieke designs tot
          moderne interpretaties, elke tas vertelt een verhaal van vakmanschap
          en passie.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-10 rounded-lg flex flex-col items-center text-center gap-5 shadow-sm">
            <img
              src="https://picsum.photos/seed/handmade/300/300"
              alt="Handgemaakt"
              className="w-32 h-32 rounded-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div>
              <h3 className="text-2xl font-bold text-light-brown mb-2.5">
                Handgemaakt
              </h3>
              <p className="text-text-light">
                Elk stuk wordt zorgvuldig met de hand vervaardigd
              </p>
            </div>
          </div>
          <div className="bg-white p-10 rounded-lg flex flex-col items-center text-center gap-5 shadow-sm">
            <img
              src="https://picsum.photos/seed/leather/300/300"
              alt="Duurzaam"
              className="w-32 h-32 rounded-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div>
              <h3 className="text-2xl font-bold text-light-brown mb-2.5">
                Duurzaam Leer
              </h3>
              <p className="text-text-light">
                Alleen het beste, verantwoord geproduceerde leer
              </p>
            </div>
          </div>
          <div className="bg-white p-10 rounded-lg flex flex-col items-center text-center gap-5 shadow-sm">
            <img
              src="https://picsum.photos/seed/custom/300/300"
              alt="Op Maat"
              className="w-32 h-32 rounded-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div>
              <h3 className="text-2xl font-bold text-light-brown mb-2.5">
                Op Maat
              </h3>
              <p className="text-text-light">
                Personalisatie mogelijk voor jouw perfecte tas
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
