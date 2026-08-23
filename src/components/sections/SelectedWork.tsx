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
  className = "py-20 bg-paper border-b border-studio-border"
}) => {
  return (
    <section id="work" className={className}>
      <Container>
        {showHeading && (
          <SectionHeading
            eyebrow="02 / SELECTED WORK"
            title="Selected Work"
            subtitle="Case studies engineered as verified business evidence — connecting customer-facing experiences directly to operational business systems."
          />
        )}

        <div className="space-y-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};
