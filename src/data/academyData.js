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
    { label: "Instagram", href: "https://www.instagram.com/the_consistent_academy/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/the-consistent-academy/" }
  ],
  thinkbuild: {
    name: "ThinkBuild",
    url: "https://www.thinkbuild.in/",
    logo: "/assets/thinkbuild-logo.png",
    creditText: "© 2026 The Consistent Academy. All rights reserved. | Website developed by ThinkBuild"
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
      { label: "Bspkart", url: "https://www.bspkart.com/product/a-focal-easy-guide-cakewalk-ielts/" },
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
    price: "12,000/-",
    modules: 4,
    targetAudience: "Students & professionals aiming for international study, migration, work, or permanent residency.",
    promise: "To build real English proficiency and test confidence, not just exam tricks.",
    moduleDetails: [
      { title: "Speaking Module", topics: ["Fluency & Coherence", "Lexical Resource", "Grammatical Range & Accuracy", "Pronunciation & Mock Interviews"] },
      { title: "Listening Module", topics: ["Active Listening Techniques", "Handling Multiple Accents", "Note-taking strategies", "Practice with real test simulations"] },
      { title: "Reading Module", topics: ["Skimming & Scanning", "Identifying Key Concepts & Vocabulary", "Time management across complex passages", "Speed reading exercises"] },
      { title: "Writing Module", topics: ["Task 1 & Task 2 structure", "Vocabulary enhancement & Cohesive devices", "Essay planning & argument development", "Individual personalized feedback"] }
    ]
  },
  {
    id: "corporate-survival-success",
    category: "corporate",
    title: "Corporate Survival & Success Program",
    subtitle: "Workplace Communication & Executive Skills",
    description: "Essential skills for corporate communication, stakeholder management, presentation and ethical leadership.",
    image: "/assets/academy/courses/img2.png",
    hours: "12 Hours",
    price: "6,000/-",
    modules: 6,
    targetAudience: "Working professionals, aspiring managers, and executives.",
    promise: "To empower professionals with assertive communication and executive presence.",
    moduleDetails: [
      { title: "Module 1: Workplace Communication Essentials", topics: ["Speaking professionally with seniors & colleagues", "Structuring clear responses", "Asking questions the right way", "Telephone & virtual meeting etiquette"] },
      { title: "Module 2: Email, Chat & Workplace Writing", topics: ["Professional emails (requests, follow-ups, apologies)", "Corporate WhatsApp / Teams / Slack etiquette", "Subject lines, tone & clarity", "Avoiding casual or passive-aggressive language"] },
      { title: "Module 3: Meeting Mastery & Assertive Speaking", topics: ["Speaking up with confidence in meetings", "Disagreeing politely & constructively", "Handling interruptions smoothly", "Summarizing discussions & action items"] },
      { title: "Module 4: Presentations & Business Updates", topics: ["Structuring short business presentations", "Simplifying data into spoken insights", "Body language & vocal delivery", "Handling Q&A with poise"] },
      { title: "Module 5: Workplace Dynamics & Professional Etiquette", topics: ["Managing stress and high-pressure conversations", "Cross-cultural sensitivity", "Client engagement fundamentals"] },
      { title: "Module 6: Career Growth & Corporate Intelligence", topics: ["Handling feedback positively", "Managing office politics ethically", "Speaking up for growth", "Early career goal setting"] }
    ]
  },
  {
    id: "crack-your-interview",
    category: "career",
    title: "Crack Your Interview",
    subtitle: "Fresher-Focused Intensive",
    description: "Transform from nervous fresher to confident, clear, and convincing interviewee.",
    image: "/assets/academy/courses/img3.png",
    hours: "6 Hours",
    price: "3,000/-",
    modules: 6,
    targetAudience: "Final-year students, fresh graduates, job seekers (0–1 year).",
    promise: "To transform nervous freshers into confident, clear, and convincing interviewees.",
    moduleDetails: [
      { title: "Module 1: Interview Mindset & Recruiter Psychology", topics: ["What interviewers look for", "Common rejection reasons", "Confidence over perfection", "Overcoming fear & hesitation"] },
      { title: "Module 2: Self-Introduction & Personal Branding", topics: ["'Tell me about yourself'", "Presenting education & projects", "Turning weaknesses into strengths", "'Why should we hire you?'"] },
      { title: "Module 3: Answer Structuring & HR Questions", topics: ["STAR & PREP frameworks", "Strengths & weaknesses", "Failure & challenges", "Salary & availability questions"] },
      { title: "Module 4: Communication & Body Language", topics: ["Eye contact & posture", "Tone, pace, & voice modulation", "Handling awkward silences", "Virtual interview setup"] },
      { title: "Module 5: Handling Difficult Questions & Scenarios", topics: ["Gaps in education or career", "Questions you don't know the answer to", "Situational & behavioral queries"] },
      { title: "Module 6: Live Mock Interview & Action Plan", topics: ["1-on-1 personalized simulation", "Immediate actionable critique", "Final polish checklist"] }
    ]
  },
  {
    id: "corporate-dining-etiquette",
    category: "corporate",
    title: "Corporate Dining & Social Etiquette Masterclass",
    subtitle: "Executive Polish & Table Manners",
    description: "Master the art of formal business dinners, client networking, and social protocol.",
    image: "/assets/academy/courses/img4.png",
    hours: "4 Hours",
    price: "2,500/-",
    modules: 4,
    targetAudience: "Managers, client-facing professionals, business leaders.",
    promise: "Gain effortless grace during formal dining and high-stakes social interactions.",
    moduleDetails: [
      { title: "Module 1: Table Settings & Cutlery Guide", topics: ["Formal silverware placement", "Glassware navigation", "Napkin etiquette"] },
      { title: "Module 2: Business Dining Protocols", topics: ["Hosting vs being a guest", "Ordering professionally", "Managing business conversations over meals"] },
      { title: "Module 3: Networking & Cocktails", topics: ["Holding glass and food comfortably", "Entering and exiting conversations", "Business card exchange"] },
      { title: "Module 4: Cross-Cultural Dining Norms", topics: ["International customs", "Dietary considerations", "Tipping etiquette"] }
    ]
  },
  {
    id: "advanced-leadership-presence",
    category: "corporate",
    title: "Advanced English & Leadership Presence for Managers",
    subtitle: "High-Impact Executive Coaching",
    description: "Elevate your authority, persuasive speaking, and leadership clarity.",
    image: "/assets/academy/courses/img5.png",
    hours: "15 Hours",
    price: "8,500/-",
    modules: 5,
    targetAudience: "Team leads, senior managers, department heads.",
    promise: "Command respect and communicate strategic visions with absolute clarity.",
    moduleDetails: [
      { title: "Module 1: Executive Articulation", topics: ["Concise leadership phrasing", "Eliminating filler words", "Gravitas & vocal authority"] },
      { title: "Module 2: Persuasive Storytelling for Business", topics: ["Framing corporate narratives", "Using metaphors and analogies", "Inspiring action"] },
      { title: "Module 3: Crisis & Difficult Conversations", topics: ["Delivering tough feedback", "De-escalating friction", "Maintaining empathy with authority"] },
      { title: "Module 4: High-Stakes Stakeholder Alignment", topics: ["Executive summaries", "Boardroom presentation style", "Handling adversarial questions"] },
      { title: "Module 5: Personal Leadership Brand", topics: ["Authentic leadership voice", "Written communication standard", "Mentoring presence"] }
    ]
  },
  {
    id: "communication-skill-training",
    category: "career",
    title: "Communication Skill Training",
    subtitle: "Comprehensive Spoken & Social Fluency",
    description: "Overcome hesitation, build everyday English fluency, and express ideas naturally.",
    image: "/assets/academy/courses/img6.png",
    hours: "16 Hours",
    price: "7,000/-",
    modules: 4,
    targetAudience: "Students, homemakers, professionals seeking conversational fluency.",
    promise: "To eliminate hesitation and build natural spoken English fluency.",
    moduleDetails: [
      { title: "Module 1: Everyday Conversational English", topics: ["Social small talk", "Expressing opinions comfortably", "Building daily active vocabulary"] },
      { title: "Module 2: Sentence Structure & Grammar in Use", topics: ["Grammar for speaking without overthinking", "Common error correction", "Tenses made intuitive"] },
      { title: "Module 3: Pronunciation & Clarity", topics: ["Phonetics basics", "Pacing, stress and rhythm", "Overcoming mother-tongue influence (MTI)"] },
      { title: "Module 4: Real-life Speaking Simulations", topics: ["Role plays", "Imp prompt speaking", "Group discussions"] }
    ]
  },
  {
    id: "personality-development",
    category: "career",
    title: "Personality Development Training",
    subtitle: "Self-Image & Confidence Mastery",
    description: "Holistic self-transformation covering posture, confidence, and social charisma.",
    image: "/assets/academy/courses/img7.png",
    hours: "10 Hours",
    price: "5,000/-",
    modules: 4,
    targetAudience: "Youth, fresh graduates, and anyone looking to enhance their personal impact.",
    promise: "Develop unshakeable personal confidence and memorable presence.",
    moduleDetails: [
      { title: "Module 1: Self-Awareness & Mindset", topics: ["Overcoming self-doubt", "Developing a growth mindset", "Emotional regulation"] },
      { title: "Module 2: Body Language & Posture", topics: ["Confident walking and standing posture", "Hand gestures that build trust", "Eye contact"] },
      { title: "Module 3: Social & Emotional Intelligence", topics: ["Active listening", "Understanding non-verbal cues", "Empathy in interactions"] },
      { title: "Module 4: Personal Grooming & Presence", topics: ["Professional attire basics", "First impressions", "Everyday poise"] }
    ]
  }
];

export const kidsCourses = [
  {
    id: "kids-elocution",
    title: "Elocution Course",
    target: "Kids (Ages 7–14)",
    desc: "Focus on speech clarity, diction, tone modulation, and poem/prose recitation."
  },
  {
    id: "kids-public-speaking",
    title: "Public Speaking",
    target: "Kids (Ages 8–15)",
    desc: "Stage fear elimination, speech organization, audience engagement, and confident delivery."
  },
  {
    id: "kids-grammar-foundations",
    title: "Grammar Foundations",
    target: "Kids (Ages 6–13)",
    desc: "Intuitive, interactive grammar mastery through fun games, stories, and application."
  },
  {
    id: "kids-creative-writing",
    title: "Creative Writing",
    target: "Kids (Ages 8–15)",
    desc: "Developing imagination, narrative storytelling, character arcs, and descriptive vocabulary."
  },
  {
    id: "kids-reading-club",
    title: "Reading Club",
    target: "Kids (Ages 6–14)",
    desc: "Cultivating lifelong reading habits, comprehension skills, and vocabulary based on 'The Reading Detective'."
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
