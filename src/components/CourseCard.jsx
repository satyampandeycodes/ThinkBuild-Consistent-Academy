import React, { useState } from 'react';
import { Clock, Tag, BookOpen, ChevronRight, X, CheckCircle2 } from 'lucide-react';
import Button from './Button';

export default function CourseCard({ course }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="bg-white rounded-2xl border border-slate-200/90 hover:border-brand-primary/40 overflow-hidden shadow-xs hover:shadow-[0_18px_38px_-12px_rgba(79,70,229,0.22)] transition-all duration-300 flex flex-col group hover:-translate-y-1.5 relative">
        {/* Top Active Indicator Beam */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-primary via-purple-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />

        {/* Card Image Banner with Interactive Hover Reveal */}
        <div
          onClick={() => setShowModal(true)}
          className="relative h-48 sm:h-52 bg-brand-soft overflow-hidden cursor-pointer"
        >
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
            onError={(e) => {
              e.currentTarget.src = '/assets/academy/logo.png';
              e.currentTarget.className = 'w-full h-full object-contain p-8';
            }}
          />

          {/* Frosted Interactive Vignette Overlay on Hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            {/* Center Floating Glass Action Pill */}
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 text-slate-900 text-xs font-bold shadow-xl backdrop-blur-md transform translate-y-3 group-hover:translate-y-0 transition-all duration-300">
              <BookOpen className="w-3.5 h-3.5 text-brand-primary" />
              <span>Preview Syllabus</span>
            </span>
          </div>

          {/* Light Sheen Sweep Across Banner */}
          <div className="book-sheen" />

          {/* Duration Badge */}
          <div className="absolute top-3 left-3 bg-slate-950/80 text-white text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-md border border-white/10 shadow-xs flex items-center gap-1 group-hover:border-brand-primary/50 transition-colors">
            <Clock className="w-3 h-3 text-brand-300" />
            <span>{course.hours}</span>
          </div>

          {/* Price Badge with dynamic color transition */}
          {course.price && (
            <div className="absolute top-3 right-3 bg-white text-brand-primary group-hover:bg-brand-primary group-hover:text-white text-[11px] font-extrabold px-3 py-1 rounded-full shadow-xs group-hover:shadow-md transition-all duration-300 border border-slate-100 group-hover:border-transparent">
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative border border-slate-100">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
              aria-label="Close syllabus modal"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary mb-1 block">
              {course.subtitle || 'Course Syllabus'}
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-2 pr-8">
              {course.title}
            </h3>
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
                className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 text-sm font-semibold"
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
      )}
    </>
  );
}
