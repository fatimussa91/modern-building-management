
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'white';
}

const Logo = ({ className, size = 'md', variant = 'default' }: LogoProps) => {
  const sizeClasses = {
    sm: 64, // Small size
    md: 128, // Medium size
    lg: 192, // Large size
  };

  return (
    <div className={cn('transition-all duration-200 transform hover:scale-105', className)}>
      {/* Logo image - updated path for GitHub Pages compatibility */}
      <img 
        src="./Medien.jpg" 
        alt="ROK Gebäudemanagement Logo"
        width={sizeClasses[size]}
        height="auto"
        className={cn(
          "object-contain",
          variant === 'white' && "brightness-0 invert"
        )}
      />
    </div>
  );
};

export default Logo;
