import React, { useState } from 'react';
import { allCourses, kidsCourses } from '../data/academyData';
import SectionHeading from '../components/SectionHeading';
import CourseCard from '../components/CourseCard';
import Button from '../components/Button';
import { BookOpen, Sparkles, CheckCircle2, Clock, ArrowRight } from 'lucide-react';

export default function Courses() {
  const [filter, setFilter] = useState('all');

  const filteredCourses = filter === 'all'
    ? allCourses
    : filter === 'kids'
    ? []
    : allCourses.filter(c => c.category === filter);

  return (
    <div className="py-12 sm:py-16 space-y-20 max-w-7xl mx-auto px-4 sm:px-8">
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

      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2">
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
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
              filter === tab.id
                ? 'bg-brand-primary text-white shadow-brand'
                : 'bg-white text-slate-700 border border-slate-200 hover:border-brand-primary'
            }`}
          >
            {tab.label}
          </button>
        ))}
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
                className="group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-brand transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Kids Course Image Banner */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={kid.image}
                      alt={kid.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = '/assets/academy/courses/img1.png';
                      }}
                    />
                  </div>

                  <div className="p-6">
                    {/* Header: Title on Left, Price on Right */}
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-primary transition-colors">
                        {kid.title}
                      </h3>
                      <span className="text-sm font-bold text-brand-primary whitespace-nowrap">
                        ₹ {kid.price}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {kid.description}
                    </p>

                    {/* Duration with Clock Icon */}
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-5">
                      <Clock className="w-4 h-4 text-slate-400" />
                      <span>{kid.duration}</span>
                    </div>

                    {/* Features Bullet List */}
                    {kid.features && (
                      <div className="space-y-2.5 mb-6">
                        {kid.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Button
                    to={`/contact?course=${encodeURIComponent(`Kids: ${kid.title}`)}`}
                    variant="secondary"
                    size="md"
                    className="w-full font-bold flex items-center justify-center gap-2 group-hover:bg-brand-primary group-hover:text-white transition-all shadow-xs"
                  >
                    <span>Enroll Now</span>
                    <ArrowRight className="w-4 h-4" />
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
