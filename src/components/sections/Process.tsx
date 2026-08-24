import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';

export const Process: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Discover",
      riskNote: "We take the time to properly understand how your bakery or tour business runs."
    },
    {
      number: "02",
      title: "Plan",
      riskNote: "You get a clear scope, fixed price, and timeline — no surprises later."
    },
    {
      number: "03",
      title: "Design",
      riskNote: "You review and approve the full design before any development begins."
    },
    {
      number: "04",
      title: "Build",
      riskNote: "We carefully build your website or booking system to a high standard."
    },
    {
      number: "05",
      title: "Launch",
      riskNote: "Everything is thoroughly tested and launched smoothly."
    },
    {
      number: "06",
      title: "Support",
      riskNote: "Ongoing support is available whenever you need small changes or fixes."
    }
  ];

  return (
    <section id="process" className="py-20 sm:py-24 bg-paper border-b border-studio-border font-sans">
      <Container>
        <SectionHeading
          eyebrow="05 / HOW IT WORKS"
          title="How We Work With You"
          subtitle="A simple 6-step process from first call to launch and support."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-studio-surface border border-studio-border rounded-lg p-6 sm:p-7 flex flex-col justify-between hover:border-terracotta/40 hover:shadow-lg transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-2xl sm:text-3xl font-extrabold font-mono text-terracotta tracking-tight group-hover:scale-105 transition-transform">
                    {step.number}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-studio-border group-hover:bg-terracotta transition-colors" />
                </div>

                <h3 className="text-lg font-bold text-editorial font-sans mb-3 tracking-tight">
                  {step.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-editorial-muted leading-relaxed font-sans font-normal">
                  {step.riskNote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
