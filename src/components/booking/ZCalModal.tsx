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
  // Lock body scroll when modal is open
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

  const zcalEmbedUrl = `${siteConfig.zcalUrl}?embed=1&embedType=iframe`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fade-in">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-dark/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Centered Modal Content Box (Fits cleanly in viewport without outer scrolling) */}
      <div className="relative bg-paper border border-studio-border rounded-xl shadow-2xl w-full max-w-5xl h-[92vh] max-h-[800px] flex flex-col overflow-hidden z-10 font-sans my-auto">
        
        {/* Compact Header */}
        <div className="px-5 py-3.5 border-b border-studio-border bg-studio-surface flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-terracotta/10 border border-terracotta/30 text-terracotta flex items-center justify-center shrink-0">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-editorial tracking-tight leading-tight">{title}</h3>
              <p className="text-xs text-editorial-muted leading-none hidden sm:block mt-0.5">{subtitle}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-paper hover:bg-studio-border text-editorial transition-colors shrink-0 border border-studio-border shadow-sm focus:outline-none cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Slim Feature Highlights Bar */}
        <div className="px-5 py-2 bg-paper border-b border-studio-border flex items-center justify-between gap-2 text-[11px] font-mono text-editorial-muted uppercase tracking-wider shrink-0">
          <span className="flex items-center gap-1.5 font-semibold text-editorial">
            <Clock className="w-3.5 h-3.5 text-terracotta" />
            30 Mins Live Demo
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

        {/* Modal Body - Exact ZCal Iframe Embed */}
        <div className="flex-1 w-full bg-paper relative overflow-hidden flex items-center justify-center">
          <iframe
            src={zcalEmbedUrl}
            id="zcal-invite"
            title="Schedule a Meeting with Thrine Studio"
            loading="lazy"
            scrolling="no"
            className="w-full h-full border-0 min-w-[320px]"
            style={{ border: 'none' }}
          />
        </div>
      </div>
    </div>
  );
};
