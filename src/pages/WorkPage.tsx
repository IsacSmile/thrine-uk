import React from 'react';
import { Container } from '../components/ui/Container';
import { SelectedWork } from '../components/sections/SelectedWork';
import { CTA } from '../components/sections/CTA';
import { Sparkles, Layers, ShieldCheck, Zap } from 'lucide-react';

export const WorkPage: React.FC = () => {
  return (
    <div className="pt-28 sm:pt-36 bg-paper text-editorial min-h-screen">
      <Container>
        {/* Unified Hero Header */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-studio-surface border border-studio-border text-terracotta text-xs font-mono font-bold tracking-widest uppercase mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>02 / PORTFOLIO SHOWCASE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-editorial tracking-tight font-sans mb-6 leading-[1.1]">
            Selected Client Work & Case Studies
          </h1>

          <p className="text-base sm:text-xl text-editorial-muted leading-relaxed font-sans max-w-3xl mb-8">
            Explore real business software systems engineered for client growth, custom bookings, digitized workflows, and high-conversion ordering platforms.
          </p>

          {/* Quick Capability Highlights Strip */}
          <div className="flex flex-wrap items-center gap-3 pt-2 font-mono text-xs text-editorial-muted">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-paper border border-studio-border/80 shadow-sm">
              <Zap className="w-3.5 h-3.5 text-terracotta" />
              <span>Neon DB & Live Walkthroughs</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-paper border border-studio-border/80 shadow-sm">
              <Layers className="w-3.5 h-3.5 text-terracotta" />
              <span>Full Dual-Role Demos</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-paper border border-studio-border/80 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>100% Production Ready</span>
            </div>
          </div>
        </div>
      </Container>

      {/* Case Studies Grid (Heading hidden to prevent duplicate text) */}
      <SelectedWork showHeading={false} className="pb-20" />

      {/* CTA Section */}
      <CTA />
    </div>
  );
};
