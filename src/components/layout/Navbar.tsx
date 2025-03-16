
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../ui/Logo';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Startseite', path: '/#home' },
  { name: 'Über uns', path: '/#about' },
  { name: 'Leistungen', path: '/#services' },
  { name: 'Kontakt', path: '/#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const section = document.querySelector(target);
    if (section) {
      window.scrollTo({
        top: section.getBoundingClientRect().top + window.scrollY - 100,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-400',
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Logo size="md" />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => scrollToSection(e, link.path.replace('/#', '#'))}
                className="text-sm font-medium transition-colors hover:text-rok-500 relative py-2 text-foreground/80"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="p-2 rounded-md text-foreground hover:bg-accent"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open menu</span>
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={cn(
          'md:hidden transition-all duration-300 ease-in-out overflow-hidden',
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="px-4 pt-2 pb-4 space-y-1 bg-white/95 backdrop-blur-sm border-t">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              onClick={(e) => scrollToSection(e, link.path.replace('/#', '#'))}
              className="block px-3 py-3 text-base font-medium rounded-md text-foreground hover:bg-accent"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
