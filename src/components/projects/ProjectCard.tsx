import React from 'react';
import { ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react';
import { Project } from '../../data/projects';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { BrowserFrame } from '../ui/BrowserFrame';
import { ProjectVisualMockup } from './ProjectVisualMockup';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const projectNumber = String(index + 1).padStart(2, '0');

  return (
    <div className="py-14 border-b border-studio-border last:border-b-0 space-y-8">
      {/* Top Client Metadata Bar */}
      <div className="bg-studio-surface border border-studio-border p-4 rounded-sm grid grid-cols-2 md:grid-cols-6 gap-4 text-xs font-mono">
        <div className="flex items-center gap-3">
          {project.clientLogo && (
            <div className="h-8 min-w-[36px] max-w-[90px] flex items-center justify-center p-1 bg-paper/80 border border-studio-border/60 rounded-sm shrink-0">
              <img 
                src={project.clientLogo} 
                alt={project.clientName} 
                className="max-h-full max-w-full object-contain" 
              />
            </div>
          )}
          <div className="min-w-0">
            <span className="text-terracotta uppercase tracking-wider block text-[10px] mb-0.5">Client</span>
            <span className="font-bold text-editorial truncate block">{project.clientName}</span>
          </div>
        </div>
        <div>
          <span className="text-terracotta uppercase tracking-wider block text-[10px] mb-0.5">Industry</span>
          <span className="font-bold text-editorial truncate block">{project.industry}</span>
        </div>
        <div>
          <span className="text-terracotta uppercase tracking-wider block text-[10px] mb-0.5">Location</span>
          <span className="font-bold text-editorial truncate block">{project.clientLocation}</span>
        </div>
        <div>
          <span className="text-terracotta uppercase tracking-wider block text-[10px] mb-0.5">Timeline</span>
          <span className="font-bold text-editorial truncate block">{project.timeline}</span>
        </div>
        <div>
          <span className="text-terracotta uppercase tracking-wider block text-[10px] mb-0.5">Status</span>
          <span className="font-bold text-editorial truncate block">{project.status}</span>
        </div>
        <div className="col-span-2 md:col-span-1 flex items-center justify-end">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-[11px] text-terracotta hover:underline font-bold"
            >
              <span>Visit Live</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>

      {/* Project Title & Badges */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-terracotta mb-2 font-semibold">
            CASE STUDY {projectNumber} / {project.slug.toUpperCase()}
          </div>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-editorial font-sans tracking-tight">
            {project.title}
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant="default">{project.industry}</Badge>
          <Badge variant="brand">{project.category}</Badge>
        </div>
      </div>

      {/* Large Project Visual Screenshot */}
      <div>
        <BrowserFrame
          url={project.liveUrl || `https://${project.slug}-system.com`}
          badge={`${project.clientName} • ${project.status}`}
        >
          <ProjectVisualMockup
            projectType={project.slug === 'travel' ? 'travel' : 'bakery'}
          />
        </BrowserFrame>
      </div>

      {/* Outcome-Oriented 3-Column Narrative: Problem -> What We Changed -> Impact */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
        {/* Column 1: The Problem */}
        <div className="bg-paper border border-studio-border rounded-sm p-5 space-y-3">
          <div className="text-xs font-mono uppercase tracking-widest text-terracotta font-semibold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-terracotta"></span>
            <span>01 / The Problem</span>
          </div>
          <p className="text-xs text-editorial-muted leading-relaxed">
            {project.problem.overview}
          </p>
          <ul className="space-y-1.5 pt-2 border-t border-studio-border">
            {project.problem.painPoints.slice(0, 2).map((point, idx) => (
              <li key={idx} className="text-[11px] text-editorial leading-snug flex items-start gap-1.5">
                <span className="text-terracotta shrink-0 font-mono">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2: What We Changed */}
        <div className="bg-paper border border-studio-border rounded-sm p-5 space-y-3">
          <div className="text-xs font-mono uppercase tracking-widest text-editorial font-semibold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-editorial"></span>
            <span>02 / What We Changed</span>
          </div>
          <p className="text-xs text-editorial-muted leading-relaxed">
            {project.whatWeChanged.overview}
          </p>
          <ul className="space-y-1.5 pt-2 border-t border-studio-border">
            {project.whatWeChanged.highlights.slice(0, 2).map((item, idx) => (
              <li key={idx} className="text-[11px] text-editorial leading-snug flex items-start gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-terracotta shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Business Impact */}
        <div className="bg-studio-surface border border-studio-border rounded-sm p-5 space-y-3 flex flex-col justify-between">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-terracotta font-semibold mb-3">
              03 / Business Impact
            </div>
            <div className="space-y-3">
              {project.businessImpact.map((impact) => (
                <div key={impact.label} className="border-b border-studio-border pb-2 last:border-b-0">
                  <div className="text-lg font-extrabold text-editorial font-sans">{impact.metric}</div>
                  <div className="text-[11px] font-bold text-editorial">{impact.label}</div>
                  <div className="text-[10px] text-editorial-muted">{impact.description}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3">
            <Button
              href={`/work/${project.slug}`}
              variant="primary"
              fullWidth
              size="sm"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Read Full Case Study
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
