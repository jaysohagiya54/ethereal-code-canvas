
import React from 'react';
import ProjectCard from './ProjectCard';
import { useInView } from '../hooks/useInView';
import { cn } from '@/lib/utils';

const Projects = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  
  const projects = [
    {
      title: "Memory Game",
      description: "A fun and interactive memory game built with React, featuring card matching mechanics and score tracking.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      tags: ["React", "CSS", "JavaScript"],
      githubUrl: "https://github.com/Jay-Sojitra/Memory-game",
      demoUrl: "https://memory-game-js-six.vercel.app/",
      delay: 100
    },
    {
      title: "Realtime Chat App",
      description: "A real-time chat application built with React and Firebase, enabling instant messaging and user authentication.",
      image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a",
      tags: ["React", "Firebase", "Tailwind"],
      githubUrl: "https://github.com/Jay-Sojitra/chat-app",
      demoUrl: "https://chat-app-js-nine.vercel.app/",
      delay: 300
    },
    {
      title: "Blog App",
      description: "A full-stack blog application with user authentication, CRUD operations, and responsive design.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
      tags: ["Next.js", "MongoDB", "Node.js"],
      githubUrl: "https://github.com/Jay-Sojitra/Blog-app",
      demoUrl: "https://blog-app-js.vercel.app/",
      delay: 500
    }
  ];
  
  return (
    <section id="projects" ref={ref} className="py-20 section-padding relative">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-20 w-72 h-72 rounded-full bg-secondary/10 filter blur-3xl"></div>
      
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-foreground/70 max-w-xl mx-auto">
            Here are some of my recent projects that showcase my skills and interests.
          </p>
        </div>
        
        <div 
          className={cn(
            'grid md:grid-cols-2 lg:grid-cols-3 gap-8',
            isInView ? 'opacity-100' : 'opacity-0'
          )}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              githubUrl={project.githubUrl}
              demoUrl={project.demoUrl}
              delay={project.delay}
              isInView={isInView}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            View More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
