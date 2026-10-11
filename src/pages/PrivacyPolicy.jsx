import React from 'react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { ShieldCheck, Lock, FileText } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-8 space-y-12">
      <div className="text-center">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-brand-soft border border-brand-border text-brand-primary mb-3">
          Compliance & Transparency
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Privacy Policy
        </h1>
        <p className="text-slate-600 text-sm sm:text-base">
          Last updated: October 2026 • The Consistent Academy (Pune, Maharashtra)
        </p>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-brand-primary" />
            1. Information We Collect
          </h2>
          <p>
            When you inquire about our courses, we collect standard contact details including your full name, email address, phone number, and programme of interest. This information is submitted voluntarily via our contact and consultation request forms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Lock className="w-5 h-5 text-brand-primary" />
            2. Purpose of Data Use
          </h2>
          <p>
            The collected information is solely used to:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-600 text-sm">
            <li>Respond to your course inquiries and provide syllabus or schedule details.</li>
            <li>Coordinate one-on-one assessment and demo sessions.</li>
            <li>Communicate admission updates and personalized learning recommendations.</li>
          </ul>
          <p>
            We do not sell, rent, or lease your personal information to third-party commercial marketing entities.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <FileText className="w-5 h-5 text-brand-primary" />
            3. Data Protection & Inquiries
          </h2>
          <p>
            If you wish to update or remove your contact information from our communications registry, please contact us at <a href="mailto:theconsistentacademy@gmail.com" className="text-brand-primary font-semibold hover:underline">theconsistentacademy@gmail.com</a>.
          </p>
        </section>

        <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-xs text-slate-500">
          <span>The Consistent Academy, Pune, Maharashtra</span>
          <Button to="/" variant="secondary" size="sm">
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
