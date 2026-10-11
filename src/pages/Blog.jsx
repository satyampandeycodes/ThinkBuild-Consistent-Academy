import React, { useState, useEffect } from 'react';
import {
  PenLine,
  LogIn,
  LogOut,
  Calendar,
  User,
  ArrowRight,
  X,
  CheckCircle2,
  Lock,
  Mail,
  Building,
  Sparkles
} from 'lucide-react';
import { sampleBlogPosts } from '../data/academyData';
import Button from '../components/Button';

export default function Blog() {
  const [posts, setPosts] = useState(sampleBlogPosts);
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem('tca_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [activeArticle, setActiveArticle] = useState(null);
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Write form state
  const [writeForm, setWriteForm] = useState({
    title: '',
    author: currentUser?.name || '',
    excerpt: '',
    content: ''
  });

  // Auth form state
  const [authForm, setAuthForm] = useState({
    name: '',
    company: '',
    email: '',
    password: ''
  });
  const [authError, setAuthError] = useState('');

  // Keep author updated if user changes
  useEffect(() => {
    if (currentUser?.name) {
      setWriteForm((prev) => ({ ...prev, author: currentUser.name }));
    }
  }, [currentUser]);

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    setAuthError('');

    if (!authForm.email || !authForm.password) {
      setAuthError('Please fill in required fields.');
      return;
    }

    const user = {
      name: authForm.name || authForm.email.split('@')[0],
      email: authForm.email,
      company: authForm.company || 'Student'
    };

    localStorage.setItem('tca_user', JSON.stringify(user));
    setCurrentUser(user);
    setIsAuthModalOpen(false);
  };

  const handleSignOut = () => {
    localStorage.removeItem('tca_user');
    setCurrentUser(null);
  };

  const handleWriteSubmit = (e) => {
    e.preventDefault();
    if (!writeForm.title || !writeForm.content) return;

    const newPost = {
      id: `post-${Date.now()}`,
      title: writeForm.title,
      author: writeForm.author || (currentUser?.name || 'Community Member'),
      date: new Date().toISOString().split('T')[0],
      displayDate: new Date().toLocaleDateString('en-US'),
      category: 'Community',
      coverImage: '/assets/academy/courses/img6.png',
      excerpt: writeForm.excerpt || writeForm.content.slice(0, 150) + '...',
      content: writeForm.content
    };

    setPosts([newPost, ...posts]);
    setSubmitSuccess(true);
  };

  return (
    <div className="min-h-screen pt-12 pb-20 px-4 sm:px-6 bg-gradient-to-br from-slate-50 via-brand-soft/20 to-purple-50/30">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header matching Screenshot 3 */}
        <div className="text-center space-y-3">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-brand-primary via-purple-600 to-brand-deep bg-clip-text text-transparent">
            Community Blogs
          </h1>
          <p className="text-slate-500 text-sm sm:text-base">
            Share insights, stories and learning experiences ✨
          </p>
        </div>

        {/* Action Buttons matching Screenshot 3 */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => {
              if (!currentUser) {
                setIsAuthModalOpen(true);
              } else {
                setIsWriteModalOpen(true);
                setSubmitSuccess(false);
              }
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-brand-primary hover:bg-brand-deep text-white shadow-md shadow-brand/20 font-bold text-sm transition-all hover:scale-102 active:scale-98"
          >
            <PenLine className="w-4 h-4" />
            <span>Write a Blog</span>
          </button>

          {currentUser ? (
            <button
              onClick={handleSignOut}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white border border-slate-200 text-slate-700 hover:text-rose-600 hover:border-rose-200 shadow-sm font-bold text-sm transition-all"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout ({currentUser.name})</span>
            </button>
          ) : (
            <button
              onClick={() => {
                setIsAuthModalOpen(true);
                setIsRegisterMode(false);
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white border border-slate-200 text-slate-700 hover:border-brand-primary hover:text-brand-primary shadow-sm font-bold text-sm transition-all hover:scale-102 active:scale-98"
            >
              <LogIn className="w-4 h-4 text-brand-primary" />
              <span>Login / Register</span>
            </button>
          )}
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl border border-slate-200 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative p-6 sm:p-10 space-y-6">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
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
                className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* WRITE A BLOG MODAL */}
      {isWriteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl border border-slate-200 max-w-xl w-full p-6 sm:p-8 shadow-2xl relative space-y-5">
            <button
              onClick={() => { setIsWriteModalOpen(false); setSubmitSuccess(false); }}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <h3 className="text-xl font-bold text-slate-900">Write a Community Blog</h3>
              <p className="text-xs text-slate-500 mt-1">
                Share your IELTS prep tips, reading notes, or English speaking milestones.
              </p>
            </div>

            {submitSuccess ? (
              <div className="text-center py-8 space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-bold text-slate-900">Blog Published Successfully!</h4>
                <p className="text-xs text-slate-600">
                  Your blog is now live on the Community Blogs feed for all students to read.
                </p>
                <button
                  onClick={() => { setIsWriteModalOpen(false); setSubmitSuccess(false); }}
                  className="px-6 py-2.5 rounded-xl bg-brand-primary text-white text-xs font-bold"
                >
                  View in Feed
                </button>
              </div>
            ) : (
              <form onSubmit={handleWriteSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Article Title</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. How I Improved My IELTS Speaking from Band 6 to 7.5"
                    value={writeForm.title}
                    onChange={(e) => setWriteForm({ ...writeForm, title: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-brand-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Author Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={writeForm.author}
                    onChange={(e) => setWriteForm({ ...writeForm, author: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-brand-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Short Excerpt (Optional)</label>
                  <input
                    type="text"
                    placeholder="A brief 1-2 sentence teaser for the card"
                    value={writeForm.excerpt}
                    onChange={(e) => setWriteForm({ ...writeForm, excerpt: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-brand-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Article Content</label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Write your article insights, story, or tips..."
                    value={writeForm.content}
                    onChange={(e) => setWriteForm({ ...writeForm, content: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-brand-primary"
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsWriteModalOpen(false)}
                    className="flex-1 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <Button type="submit" variant="primary" size="md" className="flex-1">
                    Publish Blog
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* LOGIN / REGISTER MODAL */}
      {isAuthModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl border border-slate-200 max-w-md w-full p-6 sm:p-8 shadow-2xl relative space-y-5">
            <button
              onClick={() => { setIsAuthModalOpen(false); setAuthError(''); }}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-2">
              <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-brand-primary to-brand-deep flex items-center justify-center shadow-md">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-brand-primary to-brand-deep bg-clip-text text-transparent">
                {isRegisterMode ? 'Create Account' : 'Welcome Back'}
              </h3>
              <p className="text-xs text-slate-500">
                {isRegisterMode ? 'Create an account to write blogs and take tests' : 'Sign in to your account'}
              </p>
            </div>

            <form onSubmit={handleAuthSubmit} className="space-y-4">
              {isRegisterMode && (
                <>
                  <div>
                    <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5 mb-1">
                      <User className="w-3.5 h-3.5 text-brand-primary" />
                      <span>Full Name</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your full name"
                      value={authForm.name}
                      onChange={(e) => setAuthForm({ ...authForm, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-brand-primary"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5 mb-1">
                      <Building className="w-3.5 h-3.5 text-brand-primary" />
                      <span>Company / Organisation</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your company name"
                      value={authForm.company}
                      onChange={(e) => setAuthForm({ ...authForm, company: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-brand-primary"
                    />
                  </div>
                </>
              )}

              <div>
                <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5 mb-1">
                  <Mail className="w-3.5 h-3.5 text-brand-primary" />
                  <span>Email Address</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={authForm.email}
                  onChange={(e) => setAuthForm({ ...authForm, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-brand-primary"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5 mb-1">
                  <Lock className="w-3.5 h-3.5 text-brand-primary" />
                  <span>Password</span>
                </label>
                <input
                  type="password"
                  required
                  placeholder="Enter your password"
                  value={authForm.password}
                  onChange={(e) => setAuthForm({ ...authForm, password: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-brand-primary"
                />
              </div>

              {authError && (
                <p className="text-xs text-rose-600 bg-rose-50 p-2 rounded-xl">
                  {authError}
                </p>
              )}

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-primary to-brand-deep hover:from-purple-700 hover:to-brand-dark text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
              >
                <LogIn className="w-4 h-4" />
                <span>{isRegisterMode ? 'Create Account' : 'Sign In'}</span>
              </button>
            </form>

            <div className="text-center text-xs text-slate-500 pt-1">
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
      )}
    </div>
  );
}
