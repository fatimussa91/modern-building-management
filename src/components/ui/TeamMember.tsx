
import React from 'react';
import { cn } from '@/lib/utils';
import { Linkedin, Mail } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  delay?: number;
  email?: string;
  linkedin?: string;
}

const TeamMember = ({ 
  name, 
  role, 
  image, 
  bio, 
  delay = 0,
  email, 
  linkedin 
}: TeamMemberProps) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-sm border overflow-hidden group animate-fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative overflow-hidden aspect-[3/4]">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-end space-x-2">
            {email && (
              <a 
                href={`mailto:${email}`}
                className="bg-white/20 backdrop-blur-md hover:bg-white/30 p-2 rounded-full transition-colors"
                aria-label={`Email ${name}`}
              >
                <Mail className="h-5 w-5 text-white" />
              </a>
            )}
            {linkedin && (
              <a 
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-md hover:bg-white/30 p-2 rounded-full transition-colors"
                aria-label={`LinkedIn profile of ${name}`}
              >
                <Linkedin className="h-5 w-5 text-white" />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-rok-500 mb-3">{role}</p>
        <p className="text-muted-foreground text-sm">{bio}</p>
      </div>
    </div>
  );
};

export default TeamMember;
