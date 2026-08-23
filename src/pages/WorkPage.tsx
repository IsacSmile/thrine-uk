import React from 'react';
import { Container } from '../components/ui/Container';
import { SelectedWork } from '../components/sections/SelectedWork';
import { CTA } from '../components/sections/CTA';

export const WorkPage: React.FC = () => {
  return (
    <div className="py-12 bg-paper text-editorial">
      <Container>
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-terracotta bg-studio-surface border border-studio-border px-3 py-1 rounded-sm font-semibold">
            02 / PORTFOLIO SHOWCASE
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-editorial tracking-tight font-sans mt-4 mb-4">
            Selected Client Work
          </h1>
          <p className="text-lg text-editorial-muted leading-relaxed">
            Real software systems engineered for client growth, custom bookings, online food ordering, and digitized operations.
          </p>
        </div>
      </Container>

      <SelectedWork />
      <CTA />
    </div>
  );
};
