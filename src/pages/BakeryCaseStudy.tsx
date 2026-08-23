import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, Calendar, ExternalLink, SlidersHorizontal } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { BrowserFrame } from '../components/ui/BrowserFrame';
import { ProjectVisualMockup } from '../components/projects/ProjectVisualMockup';
import { HowItWorks } from '../components/sections/HowItWorks';
import { projects } from '../data/projects';

export const BakeryCaseStudy: React.FC = () => {
  const project = projects.find((p) => p.slug === 'bakery') || projects[1];

  return (
    <article className="py-12 bg-paper text-editorial">
      <Container>
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-editorial-muted hover:text-editorial transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-terracotta" />
            <span>Back to All Work</span>
          </Link>
        </div>

        {/* Project Hero Header */}
        <div className="max-w-4xl space-y-6 mb-12">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="brand">{project.category}</Badge>
            <Badge variant="default">{project.industry}</Badge>
            <Badge variant="outline">{project.type}</Badge>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-terracotta/10 border border-terracotta/30 text-terracotta font-mono text-[11px] font-bold rounded-sm hover:bg-terracotta hover:text-paper transition-all ml-auto"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>How The System Works ↓</span>
            </a>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-editorial font-sans leading-tight">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-editorial-muted leading-relaxed">
            {project.summary}
          </p>

          {/* Real Client Metadata Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-studio-surface border border-studio-border rounded-sm text-xs font-mono">
            <div>
              <span className="text-terracotta uppercase tracking-wider block mb-1">Client</span>
              <span className="font-bold text-editorial block">{project.clientName}</span>
            </div>
            <div>
              <span className="text-terracotta uppercase tracking-wider block mb-1">Location</span>
              <span className="font-bold text-editorial block">{project.clientLocation}</span>
            </div>
            <div>
              <span className="text-terracotta uppercase tracking-wider block mb-1">Timeline & Status</span>
              <span className="font-bold text-editorial block">{project.timeline} • {project.status}</span>
            </div>
            <div>
              <span className="text-terracotta uppercase tracking-wider block mb-1">Verification</span>
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-terracotta hover:underline inline-flex items-center gap-1"
                >
                  <span>Visit Live</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              ) : (
                <span className="font-bold text-editorial">Verified Client</span>
              )}
            </div>
          </div>
        </div>

        {/* Hero Visual Screenshot */}
        <div className="mb-16">
          <BrowserFrame url={project.liveUrl || "https://yourbakery.com"} badge="Live Bakery Storefront">
            <ProjectVisualMockup projectType="bakery" variant="hero" />
          </BrowserFrame>
        </div>

        {/* Case Study Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto mb-16">
          {/* Main Narrative */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Section 1: The Business Challenge */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-editorial flex items-center gap-2 font-sans">
                <span className="text-terracotta font-mono">01.</span> The Business Challenge
              </h2>
              <p className="text-editorial-muted leading-relaxed">
                {project.problem.overview}
              </p>
              <div className="p-4 bg-studio-surface border border-studio-border rounded-sm text-xs text-editorial space-y-2">
                <div className="font-bold uppercase font-mono text-terracotta">Core Operational Friction Points:</div>
                <ul className="list-disc pl-4 space-y-1 text-editorial-muted">
                  {project.problem.painPoints.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Section 2: What We Changed */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-editorial flex items-center gap-2 font-sans">
                <span className="text-terracotta font-mono">02.</span> What We Changed & Built
              </h2>
              <p className="text-editorial-muted leading-relaxed">
                {project.whatWeChanged.overview}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.whatWeChanged.highlights.map((h, i) => (
                  <div key={i} className="p-4 bg-studio-surface border border-studio-border rounded-sm flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                    <span className="text-xs text-editorial font-medium">{h}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Business Impact */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-editorial flex items-center gap-2 font-sans">
                <span className="text-terracotta font-mono">03.</span> Business Impact & Measurable Outcomes
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {project.businessImpact.map((item) => (
                  <div key={item.label} className="p-4 bg-studio-surface border border-studio-border rounded-sm space-y-1">
                    <div className="text-2xl font-extrabold text-editorial font-sans">{item.metric}</div>
                    <div className="text-xs font-bold text-terracotta font-mono">{item.label}</div>
                    <p className="text-[11px] text-editorial-muted">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar Summary */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-studio-surface border border-studio-border rounded-sm p-6 space-y-6 sticky top-24">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-terracotta mb-3 font-semibold">Services Delivered</h4>
                <div className="space-y-2">
                  {project.services.map((s) => (
                    <div key={s} className="text-xs text-editorial flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-terracotta shrink-0" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-studio-border pt-4">
                <h4 className="text-xs font-mono uppercase tracking-widest text-terracotta mb-3 font-semibold">Tech Stack</h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((t) => (
                    <Badge key={t} variant="outline" size="sm">{t}</Badge>
                  ))}
                </div>
              </div>

              <div className="border-t border-studio-border pt-6">
                <Button href="/contact" variant="primary" fullWidth icon={<Calendar className="w-4 h-4" />}>
                  Book a Similar System
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Embedded How The System Works Section Pre-selected to Bakery */}
        <div className="border-t border-studio-border pt-12">
          <HowItWorks initialProject="bakery" />
        </div>

        {/* Next Project Footer Link */}
        <div className="mt-20 pt-10 border-t border-studio-border flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono text-terracotta uppercase tracking-widest">Previous Case Study</span>
            <h3 className="text-xl font-bold text-editorial font-sans">01 / Tours & Travel Booking Platform</h3>
          </div>
          <Button href="/work/travel" variant="secondary" icon={<ArrowRight className="w-4 h-4" />}>
            View Travel Case Study
          </Button>
        </div>
      </Container>
    </article>
  );
};
