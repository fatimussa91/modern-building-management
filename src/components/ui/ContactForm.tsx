
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { ArrowRight } from 'lucide-react';
import emailjs from 'emailjs-com';

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
      // Initialize EmailJS with your public key
      emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual public key from EmailJS

      await emailjs.send(
        "service_", // Replace with your actual service ID from EmailJS
        "template_", // Replace with your actual template ID from EmailJS
        {
          from_name: formData.name,
          from_email: formData.email,
          from_phone: formData.phone,
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
      console.error('Failed to send email:', error);
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
    <div className="bg-white rounded-xl shadow-sm border p-6 sm:p-8 animate-fade-up">
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
  );
};

export default ContactForm;
