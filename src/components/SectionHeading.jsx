import React from 'react';

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
  className = ''
}) {
  const alignmentClass = align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col max-w-3xl mb-12 sm:mb-16 ${alignmentClass} ${className}`}>
      {badge && (
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-brand-soft border border-brand-border text-brand-primary mb-3">
          {badge}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
