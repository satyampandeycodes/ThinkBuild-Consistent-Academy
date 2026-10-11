import React from 'react';
import { trustMetrics } from '../data/academyData';

export default function TrustBar({ className = '' }) {
  return (
    <div className={`w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-brand border border-brand-border/60 p-6 sm:p-8 ${className}`}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
        {trustMetrics.map((item, idx) => (
          <div key={idx} className={`flex flex-col items-center text-center ${idx > 0 ? 'pt-4 sm:pt-0' : ''}`}>
            <span className="text-3xl sm:text-4xl font-extrabold text-brand-primary tracking-tight">
              {item.value}
            </span>
            <span className="text-sm font-bold text-slate-900 mt-1">
              {item.label}
            </span>
            <span className="text-xs text-slate-500 mt-0.5">
              {item.desc}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
