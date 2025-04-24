
import React from 'react';
import SkillCard from './SkillCard';
import { useInView } from '../hooks/useInView';

const Skills = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  
  const skills = [
    {
      name: "React.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      proficiency: 90,
      delay: 100
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      proficiency: 85,
      delay: 200
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      proficiency: 80,
      delay: 300
    },
    {
      name: "AWS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
      proficiency: 75,
      delay: 400
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      proficiency: 80,
      delay: 500
    },
    {
      name: "TensorFlow",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      proficiency: 70,
      delay: 600
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      proficiency: 85,
      delay: 700
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      proficiency: 75,
      delay: 800
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      proficiency: 90,
      delay: 900
    }
  ];
  
  return (
    <section id="skills" ref={ref} className="py-20 section-padding relative">
      {/* Background Elements */}
      <div className="absolute bottom-1/3 right-10 w-96 h-96 rounded-full bg-primary/10 filter blur-3xl"></div>
      
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-foreground/70 max-w-xl mx-auto">
            Here are the technologies I've been working with recently.
            I'm always expanding my skillset to stay current with the latest industry trends.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
              proficiency={skill.proficiency}
              delay={skill.delay}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
