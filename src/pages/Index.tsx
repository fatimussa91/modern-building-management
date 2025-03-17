
import React from 'react';
import { CheckCircle, Brush, ArrowRight, Phone, Mail, MapPin, Shield, ThermometerSnowflake, Scissors, Wrench, Building, Home } from 'lucide-react';
import Logo from '@/components/ui/Logo';
import ServiceCard from '@/components/ui/ServiceCard';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/ui/ContactForm';
import emailjs from 'emailjs-com';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    // Initialize EmailJS with your user ID
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual Public Key
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Send email using EmailJS
      await emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          reply_to: formData.email,
          phone: formData.phone,
          message: formData.message
        }
      );
      
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
      console.error("Failed to send email:", error);
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
        
        {/* About Section */}
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
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <div className="bg-white p-8 rounded-xl shadow-lg animate-fade-up">
                <h3 className="text-xl font-semibold mb-6">Kontaktformular</h3>
                <ContactForm />
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg animate-fade-up" style={{ animationDelay: "100ms" }}>
                <h3 className="text-xl font-semibold mb-6">Kontaktinformationen</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-cyan-600 mr-4 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Adresse</h4>
                      <p className="text-muted-foreground">Gottesackerstraße 1, 85221 Dachau-Udlding</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-cyan-600 mr-4 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Telefon</h4>
                      <p className="text-muted-foreground">
                        <a href="tel:+4917624320200" className="hover:text-cyan-600">+49 176 24320200</a><br />
                        <a href="tel:+4915782786519" className="hover:text-cyan-600">+49 1578 2786519</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-cyan-600 mr-4 mt-0.5" />
                    <div>
                      <h4 className="font-medium">E-Mail</h4>
                      <p className="text-muted-foreground">
                        <a href="mailto:fatimussa91@gmail.com" className="hover:text-cyan-600">fatimussa91@gmail.com</a>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Öffnungszeiten</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="font-medium">Montag - Freitag</p>
                      <p className="text-muted-foreground">8:00 - 18:00 Uhr</p>
                    </div>
                    <div>
                      <p className="font-medium">Samstag</p>
                      <p className="text-muted-foreground">9:00 - 14:00 Uhr</p>
                    </div>
                    <div className="col-span-2">
                      <p className="font-medium">Sonntag</p>
                      <p className="text-muted-foreground">Geschlossen</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map Section */}
          <div className="mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="rounded-xl overflow-hidden shadow-lg animate-fade-up" style={{ animationDelay: "100ms" }}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2651.0990151663014!2d11.4289945!3d48.264332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e7a921f0e9a95%3A0x9ef949aba60e5e89!2sGottesackerstra%C3%9Fe%201%2C%2085221%20Dachau!5e0!3m2!1sde!2sde!4v1718641407788!5m2!1sde!2sde"
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
        </section>

        {/* FAQ Section - Simplified */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16 animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Häufig gestellte Fragen</h2>
              <div className="w-20 h-1 bg-cyan-500 mx-auto mb-6"></div>
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
                  answer: "Wir betreuen verschiedenste Objekte: Bürogebäude, Wohnanlagen, Einzelhandelsgeschäfte, öffentliche Einrichtungen, Schulen und viele mehr. Unsere Dienstleistungen passen wir an die jeweiligen Anforderungen an.",
                  delay: 200
                },
                {
                  question: "Sind Ihre Dienstleistungen individuell anpassbar?",
                  answer: "Ja, alle unsere Dienstleistungen werden individuell auf Ihre Bedürfnisse zugeschnitten. Wir erstellen nach einer genauen Analyse Ihrer Immobilie ein maßgeschneidertes Konzept für Sie.",
                  delay: 300
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
        </section>

        {/* Footer Section */}
        <Footer />
      </main>
    </>
  );
};

export default Index;
