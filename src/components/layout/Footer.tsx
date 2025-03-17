
import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  ArrowRight 
} from 'lucide-react';
import Logo from './ui/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Smooth scroll function
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const section = document.querySelector(target);
    if (section) {
      window.scrollTo({
        top: section.getBoundingClientRect().top + window.scrollY - 100,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <footer className="bg-rok-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="max-w-[200px]">
              <Logo variant="white" size="sm" />
            </div>
            <p className="text-gray-300 mt-4 max-w-xs">
              Professionelles Gebäudemanagement und umfassende Gebäudedienstleistungen für Ihre Immobilien.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h5 className="font-semibold text-lg mb-5">Schnelllinks</h5>
            <ul className="space-y-3">
              {[
                { name: 'Startseite', path: '#home' },
                { name: 'Über uns', path: '#about' },
                { name: 'Leistungen', path: '#services' },
                { name: 'Kontakt', path: '#contact' },
                { name: 'Datenschutz', path: '#' },
                { name: 'Impressum', path: '#' },
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.path}
                    onClick={(e) => link.path.startsWith('#') ? scrollToSection(e, link.path) : null}
                    className="text-gray-300 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight 
                      size={14} 
                      className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"
                    />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h5 className="font-semibold text-lg mb-5">Kontakt</h5>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin size={20} className="text-rok-400 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  Gottesackerstraße 1<br />
                  85221 Dachau-Udlding<br />
                  Deutschland
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-rok-400 mr-3 flex-shrink-0" />
                <div className="text-gray-300">
                  <a href="tel:+4917624320200" className="hover:text-white transition-colors block">
                    +49 176 24320200
                  </a>
                  <a href="tel:+4915782786519" className="hover:text-white transition-colors block mt-1">
                    +49 1578 2786519
                  </a>
                </div>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-rok-400 mr-3 flex-shrink-0" />
                <a href="mailto:info@rok.de" className="text-gray-300 hover:text-white transition-colors">
                  info@rok.de
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} ROK Gebäudemanagement. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
