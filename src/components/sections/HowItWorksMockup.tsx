import React from 'react';
import {
  ShoppingBag, Cake, MapPin, CheckCircle2, ArrowRight,
  RefreshCw, Volume2, Plus, Download, X
} from 'lucide-react';

interface HowItWorksMockupProps {
  mockupId: string;
}

export const HowItWorksMockup: React.FC<HowItWorksMockupProps> = ({ mockupId }) => {
  switch (mockupId) {

    // =========================================================================
    // BAKERY ADMIN FLOW (EXACT MYHOMELYCAKE ADMIN PANEL REPRODUCTION)
    // =========================================================================

    // STEP 1: STORE EXECUTIVE OVERVIEW (EXACT SCREENSHOT REPRODUCTION)
    case 'bakery-admin-overview':
      return (
        <div className="bg-[#FAF8F5] border border-[#E5E0D8] rounded-sm text-editorial font-sans text-xs overflow-hidden flex flex-col md:flex-row min-h-[490px]">
          {/* Dark Admin Sidebar */}
          <div className="w-full md:w-56 bg-[#111111] text-white p-3.5 flex flex-col justify-between shrink-0 space-y-4">
            <div className="space-y-5">
              {/* Header Logo & Sound ON */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#E07A26] flex items-center justify-center font-bold text-xs text-white shadow-sm">
                    MH
                  </div>
                  <div>
                    <div className="font-bold text-xs leading-none text-white tracking-tight">MyHomely...</div>
                    <div className="text-[8px] text-white/50 tracking-wider font-mono">ADMIN PANEL</div>
                  </div>
                </div>
                <span className="bg-[#054D3B] text-[#55E6C1] text-[8px] px-2 py-0.5 rounded-full flex items-center gap-1 font-mono font-semibold">
                  <Volume2 className="w-2.5 h-2.5" /> Sound ON
                </span>
              </div>

              {/* Sidebar Menu Items */}
              <div className="space-y-1.5 font-mono text-[11px]">
                <div className="bg-[#E07A26] text-white font-bold px-3 py-2 rounded-md flex items-center justify-between shadow-sm">
                  <span>Overview</span>
                  <span className="text-xs">›</span>
                </div>
                <div className="text-white/60 hover:text-white px-3 py-1.5 rounded-md cursor-pointer transition-colors">Orders</div>
                <div className="text-white/60 hover:text-white px-3 py-1.5 rounded-md cursor-pointer transition-colors">Products Catalog</div>
                <div className="text-white/60 hover:text-white px-3 py-1.5 rounded-md cursor-pointer transition-colors">Occasion Offers</div>
                <div className="text-white/60 hover:text-white px-3 py-1.5 rounded-md cursor-pointer transition-colors">Delivery Cities</div>
                <div className="text-white/60 hover:text-white px-3 py-1.5 rounded-md cursor-pointer transition-colors">Team & Bakers</div>
                <div className="text-white/60 hover:text-white px-3 py-1.5 rounded-md cursor-pointer transition-colors">Subscribers</div>
                <div className="text-white/60 hover:text-white px-3 py-1.5 rounded-md cursor-pointer transition-colors">Settings</div>
              </div>
            </div>
          </div>

          {/* Main Executive Overview Area */}
          <div className="flex-1 p-5 md:p-6 space-y-5 bg-[#FAF8F5] overflow-y-auto min-w-0">
            
            {/* Header Title & Button */}
            <div className="flex justify-between items-start border-b border-[#E5E0D8] pb-4 gap-3 flex-wrap">
              <div>
                <h3 className="text-lg font-extrabold text-[#111] font-sans tracking-tight">Store Executive Overview</h3>
                <p className="text-[11px] text-[#777] mt-0.5">Real-time sales, search analytics, and customer activity for MyHomelyCake Trivandrum.</p>
              </div>
              <button className="bg-[#E07A26] hover:bg-[#D06915] text-white font-mono text-[10px] font-bold px-3.5 py-1.5 rounded-full flex items-center gap-1 shrink-0 shadow-sm">
                <span>View All Orders (0 New)</span>
                <span>↗</span>
              </button>
            </div>

            {/* 4 Stat Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
              <div className="bg-white border border-[#E5E0D8] p-3 rounded-lg space-y-1 shadow-sm">
                <div className="text-[9px] text-[#888] font-bold uppercase tracking-wider">TODAY'S ORDERS</div>
                <div className="text-lg font-extrabold text-[#111]">0</div>
                <div className="text-[9px] text-[#999]">Orders placed today</div>
              </div>

              <div className="bg-white border border-[#E5E0D8] p-3 rounded-lg space-y-1 shadow-sm">
                <div className="text-[9px] text-[#888] font-bold uppercase tracking-wider">THIS WEEK</div>
                <div className="text-lg font-extrabold text-[#111]">2</div>
                <div className="text-[9px] text-[#054D3B] font-bold">Past 7 days total</div>
              </div>

              <div className="bg-white border border-[#E5E0D8] p-3 rounded-lg space-y-1 shadow-sm">
                <div className="text-[9px] text-[#888] font-bold uppercase tracking-wider">THIS MONTH</div>
                <div className="text-lg font-extrabold text-[#111]">2</div>
                <div className="text-[9px] text-[#E07A26] font-bold">Est. Revenue: ₹2,386</div>
              </div>

              <div className="bg-white border border-[#E5E0D8] p-3 rounded-lg space-y-1 shadow-sm">
                <div className="text-[9px] text-[#888] font-bold uppercase tracking-wider">SUBSCRIBERS</div>
                <div className="text-lg font-extrabold text-[#111]">4</div>
                <div className="text-[9px] text-[#999]">Newsletter captured</div>
              </div>
            </div>

            {/* Product & Engagement Analytics */}
            <div className="space-y-2.5">
              <div className="flex justify-between items-center">
                <h4 className="text-xs font-bold text-[#111] font-sans tracking-tight">Product & Engagement Analytics</h4>
                <span className="text-[9px] text-[#D9534F] border border-[#D9534F]/30 bg-[#FFF5F5] px-2.5 py-0.5 rounded-full font-mono font-medium">Reset Analytics</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-[10px] font-mono">
                {/* 🍰 Top Ordered Cakes */}
                <div className="bg-white border border-[#E5E0D8] p-3 rounded-lg space-y-2.5 shadow-sm">
                  <div className="font-bold border-b border-[#F0ECE6] pb-1.5 flex justify-between items-center text-[#111]">
                    <span>🍰 Top Ordered Cakes</span>
                    <span className="text-[#E07A26] text-[8px] bg-[#FFF5EC] px-1.5 py-0.5 rounded font-bold">WEEKLY</span>
                  </div>
                  <div className="space-y-2 text-[9px]">
                    <div className="flex justify-between items-center">
                      <span>#1 <b>Red Velvet Cake</b></span>
                      <span className="text-[#E07A26] font-bold">3 orders (₹1,000)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>#2 <b>Choco Butter Scotch</b></span>
                      <span>1 orders (₹1,000)</span>
                    </div>
                    <div className="flex justify-between items-center text-[#777]">
                      <span>#3 <b>White Vancho</b></span>
                      <span>1 orders (₹1,000)</span>
                    </div>
                  </div>
                </div>

                {/* 🔍 Most Searched Terms */}
                <div className="bg-white border border-[#E5E0D8] p-3 rounded-lg space-y-2.5 shadow-sm">
                  <div className="font-bold border-b border-[#F0ECE6] pb-1.5 flex justify-between items-center text-[#111]">
                    <span>🔍 Most Searched Terms</span>
                    <span className="text-[#337AB7] text-[8px] bg-[#EBF5FF] px-1.5 py-0.5 rounded font-bold">ANALYTICS</span>
                  </div>
                  <div className="space-y-2 text-[9px]">
                    <div className="flex justify-between items-center">
                      <span className="text-[#444]">"Category: Special Theme Cakes"</span>
                      <span className="bg-[#EBF5FF] text-[#337AB7] px-1.5 py-0.5 rounded font-bold">10 searches</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#444]">"Category: Cup Cakes"</span>
                      <span className="bg-[#EBF5FF] text-[#337AB7] px-1.5 py-0.5 rounded font-bold">5 searches</span>
                    </div>
                  </div>
                </div>

                {/* 🖱️ Most Clicked Cakes */}
                <div className="bg-white border border-[#E5E0D8] p-3 rounded-lg space-y-2.5 shadow-sm">
                  <div className="font-bold border-b border-[#F0ECE6] pb-1.5 flex justify-between items-center text-[#111]">
                    <span>🖱️ Most Clicked Cakes</span>
                    <span className="text-[#8E44AD] text-[8px] bg-[#F4ECF7] px-1.5 py-0.5 rounded font-bold">ENGAGEMENT</span>
                  </div>
                  <div className="space-y-2 text-[9px]">
                    <div className="flex justify-between items-center">
                      <b>Red Velvet Cake</b>
                      <span className="text-[#8E44AD] font-bold">8 clicks</span>
                    </div>
                    <div className="flex justify-between items-center text-[#444]">
                      <span>Chocolate Truffle cake</span>
                      <span>5 clicks</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Orders Table Row */}
            <div className="bg-white border border-[#E5E0D8] p-3.5 rounded-lg space-y-2 font-mono text-[9px] shadow-sm overflow-x-auto">
              <div className="flex justify-between font-bold text-[#111] border-b border-[#F0ECE6] pb-1.5 min-w-[520px]">
                <span>Recent Orders</span>
                <span className="text-[#E07A26] hover:underline cursor-pointer">View All Orders →</span>
              </div>
              <div className="flex justify-between items-center pt-1.5 text-[9.5px] min-w-[520px]">
                <span className="font-bold text-[#E07A26]">#MHC-6502</span>
                <span className="font-semibold text-[#111]">Nirmal</span>
                <span className="text-[#337AB7]">9847431696</span>
                <span className="font-bold text-[#111]">₹1,000</span>
                <span className="bg-[#EBF5FF] text-[#337AB7] px-2.5 py-0.5 rounded-full font-bold">Completed</span>
                <span className="text-[#777]">20/8/2026, 11:11 pm</span>
              </div>
            </div>
          </div>
        </div>
      );

    // STEP 4: TEAM & BAKERS MANAGEMENT (EXACT REPRODUCTION WITH GENUINE AVATARS)
    case 'bakery-admin-team':
      return (
        <div className="bg-[#FAF8F5] border border-[#E5E0D8] rounded-sm text-editorial font-sans text-xs overflow-hidden flex flex-col md:flex-row min-h-[490px]">
          {/* Dark Admin Sidebar */}
          <div className="w-full md:w-56 bg-[#111111] text-white p-3.5 flex flex-col justify-between shrink-0 space-y-4">
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#E07A26] flex items-center justify-center font-bold text-xs text-white shadow-sm">
                    MH
                  </div>
                  <div>
                    <div className="font-bold text-xs leading-none text-white tracking-tight">MyHomely...</div>
                    <div className="text-[8px] text-white/50 tracking-wider font-mono">ADMIN PANEL</div>
                  </div>
                </div>
                <span className="bg-[#054D3B] text-[#55E6C1] text-[8px] px-2 py-0.5 rounded-full flex items-center gap-1 font-mono font-semibold">
                  <Volume2 className="w-2.5 h-2.5" /> Sound ON
                </span>
              </div>

              <div className="space-y-1.5 font-mono text-[11px]">
                <div className="text-white/60 hover:text-white px-3 py-1.5 rounded-md cursor-pointer">Overview</div>
                <div className="text-white/60 hover:text-white px-3 py-1.5 rounded-md cursor-pointer">Orders</div>
                <div className="text-white/60 hover:text-white px-3 py-1.5 rounded-md cursor-pointer">Products Catalog</div>
                <div className="text-white/60 hover:text-white px-3 py-1.5 rounded-md cursor-pointer">Occasion Offers</div>
                <div className="text-white/60 hover:text-white px-3 py-1.5 rounded-md cursor-pointer">Delivery Cities</div>
                <div className="bg-[#E07A26] text-white font-bold px-3 py-2 rounded-md flex items-center justify-between shadow-sm">
                  <span>Team & Bakers</span>
                  <span className="text-xs">›</span>
                </div>
                <div className="text-white/60 hover:text-white px-3 py-1.5 rounded-md cursor-pointer">Subscribers</div>
                <div className="text-white/60 hover:text-white px-3 py-1.5 rounded-md cursor-pointer">Settings</div>
              </div>
            </div>
          </div>

          {/* Main Team & Bakers Content */}
          <div className="flex-1 p-5 md:p-6 space-y-5 bg-[#FAF8F5] overflow-y-auto min-w-0">
            {/* Top Banner Card */}
            <div className="bg-white border border-[#E5E0D8] p-4 rounded-xl shadow-sm flex justify-between items-center flex-wrap gap-3">
              <div>
                <span className="text-[9px] font-mono text-[#E07A26] bg-[#FFF5EC] px-2.5 py-0.5 rounded-full font-bold border border-[#E07A26]/20">
                  Home Page "Meet the Team" Showcase
                </span>
                <h3 className="text-lg font-extrabold text-[#111] font-sans mt-1.5 tracking-tight">Team & Bakers Management (5)</h3>
                <p className="text-[11px] text-[#777] mt-0.5">Manage the artisans, bakers, and coordinators featured in the Home page "Behind the Scenes" carousel.</p>
              </div>

              <button className="bg-[#E07A26] hover:bg-[#D06915] text-white font-mono text-[10px] font-bold px-4 py-2 rounded-full flex items-center gap-1.5 shadow-sm">
                <Plus className="w-3.5 h-3.5" /> Add Team Member
              </button>
            </div>

            {/* Bakers Cards Grid (Exact Screenshot Reproduction with Genuine Profile Photos) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 font-sans">
              
              {/* Baker 1: Angem (Head Chef) */}
              <div className="bg-white border border-[#E5E0D8] p-3.5 rounded-xl space-y-3 shadow-sm flex flex-col justify-between">
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2.5">
                    <img 
                      src="/images/bakers/angem.png" 
                      alt="Angem Head Chef"
                      className="w-11 h-11 rounded-full object-cover border-2 border-[#E07A26] shadow-sm shrink-0"
                    />
                    <div>
                      <h5 className="font-extrabold text-sm text-[#111]">Angem</h5>
                      <span className="bg-[#FFF5EC] text-[#E07A26] text-[8px] font-mono px-2 py-0.5 rounded-full font-bold border border-[#E07A26]/20">
                        Head Chef
                      </span>
                    </div>
                  </div>
                  <p className="text-[9.5px] text-[#555] italic bg-[#FAF8F5] p-2.5 rounded-lg border border-[#F0ECE6] leading-relaxed">
                    "Pioneered MyHomelyCake with authentic, 100% preservative-free... homemade recipes."
                  </p>
                </div>
                <div className="flex justify-between items-center font-mono text-[9px] pt-1">
                  <span className="text-[#888] cursor-pointer hover:text-[#111] font-bold">↑ ↓</span>
                  <div className="flex items-center gap-1.5">
                    <button className="bg-white border border-[#E5E0D8] hover:border-[#E07A26] text-[#E07A26] px-2.5 py-0.5 rounded font-bold transition-colors">Edit</button>
                    <button className="bg-[#FFF0F0] hover:bg-[#FFE0E0] text-[#D9534F] p-1 rounded transition-colors">🗑</button>
                  </div>
                </div>
              </div>

              {/* Baker 2: Lilong (Chef) */}
              <div className="bg-white border border-[#E5E0D8] p-3.5 rounded-xl space-y-3 shadow-sm flex flex-col justify-between">
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2.5">
                    <img 
                      src="/images/bakers/lilong.png" 
                      alt="Lilong Chef"
                      className="w-11 h-11 rounded-full object-cover border-2 border-[#337AB7] shadow-sm shrink-0"
                    />
                    <div>
                      <h5 className="font-extrabold text-sm text-[#111]">Lilong</h5>
                      <span className="bg-[#EBF5FF] text-[#337AB7] text-[8px] font-mono px-2 py-0.5 rounded-full font-bold border border-[#337AB7]/20">
                        Chef
                      </span>
                    </div>
                  </div>
                  <p className="text-[9.5px] text-[#555] italic bg-[#FAF8F5] p-2.5 rounded-lg border border-[#F0ECE6] leading-relaxed">
                    "Specializes in Belgian Truffle & Tender Coconut sponge perfection."
                  </p>
                </div>
                <div className="flex justify-between items-center font-mono text-[9px] pt-1">
                  <span className="text-[#888] cursor-pointer hover:text-[#111] font-bold">↑ ↓</span>
                  <div className="flex items-center gap-1.5">
                    <button className="bg-white border border-[#E5E0D8] hover:border-[#E07A26] text-[#E07A26] px-2.5 py-0.5 rounded font-bold transition-colors">Edit</button>
                    <button className="bg-[#FFF0F0] hover:bg-[#FFE0E0] text-[#D9534F] p-1 rounded transition-colors">🗑</button>
                  </div>
                </div>
              </div>

              {/* Baker 3: Ayon (Head Baker) */}
              <div className="bg-white border border-[#E5E0D8] p-3.5 rounded-xl space-y-3 shadow-sm flex flex-col justify-between">
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2.5">
                    <img 
                      src="/images/bakers/ayon.png" 
                      alt="Ayon Head Baker"
                      className="w-11 h-11 rounded-full object-cover border-2 border-[#8E44AD] shadow-sm shrink-0"
                    />
                    <div>
                      <h5 className="font-extrabold text-sm text-[#111]">Ayon</h5>
                      <span className="bg-[#F4ECF7] text-[#8E44AD] text-[8px] font-mono px-2 py-0.5 rounded-full font-bold border border-[#8E44AD]/20">
                        Head Baker
                      </span>
                    </div>
                  </div>
                  <p className="text-[9.5px] text-[#555] italic bg-[#FAF8F5] p-2.5 rounded-lg border border-[#F0ECE6] leading-relaxed">
                    "Handcrafts exquisite custom birthday themes and floral cake designs."
                  </p>
                </div>
                <div className="flex justify-between items-center font-mono text-[9px] pt-1">
                  <span className="text-[#888] cursor-pointer hover:text-[#111] font-bold">↑ ↓</span>
                  <div className="flex items-center gap-1.5">
                    <button className="bg-white border border-[#E5E0D8] hover:border-[#E07A26] text-[#E07A26] px-2.5 py-0.5 rounded font-bold transition-colors">Edit</button>
                    <button className="bg-[#FFF0F0] hover:bg-[#FFE0E0] text-[#D9534F] p-1 rounded transition-colors">🗑</button>
                  </div>
                </div>
              </div>

              {/* Baker 4: Angap (Baker) */}
              <div className="bg-white border border-[#E5E0D8] p-3.5 rounded-xl space-y-3 shadow-sm flex flex-col justify-between">
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2.5">
                    <img 
                      src="/images/bakers/angap.png" 
                      alt="Angap Baker"
                      className="w-11 h-11 rounded-full object-cover border-2 border-[#054D3B] shadow-sm shrink-0"
                    />
                    <div>
                      <h5 className="font-extrabold text-sm text-[#111]">Angap</h5>
                      <span className="bg-[#EBFDF5] text-[#054D3B] text-[8px] font-mono px-2 py-0.5 rounded-full font-bold border border-[#054D3B]/20">
                        Baker
                      </span>
                    </div>
                  </div>
                  <p className="text-[9.5px] text-[#555] italic bg-[#FAF8F5] p-2.5 rounded-lg border border-[#F0ECE6] leading-relaxed">
                    "Ensures temperature-controlled, pristine delivery across Trivandrum."
                  </p>
                </div>
                <div className="flex justify-between items-center font-mono text-[9px] pt-1">
                  <span className="text-[#888] cursor-pointer hover:text-[#111] font-bold">↑ ↓</span>
                  <div className="flex items-center gap-1.5">
                    <button className="bg-white border border-[#E5E0D8] hover:border-[#E07A26] text-[#E07A26] px-2.5 py-0.5 rounded font-bold transition-colors">Edit</button>
                    <button className="bg-[#FFF0F0] hover:bg-[#FFE0E0] text-[#D9534F] p-1 rounded transition-colors">🗑</button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      );

    // STEP 2: PRODUCTS CATALOG WITH EDIT CAKE MODAL OVERLAY
    case 'bakery-admin-catalog':
      return (
        <div className="bg-[#FAF8F5] border border-[#E5E0D8] rounded-sm text-editorial font-sans text-xs overflow-hidden flex flex-col md:flex-row min-h-[490px] relative">
          {/* Dark Admin Sidebar */}
          <div className="w-full md:w-56 bg-[#111111] text-white p-3.5 flex flex-col justify-between shrink-0 space-y-4">
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#E07A26] flex items-center justify-center font-bold text-xs text-white">MH</div>
                  <div>
                    <div className="font-bold text-xs leading-none text-white">MyHomely...</div>
                    <div className="text-[8px] text-white/50 tracking-wider font-mono">ADMIN PANEL</div>
                  </div>
                </div>
                <span className="bg-[#054D3B] text-[#55E6C1] text-[8px] px-2 py-0.5 rounded-full flex items-center gap-1 font-mono font-semibold">
                  <Volume2 className="w-2.5 h-2.5" /> Sound ON
                </span>
              </div>

              <div className="space-y-1.5 font-mono text-[11px]">
                <div className="text-white/60 hover:text-white px-3 py-1.5 rounded-md cursor-pointer">Overview</div>
                <div className="text-white/60 hover:text-white px-3 py-1.5 rounded-md cursor-pointer">Orders</div>
                <div className="bg-[#E07A26] text-white font-bold px-3 py-2 rounded-md flex items-center justify-between shadow-sm">
                  <span>Products Catalog</span>
                  <span className="text-xs">›</span>
                </div>
                <div className="text-white/60 hover:text-white px-3 py-1.5 rounded-md cursor-pointer">Occasion Offers</div>
                <div className="text-white/60 hover:text-white px-3 py-1.5 rounded-md cursor-pointer">Delivery Cities</div>
              </div>
            </div>
          </div>

          {/* Main Content & Modal Layer */}
          <div className="flex-1 p-4 md:p-5 space-y-3 bg-[#FAF8F5] overflow-y-auto relative min-w-0">
            {/* Modal Overlay: Edit Cake Details & Photos */}
            <div className="bg-white border-2 border-[#E07A26] rounded-xl p-4 shadow-xl space-y-3 font-sans text-editorial text-[10px]">
              <div className="flex justify-between items-start border-b border-[#E5E0D8] pb-2">
                <div>
                  <h4 className="text-sm font-extrabold text-[#111]">Edit Cake Details & Photos</h4>
                  <p className="text-[9px] text-[#777]">Upload product photos, set weight prices, drag to reorder gallery, and toggle availability</p>
                </div>
                <X className="w-4 h-4 text-[#777] cursor-pointer" />
              </div>

              <div className="grid grid-cols-2 gap-2 font-mono text-[9px]">
                <div>
                  <label className="font-bold text-[#111]">Cake Name *</label>
                  <input readOnly value="Red Velvet Cake" className="w-full bg-[#FAF8F5] border border-[#E5E0D8] px-2.5 py-1 rounded text-[#111] font-bold" />
                </div>
                <div>
                  <label className="font-bold text-[#111]">Category *</label>
                  <select disabled className="w-full bg-[#FAF8F5] border border-[#E5E0D8] px-2.5 py-1 rounded text-[#111]">
                    <option>Fresh Cream Cakes</option>
                  </select>
                </div>
              </div>

              {/* Product Image Gallery Box */}
              <div className="bg-[#FFFDF7] border border-[#F0E6D2] p-3 rounded-lg space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-[#E07A26] text-[9px]">📷 Product Image Gallery (Batch Upload & Reorder)</span>
                  <button className="bg-[#E07A26] text-white px-2.5 py-1 rounded font-mono text-[8px] font-bold">+ Upload Multiple Files</button>
                </div>
                <div className="grid grid-cols-4 gap-1.5 text-center font-mono text-[8px]">
                  <div className="bg-white border border-[#E07A26] p-1.5 rounded-lg shadow-sm">
                    <span className="bg-[#D9534F] text-white px-1 py-0.5 rounded text-[7px] font-bold">Main Cover</span>
                    <div className="h-10 bg-[#F5F2EC] mt-1 rounded flex items-center justify-center text-xs">🎂</div>
                  </div>
                  <div className="bg-white border border-[#E5E0D8] p-1.5 rounded-lg shadow-sm">
                    <span className="bg-[#F0AD4E] text-white px-1 py-0.5 rounded text-[7px] font-bold">Photo 2</span>
                    <div className="h-10 bg-[#F5F2EC] mt-1 rounded flex items-center justify-center text-xs">🎂</div>
                  </div>
                  <div className="bg-white border border-[#E5E0D8] p-1.5 rounded-lg shadow-sm">
                    <span className="bg-[#F0AD4E] text-white px-1 py-0.5 rounded text-[7px] font-bold">Photo 3</span>
                    <div className="h-10 bg-[#F5F2EC] mt-1 rounded flex items-center justify-center text-xs">🎂</div>
                  </div>
                  <div className="bg-white border border-[#E5E0D8] p-1.5 rounded-lg shadow-sm">
                    <span className="bg-[#F0AD4E] text-white px-1 py-0.5 rounded text-[7px] font-bold">Photo 4</span>
                    <div className="h-10 bg-[#F5F2EC] mt-1 rounded flex items-center justify-center text-xs">🎂</div>
                  </div>
                </div>
              </div>

              {/* Weight / Quantity & Price Variants */}
              <div className="bg-[#FFFDF7] border border-[#F0E6D2] p-3 rounded-lg space-y-2 font-mono text-[8px]">
                <div className="flex justify-between items-center font-bold text-[#111]">
                  <span>⚖️ Weight / Quantity & Price Variants (Admin Custom Prices)</span>
                  <span className="bg-[#E07A26] text-white px-2 py-0.5 rounded">+ Add Variant</span>
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  <div className="bg-white border border-[#E5E0D8] p-1.5 rounded flex justify-between">
                    <span>700g</span>
                    <span className="font-bold text-[#E07A26]">₹650</span>
                  </div>
                  <div className="bg-white border-2 border-[#E07A26] p-1.5 rounded flex justify-between font-bold">
                    <span>⭐ 1000g (Default)</span>
                    <span className="text-[#E07A26]">₹1,000</span>
                  </div>
                  <div className="bg-white border border-[#E5E0D8] p-1.5 rounded flex justify-between">
                    <span>1500g</span>
                    <span className="font-bold text-[#E07A26]">₹1,500</span>
                  </div>
                  <div className="bg-white border border-[#E5E0D8] p-1.5 rounded flex justify-between">
                    <span>2000g</span>
                    <span className="font-bold text-[#E07A26]">₹2,000</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center pt-1 font-mono text-[9px]">
                <span className="text-[#777]">Position Number: <b>#2</b></span>
                <div className="flex gap-2">
                  <button className="bg-white border border-[#E5E0D8] px-3 py-1 rounded text-[#777]">Cancel</button>
                  <button className="bg-[#E07A26] text-white px-3.5 py-1 rounded font-bold">Update Product</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    // STEP 3: ORDER MANAGEMENT (ORDERS LIST & WORKFLOW)
    case 'bakery-admin-orders':
      return (
        <div className="bg-[#FAF8F5] border border-[#E5E0D8] rounded-sm text-editorial font-sans text-xs overflow-hidden flex flex-col md:flex-row min-h-[490px]">
          {/* Dark Admin Sidebar */}
          <div className="w-full md:w-56 bg-[#111111] text-white p-3.5 flex flex-col justify-between shrink-0 space-y-4">
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#E07A26] flex items-center justify-center font-bold text-xs text-white">MH</div>
                  <div>
                    <div className="font-bold text-xs leading-none text-white">MyHomely...</div>
                    <div className="text-[8px] text-white/50 tracking-wider font-mono">ADMIN PANEL</div>
                  </div>
                </div>
                <span className="bg-[#054D3B] text-[#55E6C1] text-[8px] px-2 py-0.5 rounded-full flex items-center gap-1 font-mono font-semibold">
                  <Volume2 className="w-2.5 h-2.5" /> Sound ON
                </span>
              </div>

              <div className="space-y-1.5 font-mono text-[11px]">
                <div className="text-white/60 hover:text-white px-3 py-1.5 rounded-md cursor-pointer">Overview</div>
                <div className="bg-[#E07A26] text-white font-bold px-3 py-2 rounded-md flex items-center justify-between shadow-sm">
                  <span>Orders</span>
                  <span className="text-xs">›</span>
                </div>
                <div className="text-white/60 hover:text-white px-3 py-1.5 rounded-md cursor-pointer">Products Catalog</div>
                <div className="text-white/60 hover:text-white px-3 py-1.5 rounded-md cursor-pointer">Occasion Offers</div>
              </div>
            </div>
          </div>

          {/* Main Order Management Area */}
          <div className="flex-1 p-5 md:p-6 space-y-4 bg-[#FAF8F5] overflow-y-auto min-w-0">
            <div className="flex justify-between items-start border-b border-[#E5E0D8] pb-3 gap-2 flex-wrap">
              <div>
                <h3 className="text-base font-extrabold text-[#111] font-sans">Order Management (2)</h3>
                <p className="text-[10px] text-[#777]">Manage customer order workflow stages, continuous audio notifications, and delivery progress.</p>
              </div>
              <button className="bg-white border border-[#E5E0D8] text-[#111] font-mono text-[10px] px-3 py-1 rounded-md flex items-center gap-1">
                <RefreshCw className="w-3 h-3 text-[#E07A26]" /> Refresh
              </button>
            </div>

            {/* Status Filter Tabs */}
            <div className="flex flex-wrap gap-1.5 font-mono text-[9px]">
              <span className="bg-[#E07A26] text-white px-3 py-1 rounded-full font-bold">ALL 2</span>
              <span className="bg-white border border-[#E5E0D8] text-[#777] px-3 py-1 rounded-full">NEW 0</span>
              <span className="bg-white border border-[#E5E0D8] text-[#777] px-3 py-1 rounded-full">CONTACTED 0</span>
              <span className="bg-white border border-[#E5E0D8] text-[#777] px-3 py-1 rounded-full">CONFIRMED 0</span>
              <span className="bg-white border border-[#E5E0D8] text-[#337AB7] px-3 py-1 rounded-full font-bold">COMPLETED 2</span>
            </div>

            {/* Live Order Card #1: #MHC-6502 */}
            <div className="bg-white border border-[#E5E0D8] p-3.5 rounded-lg space-y-3 font-mono text-[10px] shadow-sm">
              <div className="flex flex-wrap items-center justify-between border-b border-[#F0ECE6] pb-2 gap-2">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#E07A26] text-xs">#MHC-6502</span>
                  <span className="bg-[#EBF5FF] text-[#337AB7] px-2 py-0.5 rounded font-bold text-[8px]">STATUS: COMPLETED</span>
                  <span className="bg-[#EBFDF5] text-[#054D3B] px-2 py-0.5 rounded font-bold text-[8px]">CUSTOMER: DELIVERED</span>
                </div>

                <div className="flex items-center gap-1.5 text-[9px]">
                  <span className="bg-[#111] text-white px-2 py-1 rounded flex items-center gap-1 cursor-pointer">🖨 Print Receipt</span>
                  <span className="bg-[#054D3B] text-white px-2 py-1 rounded flex items-center gap-1 cursor-pointer">📞 Call</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 text-[9px]">
                <div className="md:col-span-5 space-y-1">
                  <div><b>Customer:</b> Nirmal</div>
                  <div><b>Mobile:</b> <span className="text-[#337AB7] underline">9847431696</span></div>
                  <div><b>City:</b> Trivandrum</div>
                  <div><b>Delivery:</b> 2026-08-21 • 11:40 PM</div>
                  <div className="font-serif italic text-[#E07A26]">🎂 Cake Message: "Happy Birthday Jiju"</div>
                </div>

                <div className="md:col-span-7 bg-[#FAF8F5] p-2.5 rounded-lg border border-[#E5E0D8] space-y-2">
                  <div className="font-bold flex justify-between text-[#111]">
                    <span>🎂 Choco Butter Scotch (1kg) x 1</span>
                    <span>₹1,000</span>
                  </div>
                  <div className="border-t border-[#E5E0D8] pt-1 flex justify-between font-extrabold text-[#111]">
                    <span>Total Amount to Collect:</span>
                    <span className="text-[#E07A26]">₹1,000 (+50 pts Credited)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    // STEP 5: NEWSLETTER SUBSCRIBERS (4 EMAILS)
    case 'bakery-admin-subscribers':
      return (
        <div className="bg-[#FAF8F5] border border-[#E5E0D8] rounded-sm text-editorial font-sans text-xs overflow-hidden flex flex-col md:flex-row min-h-[490px]">
          {/* Dark Admin Sidebar */}
          <div className="w-full md:w-56 bg-[#111111] text-white p-3.5 flex flex-col justify-between shrink-0 space-y-4">
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#E07A26] flex items-center justify-center font-bold text-xs text-white">MH</div>
                  <div>
                    <div className="font-bold text-xs leading-none text-white">MyHomely...</div>
                    <div className="text-[8px] text-white/50 tracking-wider font-mono">ADMIN PANEL</div>
                  </div>
                </div>
                <span className="bg-[#054D3B] text-[#55E6C1] text-[8px] px-2 py-0.5 rounded-full flex items-center gap-1 font-mono font-semibold">
                  <Volume2 className="w-2.5 h-2.5" /> Sound ON
                </span>
              </div>

              <div className="space-y-1.5 font-mono text-[11px]">
                <div className="text-white/60 hover:text-white px-3 py-1.5 rounded-md cursor-pointer">Overview</div>
                <div className="text-white/60 hover:text-white px-3 py-1.5 rounded-md cursor-pointer">Orders</div>
                <div className="text-white/60 hover:text-white px-3 py-1.5 rounded-md cursor-pointer">Products Catalog</div>
                <div className="bg-[#E07A26] text-white font-bold px-3 py-2 rounded-md flex items-center justify-between shadow-sm">
                  <span>Subscribers</span>
                  <span className="text-xs">›</span>
                </div>
                <div className="text-white/60 hover:text-white px-3 py-1.5 rounded-md cursor-pointer">Settings</div>
              </div>
            </div>
          </div>

          {/* Main Subscribers Table */}
          <div className="flex-1 p-5 md:p-6 space-y-4 bg-[#FAF8F5] overflow-y-auto min-w-0">
            <div className="flex justify-between items-start border-b border-[#E5E0D8] pb-3 gap-2 flex-wrap">
              <div>
                <h3 className="text-base font-extrabold text-[#111] font-sans">Newsletter Subscribers (4)</h3>
                <p className="text-[10px] text-[#777]">List of customer emails captured via the sweet updates signup block.</p>
              </div>
              <button className="bg-[#E07A26] hover:bg-[#D06915] text-white font-mono text-[10px] font-bold px-3.5 py-1.5 rounded-full flex items-center gap-1 shadow-sm">
                <Download className="w-3 h-3" /> Export CSV
              </button>
            </div>

            {/* Subscribers Table Container with overflow-x-auto */}
            <div className="bg-white border border-[#E5E0D8] rounded-xl overflow-x-auto font-mono text-[10px] shadow-sm">
              <div className="min-w-[550px]">
                <div className="grid grid-cols-12 bg-[#FAF8F5] p-3 font-bold text-[#777] border-b border-[#E5E0D8]">
                  <div className="col-span-1">#</div>
                  <div className="col-span-6">EMAIL ADDRESS</div>
                  <div className="col-span-4">SUBSCRIPTION DATE</div>
                  <div className="col-span-1 text-right">ACTION</div>
                </div>

                {/* Email 1 */}
                <div className="grid grid-cols-12 p-3 items-center border-b border-[#F0ECE6]">
                  <div className="col-span-1 text-[#777]">1</div>
                  <div className="col-span-6 font-bold text-[#111]">coady@gmail.com</div>
                  <div className="col-span-4 text-[#777]">16 Aug 2026, 01:13 am</div>
                  <div className="col-span-1 text-right text-[#D9534F] cursor-pointer">🗑</div>
                </div>

                {/* Email 2 */}
                <div className="grid grid-cols-12 p-3 items-center border-b border-[#F0ECE6]">
                  <div className="col-span-1 text-[#777]">2</div>
                  <div className="col-span-6 font-bold text-[#111]">test@gmail.com</div>
                  <div className="col-span-4 text-[#777]">7 Aug 2026, 06:04 pm</div>
                  <div className="col-span-1 text-right text-[#D9534F] cursor-pointer">🗑</div>
                </div>

                {/* Email 3 */}
                <div className="grid grid-cols-12 p-3 items-center border-b border-[#F0ECE6]">
                  <div className="col-span-1 text-[#777]">3</div>
                  <div className="col-span-6 font-bold text-[#337AB7] underline">itsfaizimam@gmail.com</div>
                  <div className="col-span-4 text-[#777]">7 Aug 2026, 05:41 pm</div>
                  <div className="col-span-1 text-right text-[#D9534F] cursor-pointer">🗑</div>
                </div>

                {/* Email 4 */}
                <div className="grid grid-cols-12 p-3 items-center">
                  <div className="col-span-1 text-[#777]">4</div>
                  <div className="col-span-6 font-bold text-[#E07A26]">myhomelycakes@gmail.com</div>
                  <div className="col-span-4 text-[#777]">7 Aug 2026, 05:38 pm</div>
                  <div className="col-span-1 text-right text-[#D9534F] cursor-pointer">🗑</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    // STEP 6: ADMIN SETTINGS & HERO CUSTOMIZATION
    case 'bakery-admin-settings':
      return (
        <div className="bg-[#FAF8F5] border border-[#E5E0D8] rounded-sm text-editorial font-sans text-xs overflow-hidden flex flex-col md:flex-row min-h-[490px]">
          {/* Dark Admin Sidebar */}
          <div className="w-full md:w-56 bg-[#111111] text-white p-3.5 flex flex-col justify-between shrink-0 space-y-4">
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#E07A26] flex items-center justify-center font-bold text-xs text-white">MH</div>
                  <div>
                    <div className="font-bold text-xs leading-none text-white">MyHomely...</div>
                    <div className="text-[8px] text-white/50 tracking-wider font-mono">ADMIN PANEL</div>
                  </div>
                </div>
                <span className="bg-[#054D3B] text-[#55E6C1] text-[8px] px-2 py-0.5 rounded-full flex items-center gap-1 font-mono font-semibold">
                  <Volume2 className="w-2.5 h-2.5" /> Sound ON
                </span>
              </div>

              <div className="space-y-1.5 font-mono text-[11px]">
                <div className="text-white/60 hover:text-white px-3 py-1.5 rounded-md cursor-pointer">Overview</div>
                <div className="text-white/60 hover:text-white px-3 py-1.5 rounded-md cursor-pointer">Orders</div>
                <div className="text-white/60 hover:text-white px-3 py-1.5 rounded-md cursor-pointer">Products Catalog</div>
                <div className="bg-[#E07A26] text-white font-bold px-3 py-2 rounded-md flex items-center justify-between shadow-sm">
                  <span>Settings</span>
                  <span className="text-xs">›</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Settings Content */}
          <div className="flex-1 p-5 md:p-6 space-y-4 bg-[#FAF8F5] overflow-y-auto min-w-0 font-mono text-[10px]">
            <div className="border-b border-[#E5E0D8] pb-3">
              <h3 className="text-base font-extrabold text-[#111] font-sans">Admin Settings & Hero Customization</h3>
              <p className="text-[10px] text-[#777]">Add, edit, or delete Hero banner slides with live redirect links, prices, titles, and store notification credentials.</p>
            </div>

            {/* Block 1: Home Page Hero Banner Manager */}
            <div className="bg-white border border-[#F0E6D2] p-4 rounded-xl space-y-3 shadow-sm">
              <div className="flex justify-between items-center font-bold text-[#111] border-b border-[#F0ECE6] pb-2 font-sans">
                <span className="text-xs text-[#E07A26]">🎉 Home Page Hero Banner & Slides Manager</span>
                <button className="bg-[#E07A26] text-white px-3 py-1 rounded-full text-[9px] font-mono">Save Hero Banner</button>
              </div>

              <div className="bg-[#FFFDF7] p-3 rounded-lg border border-[#F0E6D2] space-y-2">
                <div className="flex justify-between items-center text-[9px]">
                  <span className="font-bold text-[#E07A26]">Hero Image Slides (3 Active Slides)</span>
                  <span className="bg-[#E07A26] text-white px-2.5 py-0.5 rounded text-[8px]">+ Add New Slide</span>
                </div>

                {/* Slide 1 */}
                <div className="bg-white p-2.5 rounded-lg border border-[#E5E0D8] flex items-center gap-2.5">
                  <div className="w-10 h-10 bg-[#F5F2EC] rounded-lg flex items-center justify-center text-xs">🎂</div>
                  <div className="flex-1 text-[9px]">
                    <div className="font-bold text-[#111]">Slide #1: Chocolate Truffle</div>
                    <div className="text-[#E07A26]">BESTSELLER • ₹1,000 → /shop</div>
                  </div>
                </div>

                {/* Slide 2 */}
                <div className="bg-white p-2.5 rounded-lg border border-[#E5E0D8] flex items-center gap-2.5">
                  <div className="w-10 h-10 bg-[#F5F2EC] rounded-lg flex items-center justify-center text-xs">🍰</div>
                  <div className="flex-1 text-[9px]">
                    <div className="font-bold text-[#111]">Slide #2: Vancho Cake</div>
                    <div className="text-[#337AB7]">SEASONAL SPECIAL • ₹1,000 → /shop</div>
                  </div>
                </div>
              </div>

              {/* Form Input Preview */}
              <div className="space-y-2 text-[9px]">
                <div>
                  <label className="text-[#777] block font-bold">Main Heading *</label>
                  <input readOnly value="Freshly Baked Homemade Cakes Delivered in Trivandrum." className="w-full bg-[#FAF8F5] border border-[#E5E0D8] p-2 rounded-lg font-bold text-[#111]" />
                </div>
                <div>
                  <label className="text-[#777] block font-bold">Secondary Phone Number</label>
                  <input readOnly value="+91 99470 66011" className="w-full bg-[#FAF8F5] border border-[#E5E0D8] p-2 rounded-lg text-[#111]" />
                </div>
              </div>
            </div>

            {/* Block 2: Admin Login Credentials */}
            <div className="bg-white border border-[#E5E0D8] p-4 rounded-xl space-y-2 text-[9px] shadow-sm">
              <div className="font-bold text-[#111] font-sans">🔒 Admin Login Credentials</div>
              <div className="flex justify-between items-center text-[#777]">
                <span>Admin Login Email: <b>myhomelycakes@gmail.com</b></span>
                <button className="bg-[#E07A26] text-white px-3 py-1 rounded-md text-[8px]">Save Admin Credentials</button>
              </div>
            </div>
          </div>
        </div>
      );

    // STEP 7: DELIVERY CITIES MANAGER
    case 'bakery-admin-cities':
      return (
        <div className="bg-[#FAF8F5] border border-[#E5E0D8] rounded-sm text-editorial font-sans text-xs overflow-hidden flex flex-col md:flex-row min-h-[490px]">
          {/* Dark Admin Sidebar */}
          <div className="w-full md:w-56 bg-[#111111] text-white p-3.5 flex flex-col justify-between shrink-0 space-y-4">
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#E07A26] flex items-center justify-center font-bold text-xs text-white">MH</div>
                  <div>
                    <div className="font-bold text-xs leading-none text-white">MyHomely...</div>
                    <div className="text-[8px] text-white/50 tracking-wider font-mono">ADMIN PANEL</div>
                  </div>
                </div>
                <span className="bg-[#054D3B] text-[#55E6C1] text-[8px] px-2 py-0.5 rounded-full flex items-center gap-1 font-mono font-semibold">
                  <Volume2 className="w-2.5 h-2.5" /> Sound ON
                </span>
              </div>

              <div className="space-y-1.5 font-mono text-[11px]">
                <div className="text-white/60 hover:text-white px-3 py-1.5 rounded-md cursor-pointer">Overview</div>
                <div className="text-white/60 hover:text-white px-3 py-1.5 rounded-md cursor-pointer">Orders</div>
                <div className="text-white/60 hover:text-white px-3 py-1.5 rounded-md cursor-pointer">Products Catalog</div>
                <div className="bg-[#E07A26] text-white font-bold px-3 py-2 rounded-md flex items-center justify-between shadow-sm">
                  <span>Delivery Cities</span>
                  <span className="text-xs">›</span>
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Cities Content */}
          <div className="flex-1 p-5 md:p-6 space-y-4 bg-[#FAF8F5] overflow-y-auto min-w-0">
            <div className="bg-white border border-[#E5E0D8] p-4 rounded-xl flex justify-between items-center flex-wrap gap-2 shadow-sm">
              <div>
                <div className="flex items-center gap-1 text-xs font-bold text-[#111] font-sans">
                  <MapPin className="w-4 h-4 text-[#E07A26]" />
                  <span>Delivery Cities</span>
                </div>
                <p className="text-[10px] text-[#777]">Manage which cities your bakery delivers to. Trivandrum is always the default.</p>
              </div>

              <button className="bg-[#E07A26] text-white font-mono text-[10px] font-bold px-3.5 py-1.5 rounded-full flex items-center gap-1 shadow-sm">
                <Plus className="w-3 h-3" /> Add City
              </button>
            </div>

            {/* Cities Table */}
            <div className="bg-white border border-[#E5E0D8] rounded-xl overflow-x-auto font-mono text-[10px] shadow-sm">
              <div className="min-w-[500px]">
                <div className="grid grid-cols-12 bg-[#FAF8F5] p-2.5 font-bold text-[#777] border-b border-[#E5E0D8]">
                  <div className="col-span-4">CITY NAME</div>
                  <div className="col-span-3">STATUS</div>
                  <div className="col-span-2">SORT</div>
                  <div className="col-span-3 text-right">ACTIONS</div>
                </div>

                <div className="grid grid-cols-12 p-3 items-center border-b border-[#F0ECE6]">
                  <div className="col-span-4 font-bold text-[#111] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#5CB85C]"></span>
                    <span>Trivandrum</span>
                    <span className="bg-[#FFF5EC] text-[#E07A26] text-[8px] px-1.5 py-0.5 rounded font-bold">DEFAULT</span>
                  </div>
                  <div className="col-span-3">
                    <span className="bg-[#EBFDF5] text-[#054D3B] border border-[#55E6C1]/30 px-2 py-0.5 rounded-full font-bold">
                      👁 Active
                    </span>
                  </div>
                  <div className="col-span-2 text-[#777]">0</div>
                  <div className="col-span-3 flex justify-end gap-1">
                    <span className="bg-white border border-[#E5E0D8] px-2 py-0.5 rounded text-[#E07A26] cursor-pointer">Edit</span>
                    <span className="bg-[#FFF0F0] text-[#D9534F] px-2 py-0.5 rounded cursor-pointer">Delete</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    // STEP 8: STOREFRONT SYNC
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
              When the bakery staff updates a cake price, creates an occasion offer, adds team members, updates delivery cities, or changes an order status to <b>Completed/Delivered</b>, the change reflects on the customer site immediately.
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

          <div className="p-3 bg-studio-surface border border-studio-border rounded-sm space-y-2 text-xs text-left font-mono">
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
