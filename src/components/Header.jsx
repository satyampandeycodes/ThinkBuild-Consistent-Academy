import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Menu, X, ChevronRight } from 'lucide-react';
import { academyInfo } from '../data/academyData';
import Button from './Button';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'About Founder', path: '/about' },
    { name: 'Books', path: '/books' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200' : 'bg-white border-b border-slate-100'
    }`}>
      {/* Top micro bar for direct contact */}
      <div className="bg-brand-dark text-white text-xs py-2 px-4 sm:px-8 border-b border-brand-900">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href={`tel:${academyInfo.phoneRaw}`} className="flex items-center gap-1.5 hover:text-brand-300 transition-colors">
              <Phone className="w-3.5 h-3.5 text-brand-300" />
              <span>{academyInfo.phone}</span>
            </a>
            <a href={`mailto:${academyInfo.email}`} className="hidden sm:flex items-center gap-1.5 hover:text-brand-300 transition-colors">
              <Mail className="w-3.5 h-3.5 text-brand-300" />
              <span>{academyInfo.email}</span>
            </a>
          </div>
          <div className="flex items-center gap-4 text-brand-200">
            <span>Pune, Maharashtra</span>
            <span className="hidden md:inline">• 19+ Years Mentorship Legacy</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Name */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-brand-primary p-0.5 shadow-sm group-hover:scale-105 transition-transform">
              <img
                src={academyInfo.logo}
                alt={academyInfo.name}
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl text-slate-900 leading-tight group-hover:text-brand-primary transition-colors">
                The Consistent Academy
              </span>
              <span className="text-xs text-brand-primary font-medium tracking-wide">
                IELTS & English Learning • Pune
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    isActive
                      ? 'text-brand-primary bg-brand-soft'
                      : 'text-slate-700 hover:text-brand-primary hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA & Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <Button to="/contact" variant="primary" size="md">
              Enquire Now
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden flex items-center gap-2">
            <Link to="/contact" className="sm:hidden px-3 py-1.5 bg-brand-primary text-white text-xs font-semibold rounded-lg">
              Enquire
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-brand-primary hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 shadow-lg animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium ${
                    isActive
                      ? 'text-brand-primary bg-brand-soft font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <a
              href={`tel:${academyInfo.phoneRaw}`}
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-brand-border text-brand-primary text-sm font-semibold bg-brand-soft"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {academyInfo.phone}</span>
            </a>
            <Button to="/contact" variant="primary" size="lg" className="w-full">
              Book Free Counseling
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
