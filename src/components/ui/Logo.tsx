import React from 'react';
import { cn } from '@/lib/utils';
import MedienImage from '@/components/layout/Medien.jpg'; // Adjust path based on your structure

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo = ({ className, size = 'md' }: LogoProps) => {
  const sizeClasses = {
    sm: 64, // Adjust width/height for small size
    md: 128, // Medium size
    lg: 192, // Large size
  };

  return (
    <div className={cn('transition-all duration-200 transform hover:scale-105', className)}>
     <img src={require('@/components/layout/Medien.jpg')} alt="Logo" className="w-32 h-auto" />
    </div>
  );
};

export default Logo;

