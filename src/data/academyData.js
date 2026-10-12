export const academyInfo = {
  name: "The Consistent Academy",
  tagline: "Master English with Clarity & Confidence",
  phone: "+91 77091 09830",
  phoneRaw: "+917709109830",
  email: "theconsistentacademy@gmail.com",
  address: "Pune, Maharashtra",
  fullAddress: "Pune, Maharashtra, India",
  logo: "/assets/academy/logo.png",
  logoAlt: "/assets/academy/logo_alt.png",
  socials: [
    { label: "Instagram", id: "instagram", href: "https://www.instagram.com/the_consistent_academy/", handle: "@the_consistent_academy" },
    { label: "LinkedIn", id: "linkedin", href: "https://www.linkedin.com/company/the-consistent-academy/", handle: "The Consistent Academy" },
    { label: "WhatsApp", id: "whatsapp", href: "https://wa.me/917709109830?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20courses%20at%20The%20Consistent%20Academy", handle: "+91 77091 09830" },
    { label: "Community", id: "community", href: "https://chat.whatsapp.com/Kw2YbntkWMqG66MVI9xSJq?mode=ac_t", handle: "Consistent Learners Club" },
    { label: "YouTube", id: "youtube", href: "https://www.youtube.com/@theconsistentacademy", handle: "@theconsistentacademy" }
  ],
  thinkbuild: {
    name: "ThinkBuild",
    url: "https://www.thinkbuild.in/",
    logo: "/assets/thinkbuild-logo.png",
    creditText: "Developed and maintained by ThinkBuild."
  }
};

export const trustMetrics = [
  { label: "Years Legacy", value: "19+", desc: "Classroom & Corporate Mentorship" },
  { label: "IELTS Band Score", value: "7.5+", desc: "First-Attempt Student Success" },
  { label: "Published Books", value: "3", desc: "Authored by Vidya Wankhade" },
  { label: "Location", value: "Pune", desc: "Maharashtra, India" }
];

export const founderProfile = {
  name: "Vidya Wankhade",
  role: "Author, IELTS Master Trainer & Founder",
  experience: "19+ Years",
  image: "/assets/academy/vidya.png",
  bio: "Author, IELTS full course (speaking + reading + writing) & Interview Coach, and Founder of The Consistent Academy. With over 19 years of experience, Vidya has helped students, professionals, and aspiring leaders communicate with clarity, confidence, and impact.",
  timeline: [
    { year: "2007", achievements: ["Started Teaching Career"] },
    { year: "2016", achievements: ["IELTS Master Trainer Certification"] },
    { year: "2019", achievements: ["TEFL & TESOL Trainer"] },
    { year: "2022", achievements: ["Published 'Cakewalk IELTS'"] },
    { year: "2024", achievements: ["Head of Department (Academics)", "Published 'Reading Detectives'"] },
    { year: "2025", achievements: ["Founded The Consistent Academy", "Published '101 Management Books You'll Never Read But Should'"] }
  ]
};

export const publishedBooks = [
  {
    id: "cakewalk-ielts",
    title: "Cakewalk IELTS",
    description: "A focused, student-friendly guide that simplifies IELTS preparation with practical strategies, clarity, and confidence-building techniques.",
    image: "/assets/academy/books/cakewalk-ielts.jpg",
    links: [
      { label: "Evincepub", url: "https://evincepub.com/product/a-focal-easy-guide-cakewalk-ielts/" },
      { label: "Amazon", url: "https://www.amazon.in/Focal-Easy-Guide-Cakewalk-IELTS/dp/9354468594/ref" },
      { label: "Flipkart", url: "https://www.flipkart.com/focal-easy-guide-cakewalk-ielts/p/itme05662a461566" }
    ]
  },
  {
    id: "reading-detective",
    title: "The Reading Detective",
    description: "A delightful book for kids that builds comprehension, critical thinking, and a love for reading through engaging stories and activities.",
    image: "/assets/academy/books/the-reading-detective.jpg",
    links: [
      { label: "Evincepub", url: "https://evincepub.com/product/the-reading-detective-solving-comprehension-mysteries-for-kids/" },
      { label: "Amazon", url: "https://www.amazon.in/dp/9363559335" },
      { label: "Flipkart", url: "https://www.flipkart.com/the-reading-detective/p/itm59cbee5b6ff6a" },
      { label: "Instamojo (eBook)", url: "https://evincepub.myinstamojo.com/product/the-reading-detective/" }
    ]
  },
  {
    id: "101-management-books",
    title: "101 Management Books You'll Never Read But Should",
    description: "A crisp, insightful compilation that distills powerful management lessons from the world's most influential business books.",
    image: "/assets/academy/books/101-management.jpg",
    links: [
      { label: "Evincepub", url: "https://evincepub.com/product/101-management-books-youll-never-read-but-should/" },
      { label: "Amazon", url: "https://www.amazon.in/dp/9373352318" },
      { label: "Flipkart", url: "https://www.flipkart.com/101-management-books-youll-never-read-but-should/p/itm6bc57a7fd9b2c" }
    ]
  }
];

export const allCourses = [
  {
    id: "ielts-toefl-pte-celpip",
    category: "test-prep",
    title: "IELTS | TOEFL | PTE | CELPIP Preparation Course",
    subtitle: "Global English Proficiency Master Program",
    description: "Comprehensive training for all four modules with real proficiency focus, not just exam tricks.",
    image: "/assets/academy/courses/img1.png",
    hours: "20 Hours",
    price: "12000/-",
    modules: 4,
    targetAudience: "Students & professionals aiming for international study, migration, work, or permanent residency.",
    promise: "To build real English proficiency and test confidence, not just exam tricks.",
    highlights: [
      "Full course (All 4 skills): ₹12,000",
      "Single skill option (Speaking / Writing / Reading): ₹4,000",
      "7 hours per individual skill module",
      "Study material provided",
      "Regular practice tasks",
      "Mock tests",
      "Writing assessments & detailed feedback",
      "Speaking evaluations"
    ],
    moduleDetails: [
      {
        title: "Module 1: Listening Mastery",
        duration: "5 Hours",
        topics: [
          "Listening test formats (IELTS / TOEFL / PTE / CELPIP)",
          "MCQs, Sentence completion, Form/note completion",
          "Matching, Maps & diagrams",
          "Identifying distractors",
          "Handling fast speech & unfamiliar vocabulary",
          "Note-taking strategies",
          "Time management"
        ]
      },
      {
        title: "Module 2: Reading Mastery",
        duration: "5 Hours",
        topics: [
          "Reading formats (all exams)",
          "Skimming & scanning techniques",
          "True/False/Not Given, Yes/No/Not Given",
          "Matching headings",
          "Sentence & summary completion",
          "MCQs and vocabulary in context",
          "Paraphrasing recognition",
          "Time allocation per passage"
        ]
      },
      {
        title: "Module 3: Writing Mastery",
        duration: "5 Hours",
        topics: [
          "Task 1: Academic (graphs, charts, processes, maps)",
          "Task 1: General (formal/semi-formal/informal letters)",
          "Report structure & data comparison",
          "Task 2: Essay types (opinion, discussion, problem-solution)",
          "Planning & paragraph structure",
          "Introductions & conclusions",
          "Cohesive devices",
          "Avoiding common grammar errors"
        ]
      },
      {
        title: "Module 4: Speaking Mastery",
        duration: "5 Hours",
        topics: [
          "Speaking formats (all exams)",
          "Introductions & warm-up",
          "Cue card / long response",
          "Discussion & opinion questions",
          "Fluency-building techniques",
          "Pronunciation & intonation",
          "Expanding answers naturally",
          "Handling difficult questions",
          "Thinking-time strategies"
        ]
      }
    ]
  },
  {
    id: "corporate-survival-success",
    category: "corporate",
    title: "Corporate Survival & Success Program",
    subtitle: "Fresher-Focused",
    description: "Transform into a corporate-ready professional with essential workplace skills and business etiquette.",
    image: "/assets/academy/courses/img2.png",
    hours: "12 Hours",
    price: "6000/-",
    modules: 6,
    targetAudience: "Freshers, graduate trainees, management trainees, first-job professionals (0–2 years experience).",
    promise: "Participants will think, speak, behave, and perform like corporate-ready professionals.",
    moduleDetails: [
      {
        title: "Module 1: Corporate Mindset & Workplace Reality",
        topics: [
          "Corporate culture & unwritten rules",
          "Professional behaviour & work ethics",
          "Ownership, accountability & attitude",
          "Hierarchy & reporting lines"
        ]
      },
      {
        title: "Module 2: Professional Communication Essentials",
        topics: [
          "Speaking professionally with seniors & colleagues",
          "Structuring clear responses",
          "Asking questions the right way",
          "Telephone & virtual meeting etiquette"
        ]
      },
      {
        title: "Module 3: Email, Chat & Workplace Writing",
        topics: [
          "Professional emails (requests, follow-ups, apologies)",
          "Corporate WhatsApp / Teams / Slack etiquette",
          "Subject lines, tone & clarity",
          "Avoiding casual or risky language"
        ]
      },
      {
        title: "Module 4: Meetings, Teamwork & Office Dynamics",
        topics: [
          "Behaviour in meetings",
          "When to speak & when to stay silent",
          "Giving updates & status reports",
          "Team collaboration etiquette"
        ]
      },
      {
        title: "Module 5: Personal Effectiveness & Image",
        topics: [
          "Time management & prioritisation",
          "Handling pressure & deadlines",
          "Dressing, body language & presence",
          "Managing mistakes professionally"
        ]
      },
      {
        title: "Module 6: Career Growth & Corporate Intelligence",
        topics: [
          "Handling feedback positively",
          "Managing office politics ethically",
          "Speaking up for growth",
          "Early career goal setting"
        ]
      }
    ]
  },
  {
    id: "crack-your-interview",
    category: "career",
    title: "Crack Your Interview",
    subtitle: "Fresher-Focused",
    description: "Transform from nervous fresher to confident, clear, and convincing interviewee.",
    image: "/assets/academy/courses/img3.png",
    hours: "6 Hours",
    price: "3000/-",
    modules: 6,
    targetAudience: "Final-year students, fresh graduates, job seekers (0–1 year).",
    promise: "To transform nervous freshers into confident, clear, and convincing interviewees.",
    moduleDetails: [
      {
        title: "Module 1: Interview Mindset & Recruiter Psychology",
        topics: [
          "What interviewers look for",
          "Common rejection reasons",
          "Confidence over perfection",
          "Overcoming fear & hesitation"
        ]
      },
      {
        title: "Module 2: Self-Introduction & Personal Branding",
        topics: [
          "'Tell me about yourself'",
          "Presenting education & projects",
          "Turning weaknesses into strengths",
          "'Why should we hire you?'"
        ]
      },
      {
        title: "Module 3: Answer Structuring & HR Questions",
        topics: [
          "STAR & PREP frameworks",
          "Strengths & weaknesses",
          "Failure & challenges",
          "Salary & availability"
        ]
      },
      {
        title: "Module 4: Communication & Body Language",
        topics: [
          "Eye contact & posture",
          "Voice modulation",
          "Handling nervousness",
          "Listening skills"
        ]
      },
      {
        title: "Module 5: Domain & Situational Questions",
        topics: [
          "Basic technical answers",
          "Behavioral questions",
          "Thinking on the spot",
          "Saying 'I don't know' professionally"
        ]
      },
      {
        title: "Module 6: Mock Interviews & Final Polishing",
        topics: [
          "Full mock interviews",
          "Individual feedback",
          "Last-round mistakes",
          "Follow-up etiquette"
        ]
      }
    ]
  },
  {
    id: "corporate-dining-etiquette",
    category: "corporate",
    title: "Corporate Dining & Social Etiquette Masterclass",
    subtitle: "Because your career is also built outside the meeting room",
    description: "Master professional dining and social etiquette for corporate success.",
    image: "/assets/academy/courses/img4.png",
    hours: "6 Hours",
    price: "3000/-",
    modules: 6,
    promise: "Master professional dining and social etiquette for effortless corporate confidence.",
    targetAudience: "Freshers, management trainees, graduate hires, young professionals (0–3 years). Separate batches for boys and girls.",
    moduleDetails: [
      {
        title: "Module 1: Social Presence & First Impressions",
        topics: ["Corporate social culture", "Professional greetings", "Confidence without arrogance"]
      },
      {
        title: "Module 2: Dining Etiquette (Indian & Global)",
        topics: ["Table manners", "Cutlery & seating", "Ordering food", "Do's & don'ts"]
      },
      {
        title: "Module 3: Wine & Beverage Etiquette",
        topics: ["Beverage basics", "Declining drinks gracefully", "Professional boundaries"]
      },
      {
        title: "Module 4: Conversation & Networking",
        topics: ["Small talk", "Safe vs risky topics", "Exiting conversations politely"]
      },
      {
        title: "Module 5: Dress, Grooming & Presentation",
        topics: ["Event dressing", "Hygiene & grooming", "Cultural sensitivity"]
      },
      {
        title: "Module 6: Emotional & Social Intelligence",
        topics: ["Respect & empathy", "Handling awkward moments", "Professional ethics"]
      }
    ]
  },
  {
    id: "advanced-leadership-presence",
    category: "corporate",
    title: "Advanced English & Leadership Presence for Managers",
    subtitle: "Because managers are watched before they are heard",
    description: "Build executive presence, clarity, and leadership communication credibility.",
    image: "/assets/academy/courses/img5.png",
    hours: "12 Hours",
    price: "6000/-",
    modules: 12,
    targetAudience: "Mid-level managers, team leads, first-time managers, senior executives.",
    promise: "To build executive presence, clarity, and leadership communication credibility.",
    moduleDetails: [
      { title: "Leadership Communication Essentials", duration: "1 Hour", topics: ["Executive presence fundamentals", "Leadership communication styles", "Building credibility through communication"] },
      { title: "Advanced Business Writing", duration: "1 Hour", topics: ["Strategic emails and reports", "Executive summaries", "Persuasive business proposals"] },
      { title: "Leading Meetings & Presentations", duration: "1 Hour", topics: ["Facilitating productive meetings", "Commanding attention in presentations", "Handling difficult discussions"] },
      { title: "Influencing & Persuasion", duration: "1 Hour", topics: ["Persuasive communication techniques", "Stakeholder management", "Negotiation skills"] },
      { title: "Conflict Resolution", duration: "1 Hour", topics: ["Managing team conflicts", "Difficult conversations", "Mediation techniques"] },
      { title: "Cross-Cultural Communication", duration: "1 Hour", topics: ["Global business etiquette", "Cultural sensitivity", "Virtual team management"] },
      { title: "Strategic Thinking & Articulation", duration: "1 Hour", topics: ["Communicating vision", "Strategic storytelling", "Thought leadership"] },
      { title: "Crisis Communication", duration: "1 Hour", topics: ["Managing communication in crisis", "Damage control", "Transparent leadership"] },
      { title: "Coaching & Feedback", duration: "1 Hour", topics: ["Giving constructive feedback", "Coaching conversations", "Performance discussions"] },
      { title: "Personal Branding for Leaders", duration: "1 Hour", topics: ["Building executive brand", "LinkedIn presence", "Thought leadership content"] },
      { title: "Public Speaking for Leaders", duration: "1 Hour", topics: ["Conference presentations", "Panel discussions", "Media interactions"] },
      { title: "Emotional Intelligence in Leadership", duration: "1 Hour", topics: ["Self-awareness in communication", "Empathetic leadership", "Managing emotions under pressure"] }
    ]
  },
  {
    id: "communication-skill-training",
    category: "career",
    title: "Communication Skill Training",
    description: "Clear, confident, and professional communication in interviews, meetings, and public speaking.",
    image: "/assets/academy/courses/img6.png",
    hours: "20 Hours",
    price: "5000/-",
    modules: 8,
    targetAudience: "Students, freshers, and early-career professionals.",
    promise: "Master clear, confident, and professional communication for all scenarios.",
    moduleDetails: [
      { title: "Module 1: Articulation", topics: ["Clear speech techniques", "Word pronunciation", "Accent neutralization"] },
      { title: "Module 2: Fluency", topics: ["Speaking smoothly", "Sentence flow", "Natural pacing"] },
      { title: "Module 3: Vocabulary Expansion", topics: ["Professional vocabulary", "Context-appropriate words", "Advanced expressions"] },
      { title: "Module 4: Avoid Fillers", topics: ["Eliminating um, ah, like", "Pause techniques", "Conscious speaking"] },
      { title: "Module 5: Pronunciation & Enunciation", topics: ["Sound production", "Difficult words practice", "Clarity exercises"] },
      { title: "Module 6: Idioms & Phrases", topics: ["Common idioms", "Business phrases", "Contextual usage"] },
      { title: "Module 7: Public Speaking", topics: ["Stage presence", "Audience engagement", "Presentation skills"] },
      { title: "Module 8: Confidence Building", topics: ["Overcoming fear", "Self-assurance techniques", "Positive mindset"] }
    ]
  },
  {
    id: "personality-development",
    category: "career",
    title: "Personality Development Training",
    description: "Build a confident personality, strong body language, professional etiquette, and leadership skills.",
    image: "/assets/academy/courses/img7.png",
    hours: "12 Hours",
    price: "6000/-",
    modules: 8,
    targetAudience: "Students, freshers, and early-career professionals.",
    promise: "Develop a complete professional personality with confidence and leadership qualities.",
    moduleDetails: [
      { title: "Module 1: First Impressions", topics: ["Creating strong first impressions", "Professional appearance", "Confidence in introductions"] },
      { title: "Module 2: Body Language", topics: ["Posture and gestures", "Eye contact techniques", "Non-verbal communication"] },
      { title: "Module 3: Starting Conversations", topics: ["Ice-breaking techniques", "Small talk mastery", "Building rapport"] },
      { title: "Module 4: Dress for Success", topics: ["Professional wardrobe", "Grooming standards", "Situation-appropriate dressing"] },
      { title: "Module 5: Social & Business Etiquette", topics: ["Professional manners", "Social grace", "Business protocol"] },
      { title: "Module 6: Dining Etiquette", topics: ["Table manners", "Formal dining", "Business lunch/dinner protocol"] },
      { title: "Module 7: Leadership & Decision Making", topics: ["Leadership qualities", "Decision-making frameworks", "Taking initiative"] },
      { title: "Module 8: Negotiation & Conflict Resolution", topics: ["Negotiation strategies", "Conflict management", "Win-win solutions"] }
    ]
  },
  {
    id: "eelta-certification",
    category: "corporate",
    title: "EELTA - Experiential English Language Teaching Approach",
    subtitle: "India’s First Experiential English Teaching Certification for Global Classrooms",
    description: "India’s First Experiential English Teaching Certification for Global Classrooms",
    image: "/assets/academy/courses/img14.png",
    hours: "15 Hours",
    price: "15000/-",
    modules: 5,
    promise: "Transform traditional teaching into experiential, globally aligned English learning classrooms.",
    targetAudience: "Pre-Primary Teachers, School Educators, Secondary School Teachers, Senior Secondary Faculty, Academic Coordinators & School Leaders",
    moduleDetails: [
      {
        title: "Module 1: Learners, Teachers & the Global Learning Context",
        topics: [
          "Understanding learners as global communicators",
          "Role of the teacher as a facilitator, not instructor",
          "Creating classrooms aligned with international learning environments",
          "Preparing students for foreign universities and multicultural settings"
        ]
      },
      {
        title: "Module 2: Language Awareness for Real Communication",
        topics: [
          "Understanding how English works in real-life communication",
          "Moving beyond grammar to functional language use",
          "Teaching vocabulary, structure, and meaning through context and usage",
          "Building awareness for language proficiency tests (IELTS, TOEFL, PTE)"
        ]
      },
      {
        title: "Module 3: Core Language Skills for Global Competence",
        topics: [
          "Developing Reading, Listening, Speaking, and Writing as integrated skills",
          "Teaching students to think, respond, and express ideas clearly",
          "Activity-based strategies to build fluency and comprehension",
          "Aligning classroom practice with international assessment standards"
        ]
      },
      {
        title: "Module 4: Planning, Resources & Global Classroom Design",
        topics: [
          "Designing lessons for real-world communication outcomes",
          "Using authentic materials (videos, conversations, tasks)",
          "Creating immersive and English-rich environments",
          "Structuring lessons for skill-building and test readiness"
        ]
      },
      {
        title: "Module 5: Developing Professional Teaching Excellence",
        topics: [
          "Building teacher confidence and communication skills",
          "Continuous improvement through reflection and feedback",
          "Adapting to diverse learners and global expectations",
          "Becoming a 21st-century English educator"
        ]
      }
    ]
  }
];

export const kidsCourses = [
  {
    id: "kids-elocution",
    title: "Elocution Course",
    description: "Helps children speak clearly, confidently, and expressively.",
    duration: "4 Weeks",
    price: "3000/-",
    image: "/assets/academy/courses/img8.png",
    features: [
      "Clarity in speech & pronunciation",
      "Expressive reading & storytelling",
      "Vocabulary & grammar improvement",
      "Confidence in public speaking",
      "Listening & comprehension skills"
    ]
  },
  {
    id: "kids-tedx-toastmaster",
    title: "TedX & Toastmaster Training",
    description: "Builds confidence and stage presence in young learners.",
    duration: "4 Weeks",
    price: "3000/-",
    image: "/assets/academy/courses/img9.png",
    features: [
      "Reduced stage fear",
      "Improved body language & projection",
      "Speech structuring techniques",
      "Toastmaster like confidence",
      "TED Talk style preparation",
      "Holistic personality development"
    ]
  },
  {
    id: "kids-grammar-foundations",
    title: "Grammar Foundations",
    description: "Strong grammar basics for clear and correct communication.",
    duration: "4 Weeks",
    price: "3000/-",
    image: "/assets/academy/courses/img10.png",
    features: [
      "Sentence construction",
      "Correct punctuation",
      "Parts of speech",
      "Verb tenses",
      "Subject-verb agreement",
      "Effective communication"
    ]
  },
  {
    id: "kids-creative-writing",
    title: "Creative Writing",
    description: "Encourages imagination and expressive writing skills.",
    duration: "4 Weeks",
    price: "3000/-",
    image: "/assets/academy/courses/img11.png",
    features: [
      "Idea generation & imagination",
      "Story structure (Beginning–Middle–End)",
      "Character creation",
      "Descriptive writing",
      "Emotional expression"
    ]
  },
  {
    id: "kids-reading-club",
    title: "Reading Club",
    description: "Develops love for reading and critical thinking.",
    duration: "Online",
    price: "500/per month",
    image: "/assets/academy/courses/img12.png",
    features: [
      "Reading for pleasure",
      "Vocabulary in context",
      "Comprehension & critical thinking",
      "Listening & speaking skills",
      "Empathy & life values through stories"
    ]
  }
];

export const galleryImages = [
  { id: 1, src: '/assets/academy/gallery/v1.png', title: 'Interactive Group Discussions', category: 'classroom' },
  { id: 2, src: '/assets/academy/gallery/v2.png', title: 'Classroom Mentorship Session', category: 'classroom' },
  { id: 3, src: '/assets/academy/gallery/v3.png', title: 'Speech & Presentation Training', category: 'speaking' },
  { id: 4, src: '/assets/academy/gallery/v4.png', title: 'Student Confidence Building', category: 'speaking' },
  { id: 5, src: '/assets/academy/gallery/v5.png', title: 'Active Listening & Debate', category: 'speaking' },
  { id: 6, src: '/assets/academy/gallery/v6.png', title: 'IELTS Practice & Evaluation', category: 'classroom' },
  { id: 7, src: '/assets/academy/gallery/v7.jpeg', title: 'Young Learners in Action', category: 'young' },
  { id: 8, src: '/assets/academy/gallery/v8.jpeg', title: 'Group Activity & Exercises', category: 'young' },
  { id: 9, src: '/assets/academy/gallery/v9.jpeg', title: 'Reading Club Engagement', category: 'young' },
  { id: 10, src: '/assets/academy/gallery/v10.jpeg', title: 'Creative Writing Workshop', category: 'young' },
  { id: 11, src: '/assets/academy/gallery/v11.jpeg', title: 'Public Speaking Practice', category: 'speaking' },
  { id: 12, src: '/assets/academy/gallery/v12.jpeg', title: 'Corporate Communication Prep', category: 'speaking' },
  { id: 13, src: '/assets/academy/gallery/v13.jpeg', title: 'Classroom Interaction', category: 'classroom' },
  { id: 14, src: '/assets/academy/gallery/v14.jpeg', title: 'Peer Collaboration Activity', category: 'milestones' },
  { id: 15, src: '/assets/academy/gallery/v15.jpeg', title: 'Student Milestone Celebration', category: 'milestones' },
  { id: 16, src: '/assets/academy/gallery/v16.jpeg', title: 'Faculty & Student Mentorship', category: 'classroom' },
  { id: 17, src: '/assets/academy/gallery/v17.jpeg', title: 'Speaking Skills Practice', category: 'speaking' },
  { id: 18, src: '/assets/academy/gallery/v18.jpeg', title: 'Interactive Learning', category: 'classroom' },
  { id: 19, src: '/assets/academy/gallery/v19.jpeg', title: 'Language Games & Vocabulary', category: 'young' },
  { id: 20, src: '/assets/academy/gallery/v20.jpeg', title: 'Elocution Coaching', category: 'speaking' },
  { id: 21, src: '/assets/academy/gallery/v21.jpeg', title: 'Mock Interview Simulation', category: 'speaking' },
  { id: 22, src: '/assets/academy/gallery/v22.jpeg', title: 'Graduation & Achievement Day', category: 'milestones' }
];

export const testsData = [
  {
    id: 'kids',
    title: 'Kids Test',
    ageGroup: 'Age 5–17 Years',
    badgeColor: 'bg-blue-500',
    questionsCount: 25,
    features: [
      '25 Questions covering basic grammar concepts',
      'Fill in the blanks, analogies, synonyms, and more',
      'Age-appropriate difficulty level'
    ]
  },
  {
    id: 'adults',
    title: 'Adults Test',
    ageGroup: 'Advanced Learners',
    badgeColor: 'bg-purple-500',
    questionsCount: 28,
    features: [
      '28 Questions covering advanced grammar',
      'Idioms, analogies, vocabulary, and sentence improvement',
      'Professional-level difficulty'
    ]
  },
  {
    id: 'leadership',
    title: 'Leadership Style Assessment',
    ageGroup: 'Managers & Aspiring Leaders',
    badgeColor: 'bg-amber-500',
    questionsCount: 60,
    features: [
      '60 Questions across 6 leadership dimensions',
      'Discover your dominant leadership style',
      'Psychometric self-assessment'
    ]
  }
];

export const sampleBlogPosts = [
  {
    id: 'who-to-boost-your-comprehension-skills',
    title: 'Who to boost your comprehension skills',
    author: 'Anish',
    date: '2026-03-28',
    displayDate: '3/28/2026',
    category: 'Reading & Comprehension',
    coverImage: '/assets/academy/books/the-reading-detective.jpg',
    excerpt: `The "read but don't understand" phenomenon is real. We've all been there: you finish a page of a book, blink, and realize your brain was actually thinking about what you're going to eat for dinner. You read every single word, but zero information actually transferred into your memory. Here is how you can train active retention and comprehension speed.`,
    content: `
      The "read but don't understand" phenomenon is real. We've all been there: you finish a page of a book, blink, and realize your brain was actually thinking about what you're going to eat for dinner. You read every single word, but zero information actually transferred into your memory.

      ### 1. Active Visualization
      When you read, don't just process characters on paper. Create a mini-movie in your head. If a passage describes a bustling boardroom or an experimental laboratory, picture the colors, textures, and spatial movements.

      ### 2. The 3-Sentence Chapter Recap
      At the end of every chapter or passage, force yourself to write down 3 sentences summarizing what you just absorbed without looking back. This triggers active recall instead of passive familiarity.

      ### 3. Question Character and Author Motives
      Why did the author use that specific verb? What is the unspoken subtext? As taught in 'The Reading Detective', reading with an inquisitive mindset turns reading from a passive chore into an engaging mystery.
    `
  },
  {
    id: 'how-15-minutes-of-reading-can-change-your-life',
    title: 'How 15 minutes of reading can change your life',
    author: 'Anish',
    date: '2026-03-12',
    displayDate: '3/12/2026',
    category: 'Daily Habits',
    coverImage: '/assets/academy/books/101-management.jpg',
    excerpt: `The 15-Minute Pivot: How a Tiny Slice of Time Rewires Who You Are. We're obsessed with the "big overhaul." We think that to change our lives—to go from the shy, hesitant speaker to the poised presenter—we need a 3-month sabbatical or a 4-hour daily grind. But consistency beats intensity every single time.`,
    content: `
      The 15-Minute Pivot: How a Tiny Slice of Time Rewires Who You Are.

      We're obsessed with the "big overhaul." We think that to change our lives—to go from the shy, hesitant speaker to the poised presenter—we need a 3-month sabbatical or a 4-hour daily grind. But consistency beats intensity every single time.

      ### The Mathematics of Micro-Habits
      Reading just 15 minutes a day at an average pace of 250 words per minute equals approximately:
      - 3,750 words per day
      - Over 1.3 million words per year
      - That is roughly 15–20 full non-fiction or literature books every year!

      ### What Happens to Your Brain?
      1. **Subconscious Syntax Modeling**: Your brain absorbs correct sentence constructions, prepositions, and natural idioms without you needing to memorize dry grammar rules.
      2. **Stress Reduction**: Research shows that just 6 minutes of focused reading reduces heart rate and muscle tension by up to 68%.
      3. **Elevated Articulation**: You start speaking in complete, structured thoughts rather than fragmented bullet points.
    `
  },
  {
    id: 'secret-to-master-english',
    title: 'Secret to master english',
    author: 'Anish',
    date: '2026-03-10',
    displayDate: '3/10/2026',
    category: 'Fluency Mastery',
    coverImage: '/assets/academy/courses/img6.png',
    excerpt: `The Boring Truth About Mastering English: Consistency Beats Intensity Every Time. We've all been there. You get a sudden burst of motivation on a Sunday night. You download three language apps, buy a dictionary, and vow to study 3 hours every day. By Thursday, life gets busy, and you stop entirely.`,
    content: `
      The Boring Truth About Mastering English: Consistency Beats Intensity Every Time.

      We've all been there. You get a sudden burst of motivation on a Sunday night. You download three language apps, buy a dictionary, and vow to study 3 hours every day. By Thursday, life gets busy, and you stop entirely.

      ### The Fallacy of the Weekend Warrior
      Studying 7 hours on a single Sunday does not produce the same neurological pathways as practicing 20 minutes every single morning. Language is a muscle, not an exam paper you can cram before breakfast.

      ### Three Daily Pillars:
      1. **Daily Spoken Practice**: Speak aloud for 5 minutes about what you accomplished today. Record your voice on your phone once a week to track modulation and filler words.
      2. **Contextual Vocabulary**: Don't memorize lists of 50 disconnected words. Learn 2 words a day, but write 3 sentences using them in actual workplace conversations.
      3. **Active Listening**: Listen to podcasts or audiobooks where speakers express complex thoughts clearly, paying attention to phrasing, pauses, and cadence.
    `
  },
  {
    id: 'master-guide-to-crack-group-discussion',
    title: 'Master guide to crack Group Discussion',
    author: 'Anish',
    date: '2026-03-05',
    displayDate: '3/05/2026',
    category: 'Career & GD',
    coverImage: '/assets/academy/courses/img3.png',
    excerpt: `Mastering Group Discussions: Structure, Body Language, and Winning Contributions. In campus placements and competitive corporate assessments, a GD is rarely about who shouts the loudest. Recruiters evaluate leadership poise, constructive synthesis, and structured articulation.`,
    content: `
      Mastering Group Discussions: Structure, Body Language, and Winning Contributions.

      In campus placements and competitive corporate assessments, a GD is rarely about who shouts the loudest. Recruiters evaluate leadership poise, constructive synthesis, and structured articulation.

      ### 1. The Power of the Initiator vs. The Synthesizer
      If you initiate the discussion, provide a balanced definition and outline 2–3 perspectives rather than jumping to a dogmatic conclusion. If someone else starts, step in early as a synthesizer: summarize differing viewpoints and steer the group forward.

      ### 2. Disagree Without Disrespect
      Never say: *"You are completely wrong."* Instead, say: *"I appreciate your point regarding cost, however, looking at the long-term scalability, there is another dimension we must consider..."*

      ### 3. Body Language and Eye Contact
      Maintain open posture, avoid aggressive finger pointing, and make eye contact with all participants around the table, not just the evaluator.
    `
  },
  {
    id: 'how-to-prepare-for-ielts-in-10-days',
    title: 'How to Prepare for IELTS in 10 Days: A Practical Guide for Quick Results',
    author: 'Anish',
    date: '2026-02-25',
    displayDate: '2/25/2026',
    category: 'IELTS Prep',
    coverImage: '/assets/academy/books/cakewalk-ielts.jpg',
    excerpt: `A high-intensity, structured blueprint to maximize your band score across Listening, Reading, Writing, and Speaking in just 10 days of focused practice, avoiding common traps and capitalizing on core test strategies.`,
    content: `
      A high-intensity, structured blueprint to maximize your band score across Listening, Reading, Writing, and Speaking in just 10 days of focused practice.

      ### Day 1–3: Diagnostic Test & High-Yield Strategy
      Take a full authentic mock test under strict timed conditions. Identify your weakest skill: is it Task 2 essay structure, or matching headings in Reading? Focus 70% of your energy on that single bottle-neck.

      ### Day 4–7: The Core Frameworks
      - **Writing Task 2**: Master the 4-paragraph structure (Introduction, 2 Body Paragraphs, Conclusion). Memorize cohesive transition devices and practice generating counterarguments.
      - **Reading**: Practice scanning for proper nouns and numbers without reading entire passages line-by-line.

      ### Day 8–10: Exam Simulation & Speaking Polishing
      Practice full-length speaking interviews in front of a mirror or with a coach. Focus on natural fluency, eliminating filler pauses ('uhh', 'like'), and speaking with confident projection.
    `
  },
  {
    id: 'overcoming-mother-tongue-influence',
    title: 'Overcoming Mother Tongue Influence (MTI) in Spoken English',
    author: 'Anish',
    date: '2026-02-15',
    displayDate: '2/15/2026',
    category: 'Spoken Fluency',
    coverImage: '/assets/academy/courses/img7.png',
    excerpt: `Phonetics, jaw exercises, and syllable stress techniques to neutralize accents and speak with effortless global clarity in international meetings, client presentations, and university interviews.`,
    content: `
      Phonetics, jaw exercises, and syllable stress techniques to neutralize accents and speak with effortless global clarity.

      Mother Tongue Influence (MTI) is a natural linguistic trait, not a defect. However, in global business and international exams, clear syllable stress and vowel enunciation ensure you are understood effortlessly.

      ### 1. Minimal Pair Drills
      Practice minimal pairs that confuse non-native speakers: ship vs. sheep, beat vs. bit, van vs. ban. Exaggerate mouth shape and tongue placement.

      ### 2. Syllable Stress Patterns
      English is a stress-timed language. Unlike syllable-timed languages, English emphasizes key content words while gliding over function words. Learn to stress root nouns and verbs accurately.

      ### 3. Pacing and Pausing
      Speaking fast is not the same as speaking fluently. Deliberate, calm pacing gives your vocal cords room to enunciate and makes you sound authoritative and trustworthy.
    `
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Ninoshka",
    role: "Veterinary Professional",
    course: "IELTS Preparation",
    rating: 5,
    band: "Band 7.5",
    country: "Canada",
    text: "With consistent guidance and focused practice, I cleared my IELTS in my first attempt with an overall band score of 7.5. Today, I am in Canada, pursuing my goals with confidence and pride."
  },
  {
    id: 2,
    name: "Sucharita",
    role: "Aspiring International Student",
    course: "IELTS Preparation",
    rating: 5,
    band: "Band 7.0",
    country: "Global Admissions",
    text: "I cleared my IELTS in my first attempt with an overall band score of 7. Choosing the right guidance helped me move one step closer to building my life abroad."
  },
  {
    id: 3,
    name: "Deepak S.",
    role: "Grade 12 Student",
    course: "IELTS Preparation",
    rating: 5,
    band: "Band 6.5",
    country: "Australia",
    text: "I cleared my IELTS with a band score of 6.5, which was exactly what my university required. This achievement helped me continue my education in Australia and make my family proud."
  },
  {
    id: 4,
    name: "Atharv",
    role: "Mechanical Engineering Student",
    course: "IELTS Preparation",
    rating: 5,
    band: "Band 6.5",
    country: "Germany",
    text: "Scoring a 6.5 band in IELTS helped me achieve my dream of studying in Germany. The preparation was structured, practical, and constantly motivating."
  },
  {
    id: 5,
    name: "Shreya",
    role: "Literature Student",
    course: "IELTS Preparation",
    rating: 5,
    band: "Band 6.5",
    country: "Germany & UK",
    text: "I cleared my IELTS with a 6.5 band and secured admission to my dream university in Germany and the UK. The guidance throughout the process made everything clearer and easier."
  },
  {
    id: 6,
    name: "Amol D.",
    role: "Working Professional",
    course: "IELTS Preparation",
    rating: 5,
    band: "Target Met",
    country: "Germany",
    text: "With consistent practice and focused mentoring, I achieved the score required for higher studies in Germany. This journey taught me discipline and confidence."
  },
  {
    id: 7,
    name: "Neha O.",
    role: "Working Professional",
    course: "IELTS Preparation",
    rating: 5,
    band: "Band 7.0",
    country: "Higher Studies",
    text: "I achieved a strong band score of 7 through consistency and the right mentorship. Managing work and preparation was challenging, but the support made it possible."
  },
  {
    id: 8,
    name: "Monika",
    role: "Canada PR Applicant",
    course: "IELTS Preparation",
    rating: 5,
    band: "Band 6.5",
    country: "Canada PR",
    text: "Clearing my IELTS with a 6.5 band helped me successfully apply for Canada PR. This success has helped me give my daughter a better life in Canada."
  },
  {
    id: 9,
    name: "IT Aspirant",
    role: "IT Enthusiast",
    course: "IELTS Preparation",
    rating: 5,
    band: "Qualified",
    country: "Germany",
    text: "With proper guidance, I cleared my IELTS and moved to Germany for higher studies. Things are going well for me here, and I’m grateful for the support I received."
  },
  {
    id: 10,
    name: "Sudhanshu",
    role: "Aspiring International Student",
    course: "IELTS Preparation",
    rating: 5,
    band: "Band 6.5",
    country: "Germany",
    text: "I managed to score 6.5 in IELTS through consistency and regular practice. This achievement helped me move closer to my goal of studying in Germany."
  }
];

export const faqList = [
  {
    id: "tests-offered",
    categoryLabel: "Global Test Prep",
    question: "Which global proficiency tests does The Consistent Academy prepare students for?",
    answer: "We provide specialized, high-yield coaching for IELTS (Academic & General Training), TOEFL, PTE Academic, and CELPIP (for Canadian Immigration & PR). Each curriculum is designed to help students clear their target band in the very first attempt with modular speaking, writing, reading, and listening drills."
  },
  {
    id: "mode-of-learning",
    categoryLabel: "Pune & Online Batches",
    question: "Are classes held in-person in Pune, online, or in hybrid mode?",
    answer: "Both! We conduct offline classroom batches at our Pune center (serving students across Maharashtra) as well as live interactive online cohorts for aspirants across India and abroad (including students targeting Canada, the UK, Germany, and Australia)."
  },
  {
    id: "trainer-credentials",
    categoryLabel: "Faculty & Mentorship",
    question: "Who conducts the training sessions at the academy?",
    answer: "All masterclasses and core modules are led directly by Author & IELTS Master Trainer Vidya Wankhade. With 19+ years of teaching excellence, TEFL/TESOL certification, and three published books (Cakewalk IELTS, The Reading Detective, and 101 Management Books), she provides personalized diagnostic evaluations and 1-on-1 feedback."
  },
  {
    id: "ielts-duration-fees",
    categoryLabel: "Duration & Fees",
    question: "What is the duration, format, and fee for the IELTS preparation course?",
    answer: "Our comprehensive IELTS / TOEFL / PTE / CELPIP program spans 20 intensive hours across 4 modules (Listening, Reading, Writing, and Speaking) priced at ₹12,000/-. Batches feature flexible weekday and weekend timings, authentic Cambridge materials, and full-length simulated mock tests."
  },
  {
    id: "interview-corporate-programs",
    categoryLabel: "Corporate & Career",
    question: "What career and corporate communication courses are available?",
    answer: "We offer targeted corporate programs including 'Crack Your Interview (Fresher-Focused)' (6 hours, ₹3,000/-), 'Corporate Survival & Success', 'Corporate Dining & Social Etiquette', and 'Advanced English & Leadership Presence for Managers'. These courses focus on resume positioning, mock interviews, boardroom eloquence, and cross-cultural communication."
  },
  {
    id: "kids-programs",
    categoryLabel: "Young Learners",
    question: "What courses are designed specifically for young learners and school students?",
    answer: "Our Young Learners series includes Kids Elocution & Public Speaking (4 weeks, ₹3,000/-), Grammar Foundations (4 weeks, ₹3,000/-), Creative Writing (4 weeks, ₹3,000/-), and the popular monthly Online Reading Club (₹500/month) aimed at developing deep comprehension, vocabulary, and confident articulation from an early age."
  }
];

