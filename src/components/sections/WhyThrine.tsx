import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { ShieldCheck, Code, Target, Cpu, TrendingUp, Headphones } from 'lucide-react';

export const WhyThrine: React.FC = () => {
  const pillars = [
    {
      icon: <Code className="w-5 h-5 text-terracotta" />,
      title: "100% Custom-Built",
      description: "No bloated WordPress plugins or restrictive SaaS page builders. Every system is custom-engineered with clean code, tailored precisely to your operational workflow."
    },
    {
      icon: <Target className="w-5 h-5 text-terracotta" />,
      title: "Business-Focused Outcomes",
      description: "We don't build software simply to look futuristic. Every feature, layout, and database schema is designed around qualified lead conversion and operational efficiency."
    },
    {
      icon: <Cpu className="w-5 h-5 text-terracotta" />,
      title: "Modern Engineering Stack",
      description: "Built with high-performance frameworks (React, TypeScript, Next.js, Cloud APIs) ensuring instantaneous page loads, bank-grade security, and zero downtime."
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-terracotta" />,
      title: "Scalable Architecture",
      description: "Designed from day one to handle business growth — from early-stage single-outlet operations to high-traffic multi-location platforms without needing full rebuilds."
    },
    {
      icon: <Headphones className="w-5 h-5 text-terracotta" />,
      title: "100% Ownership & Long-Term Support",
      description: "Upon project completion, 100% of the source code, design assets, and IP belong to your business, backed by ongoing technical maintenance and support."
    }
  ];

  return (
    <section id="why-thrine" className="py-20 bg-paper border-b border-studio-border font-sans">
      <Container>
        <SectionHeading
          eyebrow="04 / WHY THRINE"
          title="Why Work With Us"
          subtitle="Why growing businesses trust Thrine to build their core digital systems."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.slice(0, 3).map((item) => (
            <div
              key={item.title}
              className="bg-studio-surface border border-studio-border rounded-sm p-6 sm:p-8 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="p-2.5 bg-paper border border-studio-border rounded-sm w-fit">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-editorial font-sans">{item.title}</h3>
                <p className="text-xs sm:text-sm text-editorial-muted leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
              <div className="pt-3 border-t border-studio-border/60 text-[11px] font-mono text-terracotta font-bold flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Studio Pillar</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {pillars.slice(3, 5).map((item) => (
            <div
              key={item.title}
              className="bg-studio-surface border border-studio-border rounded-sm p-6 sm:p-8 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="p-2.5 bg-paper border border-studio-border rounded-sm w-fit">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-editorial font-sans">{item.title}</h3>
                <p className="text-xs sm:text-sm text-editorial-muted leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
              <div className="pt-3 border-t border-studio-border/60 text-[11px] font-mono text-terracotta font-bold flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Studio Pillar</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
