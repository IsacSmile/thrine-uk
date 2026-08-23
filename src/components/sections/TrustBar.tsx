import React from 'react';
import { Container } from '../ui/Container';

export const TrustBar: React.FC = () => {
  const highlights = [
    { label: 'Core Expertise', value: 'Bookings & E-Commerce' },
    { label: 'Target Markets', value: 'Dubai, UK, US & India' },
    { label: 'Architecture', value: 'Full-Stack React & TS' },
  ];

  return (
    <section className="py-8 bg-paper border-b border-studio-border font-sans">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 text-xs">
          {/* Client Logos Showcase Strip */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 pb-4 lg:pb-0 border-b lg:border-b-0 lg:border-r border-studio-border/80 lg:pr-8">
            <span className="font-mono uppercase text-[10px] tracking-widest text-terracotta font-bold block shrink-0">
              Active Clients
            </span>
            
            <div className="flex items-center gap-6 sm:gap-8">
              <div className="flex items-center gap-2.5 group">
                <img 
                  src="/images/client-travel-halt-logo.png" 
                  alt="Travel & Halt" 
                  className="h-7 sm:h-8 w-auto object-contain transition-transform group-hover:scale-105" 
                />
                <span className="text-[11px] font-mono text-editorial-muted hidden sm:inline font-medium">
                  Dubai & Kerala
                </span>
              </div>

              <div className="h-5 w-px bg-studio-border"></div>

              <div className="flex items-center gap-2.5 group">
                <img 
                  src="/images/client-homely-cakes-logo.png" 
                  alt="myhomelycakes.com" 
                  className="h-7 sm:h-8 w-auto object-contain transition-transform group-hover:scale-105" 
                />
                <span className="text-[11px] font-mono text-editorial-muted hidden sm:inline font-medium">
                  Trivandrum
                </span>
              </div>
            </div>
          </div>

          {/* Studio Capabilities Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 flex-1">
            {highlights.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="font-mono uppercase text-[10px] tracking-widest text-terracotta">
                  {item.label}
                </div>
                <div className="font-bold text-editorial text-xs sm:text-sm">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
