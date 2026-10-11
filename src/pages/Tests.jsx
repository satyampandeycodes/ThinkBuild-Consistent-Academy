import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Brain,
  Award,
  CheckCircle2,
  ChevronRight,
  RotateCcw,
  ArrowLeft,
  ArrowRight,
  Mail,
  Lock,
  User,
  Building,
  LogIn,
  LogOut,
  Check
} from 'lucide-react';
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

  // 1. GATEKEEPER: IF NOT LOGGED IN -> SHOW LOGIN / REGISTER (Matches Screenshot 2)
  if (!currentUser) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center py-16 px-4 sm:px-6 bg-gradient-to-br from-slate-50 via-brand-soft/30 to-purple-50/40">
        <div className="max-w-md w-full mx-auto space-y-6">
          {/* Header Icon & Title matching Screenshot 2 */}
          <div className="text-center space-y-3">
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-brand-primary to-brand-deep flex items-center justify-center shadow-lg shadow-brand/20">
              <Sparkles className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-brand-primary via-purple-600 to-brand-deep bg-clip-text text-transparent">
              Welcome to Tests
            </h1>

            <p className="text-sm text-slate-500">
              {isRegisterMode ? 'Create an account to get started' : 'Sign in to continue'}
            </p>
          </div>

          {/* Form Card matching Screenshot 2 */}
          <div className="bg-white rounded-3xl border border-slate-200/80 p-8 shadow-xl shadow-brand/5 space-y-5">
            <form onSubmit={handleAuthSubmit} className="space-y-4">
              {/* Register Fields */}
              {isRegisterMode && (
                <>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 flex items-center gap-2">
                      <User className="w-4 h-4 text-brand-primary" />
                      <span>Full Name</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your full name"
                      value={authForm.name}
                      onChange={(e) => setAuthForm({ ...authForm, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-slate-50/50 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-primary focus:bg-white transition-all shadow-inner"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 flex items-center gap-2">
                      <Building className="w-4 h-4 text-brand-primary" />
                      <span>Company / Organisation</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your company name"
                      value={authForm.company}
                      onChange={(e) => setAuthForm({ ...authForm, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-slate-50/50 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-primary focus:bg-white transition-all shadow-inner"
                    />
                  </div>
                </>
              )}

              {/* Email Address */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-brand-primary" />
                  <span>Email Address</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={authForm.email}
                  onChange={(e) => setAuthForm({ ...authForm, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-slate-50/50 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-primary focus:bg-white transition-all shadow-inner"
                />
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-brand-primary" />
                  <span>Password</span>
                </label>
                <input
                  type="password"
                  required
                  placeholder="Enter your password"
                  value={authForm.password}
                  onChange={(e) => setAuthForm({ ...authForm, password: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-slate-50/50 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-primary focus:bg-white transition-all shadow-inner"
                />
              </div>

              {authError && (
                <p className="text-xs font-medium text-rose-600 bg-rose-50 p-2.5 rounded-xl border border-rose-200">
                  {authError}
                </p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-brand-primary to-brand-deep hover:from-purple-700 hover:to-brand-dark text-white font-bold text-sm shadow-md shadow-brand/30 hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <span>Processing...</span>
                ) : isRegisterMode ? (
                  <>
                    <User className="w-4 h-4" />
                    <span>Create Account</span>
                  </>
                ) : (
                  <>
                    <LogIn className="w-4 h-4" />
                    <span>Sign In</span>
                  </>
                )}
              </button>
            </form>

            {/* Toggle Sign In / Register */}
            <div className="pt-2 text-center text-xs text-slate-500">
              {isRegisterMode ? (
                <p>
                  Already have an account?{' '}
                  <button
                    onClick={() => { setIsRegisterMode(false); setAuthError(''); }}
                    className="font-bold text-brand-primary hover:underline ml-1"
                  >
                    Sign In
                  </button>
                </p>
              ) : (
                <p>
                  Don't have an account?{' '}
                  <button
                    onClick={() => { setIsRegisterMode(true); setAuthError(''); }}
                    className="font-bold text-brand-primary hover:underline ml-1"
                  >
                    Create One
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
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-2xl bg-brand-soft border border-brand-border flex items-center justify-center text-brand-primary font-bold text-lg">
            {currentUser.name ? currentUser.name.charAt(0).toUpperCase() : 'U'}
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Welcome, {currentUser.name}!
            </h2>
            <p className="text-xs text-slate-500">
              {currentUser.email} • {currentUser.company}
            </p>
          </div>
        </div>

        <button
          onClick={handleSignOut}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:text-rose-600 hover:border-rose-300 transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span>Sign Out</span>
        </button>
      </div>

      {/* 3 TEST CARDS (Matching bundle: Kids, Adults, Leadership) */}
      {!activeTest && (
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Diagnostic & Style Assessments
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Select an assessment below to evaluate grammar accuracy, vocabulary range, or leadership dimension.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testsData.map((test) => (
              <div
                key={test.id}
                className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-brand transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-sm ${
                        test.id === 'kids'
                          ? 'bg-gradient-to-br from-blue-500 to-cyan-500'
                          : test.id === 'adults'
                          ? 'bg-gradient-to-br from-purple-500 to-indigo-600'
                          : 'bg-gradient-to-br from-amber-500 to-orange-500'
                      }`}
                    >
                      {test.id === 'kids' && <Sparkles className="w-7 h-7" />}
                      {test.id === 'adults' && <Brain className="w-7 h-7" />}
                      {test.id === 'leadership' && <Award className="w-7 h-7" />}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{test.title}</h3>
                      <p className="text-xs font-medium text-slate-500">{test.ageGroup}</p>
                    </div>
                  </div>

                  <div className="space-y-2.5 mb-8">
                    {test.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  onClick={() => startTest(test.id)}
                  variant="primary"
                  size="md"
                  className="w-full"
                >
                  Start {test.title}
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ACTIVE TEST QUESTION VIEW */}
      {activeTest && !isCompleted && (
        <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-300">
          <div className="flex items-center justify-between">
            <button
              onClick={handleResetTest}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-brand-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Tests</span>
            </button>
            <span className="text-xs font-bold text-brand-primary bg-brand-soft px-3 py-1 rounded-full border border-brand-border">
              {activeTest === 'kids' && 'Kids Diagnostic Test'}
              {activeTest === 'adults' && 'Adults Advanced Grammar Test'}
              {activeTest === 'leadership' && 'Leadership Style Assessment'}
            </span>
          </div>

          {(() => {
            const questions = questionsBank[activeTest] || [];
            const currentQ = questions[currentQuestionIndex];
            const isAnswered = userAnswers[currentQuestionIndex] !== undefined;

            return (
              <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-brand space-y-8">
                <div>
                  <div className="flex justify-between items-center text-xs font-semibold text-slate-500 mb-2">
                    <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
                    <span>{Math.round(((currentQuestionIndex + 1) / questions.length) * 100)}% Complete</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-brand-primary h-full transition-all duration-300"
                      style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                    {currentQ.question}
                  </h3>
                  {currentQ.dimension && (
                    <span className="inline-block mt-2 text-[11px] font-semibold text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200">
                      Dimension: {currentQ.dimension}
                    </span>
                  )}
                </div>

                <div className="space-y-3">
                  {currentQ.options.map((opt, oIdx) => {
                    const isSelected = userAnswers[currentQuestionIndex] === oIdx;
                    return (
                      <button
                        key={oIdx}
                        onClick={() => handleSelectOption(oIdx)}
                        className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all flex items-center justify-between gap-4 text-sm font-medium ${
                          isSelected
                            ? 'bg-brand-soft border-brand-primary text-brand-dark shadow-xs'
                            : 'bg-white border-slate-200 hover:border-brand-300 text-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                              isSelected
                                ? 'bg-brand-primary text-white'
                                : 'bg-slate-100 text-slate-600'
                            }`}
                          >
                            {String.fromCharCode(65 + oIdx)}
                          </span>
                          <span>{opt}</span>
                        </div>
                        {isSelected && (
                          <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <button
                    onClick={handlePrev}
                    disabled={currentQuestionIndex === 0}
                    className="px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:border-slate-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                  >
                    Previous
                  </button>

                  <Button
                    onClick={handleNext}
                    disabled={!isAnswered}
                    variant="primary"
                    size="md"
                    className="disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {currentQuestionIndex === questions.length - 1 ? 'Finish & View Results' : 'Next Question'}
                  </Button>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* COMPLETED RESULTS VIEW */}
      {activeTest && isCompleted && (
        <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-brand space-y-8 text-center animate-in zoom-in-95 duration-300">
          {activeTest !== 'leadership' ? (
            (() => {
              const { score, total, percentage } = calculateGrammarScore();
              return (
                <>
                  <div className="w-20 h-20 mx-auto rounded-3xl bg-brand-soft border border-brand-border flex items-center justify-center text-brand-primary">
                    <Award className="w-10 h-10" />
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-brand-soft px-3 py-1 rounded-full">
                      Assessment Result
                    </span>
                    <h2 className="text-3xl font-extrabold text-slate-900 mt-3 mb-2">
                      Score: {score} / {total} ({percentage}%)
                    </h2>
                    <p className="text-slate-600 text-sm">
                      {percentage >= 80
                        ? 'Outstanding proficiency! You demonstrate high accuracy with complex sentence structures and vocabulary.'
                        : percentage >= 60
                        ? 'Solid foundation! A targeted module with personalized feedback will help eliminate common grammatical traps.'
                        : 'Good starting baseline. Consistent structured coaching will rapidly build your fluency and accuracy.'}
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-left space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                      Recommended Academy Course:
                    </h4>
                    <p className="text-sm font-semibold text-brand-primary">
                      {activeTest === 'kids'
                        ? 'Kids Elocution & Grammar Foundations Course'
                        : 'IELTS Preparation & Communication Skill Masterclass'}
                    </p>
                    <p className="text-xs text-slate-600">
                      Authored curriculum by Vidya Wankhade focusing on speaking clarity, natural expression, and error-free writing.
                    </p>
                  </div>
                </>
              );
            })()
          ) : (
            <>
              <div className="w-20 h-20 mx-auto rounded-3xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
                <Brain className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                  Executive Style Profile
                </span>
                <h2 className="text-3xl font-extrabold text-slate-900 mt-3 mb-2">
                  Transformational & Coaching Leader
                </h2>
                <p className="text-slate-600 text-sm">
                  You lean towards empowering your team through active inquiry, psychological safety, and vision-driven execution.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-left space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  Recommended Leadership Course:
                </h4>
                <p className="text-sm font-semibold text-brand-primary">
                  Advanced English & Leadership Presence for Managers
                </p>
                <p className="text-xs text-slate-600">
                  Master executive articulation, crisis communication, and commanding gravitas in boardroom updates.
                </p>
              </div>
            </>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 border-t border-slate-100">
            <Button
              to={`/contact?course=Test+Followup+${activeTest}`}
              variant="primary"
              size="md"
              className="w-full sm:w-auto"
            >
              Discuss Result with Trainer
            </Button>
            <button
              onClick={handleResetTest}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:border-brand-primary transition-colors w-full sm:w-auto"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Take Another Test</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
