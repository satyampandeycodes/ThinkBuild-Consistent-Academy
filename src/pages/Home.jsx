import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, BookOpen, Award, CheckCircle2, ChevronRight, Star, ChevronLeft, X, Maximize2, Camera, Quote, Play, Pause, LayoutGrid, Sliders, Globe, MapPin, Film, Eye } from 'lucide-react';
import { academyInfo, allCourses, founderProfile, publishedBooks, testimonials, galleryImages } from '../data/academyData';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import TrustBar from '../components/TrustBar';
import CourseCard from '../components/CourseCard';
import BookCard from '../components/BookCard';
import TestimonialCard from '../components/TestimonialCard';
import FAQSection from '../components/FAQSection';
import HeroTriangularBackground from '../components/HeroTriangularBackground';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredCourses = selectedCategory === 'all'
    ? allCourses.slice(0, 3)
    : allCourses.filter(c => c.category === selectedCategory).slice(0, 3);

  const openLightbox = (img) => {
    if (!img) {
      setLightboxIndex(0);
      return;
    }
    const idx = typeof img === 'number' ? img : galleryImages.findIndex(i => i.id === img.id);
    setLightboxIndex(idx >= 0 && idx < galleryImages.length ? idx : 0);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextLightboxImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % galleryImages.length);
    }
  };

  const prevLightboxImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  const currentLightboxImage = lightboxIndex !== null ? galleryImages[lightboxIndex] : null;

  // Keyboard navigation & escape listener for expanded photo lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightboxImage();
      if (e.key === 'ArrowLeft') prevLightboxImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  return (
    <div className="space-y-8 sm:space-y-10 pb-12">
      {/* HERO SECTION - Concept 2 Implementation with Continuous Moving Triangular Background & Founder Showcase */}
      <section className="relative overflow-hidden pt-4 sm:pt-6 lg:pt-8 pb-4 sm:pb-6 lg:pb-8 min-h-[calc(100vh-4.5rem)] flex flex-col justify-center bg-gradient-to-b from-brand-soft/60 via-white to-slate-50">
        {/* Continuous Moving Triangular Background (Matching Logo Color) */}
        <HeroTriangularBackground />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 my-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Academy Branding, Headline, Proposition & CTAs */}
            <div className="lg:col-span-7 text-center lg:text-left">
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-white/95 backdrop-blur-sm border border-brand-border text-brand-primary shadow-xs mb-3 sm:mb-4">
                <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                <span>The Consistent Academy • 19+ Years Legacy</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] xl:text-[3.25rem] font-extrabold text-slate-900 tracking-tight leading-[1.14] mb-3 sm:mb-4">
                Master Global English with{' '}
                <span className="bg-gradient-to-r from-brand-primary via-purple-600 to-brand-dark bg-clip-text text-transparent">
                  The Consistent Academy
                </span>
              </h1>

              {/* Value proposition */}
              <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-5 sm:mb-6">
                Targeted coaching for IELTS, TOEFL, PTE & CELPIP alongside executive Corporate Communication. Personally coached by Author & Master Trainer <strong className="text-slate-900 font-semibold">Vidya Wankhade</strong>.
              </p>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-4 sm:mb-5">
                <Button to="/courses" variant="primary" size="md" icon={ArrowRight} iconPosition="right" className="w-full sm:w-auto shadow-brand">
                  Explore Programmes
                </Button>
                <Button to="/contact" variant="secondary" size="md" className="w-full sm:w-auto">
                  Contact
                </Button>
              </div>

              {/* Trust highlights */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-600 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0" />
                  Author of 3 Published Books
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0" />
                  Pune Classroom & Online Batches
                </span>
              </div>
            </div>

            {/* Right Column: Founder & Master Trainer Executive Portrait */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative group w-full max-w-[320px] sm:max-w-[340px]">
                {/* Ambient glow behind card */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-primary/25 to-purple-400/25 rounded-3xl blur-lg opacity-70 group-hover:opacity-100 transition duration-500" />

                <div className="relative bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 border border-brand-border/70 shadow-xl overflow-hidden">
                  {/* Photo container */}
                  <div className="relative h-64 sm:h-72 lg:h-[310px] w-full rounded-xl overflow-hidden bg-slate-100">
                    <img
                      src="/assets/academy/vidya.png"
                      alt="Vidya Wankhade - Founder of The Consistent Academy"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
                      loading="eager"
                    />
                    {/* Shadow overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                    {/* Floating top badge */}
                    <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-brand-border/60 text-[11px] font-bold text-brand-primary shadow-sm flex items-center gap-1.5">
                      <Award className="w-3 h-3 text-brand-primary" />
                      <span>Founder & Master Trainer</span>
                    </div>

                    {/* Bottom overlay info */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                      <div className="font-extrabold text-base sm:text-lg leading-tight tracking-tight">
                        Vidya Wankhade
                      </div>
                      <p className="text-[11px] sm:text-xs text-brand-200 font-medium">
                        IELTS Master Trainer • Author of 3 Books
                      </p>
                    </div>
                  </div>

                  {/* Bottom credential bar */}
                  <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-600 px-1">
                    <span className="font-semibold text-slate-800">The Consistent Academy</span>
                    <span className="text-brand-primary font-bold">19+ Yrs Mentorship</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Concept 2 Signature Trust Bar */}
          <TrustBar className="mt-6 sm:mt-8" />
        </div>
      </section>

      {/* FEATURED PROGRAMMES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            badge="Expert Curriculum"
            title="Comprehensive Learning Programmes"
            subtitle="Structured modules designed for global tests, corporate advancement, and career transformation."
            align="left"
            className="mb-6 md:mb-0"
          />

          <Button to="/courses" variant="outline" size="md" icon={ChevronRight} iconPosition="right">
            View All Courses
          </Button>
        </div>

        {/* Category switcher */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
          {[
            { id: 'all', label: 'All Featured' },
            { id: 'test-prep', label: 'Global Test Prep' },
            { id: 'corporate', label: 'Corporate Communication' },
            { id: 'career', label: 'Interview & Soft Skills' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${selectedCategory === cat.id
                ? 'bg-brand-primary text-white shadow-brand shadow-brand-primary/20 scale-102'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-brand-primary hover:text-brand-primary hover:bg-brand-soft/50 hover:-translate-y-0.5 shadow-xs'
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      </section>

      {/* MEET THE FOUNDER PREVIEW */}
      <section className="bg-brand-soft/60 border-y border-brand-border/40 py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image with Continuous Moving Boundary Beam Effect */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group">
                {/* Continuous atmospheric radiant backlight glow */}
                <div className="absolute -inset-3 rounded-[36px] bg-gradient-to-r from-brand-primary/30 via-purple-500/25 to-indigo-500/30 blur-2xl opacity-75 animate-pulse pointer-events-none" />

                {/* Outer frame with Continuous Moving Boundary Light Beam */}
                <div className="relative p-[3.5px] rounded-[30px] overflow-hidden shadow-2xl bg-slate-100">
                  {/* Primary continuous laser beam traveling along boundary */}
                  <div
                    className="absolute w-[260%] h-[260%] top-1/2 left-1/2 origin-center animate-border-beam pointer-events-none"
                    style={{
                      background:
                        'conic-gradient(from 0deg, transparent 0deg, transparent 240deg, #7C3AED 280deg, #C084FC 320deg, #FFFFFF 345deg, transparent 360deg)'
                    }}
                  />

                  {/* Secondary subtle counter-flowing beam for organic depth */}
                  <div
                    className="absolute w-[260%] h-[260%] top-1/2 left-1/2 origin-center animate-border-beam-slow pointer-events-none opacity-60"
                    style={{
                      background:
                        'conic-gradient(from 180deg, transparent 0deg, transparent 290deg, #9333EA 330deg, transparent 360deg)'
                    }}
                  />

                  {/* Inner frame containing founder image - 100% clean, no text box overlay */}
                  <div className="relative w-72 sm:w-80 aspect-[4/5] rounded-[26.5px] overflow-hidden bg-white">
                    <img
                      src={founderProfile.image}
                      alt={founderProfile.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      onError={(e) => {
                        e.currentTarget.src = '/assets/academy/logo.png';
                        e.currentTarget.className = 'w-full h-full object-contain p-8';
                      }}
                    />
                    {/* Subtle bottom gradient tint */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Bio */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-white border border-brand-border text-brand-primary">
                  Meet the Founder
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-soft text-brand-primary border border-brand-border/40">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>19+ Years Mentorship Legacy</span>
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Vidya Wankhade
              </h2>
              <p className="text-sm sm:text-base font-bold text-brand-primary -mt-3">
                {founderProfile.role}
              </p>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                {founderProfile.bio}
              </p>

              {/* Milestones Preview */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-slate-200">
                  <span className="text-xs font-extrabold text-brand-primary block mb-1">2007</span>
                  <span className="text-xs font-medium text-slate-700">Started Teaching Career</span>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200">
                  <span className="text-xs font-extrabold text-brand-primary block mb-1">2016</span>
                  <span className="text-xs font-medium text-slate-700">IELTS Master Trainer</span>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200">
                  <span className="text-xs font-extrabold text-brand-primary block mb-1">2022</span>
                  <span className="text-xs font-medium text-slate-700">Published 'Cakewalk IELTS'</span>
                </div>
              </div>

              <div className="pt-4">
                <Button to="/about" variant="primary" size="md" icon={ArrowRight} iconPosition="right">
                  Read Full Journey & Philosophy
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEARNING IN ACTION GALLERY SECTION - Rich Dual-Row Continuous Flowing Media Wall */}
      <section className="py-14 sm:py-20 relative overflow-hidden bg-gradient-to-b from-white via-brand-soft/20 to-white border-y border-brand-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Section Header: Seamlessly integrates badge, pill count, title & fullscreen action */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-6">
            <div className="max-w-3xl space-y-3">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-brand-soft text-brand-primary border border-brand-border/60">
                  <Camera className="w-3.5 h-3.5 text-brand-primary" />
                  <span>Life at the Academy</span>
                </span>
                <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-brand-primary text-white shadow-brand shadow-xs flex items-center gap-1.5">
                  <span>All Moments</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded-full font-mono bg-white/20 text-white">
                    {galleryImages.length}
                  </span>
                </span>
                <span className="text-xs font-medium text-slate-500 hidden sm:inline">
                  • Real Mentorship, Workshops & Milestones
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                Learning in Action
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Authentic moments of student mentorship, elocution workshops, group debates, and milestones at The Consistent Academy.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0 self-start md:self-end">
              <button
                onClick={() => openLightbox(galleryImages[0])}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 hover:border-brand-primary hover:text-brand-primary text-xs font-bold text-slate-700 bg-white hover:bg-brand-soft/40 transition-all shadow-xs cursor-pointer group"
              >
                <Maximize2 className="w-3.5 h-3.5 text-brand-primary group-hover:scale-110 transition-transform" />
                <span>Open Fullscreen Gallery</span>
              </button>
            </div>
          </div>

          {/* DUAL-ROW CONTINUOUS FLOWING RIBBON (Fills vertical presence with zero dead space) */}
          <div className="relative space-y-4 sm:space-y-5 overflow-hidden rounded-2xl py-1">
            {/* Row 1: Leftward Stream (11 Moments) */}
            <div className="animate-marquee-gallery gap-4 sm:gap-5">
              {[...galleryImages.slice(0, 11), ...galleryImages.slice(0, 11)].map((img, idx) => (
                <div
                  key={`r1-${img.id}-${idx}`}
                  onClick={() => openLightbox(img)}
                  className="w-64 sm:w-72 h-44 sm:h-48 rounded-2xl overflow-hidden shrink-0 group relative cursor-pointer gallery-card-pro border border-slate-200/90 hover:border-brand-primary/80 shadow-xs hover:shadow-xl hover:shadow-brand-primary/15 transition-all duration-300 bg-slate-950"
                >
                  <img
                    src={img.src}
                    alt={img.title || "The Consistent Academy Pune"}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                    onError={(e) => {
                      e.currentTarget.src = '/assets/academy/courses/img1.png';
                    }}
                  />

                  {/* Subtle hover focus vignette */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 pointer-events-none" />

                  {/* Top Right Zoom Trigger on Hover */}
                  <div className="absolute top-2.5 right-2.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="w-8 h-8 rounded-full bg-slate-950/85 text-white flex items-center justify-center border border-white/20 shadow-sm group-hover:scale-105 transition-transform">
                      <Maximize2 className="w-3.5 h-3.5 text-white" />
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2: Rightward Reverse Stream (11 Moments) */}
            <div className="animate-marquee-gallery-reverse gap-4 sm:gap-5">
              {[...galleryImages.slice(11, 22), ...galleryImages.slice(11, 22)].map((img, idx) => (
                <div
                  key={`r2-${img.id}-${idx}`}
                  onClick={() => openLightbox(img)}
                  className="w-64 sm:w-72 h-44 sm:h-48 rounded-2xl overflow-hidden shrink-0 group relative cursor-pointer gallery-card-pro border border-slate-200/90 hover:border-brand-primary/80 shadow-xs hover:shadow-xl hover:shadow-brand-primary/15 transition-all duration-300 bg-slate-950"
                >
                  <img
                    src={img.src}
                    alt={img.title || "The Consistent Academy Pune"}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                    onError={(e) => {
                      e.currentTarget.src = '/assets/academy/courses/img1.png';
                    }}
                  />

                  {/* Subtle hover focus vignette */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 pointer-events-none" />

                  {/* Top Right Zoom Trigger on Hover */}
                  <div className="absolute top-2.5 right-2.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="w-8 h-8 rounded-full bg-slate-950/85 text-white flex items-center justify-center border border-white/20 shadow-sm group-hover:scale-105 transition-transform">
                      <Maximize2 className="w-3.5 h-3.5 text-white" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Stream Status Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-500 pt-3 px-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
              <span className="font-medium">Continuous live academy moments • Hover to pause stream</span>
            </div>
            <span className="font-mono text-slate-400">
              Click any photo to expand in high-res lightbox
            </span>
          </div>
        </div>
      </section>

      {/* PUBLISHED BOOKS SHOWCASE - All 3 Authored Books */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <SectionHeading
            badge="Author Credentials"
            title="Books Authored by Vidya Wankhade"
            subtitle="Directly authored literature simplifying IELTS test preparation, youth reading comprehension, and business management."
            align="left"
            className="mb-0"
          />

          <Button to="/books" variant="outline" size="sm" icon={ChevronRight} iconPosition="right">
            Explore All Books
          </Button>
        </div>

        {/* Display ALL 3 books side-by-side in 1 Row (3-Column Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {publishedBooks.map((book) => (
            <BookCard key={book.id} book={book} layout="vertical" />
          ))}
        </div>
      </section>

      {/* VERIFIED TESTIMONIALS SHOWCASE - Matching Prestigious Academy Palette */}
      <section className="bg-gradient-to-b from-brand-soft/70 via-white to-slate-50 text-slate-900 py-10 sm:py-12 relative overflow-hidden border-y border-brand-border/40">
        {/* Glowing atmospheric auras in brand colors */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 -right-32 w-96 h-96 bg-purple-300/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-white border border-brand-border text-brand-primary shadow-xs">
              <Award className="w-3.5 h-3.5 text-brand-primary" />
              <span>Verified Student Outcomes</span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Real Student Testimonials
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Authentic first-attempt band scores and overseas university admits achieved through consistent mentorship with Vidya Wankhade.
            </p>
          </div>

          {/* CONTINUOUS LIVE STREAM MARQUEE (Default and Only Mode) */}
          <div className="relative overflow-hidden py-4 -my-4">
            <div className="animate-marquee gap-6">
              {[...testimonials, ...testimonials].map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  className="w-80 sm:w-96 shrink-0 bg-white border border-slate-200/90 hover:border-brand-primary/50 rounded-3xl p-6 shadow-xs hover:shadow-xl hover:shadow-brand-primary/10 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    {/* Rating & Band Score Badge */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1">
                        {Array.from({ length: item.rating || 5 }).map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>

                      {item.band && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-brand-soft text-brand-primary border border-brand-border/60">
                          <Award className="w-3.5 h-3.5 text-brand-primary" />
                          <span>{item.band}</span>
                        </span>
                      )}
                    </div>

                    {/* Quote Text */}
                    <div className="relative mb-4">
                      <Quote className="w-6 h-6 text-brand-100 absolute -top-2 -left-2 pointer-events-none" />
                      <p className="relative z-10 text-slate-700 text-xs sm:text-sm leading-relaxed italic line-clamp-4">
                        "{item.text}"
                      </p>
                    </div>
                  </div>

                  {/* Student Info Footer */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-brand-soft border border-brand-border/60 flex items-center justify-center text-brand-primary font-bold text-xs shrink-0">
                        {item.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-xs group-hover:text-brand-primary transition-colors">
                          {item.name}
                        </h4>
                        <p className="text-[10px] text-slate-500">
                          {item.role}
                        </p>
                      </div>
                    </div>

                    {item.country && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-brand-primary bg-brand-soft px-2 py-0.5 rounded-md border border-brand-border/60 shrink-0">
                        <MapPin className="w-2.5 h-2.5 text-brand-primary" />
                        <span>{item.country}</span>
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-xs text-slate-500 pt-6">
              Hover over any story to pause the live stream.
            </p>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS SECTION (Replaces home contact form as per ThinkBuild sitemap brief) */}
      <FAQSection />

      {/* LIGHTBOX MODAL */}
      {currentLightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/95 backdrop-blur-md animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Professional Minimalist Close Button */}
          <button
            onClick={closeLightbox}
            className="fixed top-5 right-5 sm:top-6 sm:right-6 z-[100] p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white/90 hover:text-white border border-white/20 shadow-2xl backdrop-blur-md transition-all cursor-pointer hover:scale-110 active:scale-95 group"
            aria-label="Close expanded photo"
            title="Close (Esc)"
          >
            <X className="w-5 h-5 text-white group-hover:rotate-90 transition-transform duration-200" />
          </button>

          <div
            className="relative max-w-4xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image container */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black max-h-[75vh] flex items-center justify-center">
              <img
                src={currentLightboxImage.src}
                alt={currentLightboxImage.title}
                className="max-h-[75vh] w-auto max-w-full object-contain"
                onError={(e) => {
                  e.currentTarget.src = '/assets/academy/courses/img1.png';
                }}
              />
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevLightboxImage}
              className="absolute left-2 sm:-left-14 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 hover:bg-white/20 text-white transition-colors border border-white/10 shadow-lg cursor-pointer"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextLightboxImage}
              className="absolute right-2 sm:-right-14 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 hover:bg-white/20 text-white transition-colors border border-white/10 shadow-lg cursor-pointer"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Caption & photo counter */}
            <div className="mt-4 text-center">
              <p className="text-white text-sm sm:text-base font-bold">
                {currentLightboxImage.title}
              </p>
              <p className="text-slate-400 text-xs mt-1">
                Photo {lightboxIndex + 1} of {galleryImages.length} • The Consistent Academy Pune
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
