import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { BrowserFrame } from '../ui/BrowserFrame';
import { HowItWorksMockup } from './HowItWorksMockup';
import { WorkflowStep } from '../../data/howItWorksData';
import { useHowItWorksStore } from '../../utils/howItWorksStore';

interface HowItWorksProps {
  initialProject?: 'bakery' | 'travel';
  className?: string;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({
  initialProject = 'bakery',
  className = ''
}) => {
  const { data: howItWorksStoreData } = useHowItWorksStore();
  const [selectedProject, setSelectedProject] = useState<'bakery' | 'travel'>(initialProject);
  const [activeSide, setActiveSide] = useState<'customer' | 'admin'>('customer');
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const currentProjectData = howItWorksStoreData[selectedProject];
  const currentFlow = activeSide === 'customer'
    ? currentProjectData.customerFlow
    : currentProjectData.adminFlow;

  const steps = currentFlow.steps;
  const safeActiveStepIndex = Math.min(activeStepIndex, steps.length - 1);
  const activeStep: WorkflowStep = steps[safeActiveStepIndex] || steps[0];

  const handleProjectToggle = (project: 'bakery' | 'travel') => {
    setSelectedProject(project);
    setActiveStepIndex(0);
  };

  const handleSideToggle = (side: 'customer' | 'admin') => {
    setActiveSide(side);
    setActiveStepIndex(0);
  };

  const handleNextStep = () => {
    if (safeActiveStepIndex < steps.length - 1) {
      setActiveStepIndex(safeActiveStepIndex + 1);
    }
  };

  const handlePrevStep = () => {
    if (safeActiveStepIndex > 0) {
      setActiveStepIndex(safeActiveStepIndex - 1);
    }
  };

  return (
    <section id="how-it-works" className={`py-20 bg-paper border-b border-studio-border scroll-mt-20 ${className}`}>
      <Container>
        {/* Section Header */}
        <SectionHeading
          eyebrow="04 / HOW IT WORKS"
          title="How The System Works"
          subtitle="From the customer's first interaction to the business team's final action, every workflow is designed around how the business actually operates."
          align="center"
        />

        {/* Dual Selector Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 mb-8 sm:mb-12 max-w-4xl mx-auto">
          
          {/* Selector 1: Project Picker */}
          <div className="bg-studio-surface border border-studio-border p-1 rounded-sm flex items-center w-full sm:w-auto text-[11px] sm:text-xs font-mono">
            <button
              type="button"
              onClick={() => handleProjectToggle('bakery')}
              className={`px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-sm transition-all text-center flex-1 whitespace-nowrap ${
                selectedProject === 'bakery'
                  ? 'bg-dark text-paper font-bold'
                  : 'text-editorial-muted hover:text-editorial'
              }`}
            >
              My Homely Cakes (Bakery)
            </button>
            <button
              type="button"
              onClick={() => handleProjectToggle('travel')}
              className={`px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-sm transition-all text-center flex-1 whitespace-nowrap ${
                selectedProject === 'travel'
                  ? 'bg-dark text-paper font-bold'
                  : 'text-editorial-muted hover:text-editorial'
              }`}
            >
              Travel & Hault (Tours)
            </button>
          </div>

          {/* Selector 2: Dual Role Side Picker */}
          <div className="bg-studio-surface border border-studio-border p-1 rounded-sm flex items-center w-full sm:w-auto text-[11px] sm:text-xs font-mono">
            <button
              type="button"
              onClick={() => handleSideToggle('customer')}
              className={`px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-sm transition-all text-center flex-1 whitespace-nowrap ${
                activeSide === 'customer'
                  ? 'bg-terracotta text-paper font-bold'
                  : 'text-editorial-muted hover:text-editorial'
              }`}
            >
              Customer Experience
            </button>
            <button
              type="button"
              onClick={() => handleSideToggle('admin')}
              className={`px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-sm transition-all text-center flex-1 whitespace-nowrap ${
                activeSide === 'admin'
                  ? 'bg-terracotta text-paper font-bold'
                  : 'text-editorial-muted hover:text-editorial'
              }`}
            >
              Business / Admin Panel
            </button>
          </div>

        </div>

        {/* Current Flow Subheading */}
        <div className="text-center mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-terracotta bg-studio-surface border border-studio-border px-3 py-1 rounded-sm font-semibold">
            {activeSide === 'customer' ? 'USER SIDE' : 'ADMIN SIDE'} • {currentFlow.heading}
          </span>
        </div>

        {/* ======================================================== */}
        {/* DESKTOP LAYOUT (Horizontal Step Bar + 35%/65% Split Grid) */}
        {/* ======================================================== */}
        <div className="hidden lg:block space-y-8">
          
          {/* Horizontal Step Navigator Bar */}
          <div className="bg-studio-surface border border-studio-border rounded-sm p-2 flex items-center justify-between font-mono text-xs overflow-x-auto">
            {steps.map((step, idx) => {
              const isActive = idx === safeActiveStepIndex;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveStepIndex(idx)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-sm transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-dark text-paper font-bold'
                      : 'text-editorial-muted hover:text-editorial hover:bg-paper/50'
                  }`}
                >
                  <span className={isActive ? 'text-terracotta font-extrabold' : 'text-editorial-muted'}>
                    {step.stepNumber}
                  </span>
                  <span>{step.shortLabel}</span>
                  {idx < steps.length - 1 && (
                    <span className="text-editorial-muted/30 ml-1">→</span>
                  )}
                </button>
              );
            })}
          </div>

          {/* 35% Left / 65% Right Content Grid */}
          <div className="grid grid-cols-12 gap-8 items-stretch">
            
            {/* Left 35% Column: Step Explanation & Metadata */}
            <div className="col-span-4 bg-studio-surface border border-studio-border rounded-sm p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-studio-border pb-4 font-mono text-xs">
                  <span className="text-2xl font-extrabold text-terracotta font-mono">
                    {activeStep.stepNumber}
                  </span>
                  <Badge variant={activeStep.statusTag === 'Live' ? 'brand' : 'outline'}>
                    {activeStep.statusTag}
                  </Badge>
                </div>

                <h3 className="text-2xl font-extrabold text-editorial font-sans tracking-tight">
                  {activeStep.title}
                </h3>

                <p className="text-xs text-editorial-muted leading-relaxed font-normal">
                  {activeStep.description}
                </p>

                {/* Key Metadata points */}
                {activeStep.metadata && activeStep.metadata.length > 0 && (
                  <div className="space-y-2 pt-4 border-t border-studio-border font-mono text-xs">
                    {activeStep.metadata.map((item) => (
                      <div key={item.label} className="p-2.5 bg-paper border border-studio-border rounded-sm flex items-center justify-between">
                        <span className="text-[10px] text-editorial-muted uppercase">{item.label}:</span>
                        <span className="font-bold text-editorial text-[11px]">{item.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Step Navigation Controls */}
              <div className="pt-6 border-t border-studio-border flex items-center justify-between text-xs font-mono">
                <button
                  type="button"
                  disabled={safeActiveStepIndex === 0}
                  onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                  className="px-3 py-1.5 bg-paper border border-studio-border rounded-sm text-editorial hover:border-editorial disabled:opacity-40 disabled:hover:border-studio-border"
                >
                  ← Previous
                </button>

                <span className="text-editorial-muted">
                  Step {safeActiveStepIndex + 1} of {steps.length}
                </span>

                <button
                  type="button"
                  disabled={safeActiveStepIndex === steps.length - 1}
                  onClick={() => setActiveStepIndex((prev) => Math.min(steps.length - 1, prev + 1))}
                  className="px-3 py-1.5 bg-paper border border-studio-border rounded-sm text-editorial hover:border-editorial disabled:opacity-40 disabled:hover:border-studio-border"
                >
                  Next →
                </button>
              </div>
            </div>

            {/* Right 65% Column: Interactive High-Fidelity UI Preview */}
            <div className="col-span-8">
              <BrowserFrame
                url={
                  activeSide === 'customer'
                    ? `https://${selectedProject === 'bakery' ? 'yourbakery.com' : 'yourtravel.com'}`
                    : `https://admin.${selectedProject === 'bakery' ? 'yourbakery.com' : 'yourtravel.com'}`
                }
                badge={`${selectedProject === 'bakery' ? 'Bakery' : 'Travel'} • ${activeSide === 'customer' ? 'Customer View' : 'Admin Panel'}`}
              >
                <HowItWorksMockup mockupId={activeStep.mockupId} />
              </BrowserFrame>
            </div>

          </div>
        </div>

        {/* ======================================================== */}
        {/* MOBILE LAYOUT (Interactive Step Ribbon + Active Viewport) */}
        {/* ======================================================== */}
        <div className="lg:hidden space-y-6">
          {/* Mobile Horizontal Step Selector Ribbon */}
          <div className="bg-studio-surface border border-studio-border rounded-sm p-1.5 flex items-center gap-1.5 font-mono text-[11px] overflow-x-auto no-scrollbar">
            {steps.map((step, idx) => {
              const isActive = idx === safeActiveStepIndex;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveStepIndex(idx)}
                  className={`flex items-center gap-1 px-2.5 py-1.5 rounded-sm transition-all whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-dark text-paper font-bold'
                      : 'text-editorial-muted hover:text-editorial bg-paper/60 border border-studio-border'
                  }`}
                >
                  <span className={isActive ? 'text-terracotta font-extrabold' : 'text-editorial-muted'}>
                    {step.stepNumber}
                  </span>
                  <span>{step.shortLabel}</span>
                </button>
              );
            })}
          </div>

          {/* Active Step Card */}
          <div className="bg-studio-surface border border-studio-border rounded-sm p-4 sm:p-5 space-y-4">
            <div className="flex items-center justify-between border-b border-studio-border pb-2.5 font-mono text-xs">
              <span className="text-base font-extrabold text-terracotta">
                Step {activeStep.stepNumber} / {activeStep.shortLabel}
              </span>
              <Badge variant={activeStep.statusTag === 'Live' ? 'brand' : 'outline'} size="sm">
                {activeStep.statusTag}
              </Badge>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold text-editorial font-sans">{activeStep.title}</h3>
              <p className="text-xs text-editorial-muted leading-relaxed mt-1">{activeStep.description}</p>
            </div>

            {/* Step Metadata Pills */}
            {activeStep.metadata && activeStep.metadata.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-1 font-mono text-[10px]">
                {activeStep.metadata.map((m, idx) => (
                  <span key={idx} className="bg-paper border border-studio-border px-2 py-0.5 rounded-sm text-editorial">
                    <strong className="text-terracotta">{m.label}:</strong> {m.value}
                  </span>
                ))}
              </div>
            )}

            {/* Screenshot Preview */}
            <div className="pt-2">
              <BrowserFrame
                url={
                  activeSide === 'customer'
                    ? `https://${selectedProject === 'bakery' ? 'yourbakery.com' : 'yourtravel.com'}`
                    : `https://admin.${selectedProject === 'bakery' ? 'yourbakery.com' : 'yourtravel.com'}`
                }
                badge={activeStep.shortLabel}
              >
                <HowItWorksMockup mockupId={activeStep.mockupId} />
              </BrowserFrame>
            </div>

            {/* Mobile Step Prev/Next Navigation Controls */}
            <div className="flex items-center justify-between pt-2 border-t border-studio-border font-mono text-xs">
              <button
                type="button"
                onClick={() => handlePrevStep()}
                disabled={safeActiveStepIndex === 0}
                className="px-3 py-1.5 bg-paper border border-studio-border rounded-sm text-editorial hover:border-editorial disabled:opacity-40 disabled:hover:border-studio-border flex items-center gap-1 font-bold"
              >
                <span>← Prev</span>
              </button>

              <span className="text-[11px] text-editorial-muted font-bold">
                {safeActiveStepIndex + 1} of {steps.length}
              </span>

              <button
                type="button"
                onClick={() => handleNextStep()}
                disabled={safeActiveStepIndex === steps.length - 1}
                className="px-3 py-1.5 bg-paper border border-studio-border rounded-sm text-editorial hover:border-editorial disabled:opacity-40 disabled:hover:border-studio-border flex items-center gap-1 font-bold"
              >
                <span>Next →</span>
              </button>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* FINAL BUSINESS OUTCOME BANNER                            */}
        {/* ======================================================== */}
        <div className="mt-16 bg-studio-surface border border-studio-border rounded-sm p-6 sm:p-10 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-terracotta font-semibold">
              SYSTEM ARCHITECTURE OUTCOME
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-editorial font-sans">
              One system. Two experiences.
            </h3>
            <p className="text-xs sm:text-sm text-editorial-muted leading-relaxed">
              Customer-facing experiences make it easy for people to buy, inquire, and book. Behind the scenes, the business gets the tools needed to manage products, bookings, customers, and daily operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-studio-border font-mono text-xs">
            {/* Customer Column */}
            <div className="p-4 bg-paper border border-studio-border rounded-sm space-y-3">
              <div className="font-bold text-editorial uppercase text-terracotta border-b border-studio-border pb-2">
                CUSTOMER EXPERIENCE
              </div>
              <div className="flex flex-wrap gap-2 text-[11px]">
                <span className="px-2.5 py-1 bg-studio-surface border border-studio-border rounded-sm">Discover</span>
                <span className="px-2.5 py-1 bg-studio-surface border border-studio-border rounded-sm">Choose</span>
                <span className="px-2.5 py-1 bg-studio-surface border border-studio-border rounded-sm">Configure</span>
                <span className="px-2.5 py-1 bg-studio-surface border border-studio-border rounded-sm">Book</span>
                <span className="px-2.5 py-1 bg-studio-surface border border-studio-border rounded-sm">Track</span>
              </div>
            </div>

            {/* Business Admin Column */}
            <div className="p-4 bg-paper border border-studio-border rounded-sm space-y-3">
              <div className="font-bold text-editorial uppercase text-editorial border-b border-studio-border pb-2">
                BUSINESS / ADMIN PANEL
              </div>
              <div className="flex flex-wrap gap-2 text-[11px]">
                <span className="px-2.5 py-1 bg-studio-surface border border-studio-border rounded-sm">Create</span>
                <span className="px-2.5 py-1 bg-studio-surface border border-studio-border rounded-sm">Manage</span>
                <span className="px-2.5 py-1 bg-studio-surface border border-studio-border rounded-sm">Confirm</span>
                <span className="px-2.5 py-1 bg-studio-surface border border-studio-border rounded-sm">Update</span>
                <span className="px-2.5 py-1 bg-studio-surface border border-studio-border rounded-sm">Complete</span>
              </div>
            </div>
          </div>

          <div className="text-center pt-2 font-mono text-xs text-editorial-muted">
            Designed around the workflow behind the website — not just the website itself.
          </div>
        </div>

      </Container>
    </section>
  );
};
