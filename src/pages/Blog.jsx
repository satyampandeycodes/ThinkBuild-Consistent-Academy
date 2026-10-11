import React, { useState } from 'react';
import { BookOpen, Calendar, User, ArrowRight, Search, X, Share2, CheckCircle2, MessageSquare, Tag } from 'lucide-react';
import { sampleBlogPosts, academyInfo } from '../data/academyData';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArticle, setActiveArticle] = useState(null);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const categories = [
    { id: 'all', label: 'All Articles' },
    { id: 'IELTS Prep', label: 'IELTS Prep' },
    { id: 'Corporate Skills', label: 'Corporate Skills' },
    { id: 'Young Learners', label: 'Young Learners' }
  ];

  const filteredPosts = sampleBlogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleShare = (post) => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="py-12 sm:py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-8">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-brand-soft border border-brand-border text-brand-primary">
          Academy Insights & Articles
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          Consistent English Learning Blog
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Practical strategies, IELTS master tips, and corporate communication guidelines authored by Author & Trainer Vidya Wankhade.
        </p>
      </div>

      {/* Search & Category Filter Toolbar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-slate-200 pb-6">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-brand-primary text-white shadow-brand'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-brand-primary'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Input & Submit Action */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-primary bg-white shadow-2xs"
            />
          </div>

          <button
            onClick={() => setIsSubmitModalOpen(true)}
            className="px-4 py-2 rounded-xl border border-brand-border text-brand-primary bg-brand-soft hover:bg-brand-primary hover:text-white transition-all text-xs font-bold whitespace-nowrap shadow-2xs"
          >
            Submit Post
          </button>
        </div>
      </div>

      {/* Blog Cards Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-brand transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Cover Image banner */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = '/assets/academy/courses/img1.png';
                    }}
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-brand-primary text-xs font-bold px-3 py-1 rounded-full border border-brand-border/60 shadow-xs">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                    <span className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-brand-primary" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-brand-primary transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-100 mt-4">
                <button
                  onClick={() => setActiveArticle(post)}
                  className="text-xs font-bold text-brand-primary hover:text-brand-dark flex items-center gap-1.5 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => handleShare(post)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-brand-primary hover:bg-slate-50 transition-colors"
                  aria-label="Share article"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 space-y-3">
          <p className="text-slate-500 font-medium text-sm">No articles found matching your query.</p>
          <button
            onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
            className="text-xs font-bold text-brand-primary hover:underline"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* ARTICLE READER MODAL */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl border border-slate-200 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative p-6 sm:p-10 space-y-6">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
              aria-label="Close article modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-xs font-bold text-brand-primary bg-brand-soft px-3 py-1 rounded-full border border-brand-border">
                {activeArticle.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 mb-2 leading-tight">
                {activeArticle.title}
              </h2>
              <div className="flex items-center gap-4 text-xs text-slate-500 pb-4 border-b border-slate-100">
                <span>By {activeArticle.author}</span>
                <span>•</span>
                <span>{new Date(activeArticle.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
            </div>

            {/* Article Body */}
            <div className="text-slate-700 text-sm leading-relaxed space-y-4 whitespace-pre-line font-normal">
              {activeArticle.content.trim()}
            </div>

            {/* CTA in Modal */}
            <div className="bg-brand-soft/70 border border-brand-border/60 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <h4 className="text-xs font-bold text-slate-900">Have questions about this topic?</h4>
                <p className="text-xs text-slate-600">Connect with Vidya Wankhade for personalized guidance.</p>
              </div>
              <Button
                to={`/contact?course=${encodeURIComponent(activeArticle.title)}`}
                variant="primary"
                size="sm"
                className="shrink-0"
              >
                Inquire With Trainer
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* SUBMIT COMMUNITY POST MODAL */}
      {isSubmitModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl border border-slate-200 max-w-lg w-full shadow-2xl relative p-6 sm:p-8 space-y-5">
            <button
              onClick={() => { setIsSubmitModalOpen(false); setSubmitSuccess(false); }}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <h3 className="text-xl font-bold text-slate-900">Submit Article for Review</h3>
              <p className="text-xs text-slate-500 mt-1">
                Share your English learning journey, test experience, or educational tips with our student community.
              </p>
            </div>

            {submitSuccess ? (
              <div className="text-center py-6 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-base font-bold text-slate-900">Submission Received!</h4>
                <p className="text-xs text-slate-600">
                  Thank you! Our editorial team will review your article and publish it upon verification.
                </p>
                <Button
                  onClick={() => { setIsSubmitModalOpen(false); setSubmitSuccess(false); }}
                  variant="secondary"
                  size="sm"
                >
                  Close
                </Button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitSuccess(true);
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-brand-primary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-brand-primary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Article Title</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. My IELTS Band 7.5 Preparation Schedule"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-brand-primary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Article Content / Summary</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your article insights or experience..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-brand-primary"
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsSubmitModalOpen(false)}
                    className="flex-1 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <Button type="submit" variant="primary" size="md" className="flex-1">
                    Submit for Approval
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
