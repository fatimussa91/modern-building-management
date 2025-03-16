
import React from 'react';
import { CheckCircle } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/ui/ContactForm';

const Contact = () => {
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
                Kontakt
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                Sprechen Sie mit <span className="text-rok-600">uns</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Wir freuen uns darauf, von Ihnen zu hören. Kontaktieren Sie uns jederzeit für Fragen oder ein unverbindliches Angebot.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Form Section */}
        <section className="page-container">
          <ContactForm />
        </section>
        
        {/* Map Section */}
        <section className="mt-16 bg-rok-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-up">
              <h2 className="text-3xl font-semibold mb-4">Besuchen Sie uns</h2>
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
        </section>
        
        {/* FAQ Section */}
        <section className="page-container">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="section-title">Häufig gestellte Fragen</h2>
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
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
