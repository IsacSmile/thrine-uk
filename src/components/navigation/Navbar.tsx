import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar, ArrowRight, MapPin } from 'lucide-react';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-paper/95 backdrop-blur-md border-b border-studio-border py-3.5'
          : 'bg-paper border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Studio Logo */}
        <Link to="/" className="group flex items-center gap-2.5 focus:outline-none">
          <div className="w-8 h-8 rounded-sm bg-dark flex items-center justify-center font-bold text-paper text-xs">
            F
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-editorial text-sm font-sans uppercase">
              FAIZ <span className="text-editorial-muted font-normal text-xs tracking-widest ml-1">/ STUDIO</span>
            </span>
          </div>
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
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-terracotta rounded-full"></span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Location Badge & Primary CTA */}
        <div className="hidden md:flex items-center gap-4">
          <span className="text-[11px] font-mono text-editorial-muted hidden lg:inline-flex items-center gap-1">
            <MapPin className="w-3 h-3 text-terracotta" />
            <span>Kerala, India · Remotely Worldwide</span>
          </span>
          <Button
            href="/contact"
            variant="primary"
            size="sm"
            icon={<Calendar className="w-3.5 h-3.5" />}
          >
            Book a Call
          </Button>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          aria-label="Toggle Navigation Menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-sm text-editorial bg-studio-surface border border-studio-border focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[61px] bg-paper border-b border-studio-border p-6 transition-all">
          <nav className="flex flex-col gap-4 text-sm font-medium">
            {navLinks.map((link) => (
              <React.Fragment key={link.name}>
                {link.href.startsWith('/#') ? (
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-editorial hover:text-terracotta py-2.5 border-b border-studio-border flex items-center justify-between uppercase font-mono text-xs tracking-wider"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 text-editorial-muted" />
                  </a>
                ) : (
                  <Link
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-editorial hover:text-terracotta py-2.5 border-b border-studio-border flex items-center justify-between uppercase font-mono text-xs tracking-wider"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 text-editorial-muted" />
                  </Link>
                )}
              </React.Fragment>
            ))}

            <div className="pt-2 flex items-center justify-between text-xs font-mono text-editorial-muted">
              <span>Location:</span>
              <span className="font-bold text-editorial">Kerala, India · Remotely Worldwide</span>
            </div>

            <div className="pt-2">
              <Button
                href="/contact"
                variant="primary"
                fullWidth
                icon={<Calendar className="w-4 h-4" />}
              >
                Book a Call
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
