import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, HelpCircle, Phone, ArrowRight, MessageCircle } from 'lucide-react';
import { faqList, academyInfo } from '../data/academyData';
import SectionHeading from './SectionHeading';
import Button from './Button';

export default function FAQSection() {
  const [openId, setOpenId] = useState(faqList[0]?.id || null);

  const toggleAccordion = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-8">
      {/* Section Header */}
      <SectionHeading
        badge="Frequently Asked Questions"
        title="Key Questions Answered"
        subtitle="Clear details about our test preparation, faculty, Pune & online batches, and fee structures."
        className="mb-8"
      />

      {/* 6 Essential Questions Accordion */}
      <div className="space-y-3 mb-8">
        {faqList.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden bg-white ${
                isOpen
                  ? 'border-brand-primary/40 shadow-sm ring-1 ring-brand-primary/10'
                  : 'border-slate-200 hover:border-slate-300 shadow-xs'
              }`}
            >
              <button
                onClick={() => toggleAccordion(faq.id)}
                className="w-full flex items-center justify-between text-left p-4.5 sm:p-5 gap-4 cursor-pointer focus:outline-none"
                aria-expanded={isOpen}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`mt-0.5 w-6 h-6 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-brand-primary text-white'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <HelpCircle className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-brand-primary mb-0.5">
                      {faq.categoryLabel}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                </div>

                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-transform duration-200 ${
                    isOpen
                      ? 'border-brand-primary bg-brand-soft text-brand-primary rotate-180'
                      : 'border-slate-200 text-slate-400 bg-slate-50'
                  }`}
                >
                  <ChevronDown className="w-3.5 h-3.5" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-0 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                  <p className="pt-3">{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Grounded Human Contact CTA (Non-AI, Authentic Educational Card) */}
      <div className="rounded-2xl bg-white border border-slate-200/90 p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="text-center sm:text-left space-y-1">
          <h4 className="text-base sm:text-lg font-bold text-slate-900">
            Have Questions About Batches or Admissions?
          </h4>
          <p className="text-xs sm:text-sm text-slate-600">
            Reach out to our counseling desk in Pune for syllabus details, schedules, or fees.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto justify-center">
          <Button to="/contact" variant="primary" size="sm" icon={ArrowRight} iconPosition="right">
            Contact Us
          </Button>
          <a
            href={`https://wa.me/917709109830?text=Hello%2C%20I%20have%20a%20query%20regarding%20The%20Consistent%20Academy%20courses`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl border border-slate-200 hover:border-emerald-500 bg-white hover:bg-emerald-50/40 text-slate-700 hover:text-emerald-700 text-xs sm:text-sm font-semibold transition-all shadow-xs"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>WhatsApp</span>
          </a>
          <a
            href={`tel:${academyInfo.phoneRaw}`}
            className="hidden md:inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-slate-600 hover:text-brand-primary text-xs font-semibold transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-brand-primary" />
            <span>{academyInfo.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
