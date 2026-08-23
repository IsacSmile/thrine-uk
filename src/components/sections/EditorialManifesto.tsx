import React from 'react';
import { Container } from '../ui/Container';
import { ScrollReveal } from '../ui/ScrollReveal';

export const EditorialManifesto: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-paper border-b border-studio-border font-sans relative overflow-hidden">
      <Container>
        <div className="max-w-4xl space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-terracotta font-semibold">
              OUR CORE PHILOSOPHY
            </span>
            <span className="w-10 h-px bg-terracotta/40"></span>
          </div>

          {/* React Bits ScrollReveal with baseRotation=0 */}
          <ScrollReveal
            baseRotation={0}
            baseOpacity={0.15}
            enableBlur={true}
            blurStrength={4}
            textClassName="text-2xl sm:text-4xl md:text-5xl font-extrabold text-editorial font-sans leading-[1.25] tracking-tight"
          >
            We design and engineer high-converting websites, custom booking platforms, food ordering engines, and operational digital tools for growing service businesses. Zero template bloat, zero compromise.
          </ScrollReveal>

          <div className="pt-2 flex items-center gap-4 text-xs font-mono text-terracotta">
            <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse"></span>
            <span>Scroll to reveal studio philosophy</span>
          </div>
        </div>
      </Container>
    </section>
  );
};
