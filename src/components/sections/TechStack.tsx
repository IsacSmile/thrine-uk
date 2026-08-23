import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { techStackData } from '../../data/techStack';

export const TechStack: React.FC = () => {
  return (
    <section className="py-16 bg-paper border-b border-studio-border">
      <Container size="md">
        <SectionHeading
          eyebrow="06 / TECH STACK"
          title="Battle-Tested Infrastructure"
          subtitle="A disciplined, secondary tech stack chosen for performance, type safety, and maintainability."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techStackData.map((cat) => (
            <div key={cat.category} className="space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-terracotta border-b border-studio-border pb-2 font-semibold">
                {cat.category}
              </h4>
              <div className="space-y-2.5">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="p-3 rounded-sm bg-studio-surface border border-studio-border flex items-center justify-between text-xs"
                  >
                    <div>
                      <div className="font-bold text-editorial">{item.name}</div>
                      <div className="text-[11px] text-editorial-muted">{item.description}</div>
                    </div>
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
