
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

const ContactForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Use the email.js library to send the email directly
      const serviceID = 'default_service'; // Replace with your Service ID
      const templateID = 'template_id'; // Replace with your Template ID
      const userID = 'user_id'; // Replace with your User ID
      
      // Send email directly
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          service_id: serviceID,
          template_id: templateID,
          user_id: userID,
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            from_phone: formData.phone,
            message: formData.message
          }
        })
      });
      
      if (response.ok) {
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
      } else {
        throw new Error('Failed to send email');
      }
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

  return (
    <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
      {/* Contact Information */}
      <div className="space-y-8 animate-fade-up">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Kontaktieren Sie uns</h2>
          <p className="text-muted-foreground">
            Haben Sie Fragen zu unseren Dienstleistungen? Kontaktieren Sie uns noch heute für ein unverbindliches Angebot.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-start">
            <MapPin className="w-5 h-5 text-rok-500 mt-1 mr-3" />
            <div>
              <h4 className="font-medium">Adresse</h4>
              <address className="text-muted-foreground not-italic mt-1">
                Gottesackerstraße 1<br />
                85221 Dachau-Udlding<br />
                Deutschland
              </address>
            </div>
          </div>
          
          <div className="flex items-start">
            <Phone className="w-5 h-5 text-rok-500 mt-1 mr-3" />
            <div>
              <h4 className="font-medium">Telefon</h4>
              <a 
                href="tel:+4917624320200" 
                className="text-muted-foreground hover:text-rok-600 transition-colors block mt-1"
              >
                +49 176 24320200
              </a>
            </div>
          </div>
          
          <div className="flex items-start">
            <Mail className="w-5 h-5 text-rok-500 mt-1 mr-3" />
            <div>
              <h4 className="font-medium">E-Mail</h4>
              <a 
                href="mailto:fatimussa91@gmail.com" 
                className="text-muted-foreground hover:text-rok-600 transition-colors block mt-1"
              >
                fatimussa91@gmail.com
              </a>
            </div>
          </div>
        </div>
        
        <div className="bg-rok-50 p-6 rounded-lg border border-rok-100">
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
      <div className="bg-white rounded-xl shadow-sm border p-6 sm:p-8 animate-fade-up" style={{ animationDelay: "200ms" }}>
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
              className="rok-input"
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
              className="rok-input"
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
              className="rok-input"
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
              className="rok-input resize-none"
              placeholder="Wie können wir Ihnen helfen?"
            />
          </div>
          
          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="rok-button-primary w-full relative group overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center">
                {loading ? 'Wird gesendet...' : 'Nachricht senden'}
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-rok-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
