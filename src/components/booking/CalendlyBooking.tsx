import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Globe, ShieldCheck, Mail, Loader2, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { Button } from '../ui/Button';

interface CalendlyBookingProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export const CalendlyBooking: React.FC<CalendlyBookingProps> = ({
  title = "Book a 30-Minute Discovery Call",
  subtitle = "Discuss your project goals, technical requirements, and timeline directly. Pick a time that suits you best.",
  className = ''
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const zcalUrl = siteConfig.zcalUrl;

  useEffect(() => {
    // Inject zcal embed script if not present
    const scriptId = 'zcal-embed-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement;

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://static.zcal.co/embed/v1/embed.js';
      script.async = true;
      script.onload = () => setIsLoading(false);
      script.onerror = () => {
        setIsLoading(false);
        setHasError(true);
      };
      document.body.appendChild(script);
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className={`bg-studio-surface border border-studio-border rounded-sm p-6 sm:p-8 ${className}`}>
      {/* Header Info */}
      <div className="text-center max-w-xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 text-xs font-mono text-terracotta bg-paper border border-studio-border rounded-sm uppercase tracking-widest font-semibold">
          <Calendar className="w-3.5 h-3.5" />
          <span>30 MINUTE MEETING SCHEDULER</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-editorial mb-3 font-sans">{title}</h3>
        <p className="text-sm sm:text-base text-editorial-muted leading-relaxed">{subtitle}</p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-4 text-xs text-editorial-muted font-mono uppercase tracking-wider">
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-terracotta" />
            30 Mins Strategy Session
          </span>
          <span className="flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-terracotta" />
            Timezone Auto-Detected
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-terracotta" />
            No Pressure Guarantee
          </span>
        </div>
      </div>

      {/* zcal Inline Widget Container */}
      <div className="relative min-h-[600px] w-full rounded-sm overflow-hidden bg-paper border border-studio-border flex items-center justify-center">
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-paper text-editorial-muted z-10">
            <Loader2 className="w-8 h-8 animate-spin text-terracotta" />
            <span className="text-xs font-mono">Loading zcal calendar schedule...</span>
          </div>
        )}

        {hasError ? (
          <div className="p-8 text-center space-y-4 max-w-md">
            <div className="w-12 h-12 rounded-sm bg-terracotta/10 text-terracotta flex items-center justify-center mx-auto">
              <Mail className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-editorial">Book via Direct Link or Email</h4>
            <p className="text-xs text-editorial-muted leading-relaxed">
              If calendar widget loading is restricted by your browser, open scheduling directly or send a quick email to <strong className="text-editorial font-mono">{siteConfig.email}</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <a
                href={zcalUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 bg-terracotta text-paper rounded-sm text-xs font-mono font-bold hover:bg-terracotta/90 transition-colors inline-flex items-center justify-center gap-1.5"
              >
                <span>Open zcal Meeting →</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <Button
                href={`mailto:${siteConfig.email}`}
                variant="secondary"
                icon={<Mail className="w-4 h-4" />}
              >
                Email {siteConfig.email}
              </Button>
            </div>
          </div>
        ) : (
          <div
            className="zcal-inline-widget w-full min-h-[600px] text-center"
            data-zcal-options='{"showBackground":1}'
          >
            <a 
              href={zcalUrl} 
              target="_blank" 
              rel="noreferrer"
              className="text-xs font-mono font-bold text-terracotta hover:underline p-4 block"
            >
              30 Minute Meeting - Schedule a meeting
            </a>
          </div>
        )}
      </div>

      {/* Direct Options */}
      <div className="mt-6 pt-6 border-t border-studio-border flex flex-col sm:flex-row items-center justify-between gap-4 bg-paper p-4 rounded-sm">
        <div className="text-xs text-editorial space-y-0.5">
          <span className="font-bold block uppercase font-mono text-[10px] text-terracotta">Direct Schedule Link</span>
          <span className="text-editorial-muted">Can't see embed? Open zcal in a new browser tab.</span>
        </div>
        <a
          href={zcalUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold text-editorial hover:text-terracotta transition-colors shrink-0 bg-studio-surface border border-studio-border px-3.5 py-2 rounded-sm"
        >
          <span>Open zcal Schedule</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-terracotta" />
        </a>
      </div>
    </div>
  );
};
