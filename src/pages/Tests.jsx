import React, { useState, useEffect } from 'react';
import {
  HiAcademicCap,
  HiTrophy,
  HiCheckCircle,
  HiCheck,
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
import Button from '../components/Button';

// Comprehensive diagnostic questions for each test
const questionsBank = {
  kids: [
    {
      id: 1,
      question: "Identify the correct verb to complete the sentence: 'The group of students _____ going to the science museum today.'",
      options: ["is", "are", "were", "have"],
      answer: 0,
      explanation: "'The group' is a collective noun acting as a singular subject, so 'is' is correct."
    },
    {
      id: 2,
      question: "Analogy: BIRD is to NEST as BEE is to _____?",
      options: ["Forest", "Hive", "Web", "Burrow"],
      answer: 1,
      explanation: "A bird lives in a nest, and a bee lives in a hive."
    },
    {
      id: 3,
      question: "Choose the synonym for 'GIGANTIC':",
      options: ["Tiny", "Massive", "Fragile", "Swift"],
      answer: 1,
      explanation: "'Gigantic' means extremely large, identical in meaning to 'Massive'."
    },
    {
      id: 4,
      question: "Fill in the correct preposition: 'She has been studying here _____ 2022.'",
      options: ["for", "since", "from", "at"],
      answer: 1,
      explanation: "'Since' is used to denote a specific starting point in time in the past."
    },
    {
      id: 5,
      question: "Which sentence has correct punctuation?",
      options: [
        "Lets go to the library, its open today.",
        "Let's go to the library; it's open today.",
        "Lets' go to the library it's open today.",
        "Let's go to the library it open today."
      ],
      answer: 1,
      explanation: "'Let's' has the contraction apostrophe, followed by a semicolon connecting two independent clauses."
    }
  ],
  adults: [
    {
      id: 1,
      question: "Identify the error in the sentence: 'Neither the manager nor the team members was present during the morning stand-up.'",
      options: [
        "Neither the manager",
        "nor the team members",
        "was present",
        "during the morning stand-up"
      ],
      answer: 2,
      explanation: "With 'Neither... nor...', the verb agrees with the closer subject ('team members' is plural, so it should be 'were present')."
    },
    {
      id: 2,
      question: "What is the meaning of the idiom 'To bite the bullet'?",
      options: [
        "To get into an argument",
        "To face an inevitable grim situation with courage",
        "To make a hasty financial decision",
        "To waste time on trivia"
      ],
      answer: 1,
      explanation: "'To bite the bullet' means to bravely endure a painful or unavoidable ordeal."
    },
    {
      id: 3,
      question: "Choose the word most opposite in meaning to 'METICULOUS':",
      options: ["Diligent", "Scrupulous", "Careless", "Fastidious"],
      answer: 2,
      explanation: "'Meticulous' means extremely careful and precise. The antonym is 'Careless'."
    },
    {
      id: 4,
      question: "Choose the sentence with the correct conditional structure:",
      options: [
        "If I would have known about the conference, I would attend.",
        "Had I known about the conference, I would have attended.",
        "If I had known about the conference, I will have attended.",
        "Should I know about the conference, I would attended."
      ],
      answer: 1,
      explanation: "'Had I known... I would have attended' is the correct inverted third conditional for past hypothetical events."
    },
    {
      id: 5,
      question: "Select the sentence that eliminates wordiness and passive ambiguity:",
      options: [
        "A decision was arrived at by the committee regarding funding.",
        "The committee reached a decision concerning the allocation of funds.",
        "The committee decided on funding.",
        "It was determined by the committee to approve funds."
      ],
      answer: 2,
      explanation: "'The committee decided on funding' is the most direct, concise, and active business phrasing."
    }
  ],
  leadership: [
    {
      id: 1,
      question: "When your team faces an unexpected deadline crisis, your primary approach is:",
      options: [
        "Step in directly, give rapid explicit directives, and assign specific micro-tasks.",
        "Gather the team for a 10-minute brainstorming session to invite collective solutions.",
        "Coach individual members by asking guiding questions so they devise their own workarounds.",
        "Provide vision and encourage team autonomy to execute without micromanagement."
      ],
      dimension: "Strategic Problem Solving"
    },
    {
      id: 2,
      question: "How do you primarily measure the success of a project you led?",
      options: [
        "Strict adherence to timelines, budgets, and error-free metrics.",
        "High team cohesion, psychological safety, and mutual consensus.",
        "Individual skill growth and personal development achieved by team members.",
        "Disruptive innovation, customer delight, and inspiring strategic impact."
      ],
      dimension: "Outcome Measurement"
    },
    {
      id: 3,
      question: "When delivering difficult constructive feedback to an underperforming colleague, you:",
      options: [
        "State factual deliverables missed concisely and set immediate corrective targets.",
        "Listen to their personal challenges first and co-create an empathetic improvement plan.",
        "Use inquiry and reflective questioning to help them discover the performance gap themselves.",
        "Reframe the feedback around the larger team mission and inspirational milestones."
      ],
      dimension: "Feedback & Mentorship"
    },
    {
      id: 4,
      question: "During high-stakes boardroom meetings with executive stakeholders, your voice is:",
      options: [
        "Decisive, data-backed, and assertive with clear bottom-line recommendations.",
        "Collaborative, acknowledging multiple viewpoints before synthesising consensus.",
        "Developmental, highlighting team capabilities and learning velocity.",
        "Visionary, storytelling the future horizon and inspiring strategic alignment."
      ],
      dimension: "Executive Communication"
    }
  ]
};

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

  // 1. GATEKEEPER: IF NOT LOGGED IN -> SHOW LOGIN / REGISTER (Matches Diagnostic Portal)
  if (!currentUser) {
    return (
      <div className="min-h-[85vh] flex items-center justify-center py-16 px-4 sm:px-6 bg-gradient-to-br from-slate-50 via-brand-soft/25 to-purple-50/40 relative overflow-hidden">
        {/* Subtle Ambient Backlight Glows */}
        <div className="absolute top-1/4 -left-32 w-80 h-80 rounded-full bg-brand-primary/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />

        <div className="max-w-md w-full mx-auto space-y-6 relative z-10">
          {/* Header Icon & Title */}
          <div className="text-center space-y-3">
            <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-brand-primary via-purple-600 to-indigo-600 flex items-center justify-center shadow-xl shadow-brand-primary/25 ring-4 ring-white">
              <HiAcademicCap className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-brand-primary via-purple-600 to-brand-deep bg-clip-text text-transparent">
              Welcome to Tests
            </h1>

            <p className="text-sm text-slate-500 max-w-sm mx-auto">
              {isRegisterMode
                ? 'Create an account to track your test scores & syllabus recommendations'
                : 'Sign in to access your customized skill assessments & progress'}
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white/95 backdrop-blur-md rounded-3xl border border-slate-200/90 p-8 sm:p-9 shadow-xl shadow-brand-primary/5 space-y-5">
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
    <div className="py-12 sm:py-16 space-y-12 max-w-7xl mx-auto px-4 sm:px-8">
      {/* Top Welcome Bar */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xs">
        <div className="flex items-center gap-4 text-center sm:text-left">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-primary to-purple-600 text-white font-extrabold text-xl flex items-center justify-center shadow-md shadow-brand-primary/20 shrink-0">
            {currentUser.name ? currentUser.name.charAt(0).toUpperCase() : 'U'}
          </div>
          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <h2 className="text-xl font-bold text-slate-900">
                Welcome, {currentUser.name}!
              </h2>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Active Candidate
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              {currentUser.email} {currentUser.company && `• ${currentUser.company}`}
            </p>
          </div>
        </div>

        <button
          onClick={handleSignOut}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:text-rose-600 hover:border-rose-300 hover:bg-rose-50/50 transition-all cursor-pointer"
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
                  className={`group bg-white rounded-3xl p-8 border transition-all duration-300 ease-out flex flex-col justify-between relative overflow-hidden ${
                    isKids
                      ? 'border-slate-200/90 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2'
                      : isAdults
                      ? 'border-slate-200/90 hover:border-brand-primary/50 hover:shadow-xl hover:shadow-brand-primary/15 hover:-translate-y-2'
                      : 'border-slate-200/90 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-2'
                  }`}
                >
                  {/* Subtle Top Accent Highlight on Hover */}
                  <div
                    className={`absolute top-0 inset-x-0 h-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      isKids
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500'
                        : isAdults
                        ? 'bg-gradient-to-r from-brand-primary to-purple-600'
                        : 'bg-gradient-to-r from-amber-500 to-orange-500'
                    }`}
                  />

                  <div>
                    <div className="flex items-start gap-4 mb-6">
                      <div
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-md shrink-0 group-hover:scale-105 transition-transform duration-300 ${
                          isKids
                            ? 'bg-gradient-to-br from-blue-500 to-cyan-500 shadow-blue-500/25'
                            : isAdults
                            ? 'bg-gradient-to-br from-brand-primary to-purple-600 shadow-brand-primary/25'
                            : 'bg-gradient-to-br from-amber-500 to-orange-500 shadow-amber-500/25'
                        }`}
                      >
                        {isKids && <FaGraduationCap className="w-8 h-8" />}
                        {isAdults && <FaBrain className="w-8 h-8" />}
                        {isLeadership && <FaUserTie className="w-8 h-8" />}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                              isKids
                                ? 'bg-blue-50 text-blue-700 border border-blue-200'
                                : isAdults
                                ? 'bg-purple-50 text-purple-700 border border-purple-200'
                                : 'bg-amber-50 text-amber-700 border border-amber-200'
                            }`}
                          >
                            {test.ageGroup}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-primary transition-colors">
                          {test.title}
                        </h3>
                      </div>
                    </div>

                    <div className="space-y-3 mb-8">
                      {test.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <HiCheckCircle
                            className={`w-4 h-4 shrink-0 mt-0.5 group-hover:scale-110 transition-transform ${
                              isKids
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
                  </div>

                  <Button
                    onClick={() => startTest(test.id)}
                    variant={isLeadership ? 'gold' : 'primary'}
                    size="md"
                    className="w-full flex items-center justify-center gap-2 font-bold shadow-sm group-hover:shadow-md"
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
                  <div className="flex justify-between items-center text-xs font-semibold text-slate-500 mb-2.5">
                    <span className="font-bold text-slate-800">
                      Question {currentQuestionIndex + 1} of {questions.length}
                    </span>
                    <span className="font-bold text-brand-primary bg-brand-soft px-2.5 py-0.5 rounded-md border border-brand-border/60">
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
                    const isSelected = userAnswers[currentQuestionIndex] === oIdx;
                    return (
                      <button
                        key={oIdx}
                        onClick={() => handleSelectOption(oIdx)}
                        className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all flex items-center justify-between gap-4 text-sm font-medium cursor-pointer ${
                          isSelected
                            ? 'bg-brand-soft/80 border-brand-primary ring-2 ring-brand-primary/20 text-brand-dark shadow-xs'
                            : 'bg-white border-slate-200 hover:border-brand-primary/40 hover:bg-slate-50/70 text-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-3.5">
                          <span
                            className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-extrabold shrink-0 transition-colors ${
                              isSelected
                                ? 'bg-brand-primary text-white shadow-xs'
                                : 'bg-slate-100 text-slate-600'
                            }`}
                          >
                            {String.fromCharCode(65 + oIdx)}
                          </span>
                          <span className="leading-relaxed">{opt}</span>
                        </div>
                        {isSelected && (
                          <HiCheckCircle className="w-5 h-5 text-brand-primary shrink-0 animate-in zoom-in-75 duration-200" />
                        )}
                      </button>
                    );
                  })}
                </div>

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
            <>
              <div className="w-22 h-22 mx-auto rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 flex items-center justify-center text-amber-600 shadow-lg shadow-amber-500/10">
                <FaUserTie className="w-11 h-11" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3.5 py-1 rounded-full border border-amber-200">
                  Executive Style Profile
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-2 tracking-tight">
                  Transformational & Coaching Leader
                </h2>
                <p className="text-slate-600 text-sm max-w-lg mx-auto leading-relaxed">
                  You lean towards empowering your team through active inquiry, psychological safety, strategic storytelling, and vision-driven execution.
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
