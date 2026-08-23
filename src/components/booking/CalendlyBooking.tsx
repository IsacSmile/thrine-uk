import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Globe, ShieldCheck, Mail, Loader2 } from 'lucide-react';
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
  const calendlyUrl = siteConfig.calendlyUrl;

  useEffect(() => {
    // Inject Calendly widget script if not present
    const scriptId = 'calendly-widget-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement;

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
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
          <span>Frictionless Scheduling</span>
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

      {/* Calendly Inline Widget Container */}
      <div className="relative min-h-[550px] w-full rounded-sm overflow-hidden bg-paper border border-studio-border flex items-center justify-center">
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-paper text-editorial-muted z-10">
            <Loader2 className="w-8 h-8 animate-spin text-terracotta" />
            <span className="text-xs font-mono">Loading calendar schedule...</span>
          </div>
        )}

        {hasError ? (
          <div className="p-8 text-center space-y-4 max-w-md">
            <div className="w-12 h-12 rounded-sm bg-terracotta/10 text-terracotta flex items-center justify-center mx-auto">
              <Mail className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-editorial">Book via Direct Email</h4>
            <p className="text-xs text-editorial-muted leading-relaxed">
              If calendar widget loading is restricted by your browser, send a quick project brief directly to <strong className="text-editorial font-mono">{siteConfig.email}</strong>.
            </p>
            <Button
              href={`mailto:${siteConfig.email}`}
              variant="primary"
              icon={<Mail className="w-4 h-4" />}
            >
              Email {siteConfig.email}
            </Button>
          </div>
        ) : (
          <div
            className="calendly-inline-widget w-full h-[600px]"
            data-url={`${calendlyUrl}?background_color=F5F3EE&text_color=171714&primary_color=B84A32`}
            style={{ minWidth: '320px', height: '600px' }}
          />
        )}
      </div>

      {/* Prominent Secondary Option: Direct Email */}
      <div className="mt-6 pt-6 border-t border-studio-border flex flex-col sm:flex-row items-center justify-between gap-4 bg-paper p-4 rounded-sm">
        <div className="text-xs text-editorial space-y-0.5">
          <span className="font-bold block uppercase font-mono text-[10px] text-terracotta">Prefer Direct Email?</span>
          <span className="text-editorial-muted">Send your project brief directly. Response guaranteed within 12 hours.</span>
        </div>
        <a
          href={`mailto:${siteConfig.email}`}
          className="inline-flex items-center gap-2 text-xs font-mono font-bold text-editorial hover:text-terracotta transition-colors shrink-0 bg-studio-surface border border-studio-border px-3.5 py-2 rounded-sm"
        >
          <Mail className="w-3.5 h-3.5 text-terracotta" />
          <span>{siteConfig.email}</span>
        </a>
      </div>
    </div>
  );
};
