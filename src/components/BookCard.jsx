import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';

export default function BookCard({ book }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-brand transition-all duration-300 flex flex-col md:flex-row group hover:-translate-y-1">
      {/* Book Cover */}
      <div className="md:w-5/12 bg-brand-soft/60 p-6 flex items-center justify-center border-b md:border-b-0 md:border-r border-slate-100">
        <div className="relative w-44 aspect-[3/4] rounded-lg shadow-md overflow-hidden group-hover:scale-105 transition-transform duration-300">
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

          <p className="text-sm text-slate-600 leading-relaxed mb-6">
            {book.description}
          </p>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            Available On:
          </h4>
          <div className="flex flex-wrap gap-2">
            {book.links && book.links.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-slate-200 hover:border-brand-primary hover:bg-brand-soft text-slate-700 hover:text-brand-primary text-xs font-semibold transition-all shadow-xs"
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
