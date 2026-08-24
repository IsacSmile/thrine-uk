import React from 'react';
import { Container } from '../ui/Container';
import { siteConfig } from '../../data/siteConfig';

export const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-dark text-paper border-t border-dark-border relative overflow-hidden font-sans">
      <Container size="md" className="relative z-10">
        <div className="text-center space-y-6 max-w-3xl mx-auto flex flex-col items-center">
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-paper tracking-tight font-sans leading-tight">
            Have a business idea or process that needs a better digital system?
          </h2>

          <p className="text-base sm:text-lg text-paper/70 leading-relaxed font-normal max-w-2xl">
            Whether you need a high-converting website, a custom booking portal, or an automated workflow, we engineer software that drives real business growth.
          </p>

          {/* Red Guarantee Availability Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-red-500/40 bg-red-950/50 text-red-400 text-xs sm:text-sm font-sans font-medium shadow-inner mt-4">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shrink-0"></span>
            <span>We only onboard 3 new businesses per month to guarantee results.</span>
          </div>

          {/* Gradient Demo Pill Button */}
          <div className="pt-2 pb-1">
            <a
              href={siteConfig.zcalUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 sm:px-12 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white rounded-full text-lg sm:text-xl font-bold font-sans tracking-tight shadow-2xl hover:shadow-pink-500/20 hover:scale-[1.03] active:scale-95 transition-all duration-300 group"
            >
              <span>Book My Free Demo</span>
              <span className="font-mono text-base font-normal tracking-tighter opacity-90 transition-transform group-hover:translate-x-1">→ ↗</span>
            </a>
          </div>

          {/* Subtext */}
          <p className="text-xs sm:text-sm text-paper/70 font-sans font-normal">
            No contract. No credit card. Just 30 minutes.
          </p>

        </div>
      </Container>
    </section>
  );
};
