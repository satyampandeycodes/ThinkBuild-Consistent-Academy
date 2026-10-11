import React from 'react';
import { Star, Quote, Award, MapPin } from 'lucide-react';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-brand transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
      <div>
        {/* Top Header: Rating & Band Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-star-amber text-star-amber" />
            ))}
          </div>

          {testimonial.band && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-brand-soft text-brand-primary border border-brand-border/60">
              <Award className="w-3 h-3 text-brand-primary" />
              <span>{testimonial.band}</span>
            </span>
          )}
        </div>

        {/* Quote text */}
        <div className="relative mb-6">
          <Quote className="w-8 h-8 text-brand-border/40 absolute -top-3 -left-2 -z-0" />
          <p className="relative z-10 text-slate-700 text-sm sm:text-base leading-relaxed italic">
            "{testimonial.text}"
          </p>
        </div>
      </div>

      {/* Student Profile Info */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <div>
          <h4 className="font-bold text-slate-900 text-sm group-hover:text-brand-primary transition-colors">
            {testimonial.name}
          </h4>
          <p className="text-xs text-slate-500">
            {testimonial.role} • {testimonial.course}
          </p>
        </div>

        {testimonial.country && (
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200">
            <MapPin className="w-3 h-3 text-slate-400" />
            <span>{testimonial.country}</span>
          </span>
        )}
      </div>
    </div>
  );
}
