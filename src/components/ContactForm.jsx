import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Info } from 'lucide-react';
import Button from './Button';

export default function ContactForm({ initialCourse = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: initialCourse || '',
    message: '',
    privacyAccepted: true
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const courseOptions = [
    'IELTS | TOEFL | PTE | CELPIP Preparation Course',
    'Corporate Survival & Success Program',
    'Crack Your Interview (Fresher-Focused)',
    'Corporate Dining & Social Etiquette Masterclass',
    'Advanced English & Leadership Presence for Managers',
    'Communication Skill Training',
    'Personality Development Training',
    'Kids: Elocution Course',
    'Kids: Public Speaking',
    'Kids: Grammar Foundations',
    'Kids: Creative Writing',
    'Kids: Reading Club'
  ];

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Full name is required';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[0-9+\s-]{10,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.privacyAccepted) {
      errs.privacy = 'You must accept the privacy terms to continue';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitting(true);
      setTimeout(() => {
        setSubmitting(false);
        setSubmitted(true);
      }, 700);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm relative">
      {/* Prototype Indicator Notice */}
      <div className="mb-6 p-3.5 rounded-xl bg-brand-soft border border-brand-border/60 flex items-start gap-2.5 text-xs text-brand-dark">
        <Info className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
        <div>
          <span className="font-bold">Prototype / Demo Form:</span> Your inquiry data is validated on client-side. In production, this connects securely to The Consistent Academy's admissions desk.
        </div>
      </div>

      {submitted ? (
        <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">
            Enquiry Received!
          </h3>
          <p className="text-slate-600 text-sm max-w-md mx-auto">
            Thank you, <strong className="text-slate-900">{formData.name}</strong>. In our active system, Vidya Wankhade or an admissions counselor will reach out to you at <strong className="text-slate-900">{formData.phone}</strong>.
          </p>
          <div className="pt-4">
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: '',
                  email: '',
                  phone: '',
                  course: '',
                  message: '',
                  privacyAccepted: true
                });
              }}
              className="px-6 py-2.5 rounded-xl border border-brand-border text-brand-primary hover:bg-brand-soft text-sm font-semibold transition-colors"
            >
              Submit Another Enquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {/* Full Name */}
          <div>
            <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Full Name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Rahul Sharma"
              className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-brand-primary/20 ${
                errors.name ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 focus:border-brand-primary'
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.name}</span>
              </p>
            )}
          </div>

          {/* Email & Phone grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Email Address <span className="text-rose-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-brand-primary/20 ${
                  errors.email ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 focus:border-brand-primary'
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Phone Number <span className="text-rose-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-brand-primary/20 ${
                  errors.phone ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 focus:border-brand-primary'
                }`}
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.phone}</span>
                </p>
              )}
            </div>
          </div>

          {/* Course of Interest */}
          <div>
            <label htmlFor="course" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Course of Interest
            </label>
            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 bg-white"
            >
              <option value="">Select a Course or Programme (Optional)</option>
              {courseOptions.map((c, i) => (
                <option key={i} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Your Message or Learning Goal
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your target IELTS band, timeline, or corporate communication requirements..."
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
            />
          </div>

          {/* Privacy checkbox */}
          <div className="flex items-start gap-2.5 pt-1">
            <input
              type="checkbox"
              id="privacyAccepted"
              name="privacyAccepted"
              checked={formData.privacyAccepted}
              onChange={handleChange}
              className="mt-1 w-4 h-4 rounded text-brand-primary focus:ring-brand-primary"
            />
            <label htmlFor="privacyAccepted" className="text-xs text-slate-600 leading-normal">
              I agree to allow The Consistent Academy to contact me regarding course details and demo sessions.
            </label>
          </div>
          {errors.privacy && (
            <p className="text-xs text-rose-500 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.privacy}</span>
            </p>
          )}

          {/* Submit CTA */}
          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              icon={Send}
              iconPosition="right"
              disabled={submitting}
            >
              {submitting ? 'Sending Request...' : 'Submit Course Enquiry'}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
