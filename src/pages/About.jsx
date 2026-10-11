import React from 'react';
import { founderProfile, academyInfo } from '../data/academyData';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { Award, BookOpen, Calendar, CheckCircle2, HeartHandshake, Compass } from 'lucide-react';

export default function About() {
  return (
    <div className="py-12 sm:py-16 space-y-24 max-w-7xl mx-auto px-4 sm:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-brand-soft border border-brand-border text-brand-primary mb-3">
          Leadership & Mentorship
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          Meet Founder Vidya Wankhade
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Over 19 years dedicated to empowering students, working professionals, and aspiring global leaders through structured language mastery.
        </p>
      </div>

      {/* Main Bio Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative">
            <div className="w-72 sm:w-84 aspect-[4/5] rounded-3xl overflow-hidden border-4 border-white shadow-brand-lg bg-white">
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
            <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-2xl shadow-brand border border-brand-border/60">
              <span className="text-2xl font-extrabold text-brand-primary block leading-none">
                19+
              </span>
              <span className="text-xs font-bold text-slate-700">
                Years Experience
              </span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
            Author, IELTS Master Trainer & Interview Coach
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            {founderProfile.bio}
          </p>

          <div className="space-y-3 pt-2">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
              <p className="text-sm text-slate-700">
                <strong>Certified IELTS Master Trainer:</strong> Rigorous examination methodology targeting Band 7.0 to 8.5 on first attempts.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
              <p className="text-sm text-slate-700">
                <strong>TEFL & TESOL Certified:</strong> Globally benchmarked communicative approaches tailored to Indian learners and professionals.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
              <p className="text-sm text-slate-700">
                <strong>Published Author:</strong> Three published books bridging practical test preparation, youth reading, and executive thinking.
              </p>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <Button to="/courses" variant="primary" size="md">
              Explore Programmes
            </Button>
            <Button to="/books" variant="secondary" size="md">
              View Published Books
            </Button>
          </div>
        </div>
      </div>

      {/* Career Timeline Milestones */}
      <div className="pt-8 border-t border-slate-200">
        <SectionHeading
          badge="Verified Career Milestones"
          title="The Journey of Dedication & Impact"
          subtitle="A chronological record of teaching credentials, publications, and institutional milestones."
        />

        <div className="relative border-l-2 border-brand-border max-w-3xl mx-auto pl-6 sm:pl-10 space-y-10 my-8">
          {founderProfile.timeline.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline pin */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-5 h-5 rounded-full bg-white border-4 border-brand-primary group-hover:scale-125 transition-transform" />

              <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:border-brand-primary transition-all">
                <span className="text-sm font-extrabold text-brand-primary block mb-2">
                  {item.year}
                </span>
                <ul className="space-y-1">
                  {item.achievements.map((ach, ai) => (
                    <li key={ai} className="text-sm text-slate-800 font-semibold flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Philosophy of The Consistent Academy */}
      <div className="bg-brand-soft rounded-3xl p-8 sm:p-12 border border-brand-border/60">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
            Academy Core Philosophy
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Why Consistency Matters
          </h3>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Language mastery is not an accidental trick; it is a discipline of consistent practice, structured clarity, and constructive feedback. At The Consistent Academy, every student receives individualized attention to develop confidence that lasts a lifetime.
          </p>
        </div>
      </div>
    </div>
  );
}
