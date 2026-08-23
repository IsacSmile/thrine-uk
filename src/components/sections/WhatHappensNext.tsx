import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Calendar, ShieldCheck, CheckCircle2, FileCheck } from 'lucide-react';
import { Button } from '../ui/Button';

export const WhatHappensNext: React.FC = () => {
  const processSteps = [
    {
      step: "01",
      title: "Discovery Call",
      description: "We understand your business, current workflow and goals."
    },
    {
      step: "02",
      title: "Solution",
      description: "We determine whether you need a website, custom system or combination."
    },
    {
      step: "03",
      title: "Proposal",
      description: "You receive a clear scope, timeline and project investment."
    },
    {
      step: "04",
      title: "Build",
      description: "Design and development happen in clear milestones with regular review."
    },
    {
      step: "05",
      title: "Launch",
      description: "We test, deploy and hand over the finished system."
    }
  ];

  const scopeDeliverables = [
    "Defined scope",
    "Project milestones",
    "Timeline",
    "Design direction",
    "Production development",
    "Testing",
    "Deployment",
    "Handover"
  ];

  return (
    <section id="process" className="py-20 bg-paper border-b border-studio-border">
      <Container>
        <SectionHeading
          eyebrow="07 / PROCESS"
          title="What happens next?"
          subtitle="A clear 5-step process designed to give you total visibility and confidence from initial conversation to system launch."
        />

        {/* 5-Step Milestone Process */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {processSteps.map((item) => (
            <div
              key={item.step}
              className="bg-studio-surface border border-studio-border rounded-sm p-5 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xl font-extrabold text-terracotta block mb-2">{item.step}</span>
                <h3 className="text-base font-bold text-editorial font-sans mb-1.5">{item.title}</h3>
                <p className="text-xs text-editorial-muted leading-relaxed font-sans">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Reassuring Line */}
        <div className="p-4 bg-studio-surface border border-studio-border rounded-sm text-center mb-16">
          <p className="text-xs font-mono text-editorial-muted">
            No pressure. If we're not the right fit, we'll tell you.
          </p>
        </div>

        {/* 2 Trust Panels: What You Receive + Your Business Stays Yours */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Panel 1: What You Receive */}
          <div className="bg-studio-surface border border-studio-border rounded-sm p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-terracotta" />
              <h3 className="text-xl font-bold text-editorial font-sans">What you receive</h3>
            </div>
            <p className="text-xs text-editorial-muted leading-relaxed font-sans">
              Every engagement includes structured project management and complete technical handovers:
            </p>
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-studio-border text-xs text-editorial font-mono">
              {scopeDeliverables.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-terracotta shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Panel 2: Your Business Stays Yours */}
          <div className="bg-studio-surface border border-studio-border rounded-sm p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-terracotta" />
              <h3 className="text-xl font-bold text-editorial font-sans">Your business stays yours.</h3>
            </div>
            <p className="text-xs text-editorial-muted leading-relaxed font-sans">
              Your website, content and business data remain yours. You are not locked into a proprietary platform simply to keep using the system.
            </p>
            <div className="space-y-2 pt-2 border-t border-studio-border text-xs text-editorial font-mono">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-terracotta shrink-0" />
                <span>100% full source code ownership</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-terracotta shrink-0" />
                <span>Independent hosting & database deployment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-terracotta shrink-0" />
                <span>Zero recurring platform lock-in fees</span>
              </div>
            </div>
          </div>

        </div>

        {/* Call CTA */}
        <div className="mt-12 text-center">
          <Button
            href="/contact"
            variant="primary"
            size="lg"
            icon={<Calendar className="w-4 h-4" />}
          >
            Book a 30-Minute Discovery Call
          </Button>
        </div>
      </Container>
    </section>
  );
};
