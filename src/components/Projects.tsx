
import React from 'react';
import ProjectCard from './ProjectCard';
import { useInView } from '../hooks/useInView';
import { cn } from '@/lib/utils';

const Projects = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  
  const projects = [
    {
      title: "AI Image Generator",
      description: "A web app that uses machine learning to generate images from text descriptions. Built with React, TensorFlow.js and Node.js.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      tags: ["React", "TensorFlow", "Node.js"],
      githubUrl: "https://github.com",
      demoUrl: "https://demo.com",
      delay: 100
    },
    {
      title: "Cloud File Manager",
      description: "A serverless application for file management using AWS S3, Lambda, and React. Features include file upload, sharing, and permissions.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      tags: ["React", "AWS", "Serverless"],
      githubUrl: "https://github.com",
      demoUrl: "https://demo.com",
      delay: 300
    },
    {
      title: "Smart Task Tracker",
      description: "A productivity app that uses ML algorithms to predict task completion times and optimize scheduling. Built with the MERN stack.",
      image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c",
      tags: ["MongoDB", "Express", "React", "Node"],
      githubUrl: "https://github.com",
      demoUrl: "https://demo.com",
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
