
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface AdminCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  count: number;
  href: string;
  className?: string;
}

const AdminCard = ({
  title,
  description,
  icon,
  count,
  href,
  className
}: AdminCardProps) => {
  return (
    <Link
      to={href}
      className={cn(
        'bg-white rounded-xl p-6 border shadow-sm hover:shadow-md transition-all duration-300',
        className
      )}
    >
      <div className="flex justify-between items-start">
        <div className="bg-rok-50 p-3 rounded-lg inline-flex text-rok-600">
          {icon}
        </div>
        <div className="text-2xl font-bold">{count}</div>
      </div>
      <h3 className="text-lg font-semibold mt-4 mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4">{description}</p>
      <div className="flex items-center text-rok-600 hover:text-rok-700 font-medium group">
        Verwalten
        <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
};

export default AdminCard;
