import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export const Services: React.FC = () => {
  const serviceGroups = [
    {
      id: "conversion-systems",
      title: "Business Websites & Conversion Systems",
      tagline: "Websites designed to attract, explain, convert and support real customer journeys.",
      capabilities: [
        "Business websites",
        "Conversion pages",
        "Booking systems",
        "Ordering systems",
        "Payment integrations",
        "CRM integrations"
      ]
    },
    {
      id: "business-systems",
      title: "Custom Business Systems",
      tagline: "Software designed around the way your business actually operates.",
      capabilities: [
        "Admin dashboards",
        "Internal tools",
        "Customer portals",
        "Workflow systems",
        "Database systems",
        "API integrations"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-paper border-b border-studio-border">
      <Container>
        <SectionHeading
          eyebrow="05 / WHAT WE BUILD"
          title="Core Capabilities"
          subtitle="We focus on two major areas of engineering: public-facing customer platforms and internal operational systems."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceGroups.map((group, idx) => (
            <div
              key={group.id}
              className="bg-studio-surface border border-studio-border rounded-sm p-8 flex flex-col justify-between space-y-8"
            >
              <div className="space-y-4">
                <div className="text-xs font-mono uppercase tracking-widest text-terracotta font-bold">
                  SERVICE GROUP 0{idx + 1}
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-editorial font-sans tracking-tight">
                  {group.title}
                </h3>
                <p className="text-sm text-editorial-muted leading-relaxed font-sans">
                  {group.tagline}
                </p>
              </div>

              <div className="pt-6 border-t border-studio-border space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-editorial font-bold">
                  Capabilities & Deliverables:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs text-editorial">
                  {group.capabilities.map((item) => (
                    <div key={item} className="flex items-center gap-2 p-2 bg-paper border border-studio-border rounded-sm">
                      <CheckCircle2 className="w-3.5 h-3.5 text-terracotta shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            href="/contact"
            variant="secondary"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Discuss Your System Requirements
          </Button>
        </div>
      </Container>
    </section>
  );
};
