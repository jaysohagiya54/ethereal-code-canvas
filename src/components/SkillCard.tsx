
import React from 'react';
import { cn } from '@/lib/utils';

interface SkillCardProps {
  name: string;
  icon: string;
  proficiency: number;
  className?: string;
  delay?: number;
  isInView: boolean;
}

const SkillCard = ({ name, icon, proficiency, className, delay = 0, isInView }: SkillCardProps) => {
  return (
    <div 
      className={cn(
        'glass p-5 flex flex-col items-center transition-all duration-700',
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        `delay-${delay}`,
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-16 h-16 mb-4 flex items-center justify-center">
        <img src={icon} alt={name} className="w-10 h-10 object-contain" />
      </div>
      <h3 className="text-lg font-medium mb-2">{name}</h3>
      <div className="w-full bg-muted rounded-full h-2.5">
        <div 
          className="bg-gradient-to-r from-primary to-secondary h-2.5 rounded-full transition-all duration-1000"
          style={{ 
            width: isInView ? `${proficiency}%` : '0%',
            transitionDelay: `${delay + 300}ms`
          }}
        ></div>
      </div>
      <span className="mt-2 text-sm text-foreground/70">{proficiency}%</span>
    </div>
  );
};

export default SkillCard;
