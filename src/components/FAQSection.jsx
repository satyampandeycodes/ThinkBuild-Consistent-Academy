import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, HelpCircle, Phone, ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { faqList, academyInfo } from '../data/academyData';
import SectionHeading from './SectionHeading';
import Button from './Button';

export default function FAQSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openId, setOpenId] = useState(faqList[0]?.id || null);

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'tests', label: 'Global Test Prep' },
    { id: 'corporate', label: 'Corporate & Career' },
    { id: 'kids', label: 'Young Learners' },
    { id: 'general', label: 'Batches & Admissions' }
  ];

  const filteredFaqs = selectedCategory === 'all'
    ? faqList
    : faqList.filter(item => item.category === selectedCategory);

  const toggleAccordion = (id) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-8">
      {/* Section Header */}
      <SectionHeading
        badge="Frequently Asked Questions"
        title="Everything You Need to Know"
        subtitle="Clear, verified answers regarding our test preparation modules, faculty credentials, batch formats, and admissions."
      />

      {/* Category Filter Tabs */}
      <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              setSelectedCategory(cat.id);
              // Open the first item of the new category for good UX
              const firstItem = cat.id === 'all' ? faqList[0] : faqList.find(f => f.category === cat.id);
              if (firstItem) setOpenId(firstItem.id);
            }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-brand-primary text-white shadow-brand shadow-brand-primary/20 scale-102'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-brand-primary hover:text-brand-primary hover:bg-brand-soft/50 shadow-xs'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* FAQ Accordion List */}
      <div className="space-y-3.5 mb-14">
        {filteredFaqs.map((faq, index) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden bg-white ${
                isOpen
                  ? 'border-brand-primary/50 shadow-md ring-1 ring-brand-primary/20'
                  : 'border-slate-200/90 hover:border-slate-300 shadow-xs'
              }`}
            >
              <button
                onClick={() => toggleAccordion(faq.id)}
                className="w-full flex items-center justify-between text-left p-5 sm:p-6 gap-4 cursor-pointer focus:outline-none"
                aria-expanded={isOpen}
              >
                <div className="flex items-start gap-3.5">
                  <div
                    className={`mt-0.5 w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-brand-primary text-white'
                        : 'bg-brand-soft text-brand-primary'
                    }`}
                  >
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-brand-primary mb-1">
                      {faq.categoryLabel}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                </div>

                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-transform duration-200 ${
                    isOpen
                      ? 'border-brand-primary bg-brand-soft text-brand-primary rotate-180'
                      : 'border-slate-200 text-slate-400 bg-slate-50'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 bg-slate-50/40">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* FINAL CONTACT CTA - ThinkBuild Sequence Step #8 */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-brand-dark to-slate-950 text-white p-8 sm:p-10 shadow-xl border border-slate-800">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/10 text-brand-200 border border-white/10">
              <Sparkles className="w-3 h-3 text-brand-300" />
              <span>Personalized Guidance</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
              Still Have Questions About Your Test Band or Career?
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Schedule a one-on-one diagnostic consultation directly with Author & Master Trainer Vidya Wankhade at our Pune center or online.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <Button
              to="/contact"
              variant="primary"
              size="md"
              icon={ArrowRight}
              iconPosition="right"
              className="w-full sm:w-auto shadow-brand"
            >
              Contact Admissions
            </Button>
            <a
              href={`https://wa.me/917709109830?text=Hello%2C%20I%20have%20a%20query%20regarding%20The%20Consistent%20Academy%20courses`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-white/20 hover:border-white/50 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold transition-all w-full sm:w-auto"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
