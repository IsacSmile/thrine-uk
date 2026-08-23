import React from 'react';
import { Mail, ArrowUpRight, Globe, ShieldCheck, CheckCircle2, Calendar } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { CalendlyBooking } from '../components/booking/CalendlyBooking';
import { siteConfig } from '../data/siteConfig';

export const ContactPage: React.FC = () => {
  const agendaItems = [
    "Your business",
    "Current workflow",
    "What isn't working",
    "What you're trying to improve",
    "Potential solution",
    "Timeline",
    "Next steps"
  ];

  return (
    <div className="py-12 bg-paper text-editorial">
      <Container>
        {/* Header Title */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-terracotta bg-studio-surface border border-studio-border px-3 py-1 rounded-sm font-semibold">
            PROJECT DISCOVERY
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-editorial font-sans mt-4 mb-4">
            Let's talk about your project.
          </h1>
          <p className="text-base sm:text-lg text-editorial-muted leading-relaxed max-w-2xl mx-auto font-sans">
            Tell us what you're trying to improve. We'll discuss the problem, understand the workflow and determine whether a custom digital solution makes sense.
          </p>
        </div>

        {/* Two Contact Pathways: Calendly + Trust Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 max-w-6xl mx-auto">
          
          {/* Main Calendly Widget Column */}
          <div className="lg:col-span-8">
            <CalendlyBooking
              title="30-minute discovery call"
              subtitle="Pick a time directly on the calendar below."
            />
          </div>

          {/* Sidebar Trust Panel */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* What We'll Discuss Trust Panel */}
            <div className="bg-studio-surface border border-studio-border rounded-sm p-6 space-y-4">
              <div className="flex items-center gap-2 border-b border-studio-border pb-3">
                <Calendar className="w-4 h-4 text-terracotta" />
                <h3 className="text-base font-bold text-editorial font-sans">What we'll discuss</h3>
              </div>

              <div className="space-y-2 font-mono text-xs text-editorial">
                {agendaItems.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-terracotta shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-studio-border text-center">
                <span className="text-xs font-mono font-bold text-terracotta uppercase tracking-wider">
                  No obligation.
                </span>
              </div>
            </div>

            {/* Direct Email Fallback */}
            <div className="bg-studio-surface border border-studio-border rounded-sm p-6 space-y-4">
              <div className="w-9 h-9 rounded-sm bg-dark flex items-center justify-center text-paper">
                <Mail className="w-4 h-4" />
              </div>

              <div>
                <h3 className="text-base font-bold text-editorial font-sans">Prefer email?</h3>
                <p className="text-xs text-editorial-muted mt-1 leading-relaxed font-sans">
                  Send your project brief directly to <strong className="text-editorial font-mono">{siteConfig.email}</strong>. Response guaranteed within 12 hours.
                </p>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="px-4 py-2.5 bg-dark hover:bg-terracotta text-paper rounded-sm text-xs font-mono font-bold transition-all flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email us instead →</span>
                </a>
                <a
                  href={siteConfig.calendlyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-paper border border-studio-border hover:border-editorial text-editorial rounded-sm text-xs font-mono font-bold transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Open scheduling page →</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-terracotta" />
                </a>
              </div>
            </div>

            {/* LinkedIn Verification Link */}
            <div className="bg-studio-surface border border-studio-border rounded-sm p-6 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-widest text-terracotta font-semibold">Studio Verification</h4>
              
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-sm bg-paper border border-studio-border text-editorial hover:border-editorial transition-colors text-xs font-mono font-bold"
              >
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-terracotta" />
                  <span>LinkedIn Profile</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-editorial-muted" />
              </a>
            </div>

            {/* Low-Pressure Guarantee */}
            <div className="p-4 bg-paper border border-studio-border rounded-sm text-xs text-editorial space-y-2 font-mono">
              <div className="font-bold flex items-center gap-2 text-terracotta uppercase">
                <ShieldCheck className="w-4 h-4 text-terracotta shrink-0" />
                <span>Low-Pressure Guarantee</span>
              </div>
              <p className="text-[11px] text-editorial-muted font-sans leading-relaxed">
                No pressure. If we're not the right fit, we'll tell you. You own 100% of all code and data.
              </p>
            </div>

          </div>
        </div>
      </Container>
    </div>
  );
};
