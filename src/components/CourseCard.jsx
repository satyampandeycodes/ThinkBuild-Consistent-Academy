import React, { useState } from 'react';
import { Clock, Tag, BookOpen, ChevronRight, X, CheckCircle2 } from 'lucide-react';
import Button from './Button';

export default function CourseCard({ course }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-brand transition-all duration-300 flex flex-col group hover:-translate-y-1">
        {/* Card Image Banner */}
        <div className="relative h-48 bg-brand-soft overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.currentTarget.src = '/assets/academy/logo.png';
              e.currentTarget.className = 'w-full h-full object-contain p-8';
            }}
          />
          <div className="absolute top-3 left-3 bg-brand-dark/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
            {course.hours}
          </div>
          {course.price && (
            <div className="absolute top-3 right-3 bg-white/95 text-brand-primary text-xs font-bold px-3 py-1 rounded-full shadow-sm">
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
              <span className="flex items-center gap-1.5 font-medium">
                <Clock className="w-4 h-4 text-brand-primary" />
                {course.hours}
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <BookOpen className="w-4 h-4 text-brand-primary" />
                {course.modules} Modules
              </span>
              {course.price && (
                <span className="flex items-center gap-1.5 font-medium text-slate-700">
                  <Tag className="w-4 h-4 text-brand-primary" />
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
              className="flex-1 py-2.5 px-4 rounded-xl border border-brand-border text-brand-primary hover:bg-brand-soft font-semibold text-xs transition-colors flex items-center justify-center gap-1"
            >
              <span>View Syllabus</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
            <Button
              to={`/contact?course=${encodeURIComponent(course.title)}`}
              variant="primary"
              size="sm"
              className="px-4 py-2.5 text-xs"
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
