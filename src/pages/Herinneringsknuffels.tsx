import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Heart, Scale } from "lucide-react";

interface CarouselSlide {
  image: string;
  title: string;
  subtitle: string;
}

const slides: CarouselSlide[] = [
  {
    image: "/src/assets/images/herinnering_beer_baby_1792425701099.jpg",
    title: "Gemaakt van babykleding & rompertjes",
    subtitle: "Van de allerkleinste eerste pakjes tot een blijvend aandenken aan de babytijd.",
  },
  {
    image: "/src/assets/images/herinnering_beer_kleding_1792425701495.jpg",
    title: "Troost & herinnering aan een overleden dierbare",
    subtitle: "Genaaid uit het vertrouwde geruite hemd, favoriete vest of jasje van een geliefde.",
  },
  {
    image: "/src/assets/images/herinnering_beer_detail_1792425701791.jpg",
    title: "Aandacht voor elk detail en originele elementen",
    subtitle: "Originele knoopjes, stiksels en labels worden met zorg en respect verwerkt.",
  },
  {
    image: "/src/assets/images/herinnering_beer_paar_1792425702353.jpg",
    title: "Knuffels en vormen op maat",
    subtitle: "Van klassieke beren tot zachte haasjes, geheel afgestemd op jouw wensen.",
  },
];

export default function Herinneringsknuffels() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play interval
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto px-4 space-y-14"
    >
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-sage-green">
          Herinneringsknuffels
        </h1>
        <p className="text-lg md:text-xl text-text-light leading-relaxed">
          Tastbare herinneringen, met liefde en vakmanschap genaaid uit gekoesterde kledingstukken van jouw dierbaren.
        </p>
      </div>

      {/* Dynamic Carousel */}
      <div
        className="relative bg-white rounded-2xl overflow-hidden shadow-md group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="relative aspect-[16/10] md:aspect-[16/9] w-full overflow-hidden bg-neutral-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <img
                src={slides[currentIndex].image}
                alt={slides[currentIndex].title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Gradient overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-10 text-white">
                <span className="text-xs uppercase tracking-widest text-[#d9c7af] font-semibold mb-1">
                  Foto {currentIndex + 1} van {slides.length}
                </span>
                <h3 className="text-xl md:text-3xl font-bold mb-2 drop-shadow">
                  {slides[currentIndex].title}
                </h3>
                <p className="text-sm md:text-base text-white/90 max-w-2xl drop-shadow">
                  {slides[currentIndex].subtitle}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            aria-label="Vorige foto"
            className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 p-2.5 md:p-3 rounded-full bg-white/80 hover:bg-white text-text-dark shadow-lg transition-all hover:scale-110 z-20 backdrop-blur-sm"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Volgende foto"
            className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 p-2.5 md:p-3 rounded-full bg-white/80 hover:bg-white text-text-dark shadow-lg transition-all hover:scale-110 z-20 backdrop-blur-sm"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Thumbnail Preview Strip & Dots */}
        <div className="p-4 bg-white flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-100">
          <div className="flex items-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Ga naar foto ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "w-8 bg-sage-green"
                    : "w-2.5 bg-neutral-300 hover:bg-neutral-400"
                }`}
              />
            ))}
          </div>

          <div className="flex gap-2">
            {slides.map((slide, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-14 h-10 md:w-16 md:h-12 rounded overflow-hidden border-2 transition-all ${
                  currentIndex === idx
                    ? "border-sage-green scale-105 shadow-sm"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={slide.image}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Story & Information Sections (4 alinea's) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* Alinea 1 */}
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm space-y-3 border-t-4 border-light-brown">
          <div className="w-10 h-10 rounded-full bg-[#f4ece3] flex items-center justify-center text-light-brown mb-2">
            <Heart className="w-5 h-5" />
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-light-brown">
            Een tastbare herinnering
          </h2>
          <p className="text-base text-text-light leading-relaxed">
            Kledingstukken dragen bijzondere verhalen en emoties met zich mee. Denk aan het allereerste rompertje van je kindje waar ze al zo snel zijn uitgegroeid, of die favoriete trui, blouse of het vertrouwde hemd van een dierbare die is overleden. In plaats van deze kostbare stoffen ver weg in een doos of kast te bewaren, geef ik ze een nieuw leven als een zachte, tastbare herinneringsknuffel die je kunt omarmen en dichtbij kunt houden.
          </p>
        </div>

        {/* Alinea 2 */}
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm space-y-3 border-t-4 border-sage-green">
          <div className="w-10 h-10 rounded-full bg-[#eef3ec] flex items-center justify-center text-sage-green mb-2">
            <Scale className="w-5 h-5" />
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-sage-green">
            Mogelijkheid tot verzwaard op gewicht
          </h2>
          <p className="text-base text-text-light leading-relaxed">
            Er is daarnaast een bijzondere mogelijkheid om een knuffel op een specifiek gewicht te laten maken. Denk bijvoorbeeld aan het exacte geboortegewicht van je kindje, of een verzwaarde knuffel die een fijne, rustgevende druk en extra geborgenheid geeft bij het vasthouden.
          </p>
          <p className="text-base text-text-light leading-relaxed">
            Ik heb dit zelf nog niet eerder gemaakt, maar ik sta er heel erg voor open om dit samen met jou te proberen en uit te werken. Uiteraard zorg ik ervoor dat dit met de juiste veilige vullingen gebeurt en netjes voldoet aan alle wettelijke standaarden en veiligheidseisen voor verzwaarde producten. Mocht je hier interesse in hebben, denk ik graag met je mee!
          </p>
        </div>
      </div>

      {/* Practical steps card */}
      <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-sage-green text-center">
          Hoe werkt het?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-4 rounded-lg bg-off-white space-y-2">
            <span className="inline-block w-8 h-8 rounded-full bg-sage-green text-white font-bold leading-8">1</span>
            <h3 className="font-bold text-text-dark text-lg">Kleding kiezen</h3>
            <p className="text-sm text-text-light">
              Kies 1 tot 4 kledingstukken uit die voor jou een speciale herinnering dragen.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-off-white space-y-2">
            <span className="inline-block w-8 h-8 rounded-full bg-sage-green text-white font-bold leading-8">2</span>
            <h3 className="font-bold text-text-dark text-lg">Overleg & Wensen</h3>
            <p className="text-sm text-text-light">
              We bespreken het model knuffel, de indeling van de patronen en eventuele speciale details.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-off-white space-y-2">
            <span className="inline-block w-8 h-8 rounded-full bg-sage-green text-white font-bold leading-8">3</span>
            <h3 className="font-bold text-text-dark text-lg">Liefdevol gemaakt</h3>
            <p className="text-sm text-text-light">
              Ik ga in mijn atelier met de hand aan de slag om er een prachtig blijvend aandenken van te maken.
            </p>
          </div>
        </div>
      </div>

      {/* Call to action */}
      <div className="bg-sage-green p-8 md:p-12 rounded-xl text-center text-white space-y-5 shadow-sm">
        <h2 className="text-2xl md:text-3xl font-bold">
          Wil je een herinneringsknuffel laten maken?
        </h2>
        <p className="text-base md:text-lg opacity-90 max-w-2xl mx-auto">
          Heb je kledingstukken liggen die je graag wilt laten omtoveren tot een troostende herinnering? Neem gerust contact op voor een vrijblijvend gesprek of om je wensen te delen.
        </p>
        <Link
          to="/contact"
          className="inline-block px-8 md:px-10 py-3 md:py-4 bg-white text-sage-green font-bold rounded-sm hover:bg-off-white transition-all duration-300 hover:shadow-lg"
        >
          Neem Contact Op
        </Link>
      </div>
    </motion.div>
  );
}
