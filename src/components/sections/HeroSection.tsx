import React from 'react';
import { CheckCircle, Phone } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center pt-16 bg-gradient-to-r from-cyan-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-up order-2 md:order-1">
            <div className="bg-cyan-500/10 text-cyan-700 inline-flex items-center rounded-full px-3 py-1 text-sm font-medium mb-6">
              <span className="bg-cyan-500 text-white rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">
                <CheckCircle className="w-4 h-4" />
              </span>
              <span className="whitespace-normal">Ihr Partner für professionelle Gebäudedienstleistungen!</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl mb-6">
              Professionelles<br />
              <span className="text-cyan-600">Gebäudemanagement</span><br />
              für Ihre Immobilien
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mb-8">
              ROK Gebäudemanagement bietet umfassende Dienstleistungen rund um Ihre Immobilie – von Reinigung über Hausmeisterservice bis hin zur Sicherheit.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 md:py-3 md:text-lg md:px-8 whitespace-normal text-center">
                Jetzt unverbindliches Angebot einholen
              </a>
              <div className="inline-flex flex-col sm:flex-row items-center justify-center px-4 py-3 border border-cyan-600 text-base font-medium rounded-lg text-white bg-cyan-600 hover:bg-cyan-700 transition-colors shadow-md md:py-3 md:text-lg">
                <div className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  <a href="tel:+4917624320200" className="text-white hover:text-gray-100 whitespace-nowrap">+4917624320200</a>
                </div>
                <span className="mx-2 text-gray-200 hidden sm:inline">•</span>
                <div className="flex items-center mt-2 sm:mt-0">
                  <a href="tel:+4915782786519" className="text-white hover:text-gray-100 whitespace-nowrap">+4915782786519</a>
                </div>
              </div>
            </div>
          </div>
          <div className="animate-fade-up order-1 md:order-2" style={{ animationDelay: "200ms" }}>
            <div className="rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition duration-300 max-w-md mx-auto">
              <img 
                src="./Rok-workers.webp" 
                alt="ROK Gebäudemanagement Team" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
