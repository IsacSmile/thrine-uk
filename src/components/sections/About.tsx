import React from 'react';
import { ArrowRight, CheckCircle2, MapPin, Globe, Code2, ExternalLink } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { siteConfig } from '../../data/siteConfig';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-paper border-b border-studio-border font-sans">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Studio Narrative & Values */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-mono uppercase tracking-widest text-terracotta font-semibold">
              07 / THE STUDIO
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-editorial tracking-tight font-sans">
              Built By Engineers Who Understand The Business Behind The Website.
            </h2>

            <div className="space-y-4 text-editorial-muted text-sm sm:text-base leading-relaxed font-normal">
              <p>
                We design and engineer digital software systems for businesses where the website is more than a digital brochure. From custom booking platforms and online ordering engines to internal operational tools, we work directly with business owners to turn manual, messy workflows into simple digital experiences.
              </p>
              <p>
                Operating independently out of <strong>Kerala, India</strong>, we partner with service-based clients worldwide across the US, UK, Canada, Australia, Western Europe, and the UAE.
              </p>
            </div>

            {/* Core Working Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-mono text-editorial">
              <div className="flex items-center gap-2 p-3 bg-studio-surface border border-studio-border rounded-sm">
                <CheckCircle2 className="w-4 h-4 text-terracotta shrink-0" />
                <span>Direct Founder Communication</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-studio-surface border border-studio-border rounded-sm">
                <CheckCircle2 className="w-4 h-4 text-terracotta shrink-0" />
                <span>Production-Grade React & TS</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-studio-surface border border-studio-border rounded-sm">
                <CheckCircle2 className="w-4 h-4 text-terracotta shrink-0" />
                <span>Async & Timezone Adaptability</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-studio-surface border border-studio-border rounded-sm">
                <CheckCircle2 className="w-4 h-4 text-terracotta shrink-0" />
                <span>100% Code & Data Ownership</span>
              </div>
            </div>

            <div className="pt-4">
              <Button
                href="/contact"
                variant="primary"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Discuss Your Project
              </Button>
            </div>
          </div>

          {/* Right Founder Profile Card */}
          <div className="lg:col-span-5">
            <div className="bg-studio-surface border border-studio-border rounded-sm p-6 sm:p-8 space-y-6">
              
              {/* Founder Header Avatar */}
              <div className="flex items-center gap-4 border-b border-studio-border pb-6">
                <div className="w-16 h-16 rounded-sm bg-dark text-paper font-bold text-2xl flex items-center justify-center font-sans shrink-0 border border-studio-border">
                  F
                </div>
                <div>
                  <h3 className="text-xl font-bold text-editorial font-sans">{siteConfig.founder}</h3>
                  <div className="text-xs text-terracotta font-mono uppercase tracking-wider font-semibold">{siteConfig.role}</div>
                  <div className="flex items-center gap-1 text-[11px] text-editorial-muted font-mono mt-1">
                    <MapPin className="w-3 h-3 text-terracotta" />
                    <span>Kerala, India · Remotely Worldwide</span>
                  </div>
                </div>
              </div>

              {/* Bio & Track Record */}
              <div className="space-y-4 text-xs font-mono">
                <div className="space-y-1">
                  <div className="font-bold text-editorial uppercase text-[10px] text-terracotta">Specialization</div>
                  <div className="text-editorial leading-relaxed font-sans text-xs">
                    Custom Web Applications, Tour Booking Engines, E-Commerce Ordering Systems, & Workflow Automation.
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="font-bold text-editorial uppercase text-[10px] text-terracotta">Real Track Record</div>
                  <div className="text-editorial leading-relaxed font-sans text-xs">
                    5th-semester Computer Science Engineer with active client deployments in Dubai (Tours & Travel) and Kerala (Artisan Bakery Ordering).
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="font-bold text-editorial uppercase text-[10px] text-terracotta">Direct Contact</div>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-terracotta hover:underline font-bold text-xs block"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              {/* Verified External Links */}
              <div className="pt-4 border-t border-studio-border flex items-center justify-between text-xs font-mono">
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-editorial hover:text-terracotta transition-colors"
                >
                  <Globe className="w-3.5 h-3.5 text-terracotta" />
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-editorial hover:text-terracotta transition-colors"
                >
                  <Code2 className="w-3.5 h-3.5 text-terracotta" />
                  <span>GitHub Repos</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
