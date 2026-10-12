import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, MessageCircle, Youtube } from 'lucide-react';
import { academyInfo } from '../data/academyData';

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-slate-950 text-slate-300 py-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Main Footer Row: Brand, Essential Nav & Social Media */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-brand-primary p-0.5 bg-white shrink-0">
              <img
                src={academyInfo.logo}
                alt={academyInfo.name}
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div>
              <h3 className="text-white font-bold text-base leading-tight">The Consistent Academy</h3>
              <p className="text-xs text-brand-300">Pune, Maharashtra</p>
            </div>
          </Link>

          {/* Essential Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-400">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Link to="/courses" className="hover:text-white transition-colors">Courses</Link>
            <Link to="/tests" className="hover:text-white transition-colors">Tests</Link>
            <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
            <Link to="/careers" className="hover:text-white transition-colors">Careers</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </nav>

          {/* Social Media Icons */}
          <div className="flex items-center gap-2">
            <a
              href="https://www.instagram.com/the_consistent_academy/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Follow on Instagram"
              className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-pink-400 hover:border-pink-500/40 hover:bg-slate-800 transition-all flex items-center justify-center group"
            >
              <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.linkedin.com/company/the-consistent-academy/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="Connect on LinkedIn"
              className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-sky-500/40 hover:bg-slate-800 transition-all flex items-center justify-center group"
            >
              <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://wa.me/917709109830?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20The%20Consistent%20Academy%20courses"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              title="Chat on WhatsApp"
              className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-slate-800 transition-all flex items-center justify-center group"
            >
              <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.youtube.com/@theconsistentacademy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              title="Watch on YouTube"
              className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-rose-500 hover:border-rose-500/40 hover:bg-slate-800 transition-all flex items-center justify-center group"
            >
              <Youtube className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        {/* Bottom Line: Copyright and ThinkBuild Attribution */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div>
            <span>© {currentYear} The Consistent Academy. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span>Developed and maintained by</span>
            <a
              href="https://www.thinkbuild.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-bold text-white hover:text-brand-300 transition-colors"
            >
              <img
                src="/assets/thinkbuild-logo.png"
                alt="ThinkBuild"
                className="h-3.5 w-auto object-contain inline"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <span>ThinkBuild.</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
