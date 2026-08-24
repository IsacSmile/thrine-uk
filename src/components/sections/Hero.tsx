import React from 'react';
import { ArrowRight, Calendar, CheckCircle2 } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden bg-paper border-b border-studio-border">
      <Container>
        <div className="flex flex-col items-start max-w-4xl relative z-10">
          
          {/* Eyebrow / Agency Focus Pillars */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="px-2.5 py-1 bg-studio-surface border border-studio-border rounded-sm text-[11px] font-mono font-bold text-editorial uppercase tracking-wider">
              Custom Websites
            </span>
            <span className="text-terracotta font-mono font-bold">•</span>
            <span className="px-2.5 py-1 bg-studio-surface border border-studio-border rounded-sm text-[11px] font-mono font-bold text-editorial uppercase tracking-wider">
              Custom Web Systems
            </span>
            <span className="text-terracotta font-mono font-bold">•</span>
            <span className="px-2.5 py-1 bg-studio-surface border border-studio-border rounded-sm text-[11px] font-mono font-bold text-editorial uppercase tracking-wider">
              AI & Automation
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-editorial font-sans leading-[1.1] mb-6">
            Digital Engineering Studio Building Systems Behind Businesses.
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-xl text-editorial-muted leading-relaxed max-w-3xl font-normal mb-8">
            We design, build, and operate high-converting business websites, custom web applications, and automated operational workflows for companies ready to modernize their digital infrastructure.
          </p>

          {/* Business Outcome Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10 w-full max-w-3xl text-xs font-mono">
            <div className="flex items-center gap-2 text-editorial font-semibold">
              <CheckCircle2 className="w-4 h-4 text-terracotta shrink-0" />
              <span>High-Conversion Design</span>
            </div>
            <div className="flex items-center gap-2 text-editorial font-semibold">
              <CheckCircle2 className="w-4 h-4 text-terracotta shrink-0" />
              <span>Streamlined Operations</span>
            </div>
            <div className="flex items-center gap-2 text-editorial font-semibold">
              <CheckCircle2 className="w-4 h-4 text-terracotta shrink-0" />
              <span>100% Code Ownership</span>
            </div>
          </div>

          {/* Primary & Secondary CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Calendar className="w-4 h-4" />}
            >
              Book a Free Consultation
            </Button>
            
            <Button
              href="#work"
              variant="secondary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              View Our Work
            </Button>
          </div>

          {/* Studio Guarantee Badge */}
          <div className="pt-6 border-t border-studio-border/80 w-full text-xs font-mono text-editorial-muted uppercase tracking-wider flex items-center justify-between flex-wrap gap-2">
            <span>Custom-Built Software · Zero Platform Lock-in</span>
            <span className="text-editorial font-bold">Production-Ready Digital Systems</span>
          </div>
        </div>
      </Container>
    </section>
  );
};
