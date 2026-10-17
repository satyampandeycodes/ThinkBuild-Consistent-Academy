import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { Home, Compass } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <div className="py-24 max-w-xl mx-auto px-4 text-center space-y-6">
      <SEO
        title="404 - Page Not Found | The Consistent Academy"
        description="The page you are looking for does not exist or has been moved. Explore courses and resources at The Consistent Academy."
        canonical="/404"
        noindex={true}
      />
      <div className="w-20 h-20 rounded-full bg-brand-soft text-brand-primary flex items-center justify-center mx-auto border-2 border-brand-border">
        <Compass className="w-10 h-10 animate-spin-slow" />
      </div>

      <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
        404 — Page Not Found
      </span>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
        Looking for a Page That Doesn't Exist?
      </h1>

      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
        The link you followed may be incorrect or the page has moved. You can explore all our learning courses or return safely back home.
      </p>

      <div className="pt-4 flex items-center justify-center gap-4">
        <Button to="/" variant="primary" size="md" icon={Home}>
          Back to Home
        </Button>
        <Button to="/courses" variant="secondary" size="md">
          Explore Courses
        </Button>
      </div>
    </div>
  );
}
