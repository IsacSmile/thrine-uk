import React from 'react';
import { ArrowRight, MapPin, Globe, Mail, ExternalLink } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { siteConfig } from '../../data/siteConfig';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-paper border-b border-studio-border font-sans">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Studio Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-mono uppercase tracking-widest text-terracotta font-semibold">
              06 / MEET THE STUDIO
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-editorial tracking-tight font-sans">
              Meet the Studio
            </h2>

            <div className="space-y-4 text-editorial-muted text-sm sm:text-base leading-relaxed font-normal">
              <p>
                We build websites and systems for bakeries and tour operators so they get more customers and spend less time on admin.
              </p>
              <p>
                Whether you need online ordering, a booking system, or simple automation, we focus on solving the real daily problems of local businesses.
              </p>
            </div>

            {/* Location & Operating Model */}
            <div className="p-4 bg-studio-surface border border-studio-border rounded-sm flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-terracotta shrink-0" />
                <span className="font-bold text-editorial">Based in India · Working worldwide</span>
              </div>
              <span className="text-editorial-muted hidden sm:inline">Async & Remote Model</span>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <Button
                href="/contact"
                variant="primary"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Let's Talk About Your Project
              </Button>
            </div>
          </div>

          {/* Right Team Cards Column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-terracotta font-bold mb-2">
              STUDIO TEAM
            </div>

            {siteConfig.team.map((member) => (
              <div
                key={member.name}
                className="bg-studio-surface border border-studio-border rounded-sm p-5 sm:p-6 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-sm bg-dark text-paper font-bold text-xl flex items-center justify-center font-sans shrink-0 border border-studio-border">
                      {member.initials}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-editorial font-sans">{member.name}</h3>
                      <div className="text-xs text-terracotta font-mono uppercase tracking-wider font-semibold">
                        {member.role}
                      </div>
                    </div>
                  </div>

                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono font-bold text-editorial hover:text-terracotta transition-colors p-2 bg-paper border border-studio-border rounded-sm shrink-0"
                    >
                      <Globe className="w-3.5 h-3.5 text-terracotta" />
                      <span className="hidden sm:inline">LinkedIn</span>
                      <ExternalLink className="w-3 h-3 text-editorial-muted" />
                    </a>
                  )}
                </div>

                <p className="text-xs text-editorial-muted leading-relaxed font-sans pt-1">
                  {member.bio}
                </p>
              </div>
            ))}

            {/* Direct Studio Email Link */}
            <div className="p-4 bg-studio-surface border border-studio-border rounded-sm flex items-center justify-between text-xs font-mono">
              <span className="text-editorial-muted">Direct Studio Contact</span>

              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-1.5 font-bold text-terracotta hover:underline"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{siteConfig.email} →</span>
              </a>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
};
