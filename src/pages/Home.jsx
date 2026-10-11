import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, BookOpen, Award, CheckCircle2, ChevronRight, Star, ChevronLeft, X, Maximize2, Sparkles, Camera, Quote, Play, Pause, LayoutGrid, Sliders, Globe, MapPin, Film, Eye } from 'lucide-react';
import { academyInfo, allCourses, founderProfile, publishedBooks, testimonials, galleryImages } from '../data/academyData';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import TrustBar from '../components/TrustBar';
import CourseCard from '../components/CourseCard';
import BookCard from '../components/BookCard';
import TestimonialCard from '../components/TestimonialCard';
import ContactForm from '../components/ContactForm';
import MapEmbed from '../components/MapEmbed';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [galleryFilter, setGalleryFilter] = useState('all');
  const [showAllGallery, setShowAllGallery] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [galleryViewMode, setGalleryViewMode] = useState('grid'); // 'grid' | 'reel'

  // Books layout toggle: 'vertical' | 'horizontal'
  const [booksLayout, setBooksLayout] = useState('vertical');

  // Testimonials interactive slider state (Live stream default as requested)
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [isTestimonialAutoPlaying, setIsTestimonialAutoPlaying] = useState(true);
  const [testimonialFilter, setTestimonialFilter] = useState('all');
  const [testimonialViewMode, setTestimonialViewMode] = useState('stream'); // default to 'stream'
  const [cardsPerView, setCardsPerView] = useState(3);

  // Responsive cards per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredCourses = selectedCategory === 'all'
    ? allCourses.slice(0, 3)
    : allCourses.filter(c => c.category === selectedCategory).slice(0, 3);

  const filteredGalleryImages = galleryFilter === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === galleryFilter);

  const displayedGalleryImages = showAllGallery
    ? filteredGalleryImages
    : filteredGalleryImages.slice(0, 8);

  const openLightbox = (img) => {
    const idx = filteredGalleryImages.findIndex(i => i.id === img.id);
    setLightboxIndex(idx >= 0 ? idx : 0);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextLightboxImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredGalleryImages.length);
    }
  };

  const prevLightboxImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredGalleryImages.length) % filteredGalleryImages.length);
    }
  };

  const currentLightboxImage = lightboxIndex !== null ? filteredGalleryImages[lightboxIndex] : null;

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
  }, [lightboxIndex, filteredGalleryImages.length]);

  // Filtered testimonials
  const filteredTestimonials = testimonialFilter === 'all'
    ? testimonials
    : testimonials.filter((t) => {
      const countryStr = (t.country || '').toLowerCase();
      return countryStr.includes(testimonialFilter.toLowerCase());
    });

  const maxTestimonialIndex = Math.max(0, filteredTestimonials.length - cardsPerView);

  // Auto-play interval for testimonial carousel
  useEffect(() => {
    if (!isTestimonialAutoPlaying || testimonialViewMode !== 'carousel') return;
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev >= maxTestimonialIndex ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(interval);
  }, [isTestimonialAutoPlaying, maxTestimonialIndex, testimonialViewMode]);

  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev <= 0 ? maxTestimonialIndex : prev - 1));
  };

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev >= maxTestimonialIndex ? 0 : prev + 1));
  };

  return (
    <div className="space-y-24 sm:space-y-32 pb-20">
      {/* HERO SECTION - Concept 2 Implementation */}
      <section className="relative overflow-hidden pt-12 sm:pt-20 pb-16 lg:pb-24 bg-gradient-to-b from-brand-soft/80 via-white to-slate-50">
        {/* Subtle geometric background aura */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-tr from-brand-300/20 via-brand-100/30 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />
        <div className="absolute top-20 -right-20 w-80 h-80 bg-brand-200/20 rounded-full blur-2xl pointer-events-none -z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 text-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white border border-brand-border text-brand-primary shadow-xs mb-6 sm:mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
            <span>19+ Years Mentorship Legacy • Pune, Maharashtra</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-extrabold text-slate-900 tracking-tight leading-[1.08] max-w-5xl mx-auto mb-6">
            Achieve Your Global Dreams with{' '}
            <span className="bg-gradient-to-r from-brand-primary to-brand-dark bg-clip-text text-transparent">
              Consistent English Mastery
            </span>
          </h1>

          {/* Value proposition subtext */}
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10">
            Targeted IELTS, TOEFL, PTE & CELPIP coaching and Corporate Communication by Author <strong className="text-slate-900 font-semibold">Vidya Wankhade</strong> with over 19 years of verified teaching excellence.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button to="/courses" variant="primary" size="lg" icon={ArrowRight} iconPosition="right" className="w-full sm:w-auto shadow-brand-lg">
              Explore Programmes
            </Button>
            <Button to="/contact" variant="secondary" size="lg" className="w-full sm:w-auto">
              Talk to Counselor
            </Button>
            <a
              href={`tel:${academyInfo.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-200 hover:border-brand-primary bg-white text-slate-700 hover:text-brand-primary text-sm font-semibold transition-all shadow-xs w-full sm:w-auto"
            >
              <Phone className="w-4 h-4 text-brand-primary" />
              <span>Call: {academyInfo.phone}</span>
            </a>
          </div>

          {/* Verified Student Score Strip */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-600 mb-14">
            <span className="flex items-center gap-1 font-semibold text-slate-800">
              <Award className="w-4 h-4 text-brand-primary" />
              Verified Results:
            </span>
            <span className="bg-white px-3 py-1 rounded-full border border-slate-200 font-medium">
              Ninoshka: IELTS Band 7.5 (Canada)
            </span>
            <span className="bg-white px-3 py-1 rounded-full border border-slate-200 font-medium">
              Sucharita: Band 7.0 (Global Admissions)
            </span>
            <span className="bg-white px-3 py-1 rounded-full border border-slate-200 font-medium">
              Deepak S.: Band 6.5 (Australia)
            </span>
          </div>

          {/* Concept 2 Signature Trust Bar */}
          <TrustBar className="mt-4" />
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
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${selectedCategory === cat.id
                  ? 'bg-brand-primary text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-brand-primary'
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
      <section className="bg-brand-soft/60 border-y border-brand-border/40 py-20">
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
      </section>      {/* LEARNING IN ACTION GALLERY SECTION - Sleek Compact Continuous Flowing Ribbon */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-4">
          <SectionHeading
            badge="Life at the Academy"
            title="Learning in Action"
            subtitle="Authentic moments of student mentorship, elocution workshops, group debates, and milestones at The Consistent Academy."
            align="left"
            className="mb-0"
          />

          {/* Quick fullscreen lightbox trigger */}
          <button
            onClick={() => openLightbox(filteredGalleryImages[0])}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-300 hover:border-brand-primary hover:text-brand-primary text-xs font-bold text-slate-700 bg-white transition-all shadow-xs shrink-0 self-start sm:self-auto cursor-pointer"
          >
            <Maximize2 className="w-3.5 h-3.5 text-brand-primary" />
            <span>Open Fullscreen Gallery</span>
          </button>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 max-w-full">
          {[
            { id: 'all', label: 'All Moments', count: 22 },
            { id: 'classroom', label: 'Classroom Mentorship', count: 6 },
            { id: 'speaking', label: 'Speaking & Workshops', count: 7 },
            { id: 'young', label: 'Young Learners', count: 5 },
            { id: 'milestones', label: 'Milestones & Events', count: 4 }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setGalleryFilter(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                galleryFilter === cat.id
                  ? 'bg-brand-primary text-white shadow-brand shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-brand-primary hover:text-brand-primary'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                  galleryFilter === cat.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* COMPACT CONTINUOUS FLOWING RIBBON (Sharp boundary, continuous flowing photos) */}
        <div className="relative overflow-hidden py-2 -my-2 rounded-2xl">
          {/* Continuous Moving Stream */}
          <div className="animate-marquee-gallery gap-4 sm:gap-5">
            {[...filteredGalleryImages, ...filteredGalleryImages].map((img, idx) => (
              <div
                key={`${img.id}-${idx}`}
                onClick={() => openLightbox(img)}
                className="w-56 sm:w-64 h-36 sm:h-40 rounded-2xl overflow-hidden shrink-0 group relative cursor-pointer shimmer-card border border-slate-200 hover:border-brand-primary shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-slate-900"
              >
                {/* Photo: Crisp, clean, unobstructed */}
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/academy/courses/img1.png';
                  }}
                />

                {/* Top Corner Category Tag */}
                <div className="absolute top-2 left-2 z-10">
                  <span className="inline-block text-[9px] font-extrabold uppercase tracking-wider text-brand-200 bg-slate-950/70 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10 shadow-xs">
                    {img.category}
                  </span>
                </div>

                {/* Top Right Zoom Trigger on Hover */}
                <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="w-6 h-6 rounded-full bg-slate-950/70 backdrop-blur-md text-white flex items-center justify-center border border-white/20 shadow-xs">
                    <Maximize2 className="w-3 h-3 text-white" />
                  </span>
                </div>

                {/* Floating Bottom Caption Pill */}
                <div className="absolute bottom-2 inset-x-2 z-10 pointer-events-none">
                  <div className="bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-xl border border-white/10 shadow-md flex items-center justify-between">
                    <p className="text-white text-[11px] font-bold truncate leading-tight">
                      {img.title}
                    </p>
                    <span className="text-[9px] text-brand-300 font-semibold shrink-0 ml-1.5 hidden sm:inline">
                      Pune
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PUBLISHED BOOKS SHOWCASE - All 3 Authored Books */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <SectionHeading
            badge="Author Credentials"
            title="Books Authored by Vidya Wankhade"
            subtitle="Directly authored literature simplifying IELTS test preparation, youth reading comprehension, and business management."
            align="left"
            className="mb-4 md:mb-0"
          />

          {/* Books layout view toggle */}
          <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-2xl border border-slate-200 self-start md:self-auto">
            <button
              onClick={() => setBooksLayout('vertical')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${booksLayout === 'vertical'
                  ? 'bg-brand-primary text-white shadow-xs'
                  : 'text-slate-600 hover:text-brand-primary'
                }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>3-Column Grid</span>
            </button>
            <button
              onClick={() => setBooksLayout('horizontal')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${booksLayout === 'horizontal'
                  ? 'bg-brand-primary text-white shadow-xs'
                  : 'text-slate-600 hover:text-brand-primary'
                }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Detailed Cards</span>
            </button>
          </div>
        </div>

        {/* Display ALL 3 books side-by-side or detailed rows */}
        {booksLayout === 'vertical' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publishedBooks.map((book) => (
              <BookCard key={book.id} book={book} layout="vertical" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {publishedBooks.map((book) => (
              <BookCard key={book.id} book={book} layout="horizontal" />
            ))}
          </div>
        )}
      </section>

      {/* VERIFIED TESTIMONIALS SHOWCASE - All 10 Testimonials with Interactive Effects */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-24 relative overflow-hidden">
        {/* Glowing atmospheric auras */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 -right-32 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-brand-primary/20 border border-brand-primary/40 text-brand-300">
              <Award className="w-3.5 h-3.5" />
              Verified Student Outcomes
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Real Student Testimonials ({testimonials.length})
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Authentic first-attempt band scores and overseas university admits achieved through consistent mentorship with Vidya Wankhade.
            </p>
          </div>

          {/* Controls Bar: Destination Filter Tabs & 3-Mode View Switcher */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 border-b border-slate-800 pb-6">
            {/* Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-2 lg:pb-0">
              {[
                { id: 'all', label: `All Stories (${testimonials.length})` },
                { id: 'canada', label: 'Canada (2)' },
                { id: 'germany', label: 'Germany (4)' },
                { id: 'australia', label: 'Australia (1)' },
                { id: 'global', label: 'Global Admissions' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setTestimonialFilter(tab.id);
                    setTestimonialIndex(0);
                  }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${testimonialFilter === tab.id
                      ? 'bg-brand-primary text-white shadow-brand shadow-xs'
                      : 'bg-slate-800/80 text-slate-300 border border-slate-700 hover:border-slate-500'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* 3 Interactive Display Modes */}
            <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 p-1 rounded-xl shrink-0">
              <button
                onClick={() => setTestimonialViewMode('carousel')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${testimonialViewMode === 'carousel'
                    ? 'bg-brand-primary text-white'
                    : 'text-slate-400 hover:text-white'
                  }`}
                title="Interactive Carousel Slider"
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Slider Effect</span>
              </button>

              <button
                onClick={() => setTestimonialViewMode('stream')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${testimonialViewMode === 'stream'
                    ? 'bg-brand-primary text-white'
                    : 'text-slate-400 hover:text-white'
                  }`}
                title="Continuous Gliding Marquee Stream"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Live Stream</span>
              </button>

              <button
                onClick={() => setTestimonialViewMode('grid')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${testimonialViewMode === 'grid'
                    ? 'bg-brand-primary text-white'
                    : 'text-slate-400 hover:text-white'
                  }`}
                title="Show all 10 stories in grid"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Grid View (All 10)</span>
              </button>
            </div>
          </div>

          {/* 1. INTERACTIVE GLIDING CAROUSEL SLIDER */}
          {testimonialViewMode === 'carousel' && (
            <div
              className="relative space-y-6"
              onMouseEnter={() => setIsTestimonialAutoPlaying(false)}
              onMouseLeave={() => setIsTestimonialAutoPlaying(true)}
            >
              {/* Auto-play Status & Progress Indicator Bar */}
              <div className="flex items-center justify-between text-xs text-slate-400 pb-1">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${isTestimonialAutoPlaying ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
                  <span className="font-medium">
                    {isTestimonialAutoPlaying ? 'Auto-playing slider • Hover to pause' : 'Paused on hover • Resume by moving mouse out'}
                  </span>
                </div>
                <div className="font-mono text-slate-400">
                  Slide {testimonialIndex + 1} of {maxTestimonialIndex + 1}
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-800/80 h-1.5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-brand-primary to-purple-400 transition-all duration-500 rounded-full"
                  style={{
                    width: `${((testimonialIndex + 1) / (maxTestimonialIndex + 1)) * 100}%`
                  }}
                />
              </div>

              {/* Smooth Gliding Track Window */}
              <div className="overflow-hidden p-2 -m-2">
                <div
                  className="flex -mx-3 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  style={{
                    transform: `translateX(-${testimonialIndex * (100 / cardsPerView)}%)`
                  }}
                >
                  {filteredTestimonials.map((item) => (
                    <div
                      key={item.id}
                      className="w-full sm:w-1/2 lg:w-1/3 shrink-0 px-3"
                    >
                      <div className="h-full bg-slate-800/90 border border-slate-700/80 hover:border-brand-primary rounded-3xl p-7 shadow-xl hover:shadow-brand/20 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5">
                        <div>
                          {/* Rating & Band Score Badge */}
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-1">
                              {Array.from({ length: item.rating || 5 }).map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                              ))}
                            </div>

                            {item.band && (
                              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-brand-primary/20 text-brand-300 border border-brand-primary/40">
                                <Award className="w-3 h-3 text-brand-300" />
                                <span>{item.band}</span>
                              </span>
                            )}
                          </div>

                          {/* Quote Text */}
                          <div className="relative mb-6">
                            <Quote className="w-8 h-8 text-slate-700 absolute -top-3 -left-2 pointer-events-none" />
                            <p className="relative z-10 text-slate-200 text-sm sm:text-base leading-relaxed italic">
                              "{item.text}"
                            </p>
                          </div>
                        </div>

                        {/* Student Info Footer */}
                        <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-brand-primary/30 border border-brand-primary/60 flex items-center justify-center text-white font-bold text-sm shrink-0">
                              {item.name.charAt(0)}
                            </div>
                            <div>
                              <h4 className="font-bold text-white text-sm group-hover:text-brand-300 transition-colors">
                                {item.name}
                              </h4>
                              <p className="text-xs text-slate-400">
                                {item.role}
                              </p>
                            </div>
                          </div>

                          {item.country && (
                            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-300 bg-slate-900/80 px-2.5 py-1 rounded-lg border border-slate-700 shrink-0">
                              <MapPin className="w-3 h-3 text-brand-400" />
                              <span>{item.country}</span>
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Controls: Prev, Next & Progress Dots */}
              <div className="flex items-center justify-between pt-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="p-3 rounded-full bg-slate-800 hover:bg-brand-primary border border-slate-700 hover:border-brand-primary text-white transition-all shadow-md active:scale-95"
                    aria-label="Previous testimonials"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-3 rounded-full bg-slate-800 hover:bg-brand-primary border border-slate-700 hover:border-brand-primary text-white transition-all shadow-md active:scale-95"
                    aria-label="Next testimonials"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <span className="text-xs text-slate-400 ml-2">
                    Showing stories {testimonialIndex + 1} to {Math.min(testimonialIndex + cardsPerView, filteredTestimonials.length)} of {filteredTestimonials.length}
                  </span>
                </div>

                {/* Dots indicator */}
                <div className="flex items-center gap-1.5">
                  {Array.from({ length: maxTestimonialIndex + 1 }).map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setTestimonialIndex(dotIdx)}
                      className={`h-2 rounded-full transition-all ${testimonialIndex === dotIdx
                          ? 'w-6 bg-brand-primary'
                          : 'w-2 bg-slate-700 hover:bg-slate-500'
                        }`}
                      aria-label={`Go to slide ${dotIdx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 2. CONTINUOUS GLIDE STREAM / MARQUEE EFFECT */}
          {testimonialViewMode === 'stream' && (
            <div className="relative overflow-hidden py-4 -my-4">
              {/* Fade masks on sides */}
              <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

              <div className="animate-marquee gap-6">
                {[...filteredTestimonials, ...filteredTestimonials].map((item, idx) => (
                  <div
                    key={`${item.id}-${idx}`}
                    className="w-80 sm:w-96 shrink-0 bg-slate-800/90 border border-slate-700/80 hover:border-brand-primary rounded-3xl p-6 shadow-xl hover:shadow-brand/20 transition-all duration-300 flex flex-col justify-between group"
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
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-brand-primary/20 text-brand-300 border border-brand-primary/40">
                            <Award className="w-3 h-3 text-brand-300" />
                            <span>{item.band}</span>
                          </span>
                        )}
                      </div>

                      {/* Quote Text */}
                      <div className="relative mb-4">
                        <Quote className="w-6 h-6 text-slate-700 absolute -top-2 -left-2 pointer-events-none" />
                        <p className="relative z-10 text-slate-200 text-xs sm:text-sm leading-relaxed italic line-clamp-4">
                          "{item.text}"
                        </p>
                      </div>
                    </div>

                    {/* Student Info Footer */}
                    <div className="pt-3 border-t border-slate-700/60 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-brand-primary/30 border border-brand-primary/60 flex items-center justify-center text-white font-bold text-xs shrink-0">
                          {item.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-bold text-white text-xs group-hover:text-brand-300 transition-colors">
                            {item.name}
                          </h4>
                          <p className="text-[10px] text-slate-400">
                            {item.role}
                          </p>
                        </div>
                      </div>

                      {item.country && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-slate-300 bg-slate-900/80 px-2 py-0.5 rounded-md border border-slate-700 shrink-0">
                          <MapPin className="w-2.5 h-2.5 text-brand-400" />
                          <span>{item.country}</span>
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-center text-xs text-slate-400 pt-6">
                Hover over any story to pause the live stream.
              </p>
            </div>
          )}

          {/* 3. GRID VIEW (ALL 10 TESTIMONIALS DISPLAYED SIMULTANEOUSLY) */}
          {testimonialViewMode === 'grid' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-300">
              {filteredTestimonials.map((item) => (
                <div
                  key={item.id}
                  className="bg-slate-800/90 border border-slate-700/80 hover:border-brand-primary rounded-3xl p-7 shadow-xl hover:shadow-brand/20 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
                >
                  <div>
                    {/* Rating & Band Score Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        {Array.from({ length: item.rating || 5 }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>

                      {item.band && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-brand-primary/20 text-brand-300 border border-brand-primary/40">
                          <Award className="w-3 h-3 text-brand-300" />
                          <span>{item.band}</span>
                        </span>
                      )}
                    </div>

                    {/* Quote Text */}
                    <div className="relative mb-6">
                      <Quote className="w-8 h-8 text-slate-700 absolute -top-3 -left-2 pointer-events-none" />
                      <p className="relative z-10 text-slate-200 text-sm leading-relaxed italic">
                        "{item.text}"
                      </p>
                    </div>
                  </div>

                  {/* Student Info Footer */}
                  <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-brand-primary/30 border border-brand-primary/60 flex items-center justify-center text-white font-bold text-xs shrink-0">
                        {item.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm group-hover:text-brand-300 transition-colors">
                          {item.name}
                        </h4>
                        <p className="text-[11px] text-slate-400">
                          {item.role}
                        </p>
                      </div>
                    </div>

                    {item.country && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-300 bg-slate-900/80 px-2 py-0.5 rounded-lg border border-slate-700 shrink-0">
                        <MapPin className="w-3 h-3 text-brand-400" />
                        <span>{item.country}</span>
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CONTACT & MAP SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <SectionHeading
          badge="Get in Touch"
          title="Connect with The Consistent Academy"
          subtitle="Discuss your learning goals, target test band, or schedule an exploratory counseling session."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          <div className="lg:col-span-5 space-y-6">
            <MapEmbed />
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {currentLightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/95 backdrop-blur-md animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Prominent Fixed Cancel / Close Pill (Always visible in viewport corner) */}
          <button
            onClick={closeLightbox}
            className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[70] flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900/95 hover:bg-rose-600 text-white border border-white/20 shadow-2xl backdrop-blur-md transition-all duration-200 cursor-pointer group"
            aria-label="Cancel / Close expanded photo"
            title="Cancel / Close (Esc)"
          >
            <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-200" />
            <span className="text-xs sm:text-sm font-bold tracking-wide">Cancel</span>
          </button>

          <div
            className="relative max-w-4xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image container */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black max-h-[75vh] flex items-center justify-center">
              {/* Image Frame Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-3 right-3 z-30 p-2 rounded-full bg-slate-950/80 hover:bg-rose-600 text-white border border-white/20 shadow-md backdrop-blur-md transition-colors cursor-pointer"
                aria-label="Cancel"
                title="Cancel"
              >
                <X className="w-4 h-4" />
              </button>

              <img
                src={currentLightboxImage.src}
                alt={currentLightboxImage.title}
                className="max-h-[75vh] w-auto max-w-full object-contain"
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

            {/* Caption & bottom close button */}
            <div className="mt-4 text-center">
              <p className="text-white text-sm sm:text-base font-bold">
                {currentLightboxImage.title}
              </p>
              <p className="text-slate-400 text-xs mt-1">
                Photo {lightboxIndex + 1} of {filteredGalleryImages.length} • The Consistent Academy Pune
              </p>
              <button
                onClick={closeLightbox}
                className="mt-2.5 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 hover:bg-rose-600/90 text-slate-300 hover:text-white text-xs font-semibold border border-white/10 transition-colors cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
                <span>Cancel / Close</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
