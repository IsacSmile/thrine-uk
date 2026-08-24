import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { Play, Volume2, Maximize2, Settings, Subtitles, CheckCircle2, X } from 'lucide-react';

interface HeroVideoSectionProps {
  videoUrl?: string; // Optional YouTube / Loom / HTML5 embed URL
}

export const HeroVideoSection: React.FC<HeroVideoSectionProps> = ({ videoUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Fallback demo video if none provided
  const activeVideoUrl = videoUrl || "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";

  const handlePlayClick = () => {
    if (videoUrl) {
      setIsPlaying(true);
    } else {
      setShowModal(true);
    }
  };

  return (
    <section className="py-12 bg-paper border-b border-studio-border font-sans relative overflow-hidden">
      <Container size="lg">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-studio-surface border border-studio-border rounded-sm text-xs font-mono font-bold text-terracotta uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse"></span>
            <span>SYSTEM WALKTHROUGH DEMO</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-editorial tracking-tight font-sans">
            How Thrine Engineers Custom Business Systems
          </h2>

          <p className="text-xs sm:text-sm text-editorial-muted leading-relaxed font-normal">
            Watch this 5-minute video breakdown before booking your consultation call. See how we digitize customer bookings, product orders, and operational workflows.
          </p>
        </div>

        {/* Video Player Box */}
        <div className="max-w-4xl mx-auto">
          <div 
            onClick={handlePlayClick}
            className="relative bg-dark border border-studio-border rounded-sm shadow-2xl overflow-hidden aspect-video group cursor-pointer"
          >
            {isPlaying && videoUrl ? (
              <iframe
                src={activeVideoUrl}
                title="Thrine Studio System Breakdown"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <>
                {/* Visual Video Thumbnail / Studio Dark Canvas */}
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black text-paper p-6 sm:p-12 flex flex-col justify-between select-none">
                  
                  {/* Subtle Top Branding Bar */}
                  <div className="flex items-center justify-between text-xs font-mono text-paper/60 border-b border-paper/10 pb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                      <span className="text-paper font-bold tracking-wider">THRINE STUDIO ENGINE</span>
                    </div>
                    <div className="hidden sm:flex items-center gap-3 text-[11px]">
                      <span className="px-2 py-0.5 bg-paper/10 border border-paper/15 rounded-sm">5:53 HD</span>
                      <span className="px-2 py-0.5 bg-terracotta/20 text-terracotta border border-terracotta/30 rounded-sm font-bold">OPERATIONAL DEMO</span>
                    </div>
                  </div>

                  {/* Center Content Mockup & Play Button */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center my-auto">
                    
                    {/* Left: Workflow Diagram Badges */}
                    <div className="hidden md:flex md:col-span-4 flex-col gap-2.5 font-mono text-xs">
                      <div className="p-3 bg-paper/5 border border-paper/10 rounded-sm flex items-center gap-3 backdrop-blur-sm">
                        <div className="w-7 h-7 rounded-full bg-terracotta/20 text-terracotta flex items-center justify-center font-bold text-xs shrink-0">1</div>
                        <div>
                          <div className="font-bold text-paper text-[11px]">CUSTOMER ORDER / LEAD</div>
                          <div className="text-[9px] text-paper/50">Form Fill / Direct Booking</div>
                        </div>
                      </div>

                      <div className="p-3 bg-paper/5 border border-paper/10 rounded-sm flex items-center gap-3 backdrop-blur-sm">
                        <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0">2</div>
                        <div>
                          <div className="font-bold text-paper text-[11px]">SYSTEM AUTOMATION</div>
                          <div className="text-[9px] text-paper/50">Inventory & DB Sync</div>
                        </div>
                      </div>

                      <div className="p-3 bg-paper/5 border border-paper/10 rounded-sm flex items-center gap-3 backdrop-blur-sm">
                        <div className="w-7 h-7 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs shrink-0">3</div>
                        <div>
                          <div className="font-bold text-paper text-[11px]">ADMIN DISPATCH</div>
                          <div className="text-[9px] text-paper/50">Instant Workflow Execution</div>
                        </div>
                      </div>
                    </div>

                    {/* Center / Right: Big Headline & Play Button */}
                    <div className="col-span-1 md:col-span-8 flex flex-col items-center md:items-end text-center md:text-right space-y-4">
                      
                      {/* Play Button Overlay */}
                      <div className="relative group-hover:scale-110 transition-transform duration-300">
                        <div className="absolute -inset-4 bg-terracotta/30 rounded-full blur-md group-hover:bg-terracotta/50 transition-all"></div>
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-terracotta text-paper flex items-center justify-center shadow-2xl relative z-10 border-2 border-paper/20">
                          <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-paper translate-x-0.5" />
                        </div>
                      </div>

                      <div>
                        <div className="text-xs font-mono text-terracotta uppercase tracking-widest font-bold mb-1">
                          SYSTEM ARCHITECTURE WALKTHROUGH
                        </div>
                        <h3 className="text-xl sm:text-3xl font-extrabold text-paper tracking-tight font-sans">
                          How We Build Custom Business Systems
                        </h3>
                        <p className="text-xs text-paper/60 max-w-md mt-1 hidden sm:block">
                          A 5-minute deep dive showing the exact frontend customer experience and back-office admin engines we build for clients.
                        </p>
                      </div>

                    </div>

                  </div>

                  {/* Bottom Video Controls Bar Mockup */}
                  <div className="flex items-center justify-between gap-4 text-xs font-mono text-paper/70 pt-3 border-t border-paper/10">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded bg-paper/10 flex items-center justify-center text-paper">
                        <Play className="w-3.5 h-3.5 fill-paper" />
                      </div>
                      <span className="text-[11px] font-bold text-paper">5:53</span>
                      {/* Timeline Bar */}
                      <div className="w-24 sm:w-48 h-1.5 bg-paper/20 rounded-full overflow-hidden hidden sm:block">
                        <div className="w-1/3 h-full bg-terracotta rounded-full"></div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-paper/60 text-[11px]">
                      <Subtitles className="w-4 h-4 hover:text-paper" />
                      <Volume2 className="w-4 h-4 hover:text-paper" />
                      <Settings className="w-4 h-4 hover:text-paper" />
                      <Maximize2 className="w-4 h-4 hover:text-paper" />
                      <span className="font-bold text-terracotta">THRINE</span>
                    </div>
                  </div>

                </div>
              </>
            )}
          </div>

          {/* Caption text below video */}
          <div className="text-center mt-3 text-xs font-mono text-editorial-muted">
            Watch this before booking your consultation call. It shows the exact system architecture we'll build for your business.
          </div>
        </div>

      </Container>

      {/* Interactive Modal Player (Triggered if clicked without external URL) */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-paper border border-studio-border rounded-sm max-w-3xl w-full p-6 relative space-y-4 shadow-2xl font-sans">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 p-1 text-editorial-muted hover:text-editorial rounded-sm border border-studio-border bg-studio-surface"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <div className="text-xs font-mono text-terracotta uppercase tracking-wider font-bold">
                SYSTEM DEMO VIDEO
              </div>
              <h3 className="text-xl font-extrabold text-editorial">
                Thrine Studio Engineering Breakdown
              </h3>
            </div>

            {/* Embedded Responsive Video Frame */}
            <div className="aspect-video bg-dark border border-studio-border rounded-sm overflow-hidden relative">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Thrine System Architecture Demo"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-editorial-muted pt-2 border-t border-studio-border">
              <span className="flex items-center gap-1.5 text-editorial font-semibold">
                <CheckCircle2 className="w-4 h-4 text-terracotta" />
                Custom Websites & Business Systems
              </span>
              <a
                href="/contact"
                className="px-3 py-1.5 bg-terracotta text-paper rounded-sm font-bold text-xs hover:bg-terracotta/90 transition-colors"
              >
                Book Consultation
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
