
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'white';
}

const Logo = ({ className, size = 'md', variant = 'default' }: LogoProps) => {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  const variantClasses = {
    default: 'text-gray-800',
    white: 'text-white',
  };

  return (
    <div 
      className={cn(
        'font-bold tracking-tighter transition-all duration-200 transform hover:scale-105',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      <span className="inline-block mr-[1px]">RO</span>
      <span className="inline-block text-cyan-500">K</span>
    </div>
  );
};

export default Logo;
