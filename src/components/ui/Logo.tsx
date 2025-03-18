import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'white';
}

const Logo = ({ className, size = 'md', variant = 'default' }: LogoProps) => {
  const sizeClasses = {
    sm: 120, // Increased size for better visibility
    md: 180, // Increased size for better visibility
    lg: 250, // Increased size for better visibility
  };

  // Add a background for better contrast when needed
  return (
    <div className={cn(
      'transition-all duration-200 transform hover:scale-105',
      variant === 'default' ? 'p-1 rounded-md' : 'p-1 rounded-md bg-white/10',
      className
    )}>
      {/* Logo image - updated for better visibility */}
      <img 
        src="./Medien.jpg" 
        alt="ROK Gebäudemanagement Logo"
        width={sizeClasses[size]}
        height="auto"
        className={cn(
          "object-contain",
          // Don't invert the logo to keep it visible in footer
          variant === 'white' && "brightness-100"
        )}
      />
    </div>
  );
};

export default Logo;
