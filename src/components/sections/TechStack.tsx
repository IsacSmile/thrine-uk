import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { CheckCircle2 } from 'lucide-react';

export const TechStack: React.FC = () => {
  const capabilities = [
    { name: "Production-Ready Architecture", desc: "Fast, resilient web applications built with TypeScript & React." },
    { name: "Secure Authentication", desc: "Encrypted session tokens & modern auth flows." },
    { name: "Role-Based Access", desc: "Granular administrative permissions for customer & staff roles." },
    { name: "Database Management", desc: "Structured relational databases for order queues & bookings." },
    { name: "Payment Integrations", desc: "Seamless Stripe, PayPal, & local payment gateway dispatches." },
    { name: "Analytics & Insights", desc: "Privacy-first event tracking & business reporting." },
    { name: "Backups & Security", desc: "Automated database backups & SSL encryption." },
    { name: "API Integrations", desc: "REST & Webhook integrations with CRMs, WhatsApp, & email APIs." }
  ];

  return (
    <section className="py-16 bg-paper border-b border-studio-border">
      <Container size="md">
        <SectionHeading
          eyebrow="08 / TECHNICAL TRUST"
          title="Built for real-world use."
          subtitle="Technology serving business outcomes — production architecture, secure data management, and reliable integrations."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {capabilities.map((item) => (
            <div
              key={item.name}
              className="p-4 rounded-sm bg-studio-surface border border-studio-border space-y-2 font-mono text-xs"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-terracotta shrink-0" />
                <div className="font-bold text-editorial text-xs font-sans">{item.name}</div>
              </div>
              <p className="text-[11px] text-editorial-muted leading-relaxed font-sans pl-6">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
