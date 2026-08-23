import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';

export const Process: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Discover",
      riskNote: "We understand your existing workflow and business challenges before proposing anything.",
      details: ["Operational Audit", "Requirement Scope", "System Goals"]
    },
    {
      number: "02",
      title: "Plan",
      riskNote: "You receive a clear scope, estimated timeline, milestone breakdown, and fixed price.",
      details: ["Wireframes & Flow", "Tech Architecture", "Fixed Proposal"]
    },
    {
      number: "03",
      title: "Design",
      riskNote: "You see and approve the entire user experience and visual layout before development begins.",
      details: ["UI Mockups", "Responsive Layouts", "Client Approval"]
    },
    {
      number: "04",
      title: "Build",
      riskNote: "We develop in milestones and share staging progress throughout so you retain full control.",
      details: ["Production React/TS", "API Integration", "Staging Reviews"]
    },
    {
      number: "05",
      title: "Launch",
      riskNote: "We perform full QA testing, deploy to live servers, and assist your team through handover.",
      details: ["QA & Performance", "Live Deployment", "Code Transfer"]
    }
  ];

  return (
    <section id="process" className="py-20 bg-paper border-b border-studio-border">
      <Container>
        <SectionHeading
          eyebrow="05 / METHODOLOGY & RISK CONTROL"
          title="How We Work — Step-by-Step Risk Reduction"
          subtitle="A structured engineering workflow designed so you never lose control or visibility after hiring us."
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="bg-studio-surface border border-studio-border rounded-sm p-5 flex flex-col justify-between hover:border-editorial transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xl font-extrabold font-mono text-terracotta">{step.number}</span>
                  <span className="text-[10px] font-mono text-editorial-muted uppercase tracking-widest">Phase 0{index + 1}</span>
                </div>

                <h3 className="text-base font-bold text-editorial mb-2">{step.title}</h3>
                
                {/* Risk Reduction Note */}
                <p className="text-xs text-editorial-muted leading-relaxed mb-4 p-2.5 bg-paper border border-studio-border rounded-sm">
                  {step.riskNote}
                </p>
              </div>

              <div className="space-y-1 pt-3 border-t border-studio-border">
                {step.details.map((detail) => (
                  <div key={detail} className="text-[11px] text-editorial font-mono flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-terracotta shrink-0"></span>
                    <span>{detail}</span>
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
