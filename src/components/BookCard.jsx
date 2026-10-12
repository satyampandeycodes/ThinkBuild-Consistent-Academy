import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';

export default function BookCard({ book, layout = 'vertical' }) {
  if (layout === 'horizontal') {
    return (
      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-brand transition-all duration-300 flex flex-col md:flex-row group hover:-translate-y-1">
        {/* Book Cover */}
        <div className="md:w-5/12 bg-gradient-to-b from-brand-soft/70 to-slate-50 p-6 flex items-center justify-center border-b md:border-b-0 md:border-r border-slate-100 book-perspective relative overflow-hidden">
          <div className="relative w-40 sm:w-44 aspect-[3/4] select-none">
            {/* Realistic Page Stack Behind Cover */}
            <div className="book-pages-stack rounded-r-lg rounded-l-xs border-r border-b border-slate-300/80" />

            {/* Book Front Cover with Spine */}
            <div className="book-card-3d relative w-full h-full rounded-r-lg rounded-l-xs overflow-hidden bg-white border border-slate-300/70 shadow-md">
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = '/assets/academy/logo.png';
                  e.currentTarget.className = 'w-full h-full object-contain p-4';
                }}
              />
            </div>
          </div>
        </div>

        {/* Book Details */}
        <div className="md:w-7/12 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-brand-primary bg-brand-soft mb-3 border border-brand-border/40">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Published Work</span>
            </span>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-brand-primary transition-colors leading-snug">
              {book.title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
              {book.description}
            </p>
          </div>

          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-3">
              Available On:
            </h4>
            <div className="flex flex-wrap gap-2">
              {book.links && book.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 hover:border-brand-primary hover:bg-brand-soft text-slate-700 hover:text-brand-primary text-xs font-semibold transition-all shadow-xs"
                >
                  <span>{link.label}</span>
                  <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-brand-primary" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Vertical layout - Ideal for 3-card grid on Homepage
  return (
    <div className="bg-white rounded-3xl border border-slate-200 hover:border-brand-primary/40 overflow-hidden shadow-xs hover:shadow-xl hover:shadow-brand-primary/10 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5">
      <div>
        {/* Book Cover Container */}
        <div className="h-64 sm:h-72 bg-gradient-to-b from-slate-100/80 via-slate-50 to-white p-6 flex items-center justify-center border-b border-slate-100 relative overflow-hidden book-perspective">
          <div className="relative h-full aspect-[3/4] select-none">
            {/* Realistic Page Stack Behind Cover */}
            <div className="book-pages-stack rounded-r-lg rounded-l-xs border-r border-b border-slate-300/80" />

            {/* Book Front Cover with Spine */}
            <div className="book-card-3d relative w-full h-full rounded-r-lg rounded-l-xs overflow-hidden bg-white border border-slate-300/70 shadow-md">
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = '/assets/academy/logo.png';
                  e.currentTarget.className = 'w-full h-full object-contain p-4';
                }}
              />
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-brand-primary bg-brand-soft mb-3 border border-brand-border/40">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Published Work</span>
          </span>

          <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-primary transition-colors leading-snug">
            {book.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
            {book.description}
          </p>
        </div>
      </div>

      {/* Store Links */}
      <div className="p-6 sm:p-7 pt-0 border-t border-slate-100 mt-auto">
        <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-3 pt-4">
          Available On:
        </h4>
        <div className="flex flex-wrap gap-2">
          {book.links && book.links.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 hover:border-brand-primary hover:bg-brand-soft text-slate-700 hover:text-brand-primary text-xs font-semibold transition-all shadow-xs"
            >
              <span>{link.label}</span>
              <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-brand-primary" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
