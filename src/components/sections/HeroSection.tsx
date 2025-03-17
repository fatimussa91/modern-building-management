
import React from 'react';
import { CheckCircle, Phone } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center pt-16 bg-gradient-to-r from-cyan-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-3xl animate-fade-up">
          <div className="bg-cyan-500/10 text-cyan-700 inline-flex items-center rounded-full px-3 py-1 text-sm font-medium mb-6">
            <span className="bg-cyan-500 text-white rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">
              <CheckCircle className="w-4 h-4" />
            </span>
            Ihr Partner für professionelle Gebäudedienstleistungen!
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
            Professionelles<br />
            <span className="text-cyan-600">Gebäudemanagement</span><br />
            für Ihre Immobilien
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-8">
            ROK Gebäudemanagement bietet umfassende Dienstleistungen rund um Ihre Immobilie – von Reinigung über Hausmeisterservice bis hin zur Sicherheit.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 md:py-4 md:text-lg md:px-10">
              Jetzt unverbindliches Angebot einholen
            </a>
            <div className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
              <Phone className="mr-2 h-5 w-5 text-cyan-600" />
              <a href="tel:+4917624320200" className="mr-2">+49 176 24320200</a>
              <span className="mx-1">|</span>
              <a href="tel:+4915782786519">+49 1578 2786519</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
