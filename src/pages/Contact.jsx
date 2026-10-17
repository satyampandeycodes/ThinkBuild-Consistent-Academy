import React from 'react';
import { useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';
import { academyInfo } from '../data/academyData';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import MapEmbed from '../components/MapEmbed';
import SEO from '../components/SEO';

export default function Contact() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedCourse = searchParams.get('course') || '';

  return (
    <div className="py-12 sm:py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-8">
      <SEO
        title="Contact Admissions Desk & Location | The Consistent Academy Pune"
        description="Contact The Consistent Academy in Pune for IELTS coaching, English courses, fee inquiries, or book a consultation with Founder Vidya Wankhade."
        keywords="contact Consistent Academy, IELTS coaching Pune contact, English institute phone number Pune, Vidya Wankhade contact, English classes enquiry Pune"
        canonical="/contact"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact The Consistent Academy',
          description: 'Admissions desk and direct contact coordinates for The Consistent Academy in Pune',
          mainEntity: {
            '@type': 'EducationalOrganization',
            name: 'The Consistent Academy',
            telephone: academyInfo.phone,
            email: academyInfo.email,
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Pune',
              addressRegion: 'Maharashtra',
              addressCountry: 'IN'
            }
          }
        }}
      />
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-brand-soft border border-brand-border text-brand-primary mb-3">
          Direct Admissions Desk
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          Contact The Consistent Academy
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Have questions about course modules, batch schedules, or fee structures? Reach out to Vidya Wankhade and the team directly.
        </p>
      </div>

      {/* Verified Contact Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Phone */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-brand-soft text-brand-primary flex items-center justify-center shrink-0">
            <Phone className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-base mb-1">Direct Phone & WhatsApp</h3>
            <p className="text-xs text-slate-500 mb-2">Speak directly with our counseling team</p>
            <a
              href={`tel:${academyInfo.phoneRaw}`}
              className="text-base font-extrabold text-brand-primary hover:text-brand-deep hover:underline transition-colors"
            >
              {academyInfo.phone}
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-brand-soft text-brand-primary flex items-center justify-center shrink-0">
            <Mail className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-base mb-1">Email Enquiries</h3>
            <p className="text-xs text-slate-500 mb-2">For batch schedules and corporate tie-ups</p>
            <a
              href={`mailto:${academyInfo.email}`}
              className="text-sm font-extrabold text-brand-primary hover:text-brand-deep hover:underline transition-colors break-all"
            >
              {academyInfo.email}
            </a>
          </div>
        </div>

        {/* Location */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-brand-soft text-brand-primary flex items-center justify-center shrink-0">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-base mb-1">Physical Location</h3>
            <p className="text-xs text-slate-500 mb-2">Pune, Maharashtra</p>
            <span className="text-sm font-semibold text-slate-800">
              {academyInfo.fullAddress}
            </span>
          </div>
        </div>
      </div>

      {/* Main Two-Column Contact & Map Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Contact Form */}
        <div className="lg:col-span-7">
          <ContactForm initialCourse={selectedCourse} />
        </div>

        {/* Location & Embedded Map */}
        <div className="lg:col-span-5 space-y-6">
          <MapEmbed />
        </div>
      </div>
    </div>
  );
}
