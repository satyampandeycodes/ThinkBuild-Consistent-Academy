import React from 'react';
import { publishedBooks } from '../data/academyData';
import SectionHeading from '../components/SectionHeading';
import BookCard from '../components/BookCard';
import Button from '../components/Button';
import { BookOpen, ShoppingBag } from 'lucide-react';
import SEO from '../components/SEO';

export default function Books() {
  return (
    <div className="py-12 sm:py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-8">
      <SEO
        title="Published Books Authored by Vidya Wankhade | The Consistent Academy"
        description="Discover books authored by Vidya Wankhade: 'Cakewalk IELTS', 'Reading Detectives', and management book summaries for IELTS test takers, kids, and executives."
        keywords="Cakewalk IELTS book, Reading Detectives book, Vidya Wankhade books, IELTS preparation books, English reading club Pune"
        canonical="/books"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Books Authored by Vidya Wankhade',
          itemListElement: publishedBooks.map((b, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            item: {
              '@type': 'Book',
              name: b.title,
              author: {
                '@type': 'Person',
                name: 'Vidya Wankhade'
              },
              description: b.description
            }
          }))
        }}
      />
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-brand-soft border border-brand-border text-brand-primary mb-3">
          Published Authorship
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          Books Authored by Vidya Wankhade
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Comprehensive guides and literature authored to simplify test preparation, build reading habits in young learners, and summarize world-class business wisdom.
        </p>
      </div>

      {/* All Books in One Row Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
        {publishedBooks.map((book) => (
          <BookCard key={book.id} book={book} layout="vertical" />
        ))}
      </div>

      {/* Note about reading club */}
      <div className="bg-brand-soft rounded-3xl p-8 sm:p-10 border border-brand-border/60 text-center max-w-3xl mx-auto space-y-4">
        <BookOpen className="w-10 h-10 text-brand-primary mx-auto" />
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
          Interested in our Interactive Reading Club?
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          'The Reading Detective' forms the core curriculum of our Kids Reading Club, training young minds to solve comprehension mysteries and develop lifelong literary confidence.
        </p>
        <div className="pt-2">
          <Button to="/contact?course=Kids%3A%20Reading%20Club" variant="primary" size="md">
            Enquire for Reading Club
          </Button>
        </div>
      </div>
    </div>
  );
}
