import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { CheckCircle2 } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Discover",
      riskNote: "Operational audit and bottleneck identification before proposing software.",
      details: ["Workflow Audit", "Requirement Scope", "System Goals"]
    },
    {
      number: "02",
      title: "Plan",
      riskNote: "Clear technical architecture, milestone roadmap, and fixed proposal.",
      details: ["System Wireframes", "Tech Architecture", "Fixed Proposal"]
    },
    {
      number: "03",
      title: "Design",
      riskNote: "Complete UI design & interactive prototypes approved before writing code.",
      details: ["UI Mockups", "Responsive Layouts", "Client Approval"]
    },
    {
      number: "04",
      title: "Build",
      riskNote: "Milestone-based engineering with regular staging reviews.",
      details: ["React / TS Build", "API Integration", "Staging Demos"]
    },
    {
      number: "05",
      title: "Launch",
      riskNote: "Comprehensive QA testing, live server deployment, and full code handover.",
      details: ["QA & Performance", "Live Deployment", "Code Transfer"]
    },
    {
      number: "06",
      title: "Support",
      riskNote: "Ongoing technical maintenance, security updates, and feature updates.",
      details: ["System Monitoring", "Security Updates", "Ongoing Maintenance"]
    }
  ];

  return (
    <section id="process" className="py-20 bg-paper border-b border-studio-border font-sans">
      <Container>
        <SectionHeading
          eyebrow="05 / HOW WE WORK"
          title="Our Agency Process"
          subtitle="A structured 6-step engineering workflow designed to reduce risk and deliver reliable business software on time."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="bg-studio-surface border border-studio-border rounded-sm p-4 flex flex-col justify-between hover:border-editorial transition-colors space-y-4"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-extrabold font-mono text-terracotta">{step.number}</span>
                  <span className="text-[10px] font-mono text-editorial-muted uppercase tracking-wider">Step 0{index + 1}</span>
                </div>

                <h3 className="text-base font-bold text-editorial font-sans mb-1.5">{step.title}</h3>
                
                <p className="text-xs text-editorial-muted leading-relaxed font-sans p-2 bg-paper border border-studio-border/60 rounded-sm mb-3">
                  {step.riskNote}
                </p>
              </div>

              <div className="space-y-1 pt-2 border-t border-studio-border/60">
                {step.details.map((detail) => (
                  <div key={detail} className="text-[11px] text-editorial font-mono flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-terracotta shrink-0" />
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
