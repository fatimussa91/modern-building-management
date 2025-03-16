import React from 'react';
import Image from 'next/image'; // Use 'next/image' for Next.js, otherwise use <img>
import MedienImage from '../layout/Medien.jpg'; // Import the image
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo = ({ className, size = 'md' }: LogoProps) => {
  const sizeClasses = {
    sm: 32,
    md: 48,
    lg: 64,
  };

  return (
    <div className={cn('transition-all duration-200 transform hover:scale-105', className)}>
      <Image
        src={MedienImage} // Use imported image
        alt="Logo"
        width={sizeClasses[size]}
        height={sizeClasses[size]}
        className="object-contain"
      />
    </div>
  );
};

export default Logo;
