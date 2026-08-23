import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Compass, Utensils, Briefcase } from 'lucide-react';

export const WhoThisIsFor: React.FC = () => {
  const columns = [
    {
      icon: <Compass className="w-5 h-5 text-terracotta" />,
      title: "Travel & Tourism",
      capabilities: [
        "Booking platforms",
        "Tour management",
        "Enquiry systems",
        "Customer workflows"
      ]
    },
    {
      icon: <Utensils className="w-5 h-5 text-terracotta" />,
      title: "Food & Hospitality",
      capabilities: [
        "Online ordering",
        "Product customization",
        "Delivery workflows",
        "Order management"
      ]
    },
    {
      icon: <Briefcase className="w-5 h-5 text-terracotta" />,
      title: "Service Businesses",
      capabilities: [
        "Lead management",
        "Scheduling",
        "Customer portals",
        "Internal systems"
      ]
    }
  ];

  return (
    <section className="py-20 bg-paper border-b border-studio-border">
      <Container>
        <SectionHeading
          eyebrow="03 / WHO WE BUILD FOR"
          title="Built for businesses with real workflows."
          subtitle="We work with businesses where the website is more than a brochure and everyday operations need better digital tools."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {columns.map((col) => (
            <div
              key={col.title}
              className="bg-studio-surface border border-studio-border rounded-sm p-6 sm:p-8 flex flex-col justify-between hover:border-editorial transition-colors"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-sm bg-paper border border-studio-border flex items-center justify-center">
                    {col.icon}
                  </div>
                  <h3 className="text-xl font-bold text-editorial font-sans">{col.title}</h3>
                </div>

                <div className="space-y-2.5 pt-2 border-t border-studio-border font-mono text-xs text-editorial">
                  {col.capabilities.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-terracotta shrink-0"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Visually Subtle But Confident Statement */}
        <div className="p-6 bg-studio-surface border border-studio-border rounded-sm text-center">
          <p className="text-xs sm:text-sm font-mono text-editorial-muted">
            If you only need a simple brochure website, we're probably not the right studio.
          </p>
        </div>
      </Container>
    </section>
  );
};
