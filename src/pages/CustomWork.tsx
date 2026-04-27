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
          Wil je een tas die echt bij je past? Ik maak tassen op maat, helemaal afgestemd op jouw wensen. Van het eerste idee tot het eindresultaat werk ik samen met je aan iets unieks.
        </p>
        <p className="text-base md:text-lg text-text-light leading-relaxed">
          Of je nu een bepaalde maat, kleur of stijl in gedachten hebt, we kijken samen wat het beste bij je past. Elke tas ontstaat in overleg en wordt speciaal voor jou gemaakt.
        </p>

        <div className="pt-4">
          <h3 className="text-lg md:text-xl font-bold text-sage-green mb-4">Mogelijkheden:</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-disc list-inside text-text-light text-sm md:text-base">
            <li>Aangepaste afmetingen</li>
            <li>Eigen kleurcombinaties</li>
            <li>Keuze uit diverse leersoorten</li>
            <li>Unieke sluitingen</li>
            <li>Zelf stof kiezen voor de binnenkant</li>
            <li>Gepersonaliseerde details</li>
          </ul>
        </div>
      </div>

      <div className="space-y-8 md:space-y-12">
        <h2 className="text-2xl md:text-3xl font-bold text-sage-green text-center">Het Proces</h2>
        
        <div className="space-y-12 md:space-y-16">
          <div className="space-y-4 md:space-y-6">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
              <h3 className="text-xl md:text-2xl font-bold text-light-brown mb-2 md:mb-3">Stap 1 - Kennismaking</h3>
              <p className="text-sm md:text-base text-text-light">We beginnen met een gesprek waarin je vertelt wat je zoekt. Waar ga je de tas voor gebruiken, wat vind je mooi, en welke details zijn belangrijk?</p>
            </div>
            <img src="/images/customwork/stap1.jpeg" alt="Kennismaking" className="w-full h-48 md:h-64 object-cover rounded-lg shadow-md" referrerPolicy="no-referrer" />
          </div>

          <div className="space-y-4 md:space-y-6">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
              <h3 className="text-xl md:text-2xl font-bold text-light-brown mb-2 md:mb-3">Stap 2 - Ontwerp</h3>
              <p className="text-sm md:text-base text-text-light">Op basis daarvan maak ik een ontwerp en denk ik mee over materialen en kleuren. Je kunt verschillende opties bekijken om te zien wat het beste past.</p>
            </div>
            <img src="/images/customwork/stap2.jpeg" alt="Ontwerp" className="w-full h-48 md:h-64 object-cover rounded-lg shadow-md" referrerPolicy="no-referrer" />
          </div>

          <div className="space-y-4 md:space-y-6">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
              <h3 className="text-xl md:text-2xl font-bold text-light-brown mb-2 md:mb-3">Stap 3 - Creatie</h3>
              <p className="text-sm md:text-base text-text-light">Als alles duidelijk is, ga ik aan de slag. Tijdens het maken houd ik je op de hoogte, zodat je kunt zien hoe jouw tas ontstaat.</p>
            </div>
            <img src="/images/customwork/stap3.jpeg" alt="Creatie" className="w-full h-48 md:h-64 object-cover rounded-lg shadow-md" referrerPolicy="no-referrer" />
          </div>

          <div className="space-y-4 md:space-y-6">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
              <h3 className="text-xl md:text-2xl font-bold text-light-brown mb-2 md:mb-3">Stap 4 - Afronding</h3>
              <p className="text-sm md:text-base text-text-light">Als de tas klaar is, is hij helemaal van jou. Je krijgt er uitleg bij over hoe je hem het beste kunt onderhouden.</p>
            </div>
            <img src="/images/customwork/stap4.jpeg" alt="Afronding" className="w-full h-48 md:h-64 object-cover rounded-lg shadow-md" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>

      <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm space-y-6 md:space-y-8">
        <h2 className="text-2xl md:text-3xl font-bold text-light-brown text-center">Investering & Levertijd</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          <div className="space-y-3 md:space-y-4">
            <p className="text-sm md:text-base text-text-light leading-relaxed">
              De prijs van een tas op maat hangt af van het ontwerp, de materialen en de details. Ik kijk dit per aanvraag even met je door.
            </p>
            <p className="font-bold text-sage-green text-lg">Vanaf €350,-</p>
          </div>
          <div className="space-y-3 md:space-y-4">
            <p className="text-sm md:text-base text-text-light leading-relaxed">
              Meestal duurt het maken van een tas 4 tot 6 weken, afhankelijk van het ontwerp en mijn planning.
            </p>
            <p className="font-bold text-sage-green text-lg">4-6 weken levertijd</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 md:gap-4">
        <img src="/images/customwork/sfeer1.jpeg" alt="Voor" className="w-full aspect-square object-cover rounded-lg shadow-md" referrerPolicy="no-referrer" />
        <img src="/images/customwork/sfeer2.jpeg" alt="Na" className="w-full aspect-square object-cover rounded-lg shadow-md" referrerPolicy="no-referrer" />
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
