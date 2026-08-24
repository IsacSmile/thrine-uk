import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { ShieldCheck, Code, Target, Cpu, TrendingUp, Headphones } from 'lucide-react';

export const WhyThrine: React.FC = () => {
  const pillars = [
    {
      icon: <Code className="w-5 h-5 text-terracotta" />,
      title: "100% Custom-Built",
      description: "No templates or locked platforms. Everything is built specifically for your bakery or tour business."
    },
    {
      icon: <Target className="w-5 h-5 text-terracotta" />,
      title: "Focused on Real Results",
      description: "We design for more orders, more bookings, and less admin — not just pretty websites."
    },
    {
      icon: <Cpu className="w-5 h-5 text-terracotta" />,
      title: "Clean & Fast",
      description: "Sites that load quickly on mobile and are easy for your customers to use."
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-terracotta" />,
      title: "Built to Grow With You",
      description: "Starts simple and can expand as your business grows — no full rebuild needed."
    },
    {
      icon: <Headphones className="w-5 h-5 text-terracotta" />,
      title: "You Own Everything",
      description: "100% of the code and design belong to you. We stay available for support after launch."
    }
  ];

  return (
    <section id="why-thrine" className="py-20 bg-paper border-b border-studio-border font-sans">
      <Container>
        <SectionHeading
          eyebrow="04 / WHY THRINE"
          title="Why Businesses Choose Us"
          subtitle="Clear reasons bakery and tour owners work with us."
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
