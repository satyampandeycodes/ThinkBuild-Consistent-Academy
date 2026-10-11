import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Menu, X, ChevronRight, Instagram, Linkedin, MessageCircle } from 'lucide-react';
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
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200' : 'bg-white border-b border-slate-100'
    }`}>
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo & Brand Name */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-brand-primary p-0.5 shadow-sm group-hover:scale-105 transition-transform">
              <img
                src={academyInfo.logo}
                alt={academyInfo.name}
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <span className="font-extrabold text-base sm:text-xl text-slate-900 leading-tight group-hover:text-brand-primary transition-colors">
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
                  className={`px-3 py-1.5 rounded-lg text-xs xl:text-sm font-semibold transition-all whitespace-nowrap ${
                    isActive
                      ? 'text-brand-primary bg-brand-soft font-bold'
                      : 'text-slate-700 hover:text-brand-primary hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Quick Social Connect & CTA Actions */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Quick Social Icons */}
            <div className="hidden xl:flex items-center gap-1 pr-2.5 border-r border-slate-200">
              <a
                href="https://www.instagram.com/the_consistent_academy/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Follow on Instagram"
                className="w-8 h-8 rounded-lg text-slate-500 hover:text-pink-600 hover:bg-pink-50 transition-all flex items-center justify-center cursor-pointer"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/917709109830?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20courses%20at%20The%20Consistent%20Academy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                title="Chat on WhatsApp"
                className="w-8 h-8 rounded-lg text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 transition-all flex items-center justify-center cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/the-consistent-academy/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="Connect on LinkedIn"
                className="w-8 h-8 rounded-lg text-slate-500 hover:text-sky-600 hover:bg-sky-50 transition-all flex items-center justify-center cursor-pointer"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            <Button to="/courses" variant="primary" size="md">
              Enroll Now
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden flex items-center gap-2">
            <Link to="/courses" className="sm:hidden px-3 py-1.5 bg-brand-primary text-white text-xs font-semibold rounded-lg">
              Enroll Now
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
