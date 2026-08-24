import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { projects } from '../../data/projects';
import { ProjectCard } from '../projects/ProjectCard';

interface SelectedWorkProps {
  showHeading?: boolean;
  className?: string;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ 
  showHeading = true,
  className = "py-20 bg-paper border-b border-studio-border font-sans"
}) => {
  return (
    <section id="work" className={className}>
      <Container>
        {showHeading && (
          <SectionHeading
            eyebrow="02 / REAL WORK"
            title="Real Projects We’ve Built"
            subtitle="Real examples of websites and booking systems we’ve built for tour operators and local businesses."
          />
        )}

        <div className="space-y-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};
