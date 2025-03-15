
import React from 'react';
import { Link } from 'react-router-dom';
import { Building, Shield, Users, Clock, CheckCircle, Brush, Wrench, Thermometer, ArrowRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Logo from '@/components/ui/Logo';
import ServiceCard from '@/components/ui/ServiceCard';

const Index = () => {
  const services = [
    {
      title: 'Gebäudereinigung',
      description: 'Professionelle Reinigung von Geschäfts- und Wohngebäuden für ein optimales Erscheinungsbild.',
      icon: <Brush className="w-6 h-6" />,
      delay: 100
    },
    {
      title: 'Technisches Facility Management',
      description: 'Komplette Überwachung und Wartung aller technischen Anlagen in Ihrer Immobilie.',
      icon: <Wrench className="w-6 h-6" />,
      delay: 200
    },
    {
      title: 'Hausmeisterservice',
      description: 'Zuverlässige Betreuung Ihrer Immobilie mit regelmäßigen Kontrollen und schneller Reaktionszeit.',
      icon: <Building className="w-6 h-6" />,
      delay: 300
    },
    {
      title: 'Winterdienst',
      description: 'Professioneller Winterdienst zur Sicherstellung der Verkehrssicherheit auf Ihrem Grundstück.',
      icon: <Thermometer className="w-6 h-6" />,
      delay: 400
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-16 hero-section">
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/70"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="max-w-3xl animate-fade-up">
              <div className="bg-rok-500/10 text-rok-700 inline-flex items-center rounded-full px-3 py-1 text-sm font-medium mb-6">
                <span className="bg-rok-500 text-white rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">
                  <CheckCircle className="w-4 h-4" />
                </span>
                Ihr zuverlässiger Partner für Gebäudemanagement
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
                Professionelles<br />
                <span className="text-rok-600">Gebäudemanagement</span><br />
                für Ihre Immobilien
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-8">
                ROK bietet umfassende und maßgeschneiderte Lösungen für das Management und die Pflege Ihrer Gebäude. Verlassen Sie sich auf unsere Erfahrung und Expertise.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/contact" className="rok-button-primary text-base px-8 py-3 h-auto">
                  Kontakt aufnehmen
                </Link>
                <Link to="/services" className="rok-button-outline text-base px-8 py-3 h-auto">
                  Unsere Leistungen
                </Link>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-0 right-0 text-center z-10">
            <a 
              href="#services"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-sm hover:bg-white transition-colors duration-300"
              aria-label="Scroll down"
            >
              <ArrowRight className="w-5 h-5 transform rotate-90" />
            </a>
          </div>
        </section>
        
        {/* Services Section */}
        <section id="services" className="page-container">
          <div className="text-center mb-12 md:mb-16 animate-fade-up">
            <h2 className="section-title">Unsere Leistungen</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Wir bieten Ihnen ein breites Spektrum an professionellen Dienstleistungen für die optimale Betreuung Ihrer Immobilien.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                delay={service.delay}
                href="/services"
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="rok-button-primary inline-flex items-center">
              Alle Leistungen anzeigen
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section className="bg-rok-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16 animate-fade-up">
              <h2 className="section-title">Warum ROK wählen?</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Mit unserer Erfahrung und unserem Engagement bieten wir Ihnen Gebäudemanagement der Spitzenklasse.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border text-center animate-fade-up" style={{ animationDelay: "100ms" }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-rok-100 text-rok-600 rounded-full mb-5">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Zuverlässigkeit</h3>
                <p className="text-muted-foreground">
                  Wir halten, was wir versprechen. Unsere Kunden können sich auf pünktliche und professionelle Dienstleistungen verlassen.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border text-center animate-fade-up" style={{ animationDelay: "200ms" }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-rok-100 text-rok-600 rounded-full mb-5">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Erfahrenes Team</h3>
                <p className="text-muted-foreground">
                  Unser Team besteht aus qualifizierten Fachleuten mit langjähriger Erfahrung im Bereich Gebäudemanagement.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border text-center animate-fade-up" style={{ animationDelay: "300ms" }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-rok-100 text-rok-600 rounded-full mb-5">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Flexibilität</h3>
                <p className="text-muted-foreground">
                  Wir passen unsere Dienstleistungen an Ihre individuellen Bedürfnisse an und bieten maßgeschneiderte Lösungen.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="page-container">
          <div className="bg-rok-600 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 flex items-center">
                <div className="text-white max-w-lg">
                  <Logo variant="white" size="lg" />
                  <h2 className="text-3xl font-bold mt-6 mb-4">
                    Bereit für professionelles Gebäudemanagement?
                  </h2>
                  <p className="mb-8 text-white/80">
                    Kontaktieren Sie uns noch heute und erfahren Sie, wie wir Ihre Immobilie optimal betreuen können. Wir freuen uns auf Ihre Anfrage.
                  </p>
                  <Link 
                    to="/contact"
                    className="inline-flex items-center bg-white text-rok-700 font-medium px-6 py-3 rounded-md hover:bg-white/90 transition-colors group"
                  >
                    Kontakt aufnehmen
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block bg-[url('/images/building-management.jpg')] bg-cover bg-center"></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
