
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  delay = 0
}: ServiceCardProps) => {
  return (
    <div 
      className="bg-white rounded-xl p-6 shadow-md border-t-4 border-t-cyan-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="bg-cyan-50 text-cyan-600 p-3 rounded-lg inline-flex mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <a 
        href="#contact" 
        className="inline-flex items-center text-cyan-600 font-medium hover:text-cyan-700 group"
      >
        Anfrage senden
        <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  );
};

export default ServiceCard;
