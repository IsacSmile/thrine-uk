import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Container } from '../ui/Container';

export const TrustBar: React.FC = () => {
  const clients = [
    {
      name: "Travel & Hault",
      industry: "Travel & Tourism",
      location: "Dubai & Kerala",
      liveUrl: "https://travelhault.com",
      logo: "/images/client-travel-halt-logo.png"
    },
    {
      name: "My Homely Cakes",
      industry: "Food & Hospitality",
      location: "Trivandrum",
      liveUrl: "https://yourbakery.com",
      logo: "/images/client-homely-cakes-logo.png"
    }
  ];

  return (
    <section className="py-6 bg-paper border-b border-studio-border font-sans">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-xs">
          
          {/* Heading */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs font-mono uppercase tracking-widest text-terracotta font-bold">
              Selected work
            </span>
            <span className="text-studio-border hidden sm:inline">•</span>
            <span className="text-editorial-muted hidden md:inline font-mono text-[11px]">
              Production systems engineered for active clients
            </span>
          </div>

          {/* Client Entries */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            {clients.map((client) => (
              <div key={client.name} className="flex items-center gap-3 py-1">
                {client.logo && (
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-6 w-auto object-contain opacity-90"
                  />
                )}
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                  <span className="font-bold text-editorial text-xs">{client.name}</span>
                  <span className="text-[11px] font-mono text-editorial-muted">({client.industry})</span>
                </div>
                <a
                  href={client.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-terracotta hover:underline ml-1"
                >
                  <span>Visit live website</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
