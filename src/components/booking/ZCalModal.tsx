import React, { useEffect } from 'react';
import { X, Calendar, ArrowUpRight, ShieldCheck, Clock } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

interface ZCalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
}

export const ZCalModal: React.FC<ZCalModalProps> = ({
  isOpen,
  onClose,
  title = "Book Your Free 30-Minute Demo",
  subtitle = "Pick a time that works best for you. We'll walk through your bakery or tour business setup live."
}) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const zcalEmbedUrl = `${siteConfig.zcalUrl}?embed=1`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 animate-fade-in">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-dark/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content Box */}
      <div className="relative bg-paper border border-studio-border rounded-xl shadow-2xl w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden z-10 font-sans">
        
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-studio-border bg-studio-surface flex items-start justify-between gap-4 shrink-0">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-2 text-[10px] sm:text-xs font-mono text-terracotta bg-paper border border-studio-border rounded-full uppercase tracking-widest font-bold">
              <Calendar className="w-3.5 h-3.5" />
              <span>30 MINUTE FREE DEMO CALL</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-editorial tracking-tight">{title}</h3>
            <p className="text-xs sm:text-sm text-editorial-muted mt-1 leading-relaxed max-w-xl">{subtitle}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-paper hover:bg-studio-border text-editorial transition-colors shrink-0 border border-studio-border shadow-sm focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Feature Highlights Bar */}
        <div className="px-6 py-2.5 bg-paper border-b border-studio-border flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-editorial-muted uppercase tracking-wider shrink-0">
          <span className="flex items-center gap-1.5 font-semibold text-editorial">
            <Clock className="w-3.5 h-3.5 text-terracotta" />
            30 Mins Strategy & Demo
          </span>
          <span className="flex items-center gap-1.5 font-semibold text-editorial">
            <ShieldCheck className="w-3.5 h-3.5 text-terracotta" />
            No Pressure • 100% Free
          </span>
          <a
            href={siteConfig.zcalUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex items-center gap-1 text-terracotta font-bold hover:underline"
          >
            <span>Open in new tab</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Modal Body - ZCal Iframe Embed */}
        <div className="flex-1 w-full bg-paper min-h-[500px] sm:min-h-[580px] relative overflow-y-auto">
          <iframe
            src={zcalEmbedUrl}
            title="Schedule a Meeting with Thrine Studio"
            className="w-full h-full min-h-[550px] border-0"
            allow="camera; microphone; autoplay; encrypted-media;"
          />
        </div>

        {/* Footer info strip */}
        <div className="px-6 py-3 bg-studio-surface border-t border-studio-border flex items-center justify-between gap-4 text-xs font-mono text-editorial-muted shrink-0">
          <span>Having trouble loading calendar?</span>
          <a
            href={siteConfig.zcalUrl}
            target="_blank"
            rel="noreferrer"
            className="text-terracotta font-bold hover:underline inline-flex items-center gap-1"
          >
            <span>Direct ZCal Link</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
