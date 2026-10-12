import React, { useState } from 'react';
import { Clock, Tag, BookOpen, ChevronRight, X, CheckCircle2 } from 'lucide-react';
import Button from './Button';

export default function CourseCard({ course }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="bg-white rounded-2xl border border-slate-200/90 hover:border-brand-primary/40 overflow-hidden shadow-xs hover:shadow-[0_20px_35px_-12px_rgba(15,23,42,0.12)] transition-all duration-300 flex flex-col group hover:-translate-y-1.5 relative">
        {/* Top Active Indicator Beam */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-primary via-purple-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />

        {/* Card Image Banner with Professional Hover Reveal */}
        <div
          onClick={() => setShowModal(true)}
          className="relative h-48 sm:h-52 bg-slate-100 overflow-hidden cursor-pointer"
        >
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            onError={(e) => {
              e.currentTarget.src = '/assets/academy/logo.png';
              e.currentTarget.className = 'w-full h-full object-contain p-8';
            }}
          />

          {/* Professional Bottom Slide-Up Action Bar on Hover */}
          <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-slate-950/85 via-slate-950/45 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out flex items-center justify-between text-white pointer-events-none">
            <span className="text-xs font-semibold flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-brand-300" />
              <span>Preview Syllabus & Modules</span>
            </span>
            <ChevronRight className="w-4 h-4 text-slate-300 group-hover:translate-x-0.5 transition-transform" />
          </div>

          {/* Duration Badge - Crisp Solid Style */}
          <div className="absolute top-3 left-3 bg-slate-900 text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg shadow-sm flex items-center gap-1.5 border border-white/10">
            <Clock className="w-3 h-3 text-brand-300" />
            <span>{course.hours}</span>
          </div>

          {/* Price Badge - High-Contrast Style */}
          {course.price && (
            <div className="absolute top-3 right-3 bg-white text-slate-900 group-hover:text-brand-primary group-hover:border-brand-primary/40 text-[11px] font-extrabold px-2.5 py-1 rounded-lg shadow-sm border border-slate-200/90 transition-colors duration-200">
              ₹ {course.price}
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            {course.subtitle && (
              <span className="text-xs font-bold uppercase tracking-wider text-brand-primary mb-1 block">
                {course.subtitle}
              </span>
            )}
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-primary transition-colors leading-snug mb-3">
              {course.title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-2">
              {course.description}
            </p>

            {/* Quick Metrics */}
            <div className="flex items-center gap-4 text-xs text-slate-500 mb-4 pb-4 border-b border-slate-100">
              <span className="flex items-center gap-1.5 font-medium group-hover:text-slate-700 transition-colors">
                <Clock className="w-4 h-4 text-brand-primary group-hover:scale-110 transition-transform duration-300" />
                {course.hours}
              </span>
              <span className="flex items-center gap-1.5 font-medium group-hover:text-slate-700 transition-colors">
                <BookOpen className="w-4 h-4 text-brand-primary group-hover:scale-110 transition-transform duration-300" />
                {course.modules} Modules
              </span>
              {course.price && (
                <span className="flex items-center gap-1.5 font-medium text-slate-700">
                  <Tag className="w-4 h-4 text-brand-primary group-hover:scale-110 transition-transform duration-300" />
                  ₹ {course.price}
                </span>
              )}
            </div>

            {/* Promise badge */}
            {course.promise && (
              <div className="bg-brand-soft rounded-xl p-3 mb-5 border border-brand-border/40">
                <p className="text-xs text-slate-700 font-medium italic">
                  "{course.promise}"
                </p>
              </div>
            )}
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 pt-2">
            <button
              onClick={() => setShowModal(true)}
              className="flex-1 py-2.5 px-4 rounded-xl border border-brand-border text-brand-primary hover:bg-brand-soft group-hover:border-brand-primary/50 font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer group/btn"
            >
              <span>View Syllabus</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
            </button>
            <Button
              to={`/contact?course=${encodeURIComponent(course.title)}`}
              variant="primary"
              size="sm"
              className="px-4 py-2.5 text-xs shadow-xs hover:shadow-brand transition-shadow"
            >
              Enquire
            </Button>
          </div>
        </div>
      </div>

      {/* Syllabus Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setShowModal(false)}
        >
          {/* Main Modal Window (Fixed Card Shell) */}
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] shadow-2xl relative border border-slate-100 flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Always-Visible Fixed Floating Close ("Cut") Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 z-40 p-2.5 rounded-full bg-white/95 hover:bg-rose-50 text-slate-500 hover:text-rose-600 border border-slate-200/90 shadow-md backdrop-blur-md transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 group"
              aria-label="Close syllabus modal"
              title="Close modal"
            >
              <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-200" />
            </button>

            {/* Scrollable Content Area */}
            <div className="overflow-y-auto p-6 sm:p-8 flex-1">
              <div className="pr-10 sm:pr-12">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-primary mb-1 block">
                  {course.subtitle || 'Course Syllabus'}
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
                  {course.title}
                </h3>
              </div>
              <p className="text-sm text-slate-600 mb-4">
                {course.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100 mb-6">
                <span>Duration: {course.hours}</span>
                <span>•</span>
                <span>Modules: {course.modules}</span>
                {course.price && (
                  <>
                    <span>•</span>
                    <span className="text-brand-primary">Fee: ₹ {course.price}</span>
                  </>
                )}
              </div>

              {course.targetAudience && (
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Target Audience
                  </h4>
                  <p className="text-sm text-slate-700">
                    {course.targetAudience}
                  </p>
                </div>
              )}

              <div className="space-y-4 mb-8">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                  Detailed Curriculum Modules
                </h4>
                {course.moduleDetails && course.moduleDetails.map((mod, i) => (
                  <div key={i} className="p-4 rounded-xl border border-slate-200 bg-slate-50/60">
                    <h5 className="font-bold text-sm text-slate-900 mb-2">
                      {mod.title}
                    </h5>
                    <ul className="space-y-1.5">
                      {mod.topics && mod.topics.map((t, ti) => (
                        <li key={ti} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-primary shrink-0 mt-0.5" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 text-sm font-semibold transition-colors cursor-pointer"
                >
                  Close
                </button>
                <Button
                  to={`/contact?course=${encodeURIComponent(course.title)}`}
                  variant="primary"
                  size="md"
                  onClick={() => setShowModal(false)}
                >
                  Enroll / Enquire
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
