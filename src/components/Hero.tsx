
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import AnimatedText from './AnimatedText';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    
    return () => clearTimeout(timeout);
  }, []);
  
  return (
    <section id="home" className="min-h-screen relative flex items-center section-padding">
      {/* Background Elements */}
      <div className="absolute top-1/3 right-20 w-64 h-64 rounded-full bg-primary/20 filter blur-3xl"></div>
      <div className="absolute bottom-1/4 left-10 w-80 h-80 rounded-full bg-secondary/20 filter blur-3xl"></div>
      
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div 
          className={cn(
            'transition-all duration-1000 delay-300',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          )}
        >
          <h3 className="text-lg md:text-xl text-primary mb-2 font-medium">Hello, I'm</h3>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">John Doe</span>
          </h1>
          <div className="text-xl md:text-2xl mb-6 text-foreground/90 h-12">
            <AnimatedText text="I build web & AI-powered solutions." />
          </div>
          <p className="text-foreground/70 mb-8 max-w-lg">
            A software developer with 1 year of experience specializing in React.js, Node.js, AI/ML, and AWS. 
            Passionate about building innovative solutions that solve real-world problems.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn btn-primary flex items-center gap-2">
              Explore Projects <ArrowRight size={16} />
            </a>
            <a href="#" className="btn btn-outline">Download Resume</a>
          </div>
          
          <div className="mt-8 flex items-center gap-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:john@example.com" 
              className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        {/* Profile Image */}
        <div 
          className={cn(
            'flex justify-center transition-all duration-1000 delay-500',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          )}
        >
          <div className="relative">
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-primary to-secondary p-1">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                  alt="John Doe" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 p-4 glass animate-pulse-glow">
              <span className="text-primary font-bold">1 yr+ Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
