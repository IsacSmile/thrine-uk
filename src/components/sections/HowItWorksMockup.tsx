import React from 'react';
import {
  ShoppingBag, Cake, MapPin, CheckCircle2, ArrowRight
} from 'lucide-react';

interface HowItWorksMockupProps {
  mockupId: string;
}

export const HowItWorksMockup: React.FC<HowItWorksMockupProps> = ({ mockupId }) => {
  switch (mockupId) {

    // =========================================================================
    // BAKERY ADMIN FLOW (EXACT USER SPECIFIED ORDER & HIGH-RES SCREENSHOTS)
    // =========================================================================

    // STEP 1: STORE EXECUTIVE DASHBOARD
    case 'bakery-admin-overview':
      return (
        <div className="w-full bg-[#FAF8F5] overflow-x-auto flex justify-center items-start">
          <img 
            src="/images/mockups/step1_overview.png" 
            alt="Store Executive Dashboard Screenshot"
            className="w-full h-auto max-w-full block rounded-sm shadow-sm object-contain min-w-[650px]"
          />
        </div>
      );

    // STEP 2: PRODUCTS & CATEGORIES CATALOG
    case 'bakery-admin-catalog':
      return (
        <div className="w-full bg-[#FAF8F5] overflow-x-auto flex justify-center items-start">
          <img 
            src="/images/mockups/step2_catalog.png" 
            alt="Products Catalog Screenshot"
            className="w-full h-auto max-w-full block rounded-sm shadow-sm object-contain min-w-[650px]"
          />
        </div>
      );

    // STEP 3: EDIT CAKE DETAILS & PHOTOS MODAL
    case 'bakery-admin-modal':
      return (
        <div className="w-full bg-[#FAF8F5] overflow-x-auto flex justify-center items-start">
          <img 
            src="/images/mockups/step3_modal.png" 
            alt="Edit Cake Details & Photos Modal Screenshot"
            className="w-full h-auto max-w-full block rounded-sm shadow-sm object-contain min-w-[650px]"
          />
        </div>
      );

    // STEP 4: TEAM & BAKERS MANAGEMENT
    case 'bakery-admin-team':
      return (
        <div className="w-full bg-[#FAF8F5] overflow-x-auto flex justify-center items-start">
          <img 
            src="/images/mockups/step4_team.png" 
            alt="Team & Bakers Management Screenshot"
            className="w-full h-auto max-w-full block rounded-sm shadow-sm object-contain min-w-[650px]"
          />
        </div>
      );

    // STEP 5: OCCASION OFFERS MANAGER
    case 'bakery-admin-offers':
      return (
        <div className="w-full bg-[#FAF8F5] overflow-x-auto flex justify-center items-start">
          <img 
            src="/images/mockups/step5_offers.png" 
            alt="Occasion Offers Manager Screenshot"
            className="w-full h-auto max-w-full block rounded-sm shadow-sm object-contain min-w-[650px]"
          />
        </div>
      );

    // STEP 6: NEWSLETTER SUBSCRIBERS
    case 'bakery-admin-subscribers':
      return (
        <div className="w-full bg-[#FAF8F5] overflow-x-auto flex justify-center items-start">
          <img 
            src="/images/mockups/step6_subscribers.png" 
            alt="Newsletter Subscribers Screenshot"
            className="w-full h-auto max-w-full block rounded-sm shadow-sm object-contain min-w-[650px]"
          />
        </div>
      );

    // STEP 7: ADMIN SETTINGS & HERO CUSTOMIZATION
    case 'bakery-admin-settings':
      return (
        <div className="w-full bg-[#FAF8F5] overflow-x-auto flex justify-center items-start">
          <img 
            src="/images/mockups/step7_settings.png" 
            alt="Admin Settings & Hero Customization Screenshot"
            className="w-full h-auto max-w-full block rounded-sm shadow-sm object-contain min-w-[650px]"
          />
        </div>
      );

    // STEP 8: REAL-TIME STOREFRONT SYNC
    case 'bakery-admin-sync':
      return (
        <div className="bg-[#FAF8F5] border border-[#E5E0D8] rounded-sm p-6 text-editorial font-sans text-xs space-y-4 min-h-[490px] flex flex-col justify-between">
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[#E07A26] font-bold border-b border-[#E5E0D8] pb-2 flex justify-between">
              <span>Real-Time Admin to Storefront Sync</span>
              <span className="bg-[#EBFDF5] text-[#054D3B] px-2 py-0.5 rounded">Live Engine</span>
            </div>

            <h4 className="text-xl font-bold text-[#111]">One System. Zero Developer Overhead.</h4>
            <p className="text-xs text-[#666] leading-relaxed">
              When the bakery staff updates a cake price, creates an occasion offer, adds team members, manages subscribers, or changes an order status to <b>Completed/Delivered</b>, the change reflects on the customer site immediately.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono text-[10px]">
            <div className="bg-white p-3.5 border border-[#E5E0D8] rounded-xl space-y-1 shadow-sm">
              <div className="font-bold text-[#111]">Admin Panel Action</div>
              <div className="text-[#E07A26]">Cake Position #1 → Red Velvet Cake</div>
              <div className="text-[9px] text-[#888]">Updated in Products Catalog</div>
            </div>
            <div className="bg-white p-3.5 border border-[#E5E0D8] rounded-xl space-y-1 shadow-sm">
              <div className="font-bold text-[#111]">Customer Web Output</div>
              <div className="text-[#054D3B]">Top Featured Card → Red Velvet Cake</div>
              <div className="text-[9px] text-[#888]">Instant customer visibility</div>
            </div>
          </div>

          <div className="p-3 bg-[#111] text-white rounded-lg font-mono text-[10px] text-center shadow-md">
            Designed around daily bakery operations — not just static web pages.
          </div>
        </div>
      );

    // =========================================================================
    // BAKERY CUSTOMER FLOW
    // =========================================================================
    case 'bakery-cust-browse':
      return (
        <div className="bg-paper border border-studio-border rounded-sm p-5 space-y-4 font-sans text-editorial">
          <div className="flex items-center justify-between border-b border-studio-border pb-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-sm bg-terracotta text-paper font-bold text-xs flex items-center justify-center">MH</div>
              <span className="font-bold text-xs">MyHomelyCake Trivandrum</span>
            </div>
            <span className="text-[10px] font-mono bg-studio-surface border border-studio-border px-2 py-0.5 rounded-sm">Trivandrum Store • Active</span>
          </div>

          <div className="grid grid-cols-3 gap-2 font-mono text-[11px]">
            <div className="p-2 bg-dark text-paper text-center rounded-sm font-bold">Fresh Cream Cakes</div>
            <div className="p-2 bg-studio-surface border border-studio-border text-center rounded-sm text-editorial-muted">Pastries</div>
            <div className="p-2 bg-studio-surface border border-studio-border text-center rounded-sm text-editorial-muted">Cup Cakes</div>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-1">
            <div className="bg-studio-surface border border-studio-border rounded-sm p-3 space-y-2">
              <div className="h-20 bg-paper rounded-sm border border-studio-border flex items-center justify-center text-terracotta">
                <Cake className="w-8 h-8" />
              </div>
              <div className="text-xs font-bold">Chocolate Truffle cake</div>
              <div className="flex justify-between items-center text-[11px] font-mono">
                <span className="text-terracotta font-bold">₹1,000</span>
                <span className="bg-paper border border-studio-border px-2 py-0.5 rounded-sm text-[10px]">Select Size</span>
              </div>
            </div>

            <div className="bg-studio-surface border border-studio-border rounded-sm p-3 space-y-2">
              <div className="h-20 bg-paper rounded-sm border border-studio-border flex items-center justify-center text-editorial-muted">
                <Cake className="w-8 h-8" />
              </div>
              <div className="text-xs font-bold">Red Velvet Cake</div>
              <div className="flex justify-between items-center text-[11px] font-mono">
                <span className="text-terracotta font-bold">₹1,000</span>
                <span className="bg-paper border border-studio-border px-2 py-0.5 rounded-sm text-[10px]">Select Size</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'bakery-cust-choose':
      return (
        <div className="bg-paper border border-studio-border rounded-sm p-5 space-y-4 font-sans text-editorial">
          <div className="flex justify-between items-start border-b border-studio-border pb-3">
            <div>
              <span className="text-[10px] font-mono text-terracotta uppercase font-semibold">Fresh Cream Cake</span>
              <h4 className="text-base font-bold text-editorial">Chocolate Truffle cake</h4>
            </div>
            <div className="text-right font-mono">
              <span className="text-xs text-editorial-muted">Default (1kg)</span>
              <div className="text-lg font-extrabold text-terracotta">₹1,000</div>
            </div>
          </div>

          <div className="space-y-2 text-xs">
            <div className="text-[11px] font-mono text-editorial-muted">Description</div>
            <p className="text-xs text-editorial leading-relaxed bg-studio-surface p-3 rounded-sm border border-studio-border">
              Delicious Choclate truffle cake...Our best selling product...Highly recommended!!!
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2 text-xs font-mono">
            <div className="p-2 border border-studio-border bg-studio-surface text-center rounded-sm">700 g (₹650)</div>
            <div className="p-2 border border-terracotta bg-terracotta/10 text-terracotta font-bold text-center rounded-sm">1 kg (₹1,000)</div>
            <div className="p-2 border border-studio-border bg-studio-surface text-center rounded-sm">2 kg (₹2,000)</div>
          </div>
        </div>
      );

    case 'bakery-cust-customize':
      return (
        <div className="bg-paper border border-studio-border rounded-sm p-5 space-y-4 font-sans text-editorial">
          <div className="flex justify-between items-center border-b border-studio-border pb-3">
            <span className="text-xs font-mono font-bold uppercase text-terracotta">Cake Customizer</span>
            <span className="text-xs font-mono font-bold bg-studio-surface border border-studio-border px-2.5 py-1 rounded-sm">Total: ₹1,000</span>
          </div>

          <div className="space-y-3 text-xs">
            <div className="bg-studio-surface p-3 rounded-sm border border-studio-border flex justify-between items-center">
              <div>
                <div className="font-bold">Select Size Variant</div>
                <div className="text-[11px] text-editorial-muted">1 kg Standard Cake</div>
              </div>
              <span className="font-mono text-terracotta font-bold">₹1,000</span>
            </div>

            <div className="bg-studio-surface p-3 rounded-sm border border-studio-border space-y-1">
              <div className="font-bold flex justify-between">
                <span>Custom Cake Piping Message</span>
                <span className="font-mono text-terracotta">Included</span>
              </div>
              <div className="p-2 bg-paper border border-studio-border rounded-sm font-serif italic text-xs text-editorial">
                "Happy Birthday Jiju"
              </div>
            </div>
          </div>
        </div>
      );

    case 'bakery-cust-cart':
      return (
        <div className="bg-paper border border-studio-border rounded-sm p-5 space-y-4 font-sans text-editorial">
          <div className="flex justify-between items-center border-b border-studio-border pb-3 font-mono">
            <span className="text-xs font-bold text-editorial flex items-center gap-1.5">
              <ShoppingBag className="w-4 h-4 text-terracotta" />
              Cart Review (1 Item)
            </span>
            <span className="text-xs font-bold text-terracotta">Subtotal: ₹1,000</span>
          </div>

          <div className="p-3 bg-studio-surface border border-studio-border rounded-sm space-y-2 text-xs">
            <div className="flex justify-between font-bold">
              <span>Choco Butter Scotch (1 kg)</span>
              <span>₹1,000</span>
            </div>
            <div className="text-[11px] text-editorial-muted flex justify-between">
              <span>Message: "Happy Birthday Jiju"</span>
              <span>Free</span>
            </div>
            <div className="pt-2 border-t border-studio-border flex justify-between font-bold text-editorial font-mono">
              <span>Total Amount</span>
              <span className="text-terracotta">₹1,000</span>
            </div>
          </div>

          <button className="w-full bg-dark text-paper py-2.5 text-xs font-mono font-bold rounded-sm flex items-center justify-center gap-2">
            <span>Proceed to Checkout</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      );

    case 'bakery-cust-checkout':
      return (
        <div className="bg-paper border border-studio-border rounded-sm p-5 space-y-3 font-sans text-editorial">
          <div className="text-xs font-mono font-bold uppercase text-terracotta border-b border-studio-border pb-2">
            Customer Contact & Delivery Details
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            <div className="p-2.5 bg-studio-surface border border-studio-border rounded-sm">
              <div className="text-[10px] text-editorial-muted">Recipient Name</div>
              <div className="font-bold">Nirmal</div>
            </div>
            <div className="p-2.5 bg-studio-surface border border-studio-border rounded-sm">
              <div className="text-[10px] text-editorial-muted">Phone Number</div>
              <div className="font-bold">9847431696</div>
            </div>
          </div>

          <div className="p-2.5 bg-studio-surface border border-studio-border rounded-sm text-xs font-mono">
            <div className="text-[10px] text-editorial-muted">Delivery City</div>
            <div className="font-bold text-editorial">Trivandrum (Default Outlet)</div>
          </div>
        </div>
      );

    case 'bakery-cust-pay':
      return (
        <div className="bg-paper border border-studio-border rounded-sm p-5 space-y-4 font-sans text-editorial">
          <div className="flex justify-between items-center border-b border-studio-border pb-3">
            <span className="text-xs font-mono font-bold text-editorial">Payment Option</span>
            <span className="text-xs font-mono font-bold text-terracotta">Total: ₹1,000</span>
          </div>

          <div className="space-y-2 text-xs font-mono">
            <div className="p-3 bg-studio-surface border-2 border-terracotta rounded-sm flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-terracotta" />
                <span className="font-bold">UPI / PhonePe / GPay</span>
              </div>
              <span className="text-[10px] text-terracotta">Instant Auto-Verify</span>
            </div>
          </div>

          <button className="w-full bg-terracotta text-paper py-2.5 text-xs font-mono font-bold rounded-sm text-center">
            Place Bakery Order (₹1,000)
          </button>
        </div>
      );

    case 'bakery-cust-confirmed':
      return (
        <div className="bg-paper border border-studio-border rounded-sm p-5 space-y-4 font-sans text-editorial text-center">
          <div className="w-12 h-12 rounded-sm bg-terracotta/10 text-terracotta flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>

          <div>
            <span className="text-xs font-mono uppercase text-terracotta font-bold">Order Received</span>
            <h4 className="text-lg font-bold text-editorial font-sans">Order #MHC-6502</h4>
          </div>

          <div className="p-3 bg-studio-surface border border-studio-border rounded-sm text-xs text-left font-mono">
            <div className="flex justify-between text-[11px]">
              <span className="text-editorial-muted">Status:</span>
              <span className="font-bold text-terracotta">Confirmed & Delivered</span>
            </div>
            <div className="flex justify-between text-[11px]">
              <span className="text-editorial-muted">Delivery Address:</span>
              <span className="font-bold">Trivandrum</span>
            </div>
          </div>
        </div>
      );

    // =========================================================================
    // TRAVEL FLOWS
    // =========================================================================
    case 'travel-cust-explore':
      return (
        <div className="bg-paper border border-studio-border rounded-sm p-5 space-y-4 font-sans text-editorial">
          <div className="flex justify-between items-center border-b border-studio-border pb-3 font-mono">
            <span className="text-xs font-bold text-editorial">Travel Hault & Excursions</span>
            <span className="text-[10px] bg-studio-surface border border-studio-border px-2 py-0.5 rounded-sm">Live Catalog</span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-studio-surface border border-studio-border rounded-sm space-y-2">
              <div className="h-16 bg-paper rounded-sm border border-studio-border flex items-center justify-center text-terracotta">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="font-bold">7-Day Scenic Highland Expedition</div>
              <div className="text-[10px] font-mono text-editorial-muted">From $480 / person</div>
            </div>
            <div className="p-3 bg-studio-surface border border-studio-border rounded-sm space-y-2">
              <div className="h-16 bg-paper rounded-sm border border-studio-border flex items-center justify-center text-editorial-muted">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="font-bold">5-Day Desert SUV Safari</div>
              <div className="text-[10px] font-mono text-editorial-muted">From $350 / person</div>
            </div>
          </div>
        </div>
      );

    case 'travel-cust-select':
      return (
        <div className="bg-paper border border-studio-border rounded-sm p-5 space-y-3 font-sans text-editorial">
          <div className="flex justify-between items-start border-b border-studio-border pb-3">
            <div>
              <span className="text-[10px] font-mono text-terracotta uppercase font-semibold">Featured Tour Package</span>
              <h4 className="text-base font-bold text-editorial">7-Day Scenic Highland Expedition</h4>
            </div>
            <div className="text-right font-mono">
              <span className="text-xs text-editorial-muted">From</span>
              <div className="text-lg font-extrabold text-editorial">$480</div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 text-[11px] font-mono text-center">
            <div className="p-2 bg-studio-surface border border-studio-border rounded-sm">7 Days / 6 Nights</div>
            <div className="p-2 bg-studio-surface border border-studio-border rounded-sm">4 Destinations</div>
            <div className="p-2 bg-studio-surface border border-studio-border rounded-sm">SUV Fleet Included</div>
          </div>
        </div>
      );

    case 'travel-cust-itinerary':
      return (
        <div className="bg-paper border border-studio-border rounded-sm p-5 space-y-3 font-sans text-editorial">
          <div className="text-xs font-mono font-bold uppercase text-terracotta border-b border-studio-border pb-2">
            Detailed Tour Itinerary
          </div>

          <div className="space-y-2 text-xs font-mono">
            <div className="p-2.5 bg-studio-surface border border-studio-border rounded-sm">
              <div className="font-bold text-editorial">Day 1-2: Coastal Arrival & Fleet Pickup</div>
              <div className="text-[10px] text-editorial-muted">Arrival transfer, private hotel check-in.</div>
            </div>
            <div className="p-2.5 bg-studio-surface border border-studio-border rounded-sm">
              <div className="font-bold text-editorial">Day 3-5: Guided SUV Expedition</div>
              <div className="text-[10px] text-editorial-muted">Mountain pass driving & fjord exploration.</div>
            </div>
          </div>
        </div>
      );

    case 'travel-cust-configure':
      return (
        <div className="bg-paper border border-studio-border rounded-sm p-5 space-y-4 font-sans text-editorial">
          <div className="flex justify-between items-center border-b border-studio-border pb-3 font-mono">
            <span className="text-xs font-bold text-editorial">Vehicle Seat Allocator (SUV Fleet #02)</span>
            <span className="text-xs font-mono text-terracotta font-bold">3 Seats Selected</span>
          </div>

          <div className="grid grid-cols-4 gap-1.5 max-w-xs mx-auto text-center text-xs font-mono">
            <div className="h-7 rounded-sm bg-studio-surface text-[10px] flex items-center justify-center text-editorial-muted">Driver</div>
            <div className="h-7 rounded-sm bg-dark text-paper font-bold text-[10px] flex items-center justify-center">A1</div>
            <div className="h-7 rounded-sm bg-dark text-paper font-bold text-[10px] flex items-center justify-center">A2</div>
            <div className="h-7 rounded-sm bg-dark text-paper font-bold text-[10px] flex items-center justify-center">A3</div>
          </div>
        </div>
      );

    case 'travel-cust-details':
      return (
        <div className="bg-paper border border-studio-border rounded-sm p-5 space-y-3 font-sans text-editorial">
          <div className="text-xs font-mono font-bold uppercase text-terracotta border-b border-studio-border pb-2">
            Lead Traveler Contact Info
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            <div className="p-2.5 bg-studio-surface border border-studio-border rounded-sm">
              <div className="text-[10px] text-editorial-muted">Lead Traveler</div>
              <div className="font-bold">Michael Scott</div>
            </div>
            <div className="p-2.5 bg-studio-surface border border-studio-border rounded-sm">
              <div className="text-[10px] text-editorial-muted">WhatsApp Phone</div>
              <div className="font-bold">+1 (555) 234-5678</div>
            </div>
          </div>
        </div>
      );

    case 'travel-cust-submit':
      return (
        <div className="bg-paper border border-studio-border rounded-sm p-5 space-y-4 font-sans text-editorial">
          <div className="flex justify-between items-center border-b border-studio-border pb-3 font-mono">
            <span className="text-xs font-bold text-editorial">Inquiry Review</span>
            <span className="text-xs font-bold text-terracotta">Est. Total: $1,920</span>
          </div>

          <div className="p-3 bg-studio-surface border border-studio-border rounded-sm text-xs font-mono space-y-1">
            <div>7-Day Scenic Expedition (4 Travelers)</div>
            <div className="text-[10px] text-editorial-muted">Dates: Oct 12 — Oct 19, 2026</div>
          </div>

          <button className="w-full bg-dark text-paper py-2.5 text-xs font-mono font-bold rounded-sm text-center">
            Submit Booking Request
          </button>
        </div>
      );

    case 'travel-cust-received':
      return (
        <div className="bg-paper border border-studio-border rounded-sm p-5 space-y-4 font-sans text-editorial text-center">
          <div className="w-12 h-12 rounded-sm bg-terracotta/10 text-terracotta flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>

          <div>
            <span className="text-xs font-mono uppercase text-terracotta font-bold">Inquiry Sent</span>
            <h4 className="text-lg font-bold text-editorial font-sans">Reference #TH-2026-1024</h4>
          </div>

          <div className="p-3 bg-studio-surface border border-studio-border rounded-sm text-xs text-editorial-muted font-mono">
            "Our travel desk team will review your itinerary request and contact you within 2 hours."
          </div>
        </div>
      );

    case 'travel-admin-dashboard':
      return (
        <div className="bg-paper border border-studio-border rounded-sm p-5 space-y-4 font-sans text-editorial">
          <div className="flex justify-between items-center border-b border-studio-border pb-3 font-mono">
            <span className="text-xs font-bold text-editorial">Travel Operator Desk</span>
            <span className="text-[10px] bg-studio-surface border border-studio-border px-2 py-0.5 rounded-sm">Operator System</span>
          </div>

          <div className="grid grid-cols-3 gap-2 font-mono text-center text-xs">
            <div className="p-3 bg-studio-surface border border-studio-border rounded-sm">
              <div className="text-lg font-extrabold text-terracotta">8</div>
              <div className="text-[10px] text-editorial-muted">New Inquiries</div>
            </div>
            <div className="p-3 bg-studio-surface border border-studio-border rounded-sm">
              <div className="text-lg font-extrabold text-editorial">12</div>
              <div className="text-[10px] text-editorial-muted">Confirmed Trips</div>
            </div>
            <div className="p-3 bg-studio-surface border border-studio-border rounded-sm">
              <div className="text-lg font-extrabold text-editorial">4</div>
              <div className="text-[10px] text-editorial-muted">Active Fleets</div>
            </div>
          </div>
        </div>
      );

    case 'travel-admin-createpkg':
      return (
        <div className="bg-paper border border-studio-border rounded-sm p-5 space-y-3 font-sans text-editorial">
          <div className="text-xs font-mono font-bold uppercase text-terracotta border-b border-studio-border pb-2">
            Create Tour Package Form
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            <div className="p-2.5 bg-studio-surface border border-studio-border rounded-sm">
              <div className="text-[10px] text-editorial-muted">Package Code</div>
              <div className="font-bold">TH-PKG-02</div>
            </div>
            <div className="p-2.5 bg-studio-surface border border-studio-border rounded-sm">
              <div className="text-[10px] text-editorial-muted">Starting Price</div>
              <div className="font-bold text-terracotta">$480</div>
            </div>
          </div>
        </div>
      );

    case 'travel-admin-builditinerary':
      return (
        <div className="bg-paper border border-studio-border rounded-sm p-5 space-y-3 font-sans text-editorial">
          <div className="text-xs font-mono font-bold uppercase text-editorial border-b border-studio-border pb-2 flex justify-between">
            <span>Day-by-Day Itinerary Builder</span>
            <span className="text-terracotta">+ Add Day</span>
          </div>

          <div className="space-y-2 text-xs font-mono">
            <div className="p-2.5 bg-studio-surface border border-studio-border rounded-sm">
              <div className="font-bold">Day 01 — Airport & Fleet Transfer</div>
              <div className="text-[10px] text-editorial-muted">Private pickup, hotel welcome drink.</div>
            </div>
          </div>
        </div>
      );

    case 'travel-admin-configure':
      return (
        <div className="bg-paper border border-studio-border rounded-sm p-5 space-y-4 font-sans text-editorial">
          <div className="flex justify-between items-center border-b border-studio-border pb-3 font-mono">
            <span className="text-xs font-bold text-editorial">Assign Fleets & Inclusions</span>
            <span className="text-[10px] text-terracotta font-bold">Publish Ready</span>
          </div>

          <div className="p-3 bg-studio-surface border border-studio-border rounded-sm text-xs font-mono space-y-1">
            <div>Assigned Vehicle: SUV Fleet #02</div>
            <div>Inclusions: 4-Star Hotels, SUV Transport, Breakfast</div>
          </div>
        </div>
      );

    case 'travel-admin-inquiries':
      return (
        <div className="bg-paper border border-studio-border rounded-sm p-5 space-y-3 font-sans text-editorial">
          <div className="text-xs font-mono font-bold uppercase text-terracotta border-b border-studio-border pb-2">
            Inquiry Management Queue
          </div>

          <div className="p-3 bg-studio-surface border-l-4 border-terracotta rounded-r-sm text-xs font-mono space-y-1">
            <div className="flex justify-between font-bold">
              <span>INQUIRY #TH-1024</span>
              <span className="text-terracotta">Pending Review</span>
            </div>
            <div className="text-[10px] text-editorial-muted">Michael Scott (4 Travelers • Oct 12)</div>
          </div>
        </div>
      );

    case 'travel-admin-openbooking':
      return (
        <div className="bg-paper border border-studio-border rounded-sm p-5 space-y-3 font-sans text-editorial">
          <div className="text-xs font-mono font-bold uppercase text-terracotta border-b border-studio-border pb-2">
            Booking Confirmation Inspector
          </div>

          <div className="p-3 bg-studio-surface border border-studio-border rounded-sm text-xs font-mono space-y-1">
            <div>3 Vehicle Seats Confirmed (SUV Fleet #02)</div>
            <div className="text-[10px] text-editorial-muted">Quote: $1,920 • Voucher Generated</div>
          </div>
        </div>
      );

    case 'travel-admin-lifecycle':
      return (
        <div className="bg-paper border border-studio-border rounded-sm p-5 space-y-4 font-sans text-editorial">
          <div className="text-xs font-mono font-bold uppercase text-editorial border-b border-studio-border pb-2">
            Full Booking Lifecycle Pipeline
          </div>

          <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-mono">
            <span className="bg-studio-surface px-2 py-0.5 rounded-sm">Enquiry</span>
            <span>→</span>
            <span className="bg-studio-surface px-2 py-0.5 rounded-sm">Review</span>
            <span>→</span>
            <span className="bg-studio-surface px-2 py-0.5 rounded-sm">Quote</span>
            <span>→</span>
            <span className="bg-terracotta text-paper px-2 py-0.5 rounded-sm font-bold">Confirmed</span>
          </div>
        </div>
      );

    default:
      return (
        <div className="bg-paper border border-studio-border rounded-sm p-8 text-center text-xs font-mono text-editorial-muted">
          System Workflow Preview
        </div>
      );
  }
};
