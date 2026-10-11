import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ExternalLink, Instagram, Linkedin, MessageCircle, Youtube } from 'lucide-react';
import { academyInfo } from '../data/academyData';

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-brand-primary p-0.5 bg-white">
                <img
                  src={academyInfo.logo}
                  alt={academyInfo.name}
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg leading-tight">The Consistent Academy</h3>
                <p className="text-xs text-brand-300">Pune, Maharashtra</p>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Founded by Author & IELTS Master Trainer Vidya Wankhade with 19+ years of experience helping students and professionals communicate with clarity, confidence, and impact.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <a
                href="https://www.instagram.com/the_consistent_academy/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram @the_consistent_academy"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-pink-400 hover:border-pink-500/50 hover:bg-slate-800 transition-all flex items-center justify-center group"
              >
                <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.linkedin.com/company/the-consistent-academy/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn The Consistent Academy"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-sky-400 hover:border-sky-500/50 hover:bg-slate-800 transition-all flex items-center justify-center group"
              >
                <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://wa.me/917709109830?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20The%20Consistent%20Academy%20courses"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                title="Message on WhatsApp"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-slate-800 transition-all flex items-center justify-center group"
              >
                <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.youtube.com/@theconsistentacademy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                title="YouTube The Consistent Academy"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-rose-500 hover:border-rose-500/50 hover:bg-slate-800 transition-all flex items-center justify-center group"
              >
                <Youtube className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://chat.whatsapp.com/Kw2YbntkWMqG66MVI9xSJq?mode=ac_t"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-brand-300 hover:border-brand-primary transition-all flex items-center gap-1.5"
              >
                <span>Community</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 text-brand-300">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-white transition-colors">Courses & Programmes</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">Academy Blog</Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-white transition-colors">Careers & Faculty</Link>
              </li>
              <li>
                <Link to="/tests" className="hover:text-white transition-colors">Proficiency Tests</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Founder</Link>
              </li>
              <li>
                <Link to="/books" className="hover:text-white transition-colors">Published Books</Link>
              </li>
              <li>
                <Link to="/testimonials" className="hover:text-white transition-colors">Student Testimonials</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Offerings */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 text-brand-300">
              Core Offerings
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>IELTS | TOEFL | PTE | CELPIP</li>
              <li>Corporate Survival & Success</li>
              <li>Crack Your Interview (Fresher-Focused)</li>
              <li>Corporate Dining & Social Etiquette</li>
              <li>Leadership Presence for Managers</li>
              <li>Communication Skill Training</li>
              <li>Kids Elocution & Reading Club</li>
            </ul>
          </div>

          {/* Col 4: Verified Contact */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 text-brand-300">
              Verified Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-slate-300">
                <MapPin className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                <span>{academyInfo.fullAddress}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-primary shrink-0" />
                <a href={`tel:${academyInfo.phoneRaw}`} className="text-white hover:text-brand-300 transition-colors font-medium">
                  {academyInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-primary shrink-0" />
                <a href={`mailto:${academyInfo.email}`} className="text-slate-300 hover:text-brand-300 transition-colors break-all">
                  {academyInfo.email}
                </a>
              </li>
            </ul>
            <div className="mt-5 p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400">
              <span>Operating in Pune, Maharashtra. Online and offline batches available.</span>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Official ThinkBuild Credit */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
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
                className="h-4 w-auto object-contain inline"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <span>ThinkBuild.</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-white transition-colors">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
