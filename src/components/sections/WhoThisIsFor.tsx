import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { ArrowRight, Compass, Utensils, Briefcase, AlertCircle } from 'lucide-react';
import { Button } from '../ui/Button';

export const WhoThisIsFor: React.FC = () => {
  const categories = [
    {
      icon: <Compass className="w-5 h-5 text-terracotta" />,
      title: "Travel & Tourism",
      description: "Tour operators, excursion providers, and booking agencies needing streamlined itineraries, vehicle seat reservation engines, and automated inquiry collection.",
      deliverables: ["Package Discovery Catalogs", "Multi-Vehicle Seat Allocators", "Structured Inquiry Funnels"]
    },
    {
      icon: <Utensils className="w-5 h-5 text-terracotta" />,
      title: "Food & Hospitality",
      description: "Boutique bakeries, cloud kitchens, and artisan food brands requiring step-by-step custom order builders, live pricing calculators, and kitchen order management.",
      deliverables: ["Custom Cake Builders", "Real-Time Price Calculators", "Kitchen Queue Dashboards"]
    },
    {
      icon: <Briefcase className="w-5 h-5 text-terracotta" />,
      title: "Service Businesses",
      description: "Consultancies, service firms, and operational businesses that need custom lead funnels, scheduling integrations, client portals, and automated workflow tools.",
      deliverables: ["Conversion Funnels", "Scheduling Integrations", "Client Dashboards"]
    }
  ];

  return (
    <section className="py-20 bg-paper border-b border-studio-border">
      <Container>
        <SectionHeading
          eyebrow="04 / IDEAL ENGAGEMENTS"
          title="Built For Businesses With Operational Complexity"
          subtitle="We partner exclusively with companies where the website or software system directly impacts bookings, order management, and revenue."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-studio-surface border border-studio-border rounded-sm p-6 flex flex-col justify-between hover:border-editorial transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-sm bg-paper border border-studio-border flex items-center justify-center">
                    {cat.icon}
                  </div>
                  <h3 className="text-xl font-bold text-editorial">{cat.title}</h3>
                </div>

                <p className="text-xs text-editorial-muted leading-relaxed">
                  {cat.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-studio-border space-y-2">
                <div className="text-[10px] font-mono uppercase tracking-widest text-terracotta font-semibold">Typical Systems Built</div>
                <div className="space-y-1">
                  {cat.deliverables.map((item) => (
                    <div key={item} className="text-xs text-editorial flex items-center gap-1.5 font-mono">
                      <span className="w-1 h-1 rounded-full bg-terracotta shrink-0"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Confident Honest Positioning Statement Box */}
        <div className="p-6 bg-studio-surface border border-studio-border rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start gap-3 max-w-2xl">
            <AlertCircle className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase font-bold text-editorial">Our Honest Positioning</span>
              <p className="text-xs text-editorial-muted leading-relaxed">
                If your business can be managed entirely with a basic brochure template or static 3-page site, we are probably not the right studio. We focus on businesses with real operational workflows.
              </p>
            </div>
          </div>

          <Button
            href="/contact"
            variant="secondary"
            size="sm"
            icon={<ArrowRight className="w-3.5 h-3.5" />}
          >
            Discuss Your Business
          </Button>
        </div>
      </Container>
    </section>
  );
};
