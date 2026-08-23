import React from 'react';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { siteConfig } from '../../data/siteConfig';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden bg-paper border-b border-studio-border">
      <Container>
        <div className="flex flex-col items-start max-w-4xl relative z-10">
          
          {/* Eyebrow Label & Studio Location */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-terracotta font-semibold">
              THRINE STUDIO
            </span>
            <span className="text-studio-border">•</span>
            <span className="inline-flex items-center gap-1 text-xs font-mono text-editorial-muted">
              <MapPin className="w-3.5 h-3.5 text-terracotta" />
              <span>{siteConfig.location}</span>
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-editorial font-sans leading-[1.1] mb-6">
            Websites & Business Systems Built For Growth.
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-xl text-editorial-muted leading-relaxed max-w-2xl font-normal mb-10">
            We design and engineer websites, booking platforms, ordering systems and internal tools for businesses that have outgrown off-the-shelf software.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
            <Button
              href="#work"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              View Selected Work
            </Button>
            
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              icon={<Calendar className="w-4 h-4" />}
            >
              Book a Call
            </Button>
          </div>

          {/* Subtle Trust Statement */}
          <div className="pt-6 border-t border-studio-border/80 w-full text-xs font-mono text-editorial-muted uppercase tracking-wider">
            Custom-built <span className="text-terracotta font-bold mx-1.5 font-sans">·</span> Business-focused <span className="text-terracotta font-bold mx-1.5 font-sans">·</span> Production-ready
          </div>
        </div>
      </Container>
    </section>
  );
};
