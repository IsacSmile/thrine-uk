import React from 'react';
import { Container } from '../ui/Container';
import { Layers, Users, Cpu } from 'lucide-react';

export const TrustBar: React.FC = () => {
  return (
    <section className="py-10 bg-studio-surface border-b border-studio-border font-sans">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Column 1: What We Build */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-terracotta font-bold">
              <Layers className="w-4 h-4 text-terracotta" />
              <span>What We Build</span>
            </div>
            <p className="text-xs text-editorial-muted leading-relaxed font-sans">
              High-converting business websites, custom web applications, booking & reservation engines, customer portals, and internal admin software.
            </p>
          </div>

          {/* Column 2: Who We Build For */}
          <div className="space-y-3 md:border-l md:border-studio-border md:pl-8">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-editorial font-bold">
              <Users className="w-4 h-4 text-terracotta" />
              <span>Who We Build For</span>
            </div>
            <p className="text-xs text-editorial-muted leading-relaxed font-sans">
              B2B service companies, hospitality & tour operators, local food outlets, cloud kitchens, and operational teams replacing manual workflows.
            </p>
          </div>

          {/* Column 3: Technologies & Capabilities */}
          <div className="space-y-3 md:border-l md:border-studio-border md:pl-8">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-editorial font-bold">
              <Cpu className="w-4 h-4 text-terracotta" />
              <span>Core Stack & Capabilities</span>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-0.5">
              {['React', 'TypeScript', 'Next.js', 'Node.js', 'PostgreSQL', 'Tailwind', 'Python', 'AI APIs'].map((tech) => (
                <span key={tech} className="px-2 py-0.5 bg-paper border border-studio-border rounded-sm text-[11px] font-mono text-editorial font-semibold">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
