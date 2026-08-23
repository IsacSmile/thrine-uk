import React from 'react';
import { Container } from '../components/ui/Container';
import { Services } from '../components/sections/Services';
import { SolutionsGrid } from '../components/sections/SolutionsGrid';
import { Process } from '../components/sections/Process';
import { CTA } from '../components/sections/CTA';

export const ServicesPage: React.FC = () => {
  return (
    <div className="py-12 bg-paper text-editorial">
      <Container>
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-terracotta bg-studio-surface border border-studio-border px-3 py-1 rounded-sm font-semibold">
            03 / CAPABILITIES & ARCHITECTURE
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-editorial tracking-tight font-sans mt-4 mb-4">
            Services & Systems Architecture
          </h1>
          <p className="text-lg text-editorial-muted leading-relaxed">
            I build high-converting business websites and custom internal tools that replace operational friction with automated software.
          </p>
        </div>
      </Container>

      <Services />
      <SolutionsGrid />
      <Process />
      <CTA />
    </div>
  );
};
