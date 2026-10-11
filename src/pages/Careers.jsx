import React, { useState } from 'react';
import { Briefcase, Send, CheckCircle2, Mail, Phone, MapPin, Award, Users, BookOpen } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { academyInfo } from '../data/academyData';

export default function Careers() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    contact: '',
    role: 'IELTS Master Trainer',
    experience: '',
    resumeLink: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setForm({
        name: '',
        email: '',
        contact: '',
        role: 'IELTS Master Trainer',
        experience: '',
        resumeLink: '',
        message: ''
      });
    }, 500);
  };

  const openPositions = [
    {
      title: 'IELTS Master Trainer',
      type: 'Full-time / Part-time',
      experience: '3+ Years',
      description: 'Lead IELTS test preparation batches across Listening, Reading, Writing, and Speaking with Band 7.5+ outcome focus.'
    },
    {
      title: 'Spoken English & Elocution Coach',
      type: 'Part-time',
      experience: '2+ Years',
      description: 'Conduct interactive speech, elocution, and stage confidence sessions for young learners (Ages 7–15).'
    },
    {
      title: 'Corporate Soft Skills Trainer',
      type: 'Consultant / Trainer',
      experience: '4+ Years',
      description: 'Deliver corporate dining, boardroom articulation, and executive presence workshops for working professionals.'
    }
  ];

  return (
    <div className="py-12 sm:py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-brand-soft border border-brand-border text-brand-primary">
          Join Our Faculty
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          Join The <span className="bg-gradient-to-r from-brand-primary to-brand-deep bg-clip-text text-transparent">Consistent</span> Academy
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Be part of our 19+ year mentorship legacy in Pune. We are looking for passionate language educators, IELTS trainers, and corporate mentors.
        </p>
      </div>

      {/* Open Positions Grid */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-brand-primary" />
          <h2 className="text-xl font-bold text-slate-900">Open Faculty Positions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {openPositions.map((pos, idx) => (
            <div key={idx} className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm hover:shadow-brand transition-all flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-brand-primary bg-brand-soft px-3 py-1 rounded-full border border-brand-border/60 inline-block mb-3">
                  {pos.type}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{pos.title}</h3>
                <p className="text-xs text-slate-500 mb-3 font-semibold">Experience: {pos.experience}</p>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">{pos.description}</p>
              </div>
              <a
                href="#apply-form"
                onClick={() => setForm((prev) => ({ ...prev, role: pos.title }))}
                className="text-xs font-bold text-brand-primary hover:underline"
              >
                Apply for this role →
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Application Form */}
      <div id="apply-form" className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-brand max-w-3xl mx-auto space-y-6">
        <div className="text-center space-y-1">
          <h3 className="text-2xl font-bold text-slate-900">Faculty Application Form</h3>
          <p className="text-xs text-slate-500">
            Submit your profile details. Our academic team will review and contact you.
          </p>
        </div>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
            <h4 className="text-lg font-bold text-slate-900">Application Submitted!</h4>
            <p className="text-xs text-slate-600 max-w-md mx-auto">
              Our team will review your profile and contact you soon via phone or email (<strong>{academyInfo.email}</strong>).
            </p>
            <Button onClick={() => setIsSubmitted(false)} variant="secondary" size="sm">
              Submit Another Application
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Priya Sharma"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-brand-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-brand-primary"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Contact Phone</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={form.contact}
                  onChange={(e) => setForm({ ...form, contact: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-brand-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Applying For Role</label>
                <select
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-brand-primary bg-white"
                >
                  <option value="IELTS Master Trainer">IELTS Master Trainer</option>
                  <option value="Spoken English & Elocution Coach">Spoken English & Elocution Coach</option>
                  <option value="Corporate Soft Skills Trainer">Corporate Soft Skills Trainer</option>
                  <option value="Teaching Assistant / Academic Coordinator">Teaching Assistant / Academic Coordinator</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Teaching Experience (Years)</label>
                <input
                  type="text"
                  placeholder="e.g. 3 Years in IELTS coaching"
                  value={form.experience}
                  onChange={(e) => setForm({ ...form, experience: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-brand-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Resume / LinkedIn Profile URL</label>
                <input
                  type="url"
                  placeholder="https://linkedin.com/in/... or Google Drive link"
                  value={form.resumeLink}
                  onChange={(e) => setForm({ ...form, resumeLink: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-brand-primary"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Brief Introduction & Why You'd Like to Join</label>
              <textarea
                rows={4}
                placeholder="Tell us about your teaching philosophy, past results, and availability..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-brand-primary"
              />
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Submitting Application...' : 'Submit Application'}</span>
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
