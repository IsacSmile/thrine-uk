import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';

export const Process: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Discover",
      riskNote: "We learn how your bakery or tour business actually works."
    },
    {
      number: "02",
      title: "Plan",
      riskNote: "We agree on exactly what will be built and the price."
    },
    {
      number: "03",
      title: "Design",
      riskNote: "You see and approve the design before anything is coded."
    },
    {
      number: "04",
      title: "Build",
      riskNote: "We build your website or booking system."
    },
    {
      number: "05",
      title: "Launch",
      riskNote: "We test everything and go live."
    },
    {
      number: "06",
      title: "Support",
      riskNote: "We stay available for fixes and small updates."
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
