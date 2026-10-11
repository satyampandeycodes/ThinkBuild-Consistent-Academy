import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  icon: Icon,
  iconPosition = 'left'
}) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-brand-primary hover:bg-brand-deep text-white shadow-brand hover:shadow-brand-lg focus:ring-brand-primary active:scale-[0.98]',
    secondary: 'bg-white hover:bg-brand-50 text-brand-dark border border-brand-border shadow-sm hover:border-brand-primary focus:ring-brand-primary active:scale-[0.98]',
    outline: 'bg-transparent hover:bg-brand-50 text-brand-primary border-2 border-brand-primary focus:ring-brand-primary active:scale-[0.98]',
    ghost: 'bg-transparent hover:bg-brand-50 text-slate-700 hover:text-brand-primary focus:ring-brand-primary',
    gold: 'bg-star-amber hover:bg-amber-600 text-slate-950 font-bold shadow-md hover:shadow-lg focus:ring-star-amber active:scale-[0.98]'
  };

  const sizes = {
    sm: 'px-3.5 py-1.5 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-7 py-3 text-base gap-2.5'
  };

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} onClick={onClick}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} onClick={onClick} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={combinedClasses} onClick={onClick}>
      {content}
    </button>
  );
}
