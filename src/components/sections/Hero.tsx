import React from 'react';
import { ArrowRight, Calendar, MapPin, ShieldCheck, CheckCircle2, SlidersHorizontal } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { BrowserFrame } from '../ui/BrowserFrame';
import { ProjectVisualMockup } from '../projects/ProjectVisualMockup';
import { siteConfig } from '../../data/siteConfig';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-24 overflow-hidden bg-paper border-b border-studio-border">
      <Container>
        <div className="flex flex-col items-start max-w-4xl relative z-10">
          
          {/* Eyebrow Label & Studio Location */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-terracotta font-semibold">
              THRINE / STUDIO
            </span>
            <span className="text-studio-border">•</span>
            <span className="inline-flex items-center gap-1 text-xs font-mono text-editorial-muted">
              <MapPin className="w-3.5 h-3.5 text-terracotta" />
              <span>{siteConfig.location}</span>
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-editorial font-sans leading-[1.1] mb-4 sm:mb-6">
            Websites & Business Systems Built For Growth.
          </h1>

          {/* Short Positioning Paragraph */}
          <p className="text-sm sm:text-xl text-editorial-muted leading-relaxed max-w-2xl font-normal mb-8 sm:mb-10">
            We design and engineer high-converting websites, custom booking platforms, food ordering engines, and operational digital tools for growing service businesses.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-12">
            <Button
              href="/work"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              View Selected Work
            </Button>
            
            <a
              href="#how-it-works"
              className="px-5 py-3 bg-studio-surface border border-studio-border hover:border-terracotta text-editorial text-xs font-mono font-bold rounded-sm transition-all flex items-center justify-center gap-2 group shadow-sm"
            >
              <SlidersHorizontal className="w-4 h-4 text-terracotta group-hover:rotate-45 transition-transform" />
              <span>How The System Works ↓</span>
            </a>

            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              icon={<Calendar className="w-4 h-4" />}
            >
              Book a Call
            </Button>
          </div>

          {/* Key Value Micro Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-editorial-muted font-mono uppercase tracking-wider border-t border-studio-border pt-8 w-full">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-terracotta shrink-0" />
              <span>Custom-built • 100% Owned</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-terracotta shrink-0" />
              <span>Business Outcome Focused</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-terracotta shrink-0" />
              <span>Production-Ready Architecture</span>
            </div>
          </div>
        </div>

        {/* Hero Visual Showcase */}
        <div className="mt-14 max-w-6xl">
          <BrowserFrame
            url="https://travelhault.com"
            badge="Featured Live Project • Travel Platform"
          >
            <ProjectVisualMockup projectType="travel" variant="hero" />
          </BrowserFrame>
        </div>
      </Container>
    </section>
  );
};
