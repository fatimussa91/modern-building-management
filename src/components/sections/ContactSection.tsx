
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import ContactForm from '@/components/ui/ContactForm';

const ContactSection = () => {
  return (
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
                    <a href="mailto:info@rokgebeudemanagement.de" className="hover:text-cyan-600">info@rokgebeudemanagement.de</a>
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
  );
};

export default ContactSection;
