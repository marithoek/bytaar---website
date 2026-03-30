import { motion } from "motion/react";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 space-y-12"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-sage-green text-center mb-8">
        Over Mij
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center bg-white p-6 md:p-12 rounded-lg shadow-sm">
        <img
          src="https://picsum.photos/seed/tara/600/800"
          alt="Tara aan het werk"
          className="w-full h-auto rounded-lg object-cover shadow-md"
          referrerPolicy="no-referrer"
        />
        <div className="space-y-4 md:space-y-5">
          <h2 className="text-2xl md:text-3xl font-bold text-light-brown">Mijn Verhaal</h2>
          <p className="text-base md:text-lg text-text-light leading-relaxed">
            Welkom! Ik ben Tara, de maker achter bytaar.
            Ik heb me altijd beziggehouden met allerlei creatieve bezigheden en ben gefascineerd door de combinatie van creativiteit en functionaliteit in leren tassen. Ik vind het mooi dat ik met mijn werk mensen blij kan maken met een product van een sterk en tijdloos materiaal.
          </p>
          <p className="text-base md:text-lg text-text-light leading-relaxed">
           Met een opleiding in mijn broekzak als creatief vakman en stoffeerder werk ik nu als stoffeerder en heb ik mijn eigen bedrijf ByTaar, waar ik mijn passie voor leren tassen verder vormgeef.
          </p>
        </div>
      </div>

      <div className="rounded-lg overflow-hidden h-[300px] md:h-[400px]">
        <img
          src="https://picsum.photos/seed/atelier/1200/400"
          alt="Mijn atelier in Wormerveer"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center bg-white p-6 md:p-12 rounded-lg shadow-sm">
        <div className="space-y-4 md:space-y-5 md:order-2">
          <h2 className="text-2xl md:text-3xl font-bold text-light-brown">Mijn Werkwijze</h2>
          <p className="text-base md:text-lg text-text-light leading-relaxed">
            Ik werk vanuit mijn werkkamer thuis, waar ik met de hand leren tassen maak. Ik kies leer dat mooi en stevig is, zodat de tassen lang meegaan. Van het eerste idee tot de laatste steek werk ik alles zelf uit, met aandacht voor detail en jouw wensen.
          </p>
          <p className="text-base md:text-lg text-text-light leading-relaxed">
            Ik blijf mezelf ontwikkelen en leer steeds nieuwe dingen. Bij elke tas kijk ik steeds weer naar wat iemand mooi vindt en wat goed bij diegene past.
          </p>
        </div>
        <img
          src="https://picsum.photos/seed/workshop/600/800"
          alt="Werkplek detail"
          className="w-full h-auto rounded-lg object-cover shadow-md md:order-1"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="bg-white p-12 rounded-lg shadow-sm text-center">
        <h2 className="text-3xl font-bold text-light-brown mb-5">
          Waarom Handgemaakt?
        </h2>
        <p className="text-lg text-text-light leading-relaxed max-w-2xl mx-auto">
          Veel producten worden tegenwoordig in grote aantallen gemaakt, maar ik werk liever met de hand. Daardoor is elke tas uniek en zie je kleine verschillen die het persoonlijk maken.
        </p>
      </div>
    </motion.div>
  );
}
