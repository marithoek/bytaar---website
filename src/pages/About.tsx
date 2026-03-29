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
            Mijn passie voor leerbewerking begon meer dan tien jaar geleden tijdens een reis door Italië, waar ik geïnspireerd raakte door de traditionele ambachtslieden in Florence.
          </p>
          <p className="text-base md:text-lg text-text-light leading-relaxed">
            Wat startte als een hobby, groeide uit tot een levensstijl. Elke tas die ik maak, draagt een stukje van mijn ziel en vakmanschap. Ik geloof in slow fashion en tijdloze designs die generaties lang meegaan.
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
            In mijn atelier in Wormerveer werk ik met de beste kwaliteit leer van Europese leveranciers. Elk stuk wordt zorgvuldig geselecteerd en met de hand bewerkt. Van het eerste ontwerp tot de laatste steek, elk detail krijgt mijn volledige aandacht.
          </p>
          <p className="text-base md:text-lg text-text-light leading-relaxed">
            Ik gebruik traditionele technieken gecombineerd met moderne inzichten om producten te creëren die zowel functioneel als mooi zijn. Duurzaamheid staat centraal in alles wat ik doe.
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
          In een wereld van massaproductie kies ik bewust voor het ambacht. Handgemaakte producten hebben een ziel, een verhaal en een kwaliteit die niet te evenaren is door machines. Elke tas is uniek, met kleine verschillen die het karakter bepalen.
        </p>
      </div>
    </motion.div>
  );
}
