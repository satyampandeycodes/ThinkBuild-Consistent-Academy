import React, { useState } from 'react';
import { allCourses, kidsCourses } from '../data/academyData';
import SectionHeading from '../components/SectionHeading';
import CourseCard from '../components/CourseCard';
import Button from '../components/Button';
import { BookOpen, CheckCircle2, Clock, ArrowRight } from 'lucide-react';

export default function Courses() {
  const [filter, setFilter] = useState('all');

  const filteredCourses = filter === 'all'
    ? allCourses
    : filter === 'kids'
      ? []
      : allCourses.filter(c => c.category === filter);

  return (
    <div className="py-10 sm:py-16 space-y-12 sm:space-y-16 max-w-7xl mx-auto px-4 sm:px-8 w-full">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-brand-soft border border-brand-border text-brand-primary mb-3">
          Verified Offerings
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          Courses & Learning Programmes
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Explore complete syllabus details, course durations, and transparent fees for all programmes taught at The Consistent Academy.
        </p>
      </div>

      {/* Filter Tabs (Confined to viewport, swipes cleanly on mobile without scrollbar) */}
      <div className="w-full max-w-full overflow-x-auto no-scrollbar py-2">
        <div className="flex items-center gap-2.5 px-1 sm:px-0 sm:flex-wrap sm:justify-center w-max sm:w-auto mx-auto sm:mx-0">
          {[
            { id: 'all', label: 'All Courses' },
            { id: 'test-prep', label: 'Global Test Prep (IELTS / PTE / CELPIP)' },
            { id: 'corporate', label: 'Corporate & Leadership' },
            { id: 'career', label: 'Interview & Soft Skills' },
            { id: 'kids', label: 'Kids Series' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap shrink-0 cursor-pointer ${filter === tab.id
                ? 'bg-brand-primary text-white shadow-brand ring-2 ring-brand-primary/20'
                : 'bg-white text-slate-700 border border-slate-200 hover:border-brand-primary/40 hover:bg-slate-50'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Course Grid */}
      {filter !== 'kids' && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      )}

      {/* Kids Courses Section */}
      {(filter === 'all' || filter === 'kids') && (
        <div className="pt-8 border-t border-slate-200">
          <SectionHeading
            badge="For Young Learners"
            title="Courses for Kids"
            subtitle="Engaging foundations in elocution, public speaking, grammar, and literature appreciation."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {kidsCourses.map((kid) => (
              <div
                key={kid.id}
                className="group bg-white rounded-3xl p-6 border border-slate-200/90 hover:border-brand-primary/50 shadow-xs hover:shadow-[0_22px_45px_-12px_rgba(109,40,217,0.18),0_0_0_1px_rgba(124,58,237,0.2)] hover:-translate-y-2 transition-all duration-300 ease-out flex flex-col justify-between relative overflow-hidden"
              >
                {/* Subtle Ambient Radial Warmth Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand-soft/35 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Kids Course Image Banner - Inset with rounded borders matching reference */}
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden mb-5 bg-slate-100">
                    <img
                      src={kid.image}
                      alt={kid.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      onError={(e) => {
                        e.currentTarget.src = '/assets/academy/courses/img1.png';
                      }}
                    />
                    {/* Soft Photographic Contrast Vignette on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>

                  {/* Header: Title on Left, Price on Right */}
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-brand-primary transition-colors duration-200">
                      {kid.title}
                    </h3>
                    <span className="text-sm sm:text-base font-bold text-brand-primary whitespace-nowrap group-hover:text-purple-700 transition-colors duration-200">
                      ₹ {kid.price}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {kid.description}
                  </p>

                  {/* Duration with Clock Icon */}
                  {kid.duration && (
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-4">
                      <Clock className="w-4 h-4 text-slate-400 group-hover:text-brand-primary transition-colors duration-200" />
                      <span>{kid.duration}</span>
                    </div>
                  )}

                  {/* Features Bullet List */}
                  {kid.features && (
                    <div className="space-y-2 mb-6">
                      {kid.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <Button
                    to={`/contact?course=${encodeURIComponent(`Kids: ${kid.title}`)}`}
                    variant="secondary"
                    size="md"
                    className="w-full font-bold flex items-center justify-center gap-2 group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary transition-all duration-300 shadow-xs group-hover:shadow-lg group-hover:shadow-brand-primary/25"
                  >
                    <span>Enroll Now</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bottom CTA Banner */}
      <div className="bg-gradient-to-r from-brand-dark via-brand-primary to-brand-deep rounded-3xl p-8 sm:p-12 text-white text-center space-y-4">
        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          Not sure which programme matches your current level?
        </h3>
        <p className="text-brand-100 max-w-2xl mx-auto text-sm sm:text-base">
          Schedule a personalized 1-on-1 language assessment with Vidya Wankhade to identify your exact requirements.
        </p>
        <div className="pt-2">
          <Button to="/contact" variant="gold" size="lg">
            Book Free Assessment Session
          </Button>
        </div>
      </div>
    </div>
  );
}
