import React from 'react';
import { Mail, ArrowUpRight, Code2, Globe, ShieldCheck } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { CalendlyBooking } from '../components/booking/CalendlyBooking';
import { siteConfig } from '../data/siteConfig';

export const ContactPage: React.FC = () => {
  return (
    <div className="py-12 bg-paper text-editorial">
      <Container>
        {/* Header Title */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-terracotta bg-studio-surface border border-studio-border px-3 py-1 rounded-sm font-semibold">
            09 / PROJECT KICKOFF
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-editorial font-sans mt-4 mb-4">
            Let's talk about your project.
          </h1>
          <p className="text-lg text-editorial-muted leading-relaxed max-w-xl mx-auto">
            Schedule a 30-minute discovery call or send a direct email. We'll discuss your requirements, timeline, and exact digital solution without high-pressure sales tactics.
          </p>
        </div>

        {/* Two Contact Pathways: Calendly + Direct Email */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 max-w-6xl mx-auto">
          
          {/* Main Calendly Widget Column */}
          <div className="lg:col-span-8">
            <CalendlyBooking
              title="Schedule a Call via Calendly"
              subtitle="Pick an available slot directly on the calendar below."
            />
          </div>

          {/* Sidebar Direct Options */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Direct Email Card */}
            <div className="bg-studio-surface border border-studio-border rounded-sm p-6 space-y-4">
              <div className="w-9 h-9 rounded-sm bg-dark flex items-center justify-center text-paper">
                <Mail className="w-4 h-4" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-editorial font-sans">Prefer Direct Email?</h3>
                <p className="text-xs text-editorial-muted mt-1 leading-relaxed">
                  Send a detailed brief or project inquiry anytime to <strong className="text-editorial font-mono">{siteConfig.email}</strong>. Response guaranteed within 12 hours.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-xs font-mono font-bold text-terracotta hover:underline transition-colors flex items-center gap-1.5"
                >
                  <span>{siteConfig.email}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Social & Professional Verification Links */}
            <div className="bg-studio-surface border border-studio-border rounded-sm p-6 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-terracotta font-semibold">Verified Connections</h4>
              
              <div className="space-y-3 text-xs">
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-sm bg-paper border border-studio-border text-editorial hover:border-editorial transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-terracotta" />
                    <span>LinkedIn Profile</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-editorial-muted" />
                </a>

                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-sm bg-paper border border-studio-border text-editorial hover:border-editorial transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-terracotta" />
                    <span>GitHub Repositories</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-editorial-muted" />
                </a>
              </div>
            </div>

            {/* Studio Guarantee */}
            <div className="p-4 bg-paper border border-studio-border rounded-sm text-xs text-editorial space-y-2 font-mono">
              <div className="font-bold flex items-center gap-2 text-terracotta uppercase">
                <ShieldCheck className="w-4 h-4 text-terracotta shrink-0" />
                <span>Our Low-Pressure Guarantee</span>
              </div>
              <p className="text-[11px] text-editorial-muted font-sans leading-relaxed">
                If we are not the right fit for your business, we will tell you directly. You own 100% of all code and data transferred.
              </p>
            </div>

          </div>
        </div>
      </Container>
    </div>
  );
};
