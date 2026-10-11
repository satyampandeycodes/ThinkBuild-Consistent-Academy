import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, BookOpen, Award, CheckCircle2, ChevronRight, Star, ChevronLeft, X, Maximize2, Sparkles, Camera } from 'lucide-react';
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
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                selectedCategory === cat.id
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
            {/* Image & Badges */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative">
                <div className="w-72 sm:w-80 aspect-[4/5] rounded-3xl overflow-hidden border-4 border-white shadow-brand-lg bg-white">
                  <img
                    src={founderProfile.image}
                    alt={founderProfile.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = '/assets/academy/logo.png';
                      e.currentTarget.className = 'w-full h-full object-contain p-8';
                    }}
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-brand border border-brand-border/60 max-w-[200px]">
                  <p className="text-xs font-bold text-slate-900 leading-tight">
                    {founderProfile.role}
                  </p>
                  <p className="text-[11px] text-brand-primary font-bold mt-1">
                    19+ Years of Excellence
                  </p>
                </div>
              </div>
            </div>

            {/* Profile Bio */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-white border border-brand-border text-brand-primary">
                Meet the Founder
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Vidya Wankhade
              </h2>
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

      {/* LEARNING IN ACTION GALLERY SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <SectionHeading
            badge="Life at the Academy"
            title="Learning in Action"
            subtitle="Authentic moments of student mentorship, elocution workshops, group debates, and milestones at The Consistent Academy."
            align="left"
            className="mb-6 md:mb-0"
          />

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 max-w-full">
            {[
              { id: 'all', label: 'All Moments (22)' },
              { id: 'classroom', label: 'Classroom Mentorship' },
              { id: 'speaking', label: 'Speaking & Workshops' },
              { id: 'young', label: 'Young Learners' },
              { id: 'milestones', label: 'Milestones & Celebrations' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setGalleryFilter(cat.id);
                  setShowAllGallery(false);
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  galleryFilter === cat.id
                    ? 'bg-brand-primary text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-brand-primary'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedGalleryImages.map((img) => (
            <div
              key={img.id}
              onClick={() => openLightbox(img)}
              className="group relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-xs hover:shadow-brand hover:-translate-y-1 transition-all duration-300 cursor-pointer aspect-[4/3]"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src = '/assets/academy/courses/img1.png';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-[11px] font-bold text-brand-300 uppercase tracking-wider mb-1">
                  The Consistent Academy
                </span>
                <p className="text-white text-xs font-semibold leading-tight flex items-center justify-between">
                  <span>{img.title}</span>
                  <Maximize2 className="w-3.5 h-3.5 text-white/80 shrink-0 ml-2" />
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Toggle Button */}
        {filteredGalleryImages.length > 8 && (
          <div className="text-center pt-8">
            <button
              onClick={() => setShowAllGallery(!showAllGallery)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-slate-300 bg-white hover:border-brand-primary hover:text-brand-primary text-xs font-bold text-slate-700 transition-all shadow-xs"
            >
              <span>{showAllGallery ? 'Show Fewer Moments' : `View All ${filteredGalleryImages.length} Photos`}</span>
              <ChevronRight className={`w-4 h-4 transition-transform ${showAllGallery ? '-rotate-90' : 'rotate-90'}`} />
            </button>
          </div>
        )}
      </section>

      {/* PUBLISHED BOOKS SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <SectionHeading
          badge="Author Credentials"
          title="Books Authored by Vidya Wankhade"
          subtitle="Directly authored literature simplifying IELTS test preparation, youth reading comprehension, and business management."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {publishedBooks.slice(0, 2).map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        <div className="text-center pt-4">
          <Button to="/books" variant="secondary" size="md" icon={ChevronRight} iconPosition="right">
            View All 3 Books & Store Links
          </Button>
        </div>
      </section>

      {/* VERIFIED TESTIMONIALS PREVIEW */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-brand-primary/20 border border-brand-primary/40 text-brand-300 mb-3">
              Stories of Success
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Real Student Testimonials
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Authentic scores and life-changing milestones achieved through consistent practice and personalized mentorship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {testimonials.slice(0, 3).map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>

          <div className="text-center">
            <Button to="/testimonials" variant="secondary" size="md" className="bg-slate-800 text-white border-slate-700 hover:bg-slate-700">
              Read All 10 Student Stories
            </Button>
          </div>
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 sm:right-2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={prevLightboxImage}
              className="absolute left-2 sm:-left-14 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextLightboxImage}
              className="absolute right-2 sm:-right-14 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Modal Image container */}
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black max-h-[75vh] flex items-center justify-center">
              <img
                src={currentLightboxImage.src}
                alt={currentLightboxImage.title}
                className="max-h-[75vh] w-auto max-w-full object-contain"
              />
            </div>

            {/* Caption */}
            <div className="mt-4 text-center">
              <p className="text-white text-sm sm:text-base font-bold">
                {currentLightboxImage.title}
              </p>
              <p className="text-slate-400 text-xs mt-1">
                Photo {lightboxIndex + 1} of {filteredGalleryImages.length} • The Consistent Academy Pune
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
