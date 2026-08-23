import React from 'react';
import { Container } from '../components/ui/Container';
import { SelectedWork } from '../components/sections/SelectedWork';
import { CTA } from '../components/sections/CTA';
import { Sparkles, Layers, ShieldCheck, Zap } from 'lucide-react';

export const WorkPage: React.FC = () => {
  return (
    <div className="pt-8 sm:pt-10 bg-paper text-editorial min-h-screen">
      <Container>
        {/* Unified Hero Header */}
        <div className="max-w-4xl mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-studio-surface border border-studio-border text-terracotta text-xs font-mono font-bold tracking-widest uppercase mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>02 / PORTFOLIO SHOWCASE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-editorial tracking-tight font-sans mb-3 leading-[1.1]">
            Selected Client Work & Case Studies
          </h1>

          <p className="text-sm sm:text-base text-editorial-muted leading-relaxed font-sans max-w-3xl mb-4">
            Explore real business software systems engineered for client growth, custom bookings, digitized workflows, and high-conversion ordering platforms.
          </p>

          {/* Quick Capability Highlights Strip */}
          <div className="flex flex-wrap items-center gap-2.5 pt-1 font-mono text-xs text-editorial-muted">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-paper border border-studio-border/80 shadow-sm">
              <Zap className="w-3.5 h-3.5 text-terracotta" />
              <span>Neon DB & Live Walkthroughs</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-paper border border-studio-border/80 shadow-sm">
              <Layers className="w-3.5 h-3.5 text-terracotta" />
              <span>Full Dual-Role Demos</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-paper border border-studio-border/80 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>100% Production Ready</span>
            </div>
          </div>
        </div>
      </Container>

      {/* Case Studies Grid */}
      <SelectedWork showHeading={false} className="pb-16" />

      {/* CTA Section */}
      <CTA />
    </div>
  );
};
