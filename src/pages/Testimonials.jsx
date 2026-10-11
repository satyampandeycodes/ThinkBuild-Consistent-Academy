import React from 'react';
import { testimonials } from '../data/academyData';
import SectionHeading from '../components/SectionHeading';
import TestimonialCard from '../components/TestimonialCard';
import Button from '../components/Button';
import { Award, Globe2 } from 'lucide-react';

export default function Testimonials() {
  return (
    <div className="py-12 sm:py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-brand-soft border border-brand-border text-brand-primary mb-3">
          Verifiable Student Outcomes
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          Student Stories & Results
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Real feedback and verified band score achievements from candidates who prepared with The Consistent Academy and secured admissions or PR in Canada, Germany, Australia, and the UK.
        </p>
      </div>

      {/* Highlights Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center">
          <span className="text-2xl font-extrabold text-brand-primary block">Canada</span>
          <span className="text-xs text-slate-500 font-medium">Study & PR Placements</span>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center">
          <span className="text-2xl font-extrabold text-brand-primary block">Germany</span>
          <span className="text-xs text-slate-500 font-medium">Higher Studies Admissions</span>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center">
          <span className="text-2xl font-extrabold text-brand-primary block">Australia</span>
          <span className="text-xs text-slate-500 font-medium">University Admissions</span>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center">
          <span className="text-2xl font-extrabold text-brand-primary block">United Kingdom</span>
          <span className="text-xs text-slate-500 font-medium">Dream University Admits</span>
        </div>
      </div>

      {/* Grid of All 10 Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="bg-brand-soft rounded-3xl p-8 sm:p-12 border border-brand-border/60 text-center space-y-4 max-w-3xl mx-auto">
        <Award className="w-10 h-10 text-brand-primary mx-auto" />
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          Ready to write your own success story?
        </h3>
        <p className="text-slate-600 text-sm sm:text-base">
          Join our upcoming batch and experience the power of consistent, expert-guided preparation.
        </p>
        <div className="pt-2">
          <Button to="/contact" variant="primary" size="lg">
            Start Your Preparation Today
          </Button>
        </div>
      </div>
    </div>
  );
}
