import React, { useState, useEffect } from 'react';
import {
  HiAcademicCap,
  HiTrophy,
  HiCheckCircle,
  HiCheck,
  HiXCircle,
  HiLightBulb,
  HiArrowLeft,
  HiArrowRight,
  HiArrowPath,
  HiUser,
  HiUserPlus,
  HiBuildingOffice2,
  HiEnvelope,
  HiLockClosed,
  HiArrowRightOnRectangle,
  HiArrowLeftOnRectangle,
  HiClock,
  HiChatBubbleLeftRight
} from 'react-icons/hi2';
import {
  FaBrain,
  FaUserTie,
  FaAward,
  FaGraduationCap
} from 'react-icons/fa6';
import { testsData } from '../data/academyData';
import { questionsBank } from '../data/testQuestions';
import Button from '../components/Button';

export default function Tests() {
  // Auth state
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem('tca_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [authForm, setAuthForm] = useState({
    name: '',
    company: '',
    email: '',
    password: ''
  });
  const [authError, setAuthError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Test state
  const [activeTest, setActiveTest] = useState(null); // 'kids' | 'adults' | 'leadership' | null
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    setAuthError('');

    if (!authForm.email || !authForm.password) {
      setAuthError('Please fill in all required fields.');
      return;
    }

    if (isRegisterMode && !authForm.name) {
      setAuthError('Please enter your full name.');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      const user = {
        name: authForm.name || authForm.email.split('@')[0],
        email: authForm.email,
        company: authForm.company || 'Student'
      };
      localStorage.setItem('tca_user', JSON.stringify(user));
      setCurrentUser(user);
      setIsLoading(false);
    }, 400);
  };

  const handleSignOut = () => {
    localStorage.removeItem('tca_user');
    setCurrentUser(null);
    setActiveTest(null);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setIsCompleted(false);
  };

  const startTest = (testId) => {
    setActiveTest(testId);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setIsCompleted(false);
  };

  const handleSelectOption = (optionIndex) => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: optionIndex
    }));
  };

  const handleNext = () => {
    const questions = questionsBank[activeTest] || [];
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleResetTest = () => {
    setActiveTest(null);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setIsCompleted(false);
  };

  // Score calculation for grammar tests
  const calculateGrammarScore = () => {
    const questions = questionsBank[activeTest] || [];
    let score = 0;
    questions.forEach((q, idx) => {
      if (userAnswers[idx] === q.answer) {
        score += 1;
      }
    });
    return {
      score,
      total: questions.length,
      percentage: Math.round((score / questions.length) * 100)
    };
  };

  // Score calculation for Leadership diagnostic
  const calculateLeadershipScore = () => {
    const questions = questionsBank.leadership || [];
    const weights = { 0: -2, 1: -1, 2: 0, 3: 1, 4: 2 };
    const styleScores = {
      transformational: 0,
      coaching: 0,
      democratic: 0,
      visionary: 0,
      servant: 0,
      situational: 0,
      autocratic: 0,
      transactional: 0,
      bureaucratic: 0,
      laissezFaire: 0
    };
    const styleLabels = {
      transformational: 'Transformational Leader',
      coaching: 'Coaching Leader',
      democratic: 'Democratic Leader',
      visionary: 'Visionary Leader',
      servant: 'Servant Leader',
      situational: 'Situational Leader',
      autocratic: 'Directive / Command Leader',
      transactional: 'Transactional Leader',
      bureaucratic: 'Bureaucratic Leader',
      laissezFaire: 'Laissez-Faire Leader'
    };
    const styleDescriptions = {
      transformational: 'You inspire teams through vision, emotional resonance, and challenging the status quo with purposeful change.',
      coaching: 'You excel at personal development, active mentorship, empathy, and constructive feedback loops.',
      democratic: 'You build high psychological safety, consensus, transparent collaboration, and collective ownership.',
      visionary: 'You paint compelling long-term horizons, rally team alignment, and drive transformative strategic direction.',
      servant: 'You put your team\'s needs first, cultivating deep mutual trust, humility, and sustained empowerment.',
      situational: 'You adapt dynamically across leadership postures to match individual competence and changing business contexts.',
      autocratic: 'You deliver decisive results with clarity and direct accountability in high-urgency operational environments.',
      transactional: 'You drive high execution velocity through structured goals, tangible milestones, and clear reward systems.',
      bureaucratic: 'You ensure organizational rigor, standard operating procedures, compliance, and institutional stability.',
      laissezFaire: 'You champion extreme team autonomy, self-direction, and creative space without micromanagement.'
    };

    questions.forEach((q, idx) => {
      const selected = userAnswers[idx];
      if (selected !== undefined && q.leadershipStyle) {
        styleScores[q.leadershipStyle] = (styleScores[q.leadershipStyle] || 0) + (weights[selected] || 0);
      }
    });

    const sorted = Object.entries(styleScores).sort((a, b) => b[1] - a[1]);
    const dominantKey = sorted[0] ? sorted[0][0] : 'transformational';
    const secondaryKey = sorted[1] ? sorted[1][0] : 'coaching';

    return {
      dominantStyle: styleLabels[dominantKey] || 'Transformational Leader',
      secondaryStyle: styleLabels[secondaryKey] || 'Coaching Leader',
      description: styleDescriptions[dominantKey] || styleDescriptions.transformational,
      scores: styleScores
    };
  };

  // 1. GATEKEEPER: IF NOT LOGGED IN -> SHOW LOGIN / REGISTER (Matches Diagnostic Portal)
  if (!currentUser) {
    return (
      <div className="min-h-[85vh] flex items-center justify-center py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-br from-slate-50 via-brand-soft/25 to-purple-50/40 relative overflow-hidden w-full max-w-full">
        {/* Subtle Ambient Backlight Glows - Clipped to prevent horizontal overflow */}
        <div className="absolute top-1/4 -left-32 w-80 h-80 rounded-full bg-brand-primary/10 blur-3xl pointer-events-none overflow-hidden" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl pointer-events-none overflow-hidden" />

        <div className="max-w-md w-full mx-auto space-y-6 relative z-10 px-0">
          {/* Header Icon & Title */}
          <div className="text-center space-y-3">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-3xl bg-gradient-to-br from-brand-primary via-purple-600 to-indigo-600 flex items-center justify-center shadow-xl shadow-brand-primary/25 ring-4 ring-white">
              <HiAcademicCap className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold bg-gradient-to-r from-brand-primary via-purple-600 to-brand-deep bg-clip-text text-transparent">
              Welcome to Tests
            </h1>

            <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto">
              {isRegisterMode
                ? 'Create an account to track your test scores & syllabus recommendations'
                : 'Sign in to access your customized skill assessments & progress'}
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-slate-200/90 p-5 sm:p-9 shadow-xl shadow-brand-primary/5 space-y-5 w-full max-w-full">
            <form onSubmit={handleAuthSubmit} className="space-y-4">
              {/* Register Fields */}
              {isRegisterMode && (
                <>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 flex items-center gap-2">
                      <HiUser className="w-4 h-4 text-brand-primary" />
                      <span>Full Name</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={authForm.name}
                      onChange={(e) => setAuthForm({ ...authForm, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-slate-50/60 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-primary focus:bg-white focus:ring-4 focus:ring-brand-primary/10 transition-all shadow-xs"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 flex items-center gap-2">
                      <HiBuildingOffice2 className="w-4 h-4 text-brand-primary" />
                      <span>Company / School</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. TCS / Symbiosis / School"
                      value={authForm.company}
                      onChange={(e) => setAuthForm({ ...authForm, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-slate-50/60 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-primary focus:bg-white focus:ring-4 focus:ring-brand-primary/10 transition-all shadow-xs"
                    />
                  </div>
                </>
              )}

              {/* Email Address */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 flex items-center gap-2">
                  <HiEnvelope className="w-4 h-4 text-brand-primary" />
                  <span>Email Address</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={authForm.email}
                  onChange={(e) => setAuthForm({ ...authForm, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-slate-50/60 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-primary focus:bg-white focus:ring-4 focus:ring-brand-primary/10 transition-all shadow-xs"
                />
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 flex items-center gap-2">
                  <HiLockClosed className="w-4 h-4 text-brand-primary" />
                  <span>Password</span>
                </label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={authForm.password}
                  onChange={(e) => setAuthForm({ ...authForm, password: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-slate-50/60 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-primary focus:bg-white focus:ring-4 focus:ring-brand-primary/10 transition-all shadow-xs"
                />
              </div>

              {authError && (
                <p className="text-xs font-medium text-rose-600 bg-rose-50 p-3 rounded-xl border border-rose-200">
                  {authError}
                </p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-brand-primary via-purple-600 to-brand-deep hover:from-purple-700 hover:to-brand-dark text-white font-bold text-sm shadow-md shadow-brand-primary/25 hover:shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                {isLoading ? (
                  <span>Processing...</span>
                ) : isRegisterMode ? (
                  <>
                    <HiUserPlus className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>Create Free Account</span>
                  </>
                ) : (
                  <>
                    <HiArrowRightOnRectangle className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                    <span>Sign In & Continue</span>
                  </>
                )}
              </button>
            </form>

            {/* Toggle Sign In / Register */}
            <div className="pt-2 text-center text-xs text-slate-500 border-t border-slate-100">
              {isRegisterMode ? (
                <p>
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={() => { setIsRegisterMode(false); setAuthError(''); }}
                    className="font-bold text-brand-primary hover:underline ml-1 cursor-pointer"
                  >
                    Sign In
                  </button>
                </p>
              ) : (
                <p>
                  Don't have an account?{' '}
                  <button
                    type="button"
                    onClick={() => { setIsRegisterMode(true); setAuthError(''); }}
                    className="font-bold text-brand-primary hover:underline ml-1 cursor-pointer"
                  >
                    Create Free Account
                  </button>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 2. LOGGED IN: TEST SELECTION / ACTIVE TEST
  return (
    <div className="py-8 sm:py-16 space-y-8 sm:space-y-12 max-w-7xl mx-auto px-4 sm:px-8 w-full">
      {/* Top Welcome Bar (Capped width, no horizontal spill) */}
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 p-4 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-5 shadow-xs w-full max-w-full overflow-hidden">
        <div className="flex items-center gap-3 sm:gap-4 text-center sm:text-left w-full sm:w-auto justify-center sm:justify-start min-w-0">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-brand-primary to-purple-600 text-white font-extrabold text-lg sm:text-xl flex items-center justify-center shadow-md shadow-brand-primary/20 shrink-0">
            {currentUser.name ? currentUser.name.charAt(0).toUpperCase() : 'U'}
          </div>
          <div className="min-w-0 flex-1 sm:flex-initial">
            <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap">
              <h2 className="text-base sm:text-xl font-bold text-slate-900 truncate">
                Welcome, {currentUser.name}!
              </h2>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Active Candidate
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 truncate">
              {currentUser.email} {currentUser.company && `• ${currentUser.company}`}
            </p>
          </div>
        </div>

        <button
          onClick={handleSignOut}
          className="inline-flex items-center justify-center gap-2 px-4 py-2 sm:py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:text-rose-600 hover:border-rose-300 hover:bg-rose-50/50 transition-all cursor-pointer w-full sm:w-auto shrink-0"
        >
          <HiArrowLeftOnRectangle className="w-4 h-4" />
          <span>Sign Out</span>
        </button>
      </div>

      {/* 3 TEST CARDS (Matching bundle: Kids, Adults, Leadership) */}
      {!activeTest && (
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-brand-soft border border-brand-border text-brand-primary">
              <HiAcademicCap className="w-4 h-4 text-brand-primary" />
              <span>Skill Diagnostics & Profiling</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Diagnostic & Style Assessments
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto">
              Select an assessment below to evaluate grammatical precision, expression range, or leadership communication dimensions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testsData.map((test) => {
              const isKids = test.id === 'kids';
              const isAdults = test.id === 'adults';
              const isLeadership = test.id === 'leadership';

              return (
                <div
                  key={test.id}
                  className={`group bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border transition-all duration-300 ease-out flex flex-col justify-between relative overflow-hidden shadow-xs hover:shadow-xl w-full max-w-full ${isKids
                    ? 'border-slate-200/90 hover:border-blue-400 hover:shadow-blue-500/10 hover:-translate-y-1.5'
                    : isAdults
                      ? 'border-slate-200/90 hover:border-brand-primary/50 hover:shadow-brand-primary/15 hover:-translate-y-1.5'
                      : 'border-slate-200/90 hover:border-amber-400 hover:shadow-amber-500/10 hover:-translate-y-1.5'
                    }`}
                >
                  {/* Subtle Top Accent Highlight on Hover */}
                  <div
                    className={`absolute top-0 inset-x-0 h-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isKids
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500'
                      : isAdults
                        ? 'bg-gradient-to-r from-brand-primary to-purple-600'
                        : 'bg-gradient-to-r from-amber-500 to-orange-500'
                      }`}
                  />

                  <div>
                    <div className="flex items-start gap-3.5 sm:gap-4 mb-4 sm:mb-6">
                      <div
                        className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center text-white shadow-md shrink-0 group-hover:scale-105 transition-transform duration-300 ${isKids
                          ? 'bg-gradient-to-br from-blue-500 to-cyan-500 shadow-blue-500/25'
                          : isAdults
                            ? 'bg-gradient-to-br from-brand-primary to-purple-600 shadow-brand-primary/25'
                            : 'bg-gradient-to-br from-amber-500 to-orange-500 shadow-amber-500/25'
                          }`}
                      >
                        {isKids && <FaGraduationCap className="w-6 h-6 sm:w-8 sm:h-8" />}
                        {isAdults && <FaBrain className="w-6 h-6 sm:w-8 sm:h-8" />}
                        {isLeadership && <FaUserTie className="w-6 h-6 sm:w-8 sm:h-8" />}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className={`text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full ${isKids
                              ? 'bg-blue-50 text-blue-700 border border-blue-200'
                              : isAdults
                                ? 'bg-purple-50 text-purple-700 border border-purple-200'
                                : 'bg-amber-50 text-amber-700 border border-amber-200'
                              }`}
                          >
                            {test.ageGroup}
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-brand-primary transition-colors truncate">
                          {test.title}
                        </h3>
                      </div>
                    </div>

                    <div className="space-y-2.5 mb-5 text-xs text-slate-700">
                      {test.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          <HiCheckCircle
                            className={`w-4 h-4 shrink-0 mt-0.5 group-hover:scale-110 transition-transform ${isKids
                              ? 'text-blue-500'
                              : isAdults
                                ? 'text-brand-primary'
                                : 'text-amber-500'
                              }`}
                          />
                          <span className="leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Section Breakdown matching real website with no overflow */}
                    {test.sections && (
                      <div className="mb-5 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                        <div className="flex flex-wrap items-center justify-between gap-1 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
                          <span>Curriculum Breakdown</span>
                          <span className={`font-bold ${isKids ? 'text-blue-600' : isAdults ? 'text-brand-primary' : 'text-amber-600'}`}>
                            {test.questionsCount} Qs Total
                          </span>
                        </div>
                        <div className="space-y-1.5 max-h-36 sm:max-h-48 overflow-y-auto pr-0.5 no-scrollbar">
                          {test.sections.map((sec, sIdx) => (
                            <div key={sIdx} className="flex items-center justify-between text-xs text-slate-700 bg-white/95 p-2 rounded-lg sm:rounded-xl border border-slate-200/60 shadow-2xs gap-1.5">
                              <span className="truncate pr-1 font-medium text-slate-700 text-[11px] sm:text-xs min-w-0">
                                {sIdx + 1}. {sec.name}
                              </span>
                              <span className="font-extrabold text-slate-900 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200 shrink-0 text-[10px] sm:text-[11px]">
                                {sec.count} Qs
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <Button
                    onClick={() => startTest(test.id)}
                    variant={isLeadership ? 'gold' : 'primary'}
                    size="md"
                    className="w-full py-3 sm:py-3.5 text-xs sm:text-sm flex items-center justify-center gap-2 font-bold shadow-sm group-hover:shadow-md cursor-pointer"
                  >
                    <span>Start {test.title}</span>
                    <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ACTIVE TEST QUESTION VIEW */}
      {activeTest && !isCompleted && (
        <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-300">
          <div className="flex items-center justify-between">
            <button
              onClick={handleResetTest}
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-brand-primary px-3 py-1.5 rounded-xl border border-slate-200 hover:border-brand-primary/40 bg-white shadow-2xs transition-all cursor-pointer"
            >
              <HiArrowLeft className="w-4 h-4" />
              <span>Back to Tests</span>
            </button>
            <span className="text-xs font-bold text-brand-primary bg-brand-soft px-3.5 py-1.5 rounded-full border border-brand-border flex items-center gap-2 shadow-2xs">
              {activeTest === 'kids' && (
                <>
                  <FaGraduationCap className="w-3.5 h-3.5 text-blue-500" />
                  <span>Kids Diagnostic Test</span>
                </>
              )}
              {activeTest === 'adults' && (
                <>
                  <FaBrain className="w-3.5 h-3.5 text-brand-primary" />
                  <span>Adults Advanced Grammar Test</span>
                </>
              )}
              {activeTest === 'leadership' && (
                <>
                  <FaUserTie className="w-3.5 h-3.5 text-amber-500" />
                  <span>Leadership Style Assessment</span>
                </>
              )}
            </span>
          </div>

          {(() => {
            const questions = questionsBank[activeTest] || [];
            const currentQ = questions[currentQuestionIndex];
            const isAnswered = userAnswers[currentQuestionIndex] !== undefined;

            return (
              <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-xl shadow-brand-primary/5 space-y-8 relative overflow-hidden">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-semibold text-slate-500 mb-2.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-bold text-slate-800">
                        Question {currentQuestionIndex + 1} of {questions.length}
                      </span>
                      {currentQ.section && (
                        <span className="text-[11px] font-bold text-brand-primary bg-brand-soft px-2.5 py-0.5 rounded-full border border-brand-border/60">
                          Section: {currentQ.section}
                        </span>
                      )}
                    </div>
                    <span className="font-bold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-md border border-slate-200">
                      {Math.round(((currentQuestionIndex + 1) / questions.length) * 100)}% Complete
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden p-0.5 border border-slate-200/60">
                    <div
                      className="bg-gradient-to-r from-brand-primary to-purple-600 h-full rounded-full transition-all duration-400 ease-out"
                      style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                    {currentQ.question}
                  </h3>
                  {currentQ.dimension && (
                    <div className="inline-flex items-center gap-1.5 mt-3 text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-lg border border-amber-200">
                      <FaAward className="w-3.5 h-3.5 text-amber-500" />
                      <span>Dimension: {currentQ.dimension}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  {currentQ.options.map((opt, oIdx) => {
                    const selectedIdx = userAnswers[currentQuestionIndex];
                    const isSelected = selectedIdx === oIdx;
                    const hasAnswered = selectedIdx !== undefined;
                    const hasCorrectAnswerKey = currentQ.answer !== undefined;
                    const isCorrectAnswer = hasCorrectAnswerKey && oIdx === currentQ.answer;
                    const isWrongSelection = hasCorrectAnswerKey && isSelected && oIdx !== currentQ.answer;

                    let buttonClasses = 'w-full text-left p-4 sm:p-5 rounded-2xl border transition-all flex items-center justify-between gap-4 text-sm font-medium';
                    let badgeClasses = 'w-8 h-8 rounded-xl flex items-center justify-center text-xs font-extrabold shrink-0 transition-colors';

                    if (hasAnswered && hasCorrectAnswerKey) {
                      if (isCorrectAnswer) {
                        buttonClasses += ' bg-emerald-50/90 border-emerald-500 ring-2 ring-emerald-500/25 text-emerald-950 shadow-xs';
                        badgeClasses += ' bg-emerald-600 text-white shadow-xs';
                      } else if (isWrongSelection) {
                        buttonClasses += ' bg-rose-50/90 border-rose-500 ring-2 ring-rose-500/25 text-rose-950 shadow-xs';
                        badgeClasses += ' bg-rose-600 text-white shadow-xs';
                      } else {
                        buttonClasses += ' bg-slate-50/50 border-slate-200 text-slate-400 opacity-60';
                        badgeClasses += ' bg-slate-100 text-slate-400';
                      }
                    } else if (isSelected) {
                      buttonClasses += ' bg-brand-soft/80 border-brand-primary ring-2 ring-brand-primary/20 text-brand-dark shadow-xs';
                      badgeClasses += ' bg-brand-primary text-white shadow-xs';
                    } else {
                      buttonClasses += ' bg-white border-slate-200 hover:border-brand-primary/40 hover:bg-slate-50/70 text-slate-700 cursor-pointer';
                      badgeClasses += ' bg-slate-100 text-slate-600';
                    }

                    return (
                      <button
                        key={oIdx}
                        onClick={() => handleSelectOption(oIdx)}
                        className={buttonClasses}
                      >
                        <div className="flex items-center gap-3.5 flex-1">
                          <span className={badgeClasses}>
                            {String.fromCharCode(65 + oIdx)}
                          </span>
                          <span className="leading-relaxed">{opt}</span>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          {hasAnswered && hasCorrectAnswerKey ? (
                            isCorrectAnswer ? (
                              <>
                                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100/90 px-2.5 py-0.5 rounded-full inline-flex items-center gap-1">
                                  <HiCheck className="w-3.5 h-3.5" /> Correct
                                </span>
                                <HiCheckCircle className="w-6 h-6 text-emerald-600 animate-in zoom-in-75 duration-200" />
                              </>
                            ) : isWrongSelection ? (
                              <>
                                <span className="text-[11px] font-bold text-rose-700 bg-rose-100/90 px-2.5 py-0.5 rounded-full inline-flex items-center gap-1">
                                  <HiXCircle className="w-3.5 h-3.5" /> Wrong
                                </span>
                                <HiXCircle className="w-6 h-6 text-rose-600 animate-in zoom-in-75 duration-200" />
                              </>
                            ) : null
                          ) : (
                            isSelected && (
                              <HiCheckCircle className="w-5 h-5 text-brand-primary animate-in zoom-in-75 duration-200" />
                            )
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Instant Explanation Box */}
                {isAnswered && currentQ.explanation && (
                  <div
                    className={`p-4 sm:p-5 rounded-2xl border flex items-start gap-3.5 animate-in fade-in slide-in-from-top-2 duration-300 ${userAnswers[currentQuestionIndex] === currentQ.answer
                      ? 'bg-emerald-50/80 border-emerald-200/90 text-emerald-950'
                      : 'bg-amber-50/80 border-amber-200/90 text-amber-950'
                      }`}
                  >
                    <div className="p-2 rounded-xl bg-white shadow-2xs shrink-0 mt-0.5">
                      {userAnswers[currentQuestionIndex] === currentQ.answer ? (
                        <HiCheckCircle className="w-5 h-5 text-emerald-600" />
                      ) : (
                        <HiLightBulb className="w-5 h-5 text-amber-600" />
                      )}
                    </div>
                    <div className="space-y-1 text-xs sm:text-sm">
                      <div className="flex items-center gap-2">
                        <span className="font-extrabold uppercase tracking-wider text-[11px]">
                          {userAnswers[currentQuestionIndex] === currentQ.answer
                            ? 'Excellent! Correct Answer'
                            : 'Key Diagnostic Rule & Explanation'}
                        </span>
                      </div>
                      <p className="leading-relaxed opacity-90">
                        {currentQ.explanation}
                      </p>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between pt-5 border-t border-slate-100">
                  <button
                    onClick={handlePrev}
                    disabled={currentQuestionIndex === 0}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:border-slate-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
                  >
                    <HiArrowLeft className="w-4 h-4" />
                    <span>Previous</span>
                  </button>

                  <Button
                    onClick={handleNext}
                    disabled={!isAnswered}
                    variant="primary"
                    size="md"
                    className="flex items-center gap-2 font-bold disabled:opacity-40 disabled:cursor-not-allowed shadow-brand"
                  >
                    <span>
                      {currentQuestionIndex === questions.length - 1 ? 'Finish & View Results' : 'Next Question'}
                    </span>
                    <HiArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* COMPLETED RESULTS VIEW */}
      {activeTest && isCompleted && (
        <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-xl shadow-brand-primary/5 space-y-8 text-center animate-in zoom-in-95 duration-300 relative overflow-hidden">
          {activeTest !== 'leadership' ? (
            (() => {
              const { score, total, percentage } = calculateGrammarScore();
              return (
                <>
                  <div className="w-22 h-22 mx-auto rounded-3xl bg-gradient-to-br from-amber-50 to-brand-soft border border-brand-border/60 flex items-center justify-center text-amber-500 shadow-lg shadow-amber-500/10">
                    <HiTrophy className="w-12 h-12" />
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-brand-soft px-3.5 py-1 rounded-full border border-brand-border">
                      Verified Diagnostic Result
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-2 tracking-tight">
                      Score: {score} / {total} ({percentage}%)
                    </h2>
                    <p className="text-slate-600 text-sm max-w-lg mx-auto leading-relaxed">
                      {percentage >= 80
                        ? 'Outstanding proficiency! You demonstrate high accuracy with complex sentence structures, idioms, and grammatical nuances.'
                        : percentage >= 60
                          ? 'Solid foundation! A targeted module with personalized feedback will help eliminate common grammatical traps and elevate articulation.'
                          : 'Good starting baseline. Structured consistent coaching will rapidly build your fluency, grammatical accuracy, and public speaking confidence.'}
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-50 to-brand-soft/30 border border-slate-200/90 text-left space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-800">
                      <HiAcademicCap className="w-4 h-4 text-brand-primary" />
                      <span>Recommended Academy Course:</span>
                    </div>
                    <p className="text-base font-bold text-brand-primary">
                      {activeTest === 'kids'
                        ? 'Kids Elocution & Grammar Foundations Course'
                        : 'IELTS Preparation & Communication Skill Masterclass'}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Authored curriculum by Vidya Wankhade focusing on speaking clarity, natural expression, and error-free writing.
                    </p>
                  </div>
                </>
              );
            })()
          ) : (
            (() => {
              const { dominantStyle, secondaryStyle, description } = calculateLeadershipScore();
              return (
                <>
                  <div className="w-22 h-22 mx-auto rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 flex items-center justify-center text-amber-600 shadow-lg shadow-amber-500/10">
                    <FaUserTie className="w-11 h-11" />
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3.5 py-1 rounded-full border border-amber-200">
                      Executive Diagnostic Result
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 mb-2 tracking-tight">
                      Dominant: {dominantStyle}
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mb-2">
                      Secondary Trait: <span className="text-amber-700 font-bold">{secondaryStyle}</span>
                    </p>
                    <p className="text-slate-600 text-sm max-w-lg mx-auto leading-relaxed">
                      {description}
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-50 to-amber-50/30 border border-slate-200/90 text-left space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-800">
                      <HiAcademicCap className="w-4 h-4 text-amber-600" />
                      <span>Recommended Leadership Course:</span>
                    </div>
                    <p className="text-base font-bold text-brand-primary">
                      Advanced English & Leadership Presence for Managers
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Master executive articulation, crisis communication, and commanding gravitas in boardroom updates and global presentations.
                    </p>
                  </div>
                </>
              );
            })()
          )}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 border-t border-slate-100">
            <Button
              to={`/contact?course=Test+Followup+${activeTest}`}
              variant="primary"
              size="md"
              className="w-full sm:w-auto flex items-center justify-center gap-2 font-bold shadow-brand"
            >
              <HiChatBubbleLeftRight className="w-4 h-4" />
              <span>Discuss Result with Trainer</span>
            </Button>
            <button
              onClick={handleResetTest}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:border-brand-primary hover:text-brand-primary bg-white transition-all w-full sm:w-auto cursor-pointer"
            >
              <HiArrowPath className="w-4 h-4" />
              <span>Take Another Test</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
