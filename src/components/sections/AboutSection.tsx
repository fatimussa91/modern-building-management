
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Über Uns</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Wir bieten hochwertige und zuverlässige Gebäudemanagement-Dienstleistungen, die auf Ihre individuellen Bedürfnisse zugeschnitten sind.
          </p>
        </div>
        
        {/* Mission & Values */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-white p-8 rounded-xl shadow-sm border text-center animate-fade-up">
            <h3 className="text-xl font-semibold mb-4">Unsere Mission & Werte</h3>
            <p className="text-muted-foreground mb-4">
              Bei ROK Gebäudemanagement stehen Qualität, Zuverlässigkeit und Nachhaltigkeit im Mittelpunkt unseres Handelns. Wir streben danach, durch unsere Dienstleistungen einen Mehrwert für unsere Kunden zu schaffen und langfristige Partnerschaften aufzubauen.
            </p>
          </div>
        </div>
        
        {/* Why Choose Us */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border text-center animate-fade-up">
            <h3 className="text-xl font-semibold mb-4">Erfahrung und Fachkompetenz</h3>
            <p className="text-muted-foreground">
              Unser Team verfügt über langjährige Erfahrung und fundiertes Fachwissen im Bereich des Gebäudemanagements.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border text-center animate-fade-up" style={{ animationDelay: "100ms" }}>
            <h3 className="text-xl font-semibold mb-4">Individuelle Lösungen</h3>
            <p className="text-muted-foreground">
              Wir entwickeln maßgeschneiderte Konzepte, die perfekt auf die Anforderungen Ihrer Immobilie abgestimmt sind.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border text-center animate-fade-up" style={{ animationDelay: "200ms" }}>
            <h3 className="text-xl font-semibold mb-4">Modernste Technik</h3>
            <p className="text-muted-foreground">
              Wir setzen auf modernste Technik und umweltfreundliche Reinigungsmethoden für optimale Ergebnisse.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
