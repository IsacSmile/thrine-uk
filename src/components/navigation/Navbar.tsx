import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { ZCalModal } from '../booking/ZCalModal';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Work', href: '/work' },
    { name: 'How It Works', href: '/#how-it-works' },
    { name: 'Services', href: '/services' },
    { name: 'Process', href: '/#process' },
    { name: 'About', href: '/#about' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-4 px-4 sm:px-6 lg:px-8 ${
        isScrolled ? 'bg-transparent' : 'bg-transparent'
      }`}
    >
      <div className={`max-w-7xl mx-auto bg-transparent backdrop-blur-md rounded-full px-4 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between transition-all duration-300 border ${
        isScrolled ? 'border-studio-border/80 shadow-sm bg-paper/50' : 'border-studio-border/30 bg-transparent'
      }`}>
        {/* Studio Logo */}
        <Link to="/" className="group flex items-center focus:outline-none pl-1" aria-label="Thrine Home">
          <img 
            src="/images/thrine-logo-red-text.png" 
            alt="Thrine" 
            className="h-6 sm:h-7.5 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-widest">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href || (link.href.startsWith('/#') && location.hash === link.href.substring(1));
            
            if (link.href.startsWith('/#')) {
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-editorial-muted hover:text-editorial transition-colors relative py-1"
                >
                  {link.name}
                </a>
              );
            }

            return (
              <Link
                key={link.name}
                to={link.href}
                className={`transition-colors relative py-1 ${
                  isActive ? 'text-editorial font-bold' : 'text-editorial-muted hover:text-editorial'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-0.5 left-0 right-0 h-[1.5px] bg-terracotta rounded-full"></span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Primary CTA */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <button
            type="button"
            onClick={() => setIsBookingModalOpen(true)}
            className="px-5 py-2 bg-dark hover:bg-terracotta text-paper rounded-full text-xs font-mono font-bold transition-all flex items-center shadow-sm whitespace-nowrap cursor-pointer"
          >
            <span>Book a call</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          aria-label="Toggle Navigation Menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-full text-editorial bg-dark/5 border border-studio-border/50 hover:bg-dark/10 focus:outline-none transition-transform duration-200 active:scale-95 shrink-0"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5 transition-transform duration-200 rotate-90" />
          ) : (
            <Menu className="w-5 h-5 transition-transform duration-200" />
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden fixed inset-x-4 top-[68px] sm:top-[76px] max-w-lg mx-auto bg-paper/98 backdrop-blur-xl border border-studio-border/80 rounded-2xl p-5 sm:p-6 shadow-2xl transition-all duration-300 ease-out transform ${
          mobileMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto scale-100'
            : 'opacity-0 -translate-y-4 pointer-events-none scale-95'
        }`}
      >
        <nav className="flex flex-col gap-3 sm:gap-4 text-sm font-medium">
          {navLinks.map((link) => (
            <React.Fragment key={link.name}>
              {link.href.startsWith('/#') ? (
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-editorial hover:text-terracotta py-2 border-b border-studio-border/60 flex items-center justify-between uppercase font-mono text-xs tracking-wider transition-colors"
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 text-editorial-muted" />
                </a>
              ) : (
                <Link
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-editorial hover:text-terracotta py-2 border-b border-studio-border/60 flex items-center justify-between uppercase font-mono text-xs tracking-wider transition-colors"
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 text-editorial-muted" />
                </Link>
              )}
            </React.Fragment>
          ))}

          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                setIsBookingModalOpen(true);
              }}
              className="w-full py-3 bg-dark hover:bg-terracotta text-paper rounded-full text-xs font-mono font-bold transition-all flex items-center justify-center shadow-md cursor-pointer"
            >
              <span>Book a call</span>
            </button>
          </div>
        </nav>
      </div>

      {/* ZCal Booking Modal */}
      <ZCalModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </header>
  );
};
