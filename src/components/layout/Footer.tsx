import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowUpRight, Globe, MapPin, X } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { Container } from '../ui/Container';
import { ZCalModal } from '../booking/ZCalModal';

export const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

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
              We build websites and booking systems for bakeries and tour operators.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-paper/60 pt-1">
              <MapPin className="w-3.5 h-3.5 text-terracotta shrink-0" />
              <span>Kerala, India · Remote Worldwide</span>
            </div>
          </div>

          {/* Column 2: Studio Navigation */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-paper mb-4 font-bold">Studio</h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <Link to="/work" className="hover:text-paper transition-colors">Work</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-paper transition-colors">Services</Link>
              </li>
              <li>
                <a href="/#process" className="hover:text-paper transition-colors">Process</a>
              </li>
              <li>
                <a href="/#about" className="hover:text-paper transition-colors">About</a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setIsBookingModalOpen(true)}
                  className="hover:text-paper transition-colors text-terracotta font-bold text-left cursor-pointer"
                >
                  Book a Call
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-paper mb-4 font-bold">Connect</h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-paper transition-colors inline-flex items-center gap-1.5"
                >
                  <Globe className="w-3.5 h-3.5 text-terracotta" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-paper/40" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-paper transition-colors inline-flex items-center gap-1.5 text-terracotta font-bold"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{siteConfig.email}</span>
                  <ArrowUpRight className="w-3 h-3 text-paper/40" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-paper/50 gap-4 font-mono">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setActiveModal('privacy')}
              className="hover:text-paper transition-colors underline"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => setActiveModal('terms')}
              className="hover:text-paper transition-colors underline"
            >
              Terms of Service
            </button>
          </div>
          <div>
            © 2026 Thrine Studio. All client work 100% owned by clients.
          </div>
        </div>
      </Container>

      {/* Legal Information Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-paper text-editorial max-w-xl w-full p-6 sm:p-8 rounded-sm border border-studio-border relative space-y-4">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 p-1.5 rounded-sm bg-studio-surface border border-studio-border text-editorial"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-xs font-mono uppercase text-terracotta font-semibold">Legal & Business Trust</div>
            <h3 className="text-xl font-bold text-editorial font-sans">
              {activeModal === 'privacy' ? 'Privacy Policy' : 'Terms of Service & Code Ownership'}
            </h3>

            {activeModal === 'privacy' ? (
              <div className="text-xs text-editorial-muted leading-relaxed space-y-3 font-sans">
                <p>
                  At Thrine Studio, we respect client confidentiality. We do not track users or monetize personal information.
                </p>
                <p>
                  Information collected via discovery booking widgets or direct email is used exclusively for project scoping, communication, and client support.
                </p>
              </div>
            ) : (
              <div className="text-xs text-editorial-muted leading-relaxed space-y-3 font-sans">
                <p>
                  <strong>100% Code & Asset Ownership:</strong> Upon completion of milestones and final invoice payment, 100% of source code, design assets, database schemas, and intellectual property belong to your business.
                </p>
                <p>
                  <strong>No Platform Lock-in:</strong> You are never locked into proprietary subscriptions or proprietary platforms.
                </p>
                <p>
                  <strong>30-Day Post-Launch Warranty:</strong> Every build includes 30 days of post-launch bug-fix warranty and handover assistance.
                </p>
              </div>
            )}

            <div className="pt-4 text-right">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 bg-dark text-paper text-xs font-mono font-bold rounded-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ZCal Booking Modal */}
      <ZCalModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </footer>
  );
};
