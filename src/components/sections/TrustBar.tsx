import React from 'react';
import { Container } from '../ui/Container';

export const TrustBar: React.FC = () => {
  const highlights = [
    { label: 'Core Expertise', value: 'Bookings & E-Commerce' },
    { label: 'Client Experience', value: 'Tours, Travel & Food Outlets' },
    { label: 'Target Regions', value: 'US, UK, CA, AU, Europe' },
    { label: 'Architecture', value: 'Full-Stack React & TS' },
  ];

  return (
    <section className="py-8 bg-paper border-b border-studio-border font-sans">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs">
          {highlights.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="font-mono uppercase text-[10px] tracking-widest text-terracotta">
                {item.label}
              </div>
              <div className="font-bold text-editorial text-sm sm:text-base">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
