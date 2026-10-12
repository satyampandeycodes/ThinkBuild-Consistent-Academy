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
    { name: 'Tests', path: '/tests' },
    { name: 'Blog', path: '/blog' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200' : 'bg-white border-b border-slate-100'
      }`}>
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo & Brand Name */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group shrink min-w-0">
            <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-brand-primary p-0.5 shadow-xs group-hover:scale-105 transition-transform shrink-0">
              <img
                src={academyInfo.logo}
                alt={academyInfo.name}
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <span className="font-extrabold text-xs xs:text-sm sm:text-lg lg:text-xl text-slate-900 leading-tight group-hover:text-brand-primary transition-colors truncate">
              The Consistent Academy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-1.5 rounded-lg text-xs xl:text-sm font-semibold transition-all whitespace-nowrap ${isActive
                      ? 'text-brand-primary bg-brand-soft font-bold'
                      : 'text-slate-700 hover:text-brand-primary hover:bg-slate-50'
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA Action */}
          <div className="hidden sm:flex items-center">
            <Button to="/courses" variant="primary" size="md">
              Enroll Now
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 sm:p-2.5 rounded-xl text-slate-700 hover:text-brand-primary hover:bg-brand-soft/60 focus:outline-none transition-colors border border-slate-200/70 shadow-xs cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5 text-slate-800" /> : <Menu className="w-5 h-5 text-slate-800" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${isActive
                      ? 'text-brand-primary bg-brand-soft font-bold'
                      : 'text-slate-700 hover:bg-slate-50'
                    }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <Button to="/courses" variant="primary" size="md" className="w-full justify-center">
              Enroll in a Course
            </Button>
            <Button to="/contact" variant="outline" size="md" className="w-full justify-center">
              Contact & Counseling
            </Button>
            <a
              href={`tel:${academyInfo.phoneRaw}`}
              className="flex items-center justify-center gap-2 py-2 px-4 rounded-xl border border-brand-border text-brand-primary text-xs font-semibold bg-brand-soft"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call: {academyInfo.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
