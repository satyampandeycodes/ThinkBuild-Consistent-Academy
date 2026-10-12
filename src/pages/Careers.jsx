import React, { useState } from 'react';
import {
  GraduationCap,
  MessageSquare,
  Users,
  PenTool,
  Building2,
  CheckCircle2,
  Send,
  Mail,
  Phone,
  Link as LinkIcon,
  Clock,
  ArrowRight,
  Briefcase,
  Check,
  User,
  Award
} from 'lucide-react';
import Button from '../components/Button';
import { academyInfo } from '../data/academyData';

const openPositions = [
  {
    id: 'ielts-trainer',
    title: 'IELTS Trainer',
    type: 'Part-time / Full-time',
    icon: GraduationCap,
    description: 'Help students achieve their desired IELTS band scores through comprehensive training in all four modules.',
    responsibilities: [
      'Conduct IELTS preparation sessions for Listening, Reading, Writing, and Speaking',
      'Provide personalized feedback and improvement strategies',
      'Design and evaluate practice tests'
    ],
    requirements: [
      'IELTS Band 8+ or equivalent certification',
      '2+ years of teaching experience',
      'Strong communication skills'
    ]
  },
  {
    id: 'spoken-english-mentor',
    title: 'Spoken English Mentor',
    type: 'Part-time / Full-time',
    icon: MessageSquare,
    description: 'Guide students to improve their conversational English skills and build confidence in communication.',
    responsibilities: [
      'Facilitate interactive speaking sessions',
      'Focus on pronunciation, fluency, and vocabulary building',
      'Create engaging conversational activities'
    ],
    requirements: [
      'Excellent English proficiency',
      'Experience in teaching spoken English',
      'Patient and encouraging teaching style'
    ]
  },
  {
    id: 'teaching-assistant',
    title: 'Teaching Assistant',
    type: 'Part-time / Full-time',
    icon: Users,
    description: 'Support our trainers in delivering high-quality education and managing classroom activities.',
    responsibilities: [
      'Assist trainers during sessions',
      'Help with student assessments and grading',
      'Manage learning materials and resources'
    ],
    requirements: [
      'Graduate in any field',
      'Good communication skills',
      'Willingness to learn and grow'
    ]
  },
  {
    id: 'writing-skills-coach',
    title: 'Writing Skills Coach',
    type: 'Part-time / Full-time',
    icon: PenTool,
    description: 'Empower students to express themselves effectively through enhanced writing abilities.',
    responsibilities: [
      'Teach essay writing, letter writing, and creative writing',
      'Review and provide detailed feedback on written work',
      'Develop writing curriculum and exercises'
    ],
    requirements: [
      'Strong writing and editing skills',
      'Experience in teaching writing',
      'Attention to detail'
    ]
  },
  {
    id: 'corporate-communication-trainer',
    title: 'Corporate Communication Trainer',
    type: 'Part-time / Full-time',
    icon: Building2,
    description: 'Train professionals in effective workplace communication, presentations, and business English.',
    responsibilities: [
      'Conduct corporate training sessions',
      'Focus on email writing, presentations, and meetings',
      'Customize training based on corporate needs'
    ],
    requirements: [
      'Corporate training experience',
      'Understanding of business communication',
      'Professional demeanor'
    ]
  }
];

export default function Careers() {
  const [selectedRole, setSelectedRole] = useState(openPositions[0]);
  const [hoveredRole, setHoveredRole] = useState(null);

  const [form, setForm] = useState({
    name: '',
    email: '',
    contact: '',
    role: openPositions[0].title,
    experience: '',
    resumeLink: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Active role displayed in the interactive details card (hover takes priority over selected)
  const activeRole = hoveredRole || selectedRole;

  const handleSelectRole = (role) => {
    setSelectedRole(role);
    setForm((prev) => ({ ...prev, role: role.title }));
    const formElement = document.getElementById('apply-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setForm({
      name: '',
      email: '',
      contact: '',
      role: selectedRole.title,
      experience: '',
      resumeLink: '',
      message: ''
    });
  };

  return (
    <div className="py-6 sm:py-10 max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
      {/* Compact Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-bold tracking-wide uppercase bg-brand-soft border border-brand-border text-brand-primary">
          <Briefcase className="w-3 h-3 text-brand-primary" />
          <span>Careers | The Consistent Academy</span>
        </span>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
          Join The{' '}
          <span className="bg-gradient-to-r from-brand-primary via-purple-600 to-brand-deep bg-clip-text text-transparent">
            Consistent
          </span>{' '}
          Academy
        </h1>
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
          We're always looking for passionate educators and mentors who believe in consistent growth and meaningful learning.
        </p>
      </div>

      {/* Interactive Compact 5-Role Grid with Hover Effect */}
      <section className="space-y-3">
        <div className="flex items-center justify-between text-xs text-slate-500 font-semibold px-1">
          <span className="flex items-center gap-1.5 text-slate-700">
            <Award className="w-3.5 h-3.5 text-brand-primary" />
            <span>Hover to preview role details • Click to apply</span>
          </span>
          <span className="text-[11px] text-brand-primary font-bold hidden sm:inline">
            5 Openings Available
          </span>
        </div>

        {/* 5-Column Compact Card Deck */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {openPositions.map((pos) => {
            const Icon = pos.icon;
            const isHovered = hoveredRole?.id === pos.id;
            const isSelected = selectedRole.id === pos.id;

            return (
              <div
                key={pos.id}
                onMouseEnter={() => setHoveredRole(pos)}
                onMouseLeave={() => setHoveredRole(null)}
                onClick={() => handleSelectRole(pos)}
                className={`relative group rounded-2xl p-4 transition-all duration-200 cursor-pointer border flex flex-col justify-between select-none ${
                  isSelected
                    ? 'bg-brand-soft/60 border-brand-primary shadow-md ring-1 ring-brand-primary/40 -translate-y-1'
                    : isHovered
                    ? 'bg-white border-brand-primary/70 shadow-lg -translate-y-1'
                    : 'bg-white border-slate-200 hover:border-brand-primary/50 hover:shadow-md hover:-translate-y-0.5'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected || isHovered
                          ? 'bg-brand-primary text-white shadow-xs'
                          : 'bg-brand-soft text-brand-primary'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
                    )}
                  </div>

                  <h3
                    className={`font-bold text-xs sm:text-sm leading-snug transition-colors ${
                      isSelected || isHovered ? 'text-brand-primary' : 'text-slate-900'
                    }`}
                  >
                    {pos.title}
                  </h3>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-slate-500">
                    {pos.type}
                  </span>
                  <ArrowRight
                    className={`w-3.5 h-3.5 transition-transform ${
                      isSelected || isHovered
                        ? 'text-brand-primary translate-x-1'
                        : 'text-slate-400 opacity-60'
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Detail Card for Active Role */}
        <div className="bg-gradient-to-r from-purple-50/70 via-white to-slate-50 rounded-2xl border border-brand-border/60 p-4 sm:p-5 shadow-xs transition-all duration-200">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Role Header & Description (col 4) */}
            <div className="md:col-span-4 space-y-2 border-b md:border-b-0 md:border-r border-slate-200/80 pb-3 md:pb-0 md:pr-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-brand-primary text-white">
                  {activeRole.type}
                </span>
                <span className="text-[11px] text-slate-500 font-semibold">Active Preview</span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                {activeRole.title}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {activeRole.description}
              </p>
              <button
                type="button"
                onClick={() => handleSelectRole(activeRole)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-primary hover:text-brand-deep cursor-pointer pt-1"
              >
                <span>Select & Fill Application</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Key Responsibilities (col 4) */}
            <div className="md:col-span-4 space-y-1.5 border-b md:border-b-0 md:border-r border-slate-200/80 pb-3 md:pb-0 md:px-2">
              <h5 className="text-[11px] font-bold uppercase tracking-wider text-brand-primary flex items-center gap-1">
                <Check className="w-3.5 h-3.5" />
                <span>Key Responsibilities</span>
              </h5>
              <ul className="space-y-1">
                {activeRole.responsibilities.map((resp, i) => (
                  <li key={i} className="text-xs text-slate-700 flex items-start gap-1.5 leading-snug">
                    <span className="text-brand-primary font-bold text-xs mt-0.5">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements (col 4) */}
            <div className="md:col-span-4 space-y-1.5 md:pl-2">
              <h5 className="text-[11px] font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-brand-primary" />
                <span>Requirements</span>
              </h5>
              <ul className="space-y-1">
                {activeRole.requirements.map((req, i) => (
                  <li key={i} className="text-xs text-slate-700 flex items-start gap-1.5 leading-snug">
                    <span className="text-emerald-600 font-bold text-xs mt-0.5">✓</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Streamlined, Space-Efficient Application Form */}
      <section id="apply-form" className="scroll-mt-20">
        <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-8 lg:p-9 shadow-md shadow-slate-200/50 max-w-3xl mx-auto space-y-5">
          <div className="text-center space-y-1">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">Apply Now</h2>
            <p className="text-xs text-slate-500">
              Your application will be securely stored and reviewed by our team.
            </p>
            <div className="pt-1 flex items-center justify-center gap-1.5 text-xs text-brand-primary font-semibold">
              <Mail className="w-3.5 h-3.5" />
              <a href={`mailto:${academyInfo.email}`} className="hover:underline">
                {academyInfo.email}
              </a>
            </div>
          </div>

          {isSubmitted ? (
            <div className="text-center py-6 px-4 space-y-3 bg-emerald-50/70 rounded-2xl border border-emerald-200 animate-in fade-in zoom-in-95 duration-200">
              <div className="w-11 h-11 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-slate-900">Application submitted successfully!</h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Our team will review your profile and contact you soon.
                </p>
                <p className="text-xs text-brand-primary font-semibold">
                  Desk: {academyInfo.email}
                </p>
              </div>
              <div className="pt-1">
                <Button onClick={handleResetForm} variant="outline" size="sm">
                  Submit Another Application
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Full Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all bg-slate-50/50 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="name@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all bg-slate-50/50 focus:bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Number & Applying For */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Contact Number <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                    <input
                      type="tel"
                      name="contact"
                      required
                      placeholder="+91 98765 43210"
                      value={form.contact}
                      onChange={(e) => setForm({ ...form, contact: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all bg-slate-50/50 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Applying For <span className="text-rose-500">*</span>
                  </label>
                  <select
                    name="role"
                    required
                    value={form.role}
                    onChange={(e) => setForm({ ...form, role: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all bg-slate-50/50 focus:bg-white"
                  >
                    <option value="">Select a role</option>
                    <option value="IELTS Trainer">IELTS Trainer</option>
                    <option value="Spoken English Mentor">Spoken English Mentor</option>
                    <option value="Teaching Assistant">Teaching Assistant</option>
                    <option value="Writing Skills Coach">Writing Skills Coach</option>
                    <option value="Corporate Communication Trainer">Corporate Communication Trainer</option>
                  </select>
                </div>
              </div>

              {/* Years of Experience & Resume Link */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Years of Experience <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      name="experience"
                      required
                      placeholder="e.g. 2+ Years"
                      value={form.experience}
                      onChange={(e) => setForm({ ...form, experience: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all bg-slate-50/50 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Resume Link <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <LinkIcon className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                    <input
                      type="url"
                      name="resumeLink"
                      required
                      placeholder="https://drive.google.com/..."
                      value={form.resumeLink}
                      onChange={(e) => setForm({ ...form, resumeLink: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all bg-slate-50/50 focus:bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Brief Introduction */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">
                  Brief Introduction <span className="text-rose-500">*</span>
                </label>
                <textarea
                  name="message"
                  rows={3}
                  required
                  placeholder="Share a brief overview of your teaching background and availability..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all bg-slate-50/50 focus:bg-white resize-y"
                />
                <p className="text-[10px] text-slate-400 mt-1">
                  Upload your resume to Google Drive and paste the accessible link above.
                </p>
              </div>

              {/* Submit CTA */}
              <div className="pt-2 text-center">
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled={isSubmitting}
                  icon={Send}
                  iconPosition="left"
                  className="w-full sm:w-auto sm:min-w-[220px] justify-center cursor-pointer shadow-brand hover:shadow-brand-lg"
                >
                  {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                </Button>
                <p className="text-[11px] text-slate-400 text-center mt-2.5">
                  Note: Interactive prototype recruitment desk. Official email: {academyInfo.email}
                </p>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
