import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-dark text-paper border-t border-dark-border relative overflow-hidden font-sans">
      <Container size="md" className="relative z-10">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono text-terracotta bg-paper/5 border border-dark-border rounded-sm uppercase tracking-widest">
            <span>GET IN TOUCH</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-paper tracking-tight font-sans leading-tight">
            Have a business idea or process that needs a better digital system?
          </h2>

          <p className="text-base sm:text-lg text-paper/70 leading-relaxed font-normal">
            Whether you need a high-converting website, a custom booking portal, or an automated workflow, we engineer software that drives real business growth.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              href="/contact"
              variant="dark"
              size="lg"
              icon={<Calendar className="w-4 h-4" />}
            >
              Book a Free Consultation
            </Button>

            <Button
              href="#work"
              variant="secondary"
              size="lg"
              className="text-paper border-dark-border hover:bg-paper/10 hover:border-paper"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              View Featured Work
            </Button>
          </div>

          <div className="pt-6 text-xs font-mono text-paper/50">
            No obligation · 30-minute discovery call · Fixed-scope proposal
          </div>
        </div>
      </Container>
    </section>
  );
};
