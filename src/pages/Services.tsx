import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowRight, 
  Brush, 
  Wrench, 
  Building, 
  Thermometer, 
  Scissors, 
  CheckCheck,
  Shield,
  Sparkles
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ServiceCard from '@/components/ui/ServiceCard';

const Services = () => {
  const mainServices = [
    {
      title: 'Gebäudereinigung',
      description: 'Professionelle Reinigung von Geschäfts- und Wohngebäuden für ein optimales Erscheinungsbild.',
      icon: <Brush className="w-6 h-6" />,
      delay: 100
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
    },
    {
      title: 'Grünflächenpflege',
      description: 'Fachgerechte Pflege Ihrer Außenanlagen für ein gepflegtes und einladendes Erscheinungsbild.',
      icon: <Scissors className="w-6 h-6" />,
      delay: 500
    },
    {
      title: 'Objektbetreuung',
      description: 'Umfassende Betreuung Ihrer Immobilie, um deren Wert langfristig zu erhalten und zu steigern.',
      icon: <Shield className="w-6 h-6" />,
      delay: 600
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-28 pb-16 md:pt-32 md:pb-20 bg-rok-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center animate-fade-up">
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-rok-500/10 text-rok-700 mb-6">
                <span className="bg-rok-500 text-white rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">
                  <CheckCircle className="w-4 h-4" />
                </span>
                Unsere Leistungen
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                Professionelle <span className="text-rok-600">Gebäudemanagement-</span>Dienstleistungen
              </h1>
              <p className="text-lg text-muted-foreground">
                Entdecken Sie unser umfassendes Angebot an Dienstleistungen, die auf Ihre individuellen Anforderungen zugeschnitten sind.
              </p>
            </div>
          </div>
        </section>
        
        {/* Services Overview */}
        <section className="page-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                delay={service.delay}
              />
            ))}
          </div>
        </section>
        
        {/* Featured Service */}
        <section className="bg-rok-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 md:p-12 lg:p-16 animate-fade-up">
                  <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-rok-500/10 text-rok-700 mb-6">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Featured Service
                  </div>
                  <h2 className="text-3xl font-semibold mb-6">Gebäudereinigung auf höchstem Niveau</h2>
                  <p className="text-muted-foreground mb-4">
                    Unsere Gebäudereinigung sorgt dafür, dass Ihre Immobilie stets in einem tadellosen Zustand ist. Wir verwenden hochwertige, umweltfreundliche Reinigungsmittel und arbeiten mit modernsten Geräten, um optimale Ergebnisse zu erzielen.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Unser geschultes Personal arbeitet diskret und effizient, um Ihren Geschäftsbetrieb nicht zu stören. Wir bieten flexible Reinigungspläne, die an Ihre Bedürfnisse angepasst sind.
                  </p>
                  
                  <h3 className="text-xl font-medium mb-4">Unsere Reinigungsleistungen umfassen:</h3>
                  <ul className="space-y-3 mb-8">
                    {[
                      'Grundreinigung und regelmäßige Unterhaltsreinigung',
                      'Glasreinigung und Fensterreinigung',
                      'Teppich- und Polsterreinigung',
                      'Spezialreinigungen (z.B. nach Bauarbeiten)',
                      'Desinfektion und Hygienesicherung'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCheck className="w-5 h-5 text-rok-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact"
                    className="rok-button-primary inline-flex items-center group"
                  >
                    Angebot anfordern
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
                <div className="bg-[url('/images/cleaning-service.jpg')] bg-cover bg-center animate-fade-up" style={{ animationDelay: "200ms" }}></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="page-container">
          <div className="text-center mb-12 md:mb-16 animate-fade-up">
            <h2 className="section-title">Unser Prozess</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Wir folgen einem bewährten Prozess, um Ihnen den bestmöglichen Service zu bieten. So funktioniert die Zusammenarbeit mit ROK.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                number: '01',
                title: 'Beratung & Analyse',
                description: 'Wir besprechen Ihre Anforderungen und analysieren Ihre Immobilie, um maßgeschneiderte Lösungen zu entwickeln.',
                delay: 100
              },
              {
                number: '02',
                title: 'Angebot & Planung',
                description: 'Sie erhalten ein detailliertes Angebot und wir erstellen gemeinsam einen Serviceplan für Ihre Immobilie.',
                delay: 200
              },
              {
                number: '03',
                title: 'Ausführung & Kontrolle',
                description: 'Wir führen die vereinbarten Dienstleistungen professionell aus und überprüfen regelmäßig die Qualität.',
                delay: 300
              }
            ].map((step, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-sm border relative animate-fade-up"
                style={{ animationDelay: `${step.delay}ms` }}
              >
                <div className="absolute -top-6 left-8 bg-rok-600 text-white text-3xl font-bold w-12 h-12 flex items-center justify-center rounded-lg shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3 mt-6">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="bg-rok-600 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Was unsere Kunden sagen</h2>
              <div className="w-24 h-1 bg-white/30 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  quote: "ROK Gebäudemanagement übertrifft stets unsere Erwartungen. Die Reinigungsdienstleistungen sind hervorragend und das Team ist äußerst professionell.",
                  author: "Michael Schmidt",
                  company: "Schmidt Immobilien GmbH",
                  delay: 100
                },
                {
                  quote: "Seit wir mit ROK zusammenarbeiten, hat sich der Zustand unserer Bürogebäude deutlich verbessert. Sehr empfehlenswert!",
                  author: "Lisa Wagner",
                  company: "Wagner & Partner",
                  delay: 200
                },
                {
                  quote: "Zuverlässig, pünktlich und gründlich - genau das, was wir von einem Gebäudemanagement-Dienstleister erwarten. ROK liefert konstant hervorragende Ergebnisse.",
                  author: "Thomas Bauer",
                  company: "Bauer Wohnungsverwaltung",
                  delay: 300
                }
              ].map((testimonial, index) => (
                <div 
                  key={index} 
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 animate-fade-up"
                  style={{ animationDelay: `${testimonial.delay}ms` }}
                >
                  <div className="text-2xl text-white/80 mb-2">"</div>
                  <p className="italic mb-6 text-white/90">{testimonial.quote}</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-white/70 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="page-container">
          <div className="bg-rok-50 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-semibold mb-4 animate-fade-up">Bereit für erstklassiges Gebäudemanagement?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: "100ms" }}>
              Kontaktieren Sie uns noch heute für ein unverbindliches Gespräch über Ihre individuellen Anforderungen. Wir freuen uns darauf, Ihnen zu helfen.
            </p>
            <Link 
              to="/contact"
              className="rok-button-primary inline-flex items-center animate-fade-up group"
              style={{ animationDelay: "200ms" }}
            >
              Kontakt aufnehmen
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Services;
