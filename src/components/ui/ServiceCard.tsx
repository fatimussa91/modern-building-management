
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
  href?: string;
}

const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  delay = 0,
  href = "#" 
}: ServiceCardProps) => {
  return (
    <div 
      className="bg-white rounded-xl p-6 shadow-sm border transition-all duration-300 hover:shadow-md hover:border-rok-200 animate-fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="bg-rok-50 p-3 rounded-lg inline-flex mb-4 text-rok-600">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <Link 
        to={href} 
        className="inline-flex items-center text-rok-600 font-medium hover:text-rok-700 group"
      >
        Mehr erfahren
        <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

export default ServiceCard;
