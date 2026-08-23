import React from 'react';
import { Calendar, Users, MapPin, CheckCircle2, ShoppingBag, Car, Cake, ArrowRight } from 'lucide-react';

interface ProjectVisualMockupProps {
  projectType: 'travel' | 'bakery';
  variant?: 'hero' | 'card' | 'case-study';
}

export const ProjectVisualMockup: React.FC<ProjectVisualMockupProps> = ({
  projectType
}) => {
  if (projectType === 'travel') {
    return (
      <div className="w-full bg-paper text-editorial p-4 sm:p-6 font-sans border-b border-studio-border">
        {/* Travel App Header Bar */}
        <div className="flex items-center justify-between border-b border-studio-border pb-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-sm bg-dark flex items-center justify-center font-bold text-paper text-xs">
              TH
            </div>
            <div>
              <div className="text-xs font-bold text-editorial">Travel Hault & Excursions</div>
              <div className="text-[10px] text-editorial-muted font-mono">International Booking Platform</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] bg-studio-surface text-terracotta border border-studio-border px-2.5 py-0.5 rounded-sm font-mono uppercase tracking-wider font-semibold">
              Live Availability
            </span>
          </div>
        </div>

        {/* Travel Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Main Package Preview */}
          <div className="md:col-span-2 bg-studio-surface border border-studio-border rounded-sm p-4">
            <div className="flex justify-between items-start mb-3">
              <div>
                <span className="text-[10px] font-mono text-terracotta uppercase tracking-widest font-semibold">01 / FEATURED TOUR</span>
                <h4 className="text-sm font-bold text-editorial">7-Day Scenic Highland Expedition</h4>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-editorial-muted">From</span>
                <div className="text-sm font-extrabold text-editorial">$480 <span className="text-[10px] font-normal text-editorial-muted">/ person</span></div>
              </div>
            </div>

            {/* Simulated Itinerary Timeline */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-xs bg-paper p-2 rounded-sm border border-studio-border">
                <MapPin className="w-3.5 h-3.5 text-terracotta shrink-0" />
                <span className="text-editorial font-medium">Day 1-2: Coastal Routes & Fleet Transfer</span>
              </div>
              <div className="flex items-center gap-2 text-xs bg-paper p-2 rounded-sm border border-studio-border">
                <Users className="w-3.5 h-3.5 text-terracotta shrink-0" />
                <span className="text-editorial font-medium">Day 3-5: Guided Mountain SUV Excursion</span>
              </div>
            </div>

            {/* Vehicle Seat Allocator Visual */}
            <div className="bg-paper p-3 rounded-sm border border-studio-border">
              <div className="flex items-center justify-between text-[11px] font-medium text-editorial mb-2">
                <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider">
                  <Car className="w-3.5 h-3.5 text-terracotta" />
                  Vehicle Seat Selector (SUV Fleet #02)
                </span>
                <span className="text-terracotta font-mono text-[10px] font-semibold">3 Seats Selected</span>
              </div>
              <div className="grid grid-cols-4 gap-1.5 max-w-xs mx-auto">
                <div className="h-6 rounded-sm bg-studio-surface text-[10px] flex items-center justify-center text-editorial-muted font-mono">Driver</div>
                <div className="h-6 rounded-sm bg-dark text-[10px] flex items-center justify-center text-paper font-mono font-bold">A1</div>
                <div className="h-6 rounded-sm bg-dark text-[10px] flex items-center justify-center text-paper font-mono font-bold">A2</div>
                <div className="h-6 rounded-sm bg-dark text-[10px] flex items-center justify-center text-paper font-mono font-bold">A3</div>
              </div>
            </div>
          </div>

          {/* Booking Inquiry Card */}
          <div className="bg-studio-surface border border-studio-border rounded-sm p-4 flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold text-editorial mb-3 flex items-center gap-1.5 uppercase font-mono tracking-wider">
                <Calendar className="w-3.5 h-3.5 text-terracotta" />
                Quick Booking Request
              </div>
              <div className="space-y-2 text-xs">
                <div className="bg-paper p-2 rounded-sm border border-studio-border">
                  <div className="text-[10px] text-editorial-muted">Selected Dates</div>
                  <div className="text-editorial font-mono text-[11px]">Oct 12 — Oct 19, 2026</div>
                </div>
                <div className="bg-paper p-2 rounded-sm border border-studio-border">
                  <div className="text-[10px] text-editorial-muted">Travelers</div>
                  <div className="text-editorial font-mono text-[11px]">4 Adults (Shared SUV)</div>
                </div>
              </div>
            </div>

            <button className="mt-4 w-full bg-dark hover:bg-terracotta text-paper text-xs font-semibold py-2 px-3 rounded-sm flex items-center justify-center gap-1.5 transition-colors">
              <span>Submit Inquiry</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-paper text-editorial p-4 sm:p-6 font-sans border-b border-studio-border">
      {/* Bakery Header Bar */}
      <div className="flex items-center justify-between border-b border-studio-border pb-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-sm bg-terracotta flex items-center justify-center font-bold text-paper text-xs">
            CB
          </div>
          <div>
            <div className="text-xs font-bold text-editorial">Crust & Crumble Artisan Bakery</div>
            <div className="text-[10px] text-editorial-muted font-mono">Custom Cake Ordering Engine</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] bg-studio-surface text-editorial border border-studio-border px-2.5 py-0.5 rounded-sm font-mono uppercase tracking-wider">
            Trivandrum Store • Active
          </span>
        </div>
      </div>

      {/* Bakery Customizer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Custom Cake Configurator */}
        <div className="md:col-span-2 bg-studio-surface border border-studio-border rounded-sm p-4">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <Cake className="w-4 h-4 text-terracotta" />
              <h4 className="text-xs font-bold text-editorial font-mono uppercase tracking-wider">Step 2: Cake Customizer</h4>
            </div>
            <span className="text-[10px] font-mono text-terracotta">Live Quote</span>
          </div>

          <div className="space-y-2.5">
            {/* Sponge Flavor Select */}
            <div className="bg-paper p-2.5 rounded-sm border border-studio-border flex items-center justify-between text-xs">
              <span className="text-editorial-muted">Sponge Flavor</span>
              <div className="flex gap-1.5">
                <span className="bg-studio-surface text-editorial-muted text-[10px] px-2 py-0.5 rounded-sm">Vanilla</span>
                <span className="bg-dark text-paper font-medium text-[10px] px-2 py-0.5 rounded-sm">Belgian Chocolate</span>
              </div>
            </div>

            {/* Tiers Select */}
            <div className="bg-paper p-2.5 rounded-sm border border-studio-border flex items-center justify-between text-xs">
              <span className="text-editorial-muted">Tier Configuration</span>
              <div className="flex gap-1.5">
                <span className="bg-studio-surface text-editorial-muted text-[10px] px-2 py-0.5 rounded-sm">1 Tier (1.5 kg)</span>
                <span className="bg-terracotta text-paper font-medium text-[10px] px-2 py-0.5 rounded-sm">2 Tier (3 kg)</span>
              </div>
            </div>

            {/* Custom Message */}
            <div className="bg-paper p-2.5 rounded-sm border border-studio-border text-xs">
              <div className="text-[10px] text-editorial-muted mb-1">Custom Cake Message</div>
              <div className="font-serif italic text-editorial text-xs">"Happy 30th Birthday Sarah!"</div>
            </div>
          </div>
        </div>

        {/* Order Summary & Pricing */}
        <div className="bg-studio-surface border border-studio-border rounded-sm p-4 flex flex-col justify-between">
          <div>
            <div className="text-xs font-bold text-editorial mb-3 flex items-center gap-1.5 font-mono uppercase tracking-wider">
              <ShoppingBag className="w-3.5 h-3.5 text-terracotta" />
              Order Calculation
            </div>

            <div className="space-y-1.5 text-xs text-editorial">
              <div className="flex justify-between text-[11px]">
                <span className="text-editorial-muted">2 Tier Belgian Chocolate</span>
                <span>$65.00</span>
              </div>
              <div className="flex justify-between text-[11px]">
                <span className="text-editorial-muted">Custom Piping & Text</span>
                <span>$10.00</span>
              </div>
              <div className="border-t border-studio-border pt-2 mt-2 flex justify-between font-bold text-editorial">
                <span>Estimated Total</span>
                <span className="text-terracotta">$75.00</span>
              </div>
            </div>
          </div>

          <button className="mt-4 w-full bg-dark hover:bg-terracotta text-paper text-xs font-semibold py-2 px-3 rounded-sm flex items-center justify-center gap-1.5 transition-colors">
            <span>Proceed to Checkout</span>
            <CheckCircle2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
