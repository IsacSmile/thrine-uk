import React from 'react';
import { ArrowRight, Calendar, CheckCircle2 } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { siteConfig } from '../../data/siteConfig';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden bg-paper border-b border-studio-border">
      <Container>
        <div className="flex flex-col items-start max-w-4xl relative z-10">
          
          {/* Eyebrow Tags */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="px-3 py-1 bg-studio-surface border border-studio-border rounded-sm text-xs font-mono font-bold text-editorial uppercase tracking-wider">
              Websites for Bakeries
            </span>
            <span className="text-terracotta font-mono font-bold">•</span>
            <span className="px-3 py-1 bg-studio-surface border border-studio-border rounded-sm text-xs font-mono font-bold text-editorial uppercase tracking-wider">
              Booking Systems for Tours
            </span>
            <span className="text-terracotta font-mono font-bold">•</span>
            <span className="px-3 py-1 bg-studio-surface border border-studio-border rounded-sm text-xs font-mono font-bold text-editorial uppercase tracking-wider">
              Simple Automation
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-editorial font-sans leading-[1.1] mb-6">
            Websites & Systems That Get You More Orders and Bookings
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-xl text-editorial-muted leading-relaxed max-w-3xl font-normal mb-8 font-sans">
            We build high-converting websites and simple systems for bakeries and tour operators — more customers, less admin.
          </p>

          {/* Checks (Vertical Center Aligned & Micro-Sized Check Icon) */}
          <div className="flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-3 mb-10 w-full text-xs sm:text-sm font-mono">
            <div className="inline-flex items-center gap-2 text-editorial font-bold whitespace-nowrap">
              <CheckCircle2 className="w-[14px] h-[14px] sm:w-[15px] sm:h-[15px] text-terracotta shrink-0" />
              <span className="leading-none">Online Ordering & Booking</span>
            </div>
            <div className="inline-flex items-center gap-2 text-editorial font-bold whitespace-nowrap">
              <CheckCircle2 className="w-[14px] h-[14px] sm:w-[15px] sm:h-[15px] text-terracotta shrink-0" />
              <span className="leading-none">High-Converting Design</span>
            </div>
            <div className="inline-flex items-center gap-2 text-editorial font-bold whitespace-nowrap">
              <CheckCircle2 className="w-[14px] h-[14px] sm:w-[15px] sm:h-[15px] text-terracotta shrink-0" />
              <span className="leading-none">100% Code Ownership</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
            <a
              href={siteConfig.zcalUrl}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 bg-terracotta hover:bg-terracotta-hover text-paper rounded-full font-mono text-xs uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-2 shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Free Call</span>
            </a>
            
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
