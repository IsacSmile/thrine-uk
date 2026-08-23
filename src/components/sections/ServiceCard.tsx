import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Service } from '../../data/services';
import { Button } from '../ui/Button';

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="py-8 border-b border-studio-border last:border-b-0 space-y-6">
      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-xl sm:text-2xl font-bold text-terracotta">{service.number}</span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-editorial tracking-tight font-sans">
            {service.title}
          </h3>
        </div>

        <Button
          href="/contact"
          variant="secondary"
          size="sm"
          icon={<ArrowRight className="w-3.5 h-3.5" />}
        >
          Inquire Offering
        </Button>
      </div>

      <p className="text-base sm:text-lg text-editorial-muted leading-relaxed max-w-3xl">
        {service.fullDescription}
      </p>

      {/* Deliverables Grid */}
      <div className="pt-2">
        <div className="text-xs font-mono uppercase tracking-widest text-terracotta mb-3">Included Capabilities</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {service.deliverables.map((item) => (
            <div key={item} className="flex items-center gap-2 text-xs text-editorial bg-studio-surface p-2.5 rounded-sm border border-studio-border">
              <CheckCircle2 className="w-3.5 h-3.5 text-terracotta shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
