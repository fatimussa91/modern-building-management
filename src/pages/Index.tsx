
import React from 'react';
import { Building, Shield, Users, Clock, CheckCircle, Brush, Wrench, Thermometer, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Logo from '@/components/ui/Logo';
import ServiceCard from '@/components/ui/ServiceCard';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Success message
      toast({
        title: "Nachricht gesendet",
        description: "Vielen Dank für Ihre Nachricht. Wir werden uns in Kürze bei Ihnen melden.",
        variant: "default",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      // Error message
      toast({
        title: "Fehler",
        description: "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

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
    <main className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Logo size="md" />
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-cyan-500 font-medium">Start</a>
            <a href="#services" className="text-gray-700 hover:text-cyan-500 font-medium">Leistungen</a>
            <a href="#about" className="text-gray-700 hover:text-cyan-500 font-medium">Über uns</a>
            <a href="#contact" className="text-gray-700 hover:text-cyan-500 font-medium">Kontakt</a>
          </nav>
          <a href="#contact" className="hidden md:inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700">
            Anfrage senden
          </a>
          <button className="md:hidden text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[80vh] flex items-center pt-16 bg-gradient-to-r from-cyan-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl animate-fade-up">
            <div className="bg-cyan-500/10 text-cyan-700 inline-flex items-center rounded-full px-3 py-1 text-sm font-medium mb-6">
              <span className="bg-cyan-500 text-white rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">
                <CheckCircle className="w-4 h-4" />
              </span>
              Ihr zuverlässiger Partner für Gebäudemanagement
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              Professionelles<br />
              <span className="text-cyan-600">Gebäudemanagement</span><br />
              für Ihre Immobilien
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-8">
              ROK bietet umfassende und maßgeschneiderte Lösungen für das Management und die Pflege Ihrer Gebäude. Verlassen Sie sich auf unsere Erfahrung und Expertise.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 md:py-4 md:text-lg md:px-10">
                Kontakt aufnehmen
              </a>
              <a href="#services" className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                Unsere Leistungen
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Unsere Leistungen</h2>
            <div className="w-20 h-1 bg-cyan-500 mx-auto mb-6"></div>
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
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Warum ROK wählen?</h2>
            <div className="w-20 h-1 bg-cyan-500 mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Mit unserer Erfahrung und unserem Engagement bieten wir Ihnen Gebäudemanagement der Spitzenklasse.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md text-center animate-fade-up" style={{ animationDelay: "100ms" }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-100 text-cyan-600 rounded-full mb-5">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Zuverlässigkeit</h3>
              <p className="text-muted-foreground">
                Wir halten, was wir versprechen. Unsere Kunden können sich auf pünktliche und professionelle Dienstleistungen verlassen.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center animate-fade-up" style={{ animationDelay: "200ms" }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-100 text-cyan-600 rounded-full mb-5">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Erfahrenes Team</h3>
              <p className="text-muted-foreground">
                Unser Team besteht aus qualifizierten Fachleuten mit langjähriger Erfahrung im Bereich Gebäudemanagement.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center animate-fade-up" style={{ animationDelay: "300ms" }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-100 text-cyan-600 rounded-full mb-5">
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
      
      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Kontaktieren Sie uns</h2>
            <div className="w-20 h-1 bg-cyan-500 mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Haben Sie Fragen zu unseren Dienstleistungen? Kontaktieren Sie uns noch heute für ein unverbindliches Angebot.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-fade-up">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Kontaktinformationen</h3>
                <p className="text-muted-foreground">
                  Unser Team steht Ihnen für Fragen und Angebote gerne zur Verfügung. Kontaktieren Sie uns per Telefon, E-Mail oder nutzen Sie unser Kontaktformular.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-cyan-500 mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium">Adresse</h4>
                    <address className="text-muted-foreground not-italic mt-1">
                      Musterstraße 123<br />
                      12345 Musterstadt<br />
                      Deutschland
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-cyan-500 mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium">Telefon</h4>
                    <a 
                      href="tel:+49123456789" 
                      className="text-muted-foreground hover:text-cyan-600 transition-colors block mt-1"
                    >
                      +49 (0) 123 456 789
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-cyan-500 mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium">E-Mail</h4>
                    <a 
                      href="mailto:info@rok-gebaeudemanagement.de" 
                      className="text-muted-foreground hover:text-cyan-600 transition-colors block mt-1"
                    >
                      info@rok-gebaeudemanagement.de
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h4 className="font-medium mb-2">Geschäftszeiten</h4>
                <dl className="space-y-2">
                  <div className="flex justify-between">
                    <dt>Montag - Freitag:</dt>
                    <dd>08:00 - 17:00 Uhr</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Samstag:</dt>
                    <dd>Nach Vereinbarung</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Sonntag:</dt>
                    <dd>Geschlossen</dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-md border p-6 sm:p-8 animate-fade-up" style={{ animationDelay: "200ms" }}>
              <h3 className="text-xl font-semibold mb-6">Senden Sie uns eine Nachricht</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Ihr vollständiger Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    E-Mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="ihre-email@beispiel.de"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">
                    Telefon
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="+49 123 456789"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                    placeholder="Wie können wir Ihnen helfen?"
                  />
                </div>
                
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                  >
                    {loading ? 'Wird gesendet...' : 'Nachricht senden'}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="space-y-4">
              <Logo variant="white" size="lg" />
              <p className="text-gray-300 mt-4 max-w-xs">
                Professionelles Gebäudemanagement und umfassende Gebäudedienstleistungen für Ihre Immobilien.
              </p>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold text-lg mb-5">Schnelllinks</h5>
              <ul className="space-y-3">
                <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Start</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Leistungen</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">Über uns</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Kontakt</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Datenschutz</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Impressum</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-lg mb-5">Leistungen</h5>
              <ul className="space-y-3">
                <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Gebäudereinigung</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Hausmeisterservice</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Technisches Facility Management</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Winterdienst</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-lg mb-5">Kontakt</h5>
              <ul className="space-y-4">
                <li className="flex">
                  <MapPin size={20} className="text-cyan-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">
                    Musterstraße 123<br />
                    12345 Musterstadt<br />
                    Deutschland
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone size={20} className="text-cyan-400 mr-3 flex-shrink-0" />
                  <a href="tel:+49123456789" className="text-gray-300 hover:text-white transition-colors">
                    +49 (0) 123 456 789
                  </a>
                </li>
                <li className="flex items-center">
                  <Mail size={20} className="text-cyan-400 mr-3 flex-shrink-0" />
                  <a href="mailto:info@rok-gebaeudemanagement.de" className="text-gray-300 hover:text-white transition-colors">
                    info@rok-gebaeudemanagement.de
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} ROK Gebäudemanagement. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
