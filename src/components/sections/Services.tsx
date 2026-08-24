import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { CheckCircle2, ArrowRight, Globe, Server, Bot, CalendarCheck } from 'lucide-react';
import { Button } from '../ui/Button';
import { services } from '../../data/services';

export const Services: React.FC = () => {
  const serviceIcons: Record<string, React.ReactNode> = {
    'business-websites': <Globe className="w-5 h-5 text-terracotta" />,
    'custom-web-systems': <Server className="w-5 h-5 text-terracotta" />,
    'ai-automation': <Bot className="w-5 h-5 text-terracotta" />,
    'booking-ordering-systems': <CalendarCheck className="w-5 h-5 text-terracotta" />,
  };

  return (
    <section id="services" className="py-20 bg-paper border-b border-studio-border font-sans">
      <Container>
        <SectionHeading
          eyebrow="03 / SERVICES"
          title="Engineering Capabilities"
          subtitle="We specialize in four primary areas of digital engineering designed around direct commercial outcomes."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-studio-surface border border-studio-border rounded-sm p-6 sm:p-8 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-paper border border-studio-border rounded-sm shrink-0">
                      {serviceIcons[service.id]}
                    </div>
                    <span className="text-xs font-mono font-bold text-terracotta uppercase tracking-wider">
                      SERVICE {service.number}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-extrabold text-editorial font-sans tracking-tight">
                  {service.title}
                </h3>
                
                <p className="text-sm text-editorial-muted leading-relaxed font-sans">
                  {service.shortDescription}
                </p>
              </div>

              <div className="pt-4 border-t border-studio-border space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-editorial font-bold">
                  Key Deliverables:
                </div>
                <ul className="space-y-2 font-mono text-xs text-editorial">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-terracotta shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
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
