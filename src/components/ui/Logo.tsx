import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo = ({ className, size = 'md' }: LogoProps) => {
  const sizeClasses = {
    sm: 64, // Small size
    md: 128, // Medium size
    lg: 192, // Large size
  };

  return (
    <div className={cn('transition-all duration-200 transform hover:scale-105', className)}>
      {/* ✅ Correct way to load a public image in React */}
      <img 
        src="/Medien.jpg" 
        alt="Company Logo"
        width={sizeClasses[size]}
        height="auto"
        className="object-contain"
      />
    </div>
  );
};

export default Logo;
