import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { solutionsData } from '../../data/solutions';

export const SolutionsGrid: React.FC = () => {
  return (
    <section className="py-20 bg-paper border-b border-studio-border">
      <Container>
        <SectionHeading
          eyebrow="04 / WHO IT’S FOR"
          title="Built for Bakeries & Tour Operators"
          subtitle="Specific systems we build for two types of businesses."
        />

        <div className="space-y-12">
          {solutionsData.map((category) => (
            <div key={category.sector} className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-studio-border pb-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-terracotta font-semibold block mb-1">
                    {category.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-editorial">{category.sector}</h3>
                </div>
                <p className="text-xs sm:text-sm text-editorial-muted max-w-md">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.solutions.map((item) => (
                  <div
                    key={item.title}
                    className="p-5 bg-studio-surface border border-studio-border rounded-sm hover:border-editorial transition-colors"
                  >
                    <div className="text-xs font-mono uppercase tracking-widest text-terracotta mb-2">System Module</div>
                    <h4 className="text-sm font-bold text-editorial mb-1.5">{item.title}</h4>
                    <p className="text-xs text-editorial-muted leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
