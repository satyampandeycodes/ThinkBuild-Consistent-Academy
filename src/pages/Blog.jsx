import React, { useState } from 'react';
import {
  Calendar,
  User,
  ArrowRight,
  X
} from 'lucide-react';
import { sampleBlogPosts } from '../data/academyData';
import Button from '../components/Button';
import SEO from '../components/SEO';

export default function Blog() {
  const [posts] = useState(sampleBlogPosts);
  const [activeArticle, setActiveArticle] = useState(null);

  return (
    <div className="min-h-screen pt-12 pb-20 px-4 sm:px-6 bg-gradient-to-br from-slate-50 via-brand-soft/20 to-purple-50/30">
      <SEO
        title="Community Blogs & English Learning Insights | The Consistent Academy"
        description="Read articles, study tips, and expert guides on IELTS preparation, Spoken English mastery, vocabulary improvement, and language learning from The Consistent Academy."
        keywords="IELTS preparation tips, Spoken English blog, English learning insights Pune, language study guide, IELTS Band 8 tips"
        canonical="/blog"
        type="blog"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'The Consistent Academy Community Blogs',
          description: 'Educational articles and insights on IELTS and English mastery',
          blogPost: posts.map((p) => ({
            '@type': 'BlogPosting',
            headline: p.title,
            description: p.excerpt,
            author: {
              '@type': 'Person',
              name: p.author
            },
            datePublished: p.date
          }))
        }}
      />
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-brand-primary via-purple-600 to-brand-deep bg-clip-text text-transparent">
            Community Blogs
          </h1>
          <p className="text-slate-500 text-sm sm:text-base">
            Share insights, stories and learning experiences ✨
          </p>
        </div>

        {/* Blog Posts Grid matching Screenshot 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="p-6 rounded-3xl shadow-sm hover:shadow-brand bg-white border border-slate-200/90 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-primary transition-colors mb-3 leading-snug">
                  {post.title}
                </h3>

                {/* Author and Date Meta matching Screenshot 3 */}
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                  <div className="flex items-center gap-1.5 font-medium">
                    <User className="w-3.5 h-3.5 text-brand-primary" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{post.displayDate || post.date}</span>
                  </div>
                </div>

                {/* Excerpt text matching Screenshot 3 */}
                <p className="text-xs sm:text-sm text-slate-600 line-clamp-4 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              {/* Read More Link matching Screenshot 3 */}
              <div className="pt-2 border-t border-slate-100">
                <button
                  onClick={() => setActiveArticle(post)}
                  className="text-brand-primary font-bold text-sm hover:underline inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* FULL ARTICLE READER MODAL */}
      {activeArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveArticle(null)}
        >
          {/* Main Modal Card Shell (Non-scrolling wrapper) */}
          <div
            className="bg-white rounded-3xl border border-slate-200 max-w-2xl w-full max-h-[90vh] shadow-2xl relative flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Always-Visible Fixed Floating Close / Cut Button */}
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 z-40 p-2.5 rounded-full bg-white/95 hover:bg-rose-50 text-slate-500 hover:text-rose-600 border border-slate-200/90 shadow-md backdrop-blur-md transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 group"
              aria-label="Close article"
              title="Close article"
            >
              <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-200" />
            </button>

            {/* Scrollable Article Body Container */}
            <div className="overflow-y-auto p-6 sm:p-10 space-y-6 flex-1">
              <div className="pr-12 sm:pr-14">
                <span className="text-xs font-bold text-brand-primary bg-brand-soft px-3 py-1 rounded-full border border-brand-border/60">
                  {activeArticle.category || 'Article'}
                </span>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 mb-2 leading-tight">
                  {activeArticle.title}
                </h2>

                <div className="flex items-center gap-4 text-xs text-slate-500 pb-4 border-b border-slate-100">
                  <span>By {activeArticle.author}</span>
                  <span>•</span>
                  <span>{activeArticle.displayDate || activeArticle.date}</span>
                </div>
              </div>

              <div className="text-slate-700 text-sm leading-relaxed space-y-4 whitespace-pre-line font-normal">
                {activeArticle.content.trim()}
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Button
                  to={`/contact?course=${encodeURIComponent(activeArticle.title)}`}
                  variant="primary"
                  size="sm"
                >
                  Inquire With Trainer
                </Button>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}


    </div>
  );
}
