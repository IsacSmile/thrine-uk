import React from 'react';
import { ArrowRight, CheckCircle2, ExternalLink, ArrowRightCircle } from 'lucide-react';
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
    <div className="py-14 border-b border-studio-border last:border-b-0 space-y-8 font-sans">
      
      {/* Client Metadata Bar */}
      <div className="bg-studio-surface border border-studio-border p-4 rounded-sm grid grid-cols-2 md:grid-cols-6 gap-4 text-xs font-mono">
        <div className="flex items-center gap-3 col-span-2 md:col-span-2">
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
            <span className="text-terracotta uppercase tracking-wider block text-[10px] font-bold">Client / Industry</span>
            <span className="font-bold text-editorial truncate block text-sm">{project.clientName} · {project.industry}</span>
          </div>
        </div>
        <div>
          <span className="text-terracotta uppercase tracking-wider block text-[10px] font-bold">Location</span>
          <span className="font-bold text-editorial truncate block">{project.clientLocation}</span>
        </div>
        <div>
          <span className="text-terracotta uppercase tracking-wider block text-[10px] font-bold">Timeline</span>
          <span className="font-bold text-editorial truncate block">{project.timeline}</span>
        </div>
        <div>
          <span className="text-terracotta uppercase tracking-wider block text-[10px] font-bold">Status</span>
          <span className="font-bold text-editorial truncate block">{project.status}</span>
        </div>
        <div className="flex items-center justify-end">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-[11px] text-terracotta hover:underline font-bold"
            >
              <span>Visit live website</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>

      {/* Project Title & Summary */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-terracotta mb-2 font-semibold">
            CASE STUDY {projectNumber} / {project.clientName.toUpperCase()}
          </div>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-editorial font-sans tracking-tight">
            {project.title}
          </h3>
          <p className="text-sm text-editorial-muted max-w-3xl mt-2 leading-relaxed">
            {project.summary}
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <Badge variant="default">{project.industry}</Badge>
          <Badge variant="brand">{project.type}</Badge>
        </div>
      </div>

      {/* Large Interface Screenshot */}
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

      {/* Dual Workflows Summary Strip: Customer Experience vs Business System */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-studio-surface border border-studio-border p-5 rounded-sm">
        {/* Customer Experience Workflow */}
        <div className="space-y-2">
          <div className="text-xs font-mono uppercase tracking-widest text-terracotta font-bold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-terracotta"></span>
            <span>Customer Experience Workflow</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-editorial font-bold pt-1">
            {project.customerWorkflow.map((step, i) => (
              <React.Fragment key={step.step}>
                <span className="px-2 py-1 bg-paper border border-studio-border rounded-sm">{step.title}</span>
                {i < project.customerWorkflow.length - 1 && (
                  <ArrowRightCircle className="w-3.5 h-3.5 text-editorial-muted shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Business System Workflow */}
        <div className="space-y-2 border-t md:border-t-0 md:border-l border-studio-border pt-4 md:pt-0 md:pl-5">
          <div className="text-xs font-mono uppercase tracking-widest text-editorial font-bold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-editorial"></span>
            <span>Business / Admin System</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-editorial font-bold pt-1">
            {project.adminWorkflow.map((step, i) => (
              <React.Fragment key={step.step}>
                <span className="px-2 py-1 bg-paper border border-studio-border rounded-sm">{step.title}</span>
                {i < project.adminWorkflow.length - 1 && (
                  <ArrowRightCircle className="w-3.5 h-3.5 text-editorial-muted shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* 3-Column Evidence Structure: Challenge -> Solution -> Outcome */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
        {/* The Challenge */}
        <div className="bg-paper border border-studio-border rounded-sm p-5 space-y-3">
          <div className="text-xs font-mono uppercase tracking-widest text-terracotta font-semibold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-terracotta"></span>
            <span>The Challenge</span>
          </div>
          <p className="text-xs text-editorial-muted leading-relaxed font-sans">
            {project.challenge.overview}
          </p>
          <ul className="space-y-1.5 pt-2 border-t border-studio-border">
            {project.challenge.painPoints.slice(0, 2).map((point, idx) => (
              <li key={idx} className="text-[11px] text-editorial leading-snug flex items-start gap-1.5">
                <span className="text-terracotta shrink-0 font-mono">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* The Solution */}
        <div className="bg-paper border border-studio-border rounded-sm p-5 space-y-3">
          <div className="text-xs font-mono uppercase tracking-widest text-editorial font-semibold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-editorial"></span>
            <span>The Solution</span>
          </div>
          <p className="text-xs text-editorial-muted leading-relaxed font-sans">
            {project.solution.overview}
          </p>
          <ul className="space-y-1.5 pt-2 border-t border-studio-border">
            {project.solution.highlights.slice(0, 2).map((item, idx) => (
              <li key={idx} className="text-[11px] text-editorial leading-snug flex items-start gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-terracotta shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* The Outcome */}
        <div className="bg-studio-surface border border-studio-border rounded-sm p-5 space-y-3 flex flex-col justify-between">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-terracotta font-semibold mb-3">
              The Outcome
            </div>
            <div className="space-y-3">
              {project.outcome.metrics.map((impact) => (
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
              View Case Study
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
