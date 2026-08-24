import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { Play, CheckCircle2 } from 'lucide-react';
import { useVideoStore } from '../../utils/videoStore';
import { siteConfig } from '../../data/siteConfig';

export const HeroVideoSection: React.FC = () => {
  const { videoSettings, getEmbedUrl } = useVideoStore();
  const [isPlaying, setIsPlaying] = useState(false);

  if (!videoSettings.enabled) {
    return null;
  }

  const embedUrl = getEmbedUrl();
  const isUploadedFile = videoSettings.videoType === 'file' && videoSettings.fileUrl;

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
            {videoSettings.title}
          </h2>

          <p className="text-xs sm:text-sm text-editorial-muted leading-relaxed font-normal">
            {videoSettings.subtitle}
          </p>
        </div>

        {/* Video Player Box */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-dark border border-studio-border rounded-sm shadow-2xl overflow-hidden aspect-video group">
            {isPlaying ? (
              isUploadedFile ? (
                <video
                  src={videoSettings.fileUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-contain bg-black"
                >
                  Your browser does not support video playback.
                </video>
              ) : (
                <iframe
                  src={embedUrl}
                  title={videoSettings.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              )
            ) : (
              <div 
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black text-paper p-6 sm:p-12 flex flex-col justify-between select-none cursor-pointer"
              >
                {/* Top Branding Header Bar */}
                <div className="flex items-center justify-between text-xs font-mono text-paper/60 border-b border-paper/10 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping"></span>
                    <span className="text-paper font-bold tracking-wider uppercase">THRINE STUDIO ENGINE DEMO</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-red-600/20 text-red-400 border border-red-500/30 rounded-sm font-bold text-[11px] font-mono">
                      {isUploadedFile ? 'UPLOADED VIDEO FILE' : 'YOUTUBE DEMO'}
                    </span>
                  </div>
                </div>

                {/* Center Content & Big Play Button Overlay */}
                <div className="flex flex-col items-center justify-center my-auto text-center space-y-5">
                  <div className="relative group-hover:scale-110 transition-transform duration-300">
                    <div className="absolute -inset-4 bg-terracotta/30 rounded-full blur-md group-hover:bg-terracotta/50 transition-all"></div>
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600 text-paper flex items-center justify-center shadow-2xl relative z-10 border-2 border-paper/20">
                      <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-paper translate-x-0.5" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-3xl font-extrabold text-paper tracking-tight font-sans">
                      {videoSettings.title}
                    </h3>
                    <p className="text-xs text-paper/70 max-w-lg mx-auto font-mono">
                      {isUploadedFile ? 'Click to play custom video file' : 'Click to play YouTube system walkthrough breakdown'}
                    </p>
                  </div>
                </div>

                {/* Bottom Bar Info */}
                <div className="flex items-center justify-between text-xs font-mono text-paper/60 pt-3 border-t border-paper/10">
                  <div className="flex items-center gap-2 text-paper">
                    <CheckCircle2 className="w-3.5 h-3.5 text-terracotta" />
                    <span className="text-[11px] font-bold">100% Custom Engineering Breakdown</span>
                  </div>
                  <div className="text-terracotta font-bold text-[11px]">
                    THRINE STUDIO
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* High Converting CTA Block below video */}
          <div className="mt-10 p-8 bg-dark text-paper border border-dark-border rounded-2xl shadow-xl text-center flex flex-col items-center space-y-4">
            {/* Availability Guarantee Badge (Thrine Terracotta Theme) */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-terracotta/40 bg-terracotta/10 text-terracotta text-xs font-mono tracking-wide font-medium shadow-sm">
              <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse shrink-0"></span>
              <span>We only onboard 3 new businesses per month to guarantee results.</span>
            </div>

            {/* Thrine Studio Demo Pill Button */}
            <div className="pt-1">
              <a
                href={siteConfig.zcalUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 bg-terracotta hover:bg-terracotta-hover text-paper rounded-full font-mono text-xs sm:text-sm uppercase tracking-widest font-bold transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 group"
              >
                <span>Book My Free Demo</span>
                <span className="font-mono text-sm font-normal opacity-90 transition-transform group-hover:translate-x-1">→ ↗</span>
              </a>
            </div>

            {/* Subtext */}
            <p className="text-xs font-mono text-paper/60">
              No contract. No credit card. Just 30 minutes.
            </p>
          </div>
        </div>

      </Container>
    </section>
  );
};
