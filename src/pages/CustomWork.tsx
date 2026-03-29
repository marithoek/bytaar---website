import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function CustomWork() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 space-y-12"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-sage-green text-center mb-8">
        Maatwerk
      </h1>

      <div className="bg-white p-6 md:p-12 rounded-lg shadow-sm space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-light-brown">Jouw Persoonlijke Tas</h2>
        <p className="text-base md:text-lg text-text-light leading-relaxed">
          Droom je van een tas die perfect bij jouw stijl en behoeften past? Met mijn maatwerk service maak ik jouw ideale tas werkelijkheid. Van het eerste gesprek tot het eindresultaat, werk ik nauw met je samen om een uniek stuk te creëren dat helemaal van jou is.
        </p>
        <p className="text-base md:text-lg text-text-light leading-relaxed">
          Of je nu op zoek bent naar een specifieke maat, kleur, of een compleet nieuw design, alles is mogelijk. Elk maatwerkproject is een samenwerking waar jouw visie centraal staat.
        </p>

        <div className="pt-4">
          <h3 className="text-lg md:text-xl font-bold text-sage-green mb-4">Mogelijkheden:</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-disc list-inside text-text-light text-sm md:text-base">
            <li>Aangepaste afmetingen</li>
            <li>Keuze uit diverse leersoorten</li>
            <li>Personalisatie met initialen</li>
            <li>Unieke hardware en sluitingen</li>
            <li>Speciale binnenvakken</li>
            <li>Eigen kleurcombinaties</li>
          </ul>
        </div>
      </div>

      <div className="space-y-8 md:space-y-12">
        <h2 className="text-2xl md:text-3xl font-bold text-sage-green text-center">Het Proces</h2>
        
        <div className="space-y-12 md:space-y-16">
          <div className="space-y-4 md:space-y-6">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
              <h3 className="text-xl md:text-2xl font-bold text-light-brown mb-2 md:mb-3">Stap 1 - Kennismaking</h3>
              <p className="text-sm md:text-base text-text-light">We beginnen met een vrijblijvend gesprek waarin je jouw wensen en ideeën deelt. Wat is je stijl? Waarvoor ga je de tas gebruiken? Welke details zijn belangrijk voor jou?</p>
            </div>
            <img src="https://picsum.photos/seed/step1/1200/400" alt="Kennismaking" className="w-full h-48 md:h-64 object-cover rounded-lg shadow-md" referrerPolicy="no-referrer" />
          </div>

          <div className="space-y-4 md:space-y-6">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
              <h3 className="text-xl md:text-2xl font-bold text-light-brown mb-2 md:mb-3">Stap 2 - Ontwerp</h3>
              <p className="text-sm md:text-base text-text-light">Op basis van ons gesprek maak ik schetsen en stel ik materialen voor. Je krijgt samples van verschillende leersoorten en kleuren om je keuze te maken.</p>
            </div>
            <img src="https://picsum.photos/seed/step2/1200/400" alt="Ontwerp" className="w-full h-48 md:h-64 object-cover rounded-lg shadow-md" referrerPolicy="no-referrer" />
          </div>

          <div className="space-y-4 md:space-y-6">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
              <h3 className="text-xl md:text-2xl font-bold text-light-brown mb-2 md:mb-3">Stap 3 - Creatie</h3>
              <p className="text-sm md:text-base text-text-light">Zodra het ontwerp definitief is, ga ik aan de slag. Gedurende het proces houd ik je op de hoogte met foto's van de voortgang.</p>
            </div>
            <img src="https://picsum.photos/seed/step3/1200/400" alt="Creatie" className="w-full h-48 md:h-64 object-cover rounded-lg shadow-md" referrerPolicy="no-referrer" />
          </div>

          <div className="space-y-4 md:space-y-6">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
              <h3 className="text-xl md:text-2xl font-bold text-light-brown mb-2 md:mb-3">Stap 4 - Afronding</h3>
              <p className="text-sm md:text-base text-text-light">Je ontvangt jouw unieke, handgemaakte tas. Elk maatwerkstuk komt met verzorgingsinstructies en een certificaat van echtheid.</p>
            </div>
            <img src="https://picsum.photos/seed/step4/1200/400" alt="Afronding" className="w-full h-48 md:h-64 object-cover rounded-lg shadow-md" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>

      <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm space-y-6 md:space-y-8">
        <h2 className="text-2xl md:text-3xl font-bold text-light-brown text-center">Investering & Levertijd</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          <div className="space-y-3 md:space-y-4">
            <p className="text-sm md:text-base text-text-light leading-relaxed">
              Een maatwerktas is een investering in kwaliteit en uniciteit. De prijs is afhankelijk van het design, de materialen en de complexiteit.
            </p>
            <p className="font-bold text-sage-green text-lg">Vanaf €350,-</p>
          </div>
          <div className="space-y-3 md:space-y-4">
            <p className="text-sm md:text-base text-text-light leading-relaxed">
              De gemiddelde levertijd voor een maatwerktas is 4-6 weken, afhankelijk van de complexiteit en mijn huidige opdrachten.
            </p>
            <p className="font-bold text-sage-green text-lg">4-6 weken levertijd</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 md:gap-4">
        <img src="https://picsum.photos/seed/before/600/600" alt="Voor" className="w-full aspect-square object-cover rounded-lg shadow-md" referrerPolicy="no-referrer" />
        <img src="https://picsum.photos/seed/after/600/600" alt="Na" className="w-full aspect-square object-cover rounded-lg shadow-md" referrerPolicy="no-referrer" />
      </div>

      <div className="bg-sage-green p-8 md:p-12 rounded-lg text-center text-white space-y-5 md:space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold">Klaar om te Beginnen?</h2>
        <p className="text-base md:text-lg opacity-90">Heb je een idee voor jouw perfecte tas? Neem contact op voor een vrijblijvend gesprek.</p>
        <Link to="/contact" className="inline-block px-8 md:px-10 py-3 md:py-4 bg-white text-sage-green font-bold rounded-sm hover:bg-off-white transition-colors">
          Start je Maatwerkproject
        </Link>
      </div>
    </motion.div>
  );
}
