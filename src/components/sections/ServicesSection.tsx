
import React from 'react';
import ServiceCard from '@/components/ui/ServiceCard';
import { Brush, Wrench, Building, Scissors, ThermometerSnowflake, Shield } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: 'Gebäudereinigung',
      description: 'Büro-, Treppenhaus und Unterhaltsreinigung, Fenster- und Fassadenreinigung, Tiefgaragen- und Industriereinigung.',
      icon: <Brush className="w-6 h-6" />,
      delay: 100
    },
    {
      title: 'Hausmeisterservice',
      description: 'Technische Betreuung von Immobilien, Kleinreparaturen, Garten- und Außenanlagenpflege, Entsorgung von Abfällen.',
      icon: <Wrench className="w-6 h-6" />,
      delay: 200
    },
    {
      title: 'Hausverwaltung',
      description: 'Mietverwaltung, Nebenkostenabrechnung, Instandhaltungsmanagement für Ihre Immobilien.',
      icon: <Building className="w-6 h-6" />,
      delay: 300
    },
    {
      title: 'Garten- & Außenanlagenpflege',
      description: 'Rasenmähen, Hecken schneiden, Laubbeseitigung und umfassende Pflege Ihrer Außenanlagen.',
      icon: <Scissors className="w-6 h-6" />,
      delay: 400
    },
    {
      title: 'Winterdienst',
      description: 'Professionelle Schneeräumung und Streudienst für sichere Wege und Zufahrten im Winter.',
      icon: <ThermometerSnowflake className="w-6 h-6" />,
      delay: 500
    },
    {
      title: 'Sicherheits- & Überwachungsdienste',
      description: 'Objektschutz, Kontrollgänge und umfassende Sicherheitslösungen für Ihre Immobilie.',
      icon: <Shield className="w-6 h-6" />,
      delay: 600
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Unsere Leistungen</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Wir bieten Ihnen ein breites Spektrum an professionellen Dienstleistungen für die optimale Betreuung Ihrer Immobilien.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
