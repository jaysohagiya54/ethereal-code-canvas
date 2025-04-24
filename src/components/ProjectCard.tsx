
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
  className?: string;
  delay?: number;
  isInView: boolean;
}

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  tags, 
  githubUrl, 
  demoUrl, 
  className,
  delay = 0,
  isInView
}: ProjectCardProps) => {
  return (
    <div 
      className={cn(
        'rounded-2xl overflow-hidden transition-all duration-700',
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12',
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="glass h-full flex flex-col">
        <div className="relative h-60 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
          />
          <div className="absolute top-3 right-3 flex gap-2">
            {tags.map((tag) => (
              <span 
                key={tag} 
                className="bg-background/80 backdrop-blur-sm text-xs py-1 px-2 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-foreground/70 mb-4 flex-grow">{description}</p>
          
          <div className="flex justify-between items-center mt-4">
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
            >
              <Github size={16} /> Source
            </a>
            
            <a 
              href={demoUrl}
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1 text-sm group"
            >
              <span className="text-primary group-hover:underline">Live Demo</span> 
              <ArrowRight 
                size={16} 
                className="text-primary transition-transform group-hover:translate-x-1" 
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
