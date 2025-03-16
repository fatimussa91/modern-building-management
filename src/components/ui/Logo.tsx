import React from 'react';
import Image from 'next/image'; // Use this if you're using Next.js
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
      <Image
        src={MedienImage}
        alt="Company Logo"
        width={sizeClasses[size]}
        height={sizeClasses[size]}
        className="object-contain"
      />
    </div>
  );
};

export default Logo;
