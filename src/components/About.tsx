
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { useInView } from '../hooks/useInView';

const About = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  
  return (
    <section id="about" ref={ref} className="py-20 section-padding relative">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-20 w-64 h-64 rounded-full bg-secondary/10 filter blur-3xl"></div>
      
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div 
            className={cn(
              'transition-all duration-1000',
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            )}
          >
            <div className="relative">
              <div className="w-full h-80 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                  alt="Working with code" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -left-6 glass p-4 rounded-xl animate-float">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-primary rounded-full animate-pulse"></span>
                  <span className="text-sm font-medium">Always learning</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div 
            className={cn(
              'transition-all duration-1000 delay-300',
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            )}
          >
            <h3 className="text-2xl font-bold mb-4">A passionate developer on a journey</h3>
            
            <div className="space-y-4 text-foreground/80">
              <p>
                I'm a software developer with a strong passion for creating elegant solutions to complex problems. 
                With a year of professional experience, I've focused on building full-stack applications 
                using modern frameworks like React and Node.js.
              </p>
              
              <p>
                My journey began with a fascination for how technology can solve real-world problems. I quickly 
                dove into web development, machine learning, and cloud technologies, building projects that 
                combined these interests.
              </p>
              
              <p>
                Currently, I'm exploring the intersection of AI and web development, creating applications 
                that leverage machine learning to deliver unique user experiences. I'm constantly learning 
                and expanding my skillset to stay at the forefront of technology.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-muted text-sm">Problem Solver</span>
              <span className="px-4 py-2 rounded-full bg-muted text-sm">Fast Learner</span>
              <span className="px-4 py-2 rounded-full bg-muted text-sm">Team Player</span>
              <span className="px-4 py-2 rounded-full bg-muted text-sm">Detail Oriented</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
