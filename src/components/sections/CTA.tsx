import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { ZCalModal } from '../booking/ZCalModal';

export const CTA: React.FC = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <section className="py-20 bg-dark text-paper border-t border-dark-border relative overflow-hidden font-sans">
      <Container size="md" className="relative z-10">
        <div className="text-center space-y-6 max-w-3xl mx-auto flex flex-col items-center">
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-paper tracking-tight font-sans leading-tight">
            Ready to get more orders or bookings?
          </h2>

          <p className="text-base sm:text-lg text-paper/70 leading-relaxed font-normal max-w-2xl">
            We build websites and systems for bakeries and tour operators. Simple process. You own everything.
          </p>

          {/* Soft Pricing Signal */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3 px-4 py-2.5 rounded-sm border border-paper/15 bg-paper/5 text-paper/80 text-xs font-mono text-center">
            <span className="font-bold text-paper">Projects: $700 – $1,450 USD (one-time)</span>
            <span className="hidden sm:inline text-paper/40">•</span>
            <span className="text-terracotta font-semibold">$200 USD/mo for ongoing maintenance & hosting</span>
          </div>

          {/* Availability Guarantee Badge (Thrine Terracotta Theme) */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-terracotta/40 bg-terracotta/10 text-terracotta text-xs font-mono tracking-wide font-medium shadow-sm">
            <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse shrink-0"></span>
            <span>We only onboard 3 new businesses per month to guarantee results.</span>
          </div>

          {/* Thrine Studio Demo Pill Button */}
          <div className="pt-2 pb-1">
            <button
              type="button"
              onClick={() => setIsBookingModalOpen(true)}
              className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 bg-terracotta hover:bg-terracotta-hover text-paper rounded-full font-mono text-xs sm:text-sm uppercase tracking-widest font-bold transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 group cursor-pointer"
            >
              <span>Book My Free Demo</span>
              <span className="font-mono text-sm font-normal opacity-90 transition-transform group-hover:translate-x-1">→ ↗</span>
            </button>
          </div>

          {/* Subtext */}
          <p className="text-xs font-mono text-paper/60">
            No contract. No credit card. Just 30 minutes.
          </p>

        </div>
      </Container>

      {/* ZCal Booking Modal */}
      <ZCalModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </section>
  );
};
