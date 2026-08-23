import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { projects } from '../../data/projects';
import { ProjectCard } from '../projects/ProjectCard';

export const SelectedWork: React.FC = () => {
  return (
    <section id="work" className="py-20 bg-paper border-b border-studio-border">
      <Container>
        <SectionHeading
          eyebrow="02 / SELECTED WORK"
          title="Featured Case Studies"
          subtitle="Real business software systems engineered for revenue growth, automated bookings, and streamlined operations."
        />

        <div className="space-y-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};
