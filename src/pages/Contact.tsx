import { motion } from "motion/react";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-12"
    >
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-sage-green">
          Neem Contact Op
        </h1>
        <p className="text-lg text-text-light max-w-2xl mx-auto">
          Heb je een vraag over een specifieke tas, een maatwerk project of iets anders? 
          Ik help je graag verder. Je kunt me bereiken via de onderstaande gegevens.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm space-y-10">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-light-brown mb-6 text-center">Contactgegevens</h2>
              <div className="space-y-6 text-text-light">
                <div className="flex flex-col border-l-4 border-sage-green pl-4">
                  <span className="text-xs uppercase tracking-widest text-sage-green font-bold mb-1">Naam</span>
                  <span className="text-xl font-bold text-text-dark">Tara Visser - bytaar</span>
                </div>
                
                <div className="flex flex-col border-l-4 border-sage-green/30 pl-4">
                  <span className="text-xs uppercase tracking-widest text-sage-green font-bold mb-1">E-mail</span>
                  <a href="mailto:tara.visser@hotmail.com" className="text-lg hover:text-sage-green transition-colors font-medium">
                    tara.visser@hotmail.com
                  </a>
                </div>

                <div className="flex flex-col border-l-4 border-sage-green/30 pl-4">
                  <span className="text-xs uppercase tracking-widest text-sage-green font-bold mb-1">Telefoon</span>
                  <a href="tel:+31637560037" className="text-lg hover:text-sage-green transition-colors font-medium">
                    +31 6 37 56 00 37
                  </a>
                </div>

                <div className="flex flex-col border-l-4 border-sage-green/30 pl-4">
                  <span className="text-xs uppercase tracking-widest text-sage-green font-bold mb-1">Locatie</span>
                  <span className="text-lg font-medium">Wormerveer, Nederland</span>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-light-brown mb-6 text-center">Online</h2>
              <div className="flex flex-col border-l-4 border-sage-green/30 pl-4">
                <span className="text-xs uppercase tracking-widest text-sage-green font-bold mb-1">Instagram</span>
                <a 
                  href="https://instagram.com/bytaar" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-lg hover:text-sage-green transition-colors font-medium"
                >
                  @bytaar
                </a>
              </div>
            </section>
          </div>
        </div>

        <div className="mt-12">
          <img 
            src="/images/contact/kaartje.jpeg" 
            alt="Leather workshop studio" 
            className="w-full h-64 md:h-80 rounded-lg shadow-lg object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </motion.div>
  );
}
