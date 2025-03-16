import React from 'react';
import { cn } from '@/lib/utils';

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
     <img src="/Medien.jpg" alt="Logo" className="w-32 h-auto" />
    </div>
  );
};

export default Logo;

