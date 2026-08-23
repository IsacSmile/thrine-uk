import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowUpRight, Code2, Globe, MapPin, X } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { Container } from '../ui/Container';

export const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  return (
    <footer className="bg-dark border-t border-dark-border text-paper/70 pt-16 pb-12 font-sans relative">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-dark-border">
          {/* Column 1: Studio Identity & Location */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center focus:outline-none" aria-label="Thrine Home">
              <img 
                src="/images/thrine-logo-red-text.png" 
                alt="Thrine" 
                className="h-8 sm:h-9 w-auto object-contain transition-transform hover:scale-105"
              />
            </Link>
            
            <p className="text-xs sm:text-sm text-paper/70 leading-relaxed max-w-md">
              {siteConfig.positioning}
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-paper/60 pt-1">
              <MapPin className="w-3.5 h-3.5 text-terracotta shrink-0" />
              <span>Kerala, India · Remotely Worldwide</span>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-8 h-8 rounded-sm bg-dark border border-dark-border flex items-center justify-center text-paper/70 hover:text-paper hover:border-paper/40 transition-colors"
              >
                <Code2 className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-sm bg-dark border border-dark-border flex items-center justify-center text-paper/70 hover:text-paper hover:border-paper/40 transition-colors"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="Email Direct"
                className="w-8 h-8 rounded-sm bg-dark border border-dark-border flex items-center justify-center text-paper/70 hover:text-paper hover:border-paper/40 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Studio Navigation */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-paper mb-4">Studio Navigation</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/" className="hover:text-paper transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-paper transition-colors">Selected Work</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-paper transition-colors">Capabilities</Link>
              </li>
              <li>
                <a href="/#process" className="hover:text-paper transition-colors">Process & Risk Control</a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-paper transition-colors">Book a Call</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Live Verification & Direct Contact */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-paper mb-4">Direct Contact</h4>
            <ul className="space-y-2.5 text-xs">
              <li className="font-mono text-terracotta font-bold">
                <a href={`mailto:${siteConfig.email}`} className="hover:underline flex items-center gap-1">
                  <span>{siteConfig.email}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li className="pt-2 text-paper/60 leading-relaxed text-[11px]">
                Response guaranteed within 12 hours. Async briefs welcomed over email or video.
              </li>
              <li className="pt-3 border-t border-dark-border">
                <button
                  type="button"
                  onClick={() => setActiveModal('privacy')}
                  className="hover:text-paper text-[11px] underline text-paper/50 mr-4"
                >
                  Privacy Policy
                </button>
                <button
                  type="button"
                  onClick={() => setActiveModal('terms')}
                  className="hover:text-paper text-[11px] underline text-paper/50"
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-paper/50 gap-4">
          <div>
            © {new Date().getFullYear()} Faiz Studio. All client work is 100% owned by clients.
          </div>
          <div className="flex items-center gap-4 text-paper/50 font-mono text-[11px]">
            <span>Kerala, India · Remotely Worldwide</span>
          </div>
        </div>
      </Container>

      {/* Privacy Policy & Terms Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-paper text-editorial max-w-xl w-full p-6 sm:p-8 rounded-sm border border-studio-border relative space-y-4">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 p-1.5 rounded-sm bg-studio-surface border border-studio-border text-editorial"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-xs font-mono uppercase text-terracotta font-semibold">Legal Information</div>
            <h3 className="text-xl font-bold text-editorial font-sans">
              {activeModal === 'privacy' ? 'Privacy Policy' : 'Terms of Service & Handover Policy'}
            </h3>

            {activeModal === 'privacy' ? (
              <div className="text-xs text-editorial-muted leading-relaxed space-y-3 font-sans">
                <p>
                  At Faiz Studio, we respect client confidentiality. We do not collect or track personal user data through invasive third-party trackers.
                </p>
                <p>
                  Any project metadata, business inquiries, or form inputs submitted via our scheduling widgets are used exclusively for direct project communication and scoping.
                </p>
              </div>
            ) : (
              <div className="text-xs text-editorial-muted leading-relaxed space-y-3 font-sans">
                <p>
                  <strong>100% Product Ownership:</strong> Upon completion of agreed milestones and final project payment, 100% of source code, design assets, database schemas, and intellectual property are assigned to the client.
                </p>
                <p>
                  <strong>Warranty & Support:</strong> Every build includes 30 days of post-launch bug-fix warranty and handover assistance.
                </p>
              </div>
            )}

            <div className="pt-4 text-right">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 bg-dark text-paper text-xs font-bold rounded-sm"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
