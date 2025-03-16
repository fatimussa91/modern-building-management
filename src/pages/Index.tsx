
import React from 'react';
import { Link } from 'react-router-dom';
import { Building, Shield, Users, Clock, CheckCircle, Brush, Wrench, Thermometer, ArrowRight, Phone, Mail, MapPin, Award, ThumbsUp, Target } from 'lucide-react';
import Logo from '@/components/ui/Logo';
import ServiceCard from '@/components/ui/ServiceCard';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TeamMember from '@/components/ui/TeamMember';
import ContactForm from '@/components/ui/ContactForm';

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

  const coreValues = [
    {
      title: 'Qualität',
      description: 'Wir setzen höchste Standards bei allen unseren Dienstleistungen und streben stets nach exzellenten Ergebnissen.',
      icon: <Award className="w-8 h-8" />
    },
    {
      title: 'Kundenzufriedenheit',
      description: 'Die Zufriedenheit unserer Kunden steht im Mittelpunkt unseres Handelns. Wir hören zu und passen unsere Leistungen an Ihre Bedürfnisse an.',
      icon: <ThumbsUp className="w-8 h-8" />
    },
    {
      title: 'Nachhaltigkeit',
      description: 'Wir berücksichtigen Umweltaspekte in unseren Dienstleistungen und fördern nachhaltige Praktiken im Gebäudemanagement.',
      icon: <Target className="w-8 h-8" />
    }
  ];

  const teamMembers = [
    {
      name: 'Robert Krause',
      role: 'Geschäftsführer',
      image: '/images/team-member-1.jpg',
      bio: 'Mit über 20 Jahren Erfahrung im Gebäudemanagement leitet Robert unser Unternehmen mit Expertise und Leidenschaft.',
      email: 'r.krause@rok-gebaeudemanagement.de',
      linkedin: '#'
    },
    {
      name: 'Olivia Becker',
      role: 'Betriebsleiterin',
      image: '/images/team-member-2.jpg',
      bio: 'Olivia koordiniert unser Betriebsteam und sorgt für reibungslose Abläufe bei allen Projekten.',
      email: 'o.becker@rok-gebaeudemanagement.de',
      linkedin: '#'
    },
    {
      name: 'Karl Weber',
      role: 'Technischer Leiter',
      image: '/images/team-member-3.jpg',
      bio: 'Karl bringt sein umfangreiches technisches Know-how ein und leitet unsere Facility Management Abteilung.',
      email: 'k.weber@rok-gebaeudemanagement.de',
      linkedin: '#'
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Über Uns</h2>
              <div className="w-20 h-1 bg-cyan-500 mx-auto mb-6"></div>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Ein Team von Experten, das mit Leidenschaft und Fachwissen für optimales Gebäudemanagement sorgt.
              </p>
            </div>
            
            {/* Company Story */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 lg:order-1 animate-fade-up">
                <h3 className="text-2xl font-semibold mb-6">Unsere Geschichte</h3>
                <p className="text-muted-foreground mb-4">
                  ROK Gebäudemanagement wurde 2005 von Robert Krause gegründet, mit der Vision, hochwertige und zuverlässige Gebäudemanagement-Dienstleistungen anzubieten, die auf die individuellen Bedürfnisse der Kunden zugeschnitten sind.
                </p>
                <p className="text-muted-foreground mb-4">
                  Was als kleines Unternehmen mit nur wenigen Mitarbeitern begann, hat sich zu einem führenden Anbieter von Gebäudemanagement-Dienstleistungen in der Region entwickelt. Heute betreuen wir eine Vielzahl von Objekten, von Bürogebäuden und Geschäftsflächen bis hin zu Wohnanlagen und öffentlichen Einrichtungen.
                </p>
                <p className="text-muted-foreground mb-6">
                  Unser Erfolgsrezept ist die Kombination aus technischem Know-how, langjähriger Erfahrung und einem hohen Maß an Kundenorientierung. Wir sind stolz auf unser Team aus Fachleuten, die mit Engagement und Leidenschaft für die Zufriedenheit unserer Kunden sorgen.
                </p>
              </div>
              <div className="order-1 lg:order-2 animate-fade-up" style={{ animationDelay: "200ms" }}>
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="/images/company-story.jpg" 
                    alt="ROK Gebäudemanagement Team" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="font-medium">Gegründet 2005</p>
                    <h3 className="text-xl font-semibold">Mit Erfahrung und Leidenschaft</h3>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Core Values */}
            <div className="mt-16">
              <h3 className="text-2xl font-semibold mb-6 text-center">Unsere Werte</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                {coreValues.map((value, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-8 rounded-xl shadow-sm border text-center animate-fade-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-100 text-cyan-600 rounded-full mb-5">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Team Section */}
            <div className="mt-16">
              <h3 className="text-2xl font-semibold mb-6 text-center">Unser Team</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                {teamMembers.map((member, index) => (
                  <TeamMember
                    key={index}
                    name={member.name}
                    role={member.role}
                    image={member.image}
                    bio={member.bio}
                    delay={index * 100}
                    email={member.email}
                    linkedin={member.linkedin}
                  />
                ))}
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
          
          {/* Map Section */}
          <div className="mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12 animate-fade-up">
                <h3 className="text-2xl font-semibold mb-4">Besuchen Sie uns</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Wir sind zentral gelegen und freuen uns auf Ihren Besuch. Vereinbaren Sie gerne vorab einen Termin.
                </p>
              </div>
              
              <div className="rounded-xl overflow-hidden shadow-lg animate-fade-up" style={{ animationDelay: "100ms" }}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4092231792297!2d13.3767408!3d52.5162746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c655f20989%3A0x26bbfb4e84674c63!2sBrandenburg%20Gate!5e0!3m2!1sen!2sde!4v1638447137099!5m2!1sen!2sde" 
                  width="100%" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="ROK Gebäudemanagement Standort"
                ></iframe>
              </div>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12 animate-fade-up">
                <h3 className="text-2xl font-semibold mb-4">Häufig gestellte Fragen</h3>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  Hier finden Sie Antworten auf die häufigsten Fragen zu unseren Dienstleistungen.
                </p>
              </div>
              
              <div className="max-w-3xl mx-auto space-y-6">
                {[
                  {
                    question: "Wie kann ich ein Angebot anfordern?",
                    answer: "Sie können ein Angebot über unser Kontaktformular, per E-Mail oder telefonisch anfordern. Wir melden uns umgehend bei Ihnen, um Ihre individuellen Anforderungen zu besprechen.",
                    delay: 100
                  },
                  {
                    question: "Welche Arten von Gebäuden betreuen Sie?",
                    answer: "Wir betreuen verschiedenste Objekte: Bürogebäude, Wohnanlagen, Einzelhandelsgeschäfte, öffentliche Einrichtungen, Schulen, Krankenhäuser und viele mehr. Unsere Dienstleistungen passen wir an die jeweiligen Anforderungen an.",
                    delay: 200
                  },
                  {
                    question: "Sind Ihre Dienstleistungen individuell anpassbar?",
                    answer: "Ja, alle unsere Dienstleistungen werden individuell auf Ihre Bedürfnisse zugeschnitten. Wir erstellen nach einer genauen Analyse Ihrer Immobilie ein maßgeschneidertes Konzept für Sie.",
                    delay: 300
                  },
                  {
                    question: "Wie oft führen Sie Qualitätskontrollen durch?",
                    answer: "Qualitätskontrollen sind ein integraler Bestandteil unserer Dienstleistungen. Je nach Vereinbarung führen wir regelmäßige Kontrollen durch und stellen Ihnen auf Wunsch detaillierte Berichte zur Verfügung.",
                    delay: 400
                  },
                  {
                    question: "Kann ich den Umfang der Dienstleistungen später anpassen?",
                    answer: "Selbstverständlich! Wir wissen, dass sich Anforderungen ändern können. Daher bieten wir flexible Lösungen an und passen unsere Dienstleistungen jederzeit an Ihre aktuellen Bedürfnisse an.",
                    delay: 500
                  }
                ].map((faq, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-xl p-6 shadow-sm border animate-fade-up"
                    style={{ animationDelay: `${faq.delay}ms` }}
                  >
                    <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <Footer />
      </main>
    </>
  );
};

export default Index;
