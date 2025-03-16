
import React from 'react';
import { CheckCircle, Brush, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Logo from '@/components/ui/Logo';
import ServiceCard from '@/components/ui/ServiceCard';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
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
            
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 lg:gap-8 max-w-3xl mx-auto">
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
            
            {/* Company description */}
            <div className="max-w-3xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-sm border text-center animate-fade-up">
                <p className="text-muted-foreground mb-4">
                  ROK Gebäudemanagement bietet hochwertige und zuverlässige Gebäudemanagement-Dienstleistungen an, die auf die individuellen Bedürfnisse der Kunden zugeschnitten sind.
                </p>
                <p className="text-muted-foreground">
                  Unser Erfolgsrezept ist die Kombination aus technischem Know-how, langjähriger Erfahrung und einem hohen Maß an Kundenorientierung. Wir sorgen mit Engagement und Leidenschaft für die Zufriedenheit unserer Kunden.
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
            
            <ContactForm />
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
