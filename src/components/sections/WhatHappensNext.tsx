import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Calendar, ShieldCheck, CheckCircle2, FileText } from 'lucide-react';
import { Button } from '../ui/Button';

export const WhatHappensNext: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "30-Minute Discovery Call",
      description: "We discuss your existing business workflow, pain points, timeline, and goals without high-pressure sales tactics."
    },
    {
      step: "02",
      title: "Solution & System Architecture",
      description: "We determine whether a conversion website, custom booking platform, online customizer, or portal makes sense."
    },
    {
      step: "03",
      title: "Written Proposal & Scope",
      description: "You receive a clear proposal outlining defined scope, project milestones, estimated timeline, and fixed investment."
    },
    {
      step: "04",
      title: "Discovery & Milestone Build",
      description: "Upon approval, we begin with wireframes and user experience design before any production code is written."
    }
  ];

  return (
    <section className="py-20 bg-paper border-b border-studio-border">
      <Container>
        <SectionHeading
          eyebrow="08 / WORKING MODEL"
          title="What Happens After You Contact Us?"
          subtitle="A transparent, low-pressure process designed so you always know what to expect at every stage of the engagement."
        />

        {/* 4-Step Call to Kickoff Sequence */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16">
          {steps.map((item) => (
            <div
              key={item.step}
              className="bg-studio-surface border border-studio-border rounded-sm p-6 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-2xl font-extrabold text-terracotta block mb-3">{item.step}</span>
                <h3 className="text-base font-bold text-editorial mb-2">{item.title}</h3>
                <p className="text-xs text-editorial-muted leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Low-Pressure Promise Banner */}
        <div className="p-4 bg-terracotta/5 border border-terracotta/20 rounded-sm text-center mb-16">
          <span className="text-xs font-mono text-terracotta font-semibold uppercase tracking-wider">
            Our Low-Pressure Guarantee: No sales pitches. If we are not the right fit for your project, we will tell you directly.
          </span>
        </div>

        {/* 2 Trust Columns: Pricing Philosophy + 100% Code Ownership Guarantee */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Column 1: Pricing Philosophy */}
          <div className="bg-studio-surface border border-studio-border rounded-sm p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-terracotta" />
              <h3 className="text-xl font-bold text-editorial font-sans">Pricing Philosophy</h3>
            </div>
            <p className="text-xs sm:text-sm text-editorial-muted leading-relaxed">
              Every project is scoped individually based on operational complexity, number of custom interfaces, third-party integrations, and timeline requirements.
            </p>
            <div className="space-y-2 pt-2 border-t border-studio-border text-xs text-editorial font-mono">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-terracotta shrink-0" />
                <span>Defined scope before starting</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-terracotta shrink-0" />
                <span>Fixed project investment (no unexpected fees)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-terracotta shrink-0" />
                <span>Clear milestone payment schedule</span>
              </div>
            </div>
          </div>

          {/* Column 2: Product & Code Ownership Guarantee */}
          <div className="bg-studio-surface border border-studio-border rounded-sm p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-terracotta" />
              <h3 className="text-xl font-bold text-editorial font-sans">You Own Your Product 100%</h3>
            </div>
            <p className="text-xs sm:text-sm text-editorial-muted leading-relaxed">
              Your website, source code, design files, content, and business data remain entirely yours. We never lock you into proprietary tools or restrict code transfer.
            </p>
            <div className="space-y-2 pt-2 border-t border-studio-border text-xs text-editorial font-mono">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-terracotta shrink-0" />
                <span>Full GitHub repository transfer</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-terracotta shrink-0" />
                <span>Independent hosting flexibility</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-terracotta shrink-0" />
                <span>Zero vendor lock-in</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Footer */}
        <div className="mt-12 text-center">
          <Button
            href="/contact"
            variant="primary"
            size="lg"
            icon={<Calendar className="w-4 h-4" />}
          >
            Book a 30-Minute Call
          </Button>
        </div>
      </Container>
    </section>
  );
};
