# The Consistent Academy — Website Prototype Redesign
**ThinkBuild Intern Assignment 1 • The Consistent Academy Website Prototype**  
**Assigned By**: Miss Rutuja Ghadge  
**Live Preview URL**: [http://127.0.0.1:5173/](http://127.0.0.1:5173/)  
**Client Source of Truth**: [https://www.theconsistentacademy.in/](https://www.theconsistentacademy.in/)  

---

## 1. Project Overview & Design Execution

This project is a modern, responsive restructuring of **The Consistent Academy** website based on **Design Concept 2 (Modern High-Trust Institute)**. It eliminates dated neomorphism and cartoonish typography, establishing an authoritative educational institute identity using the academy’s signature purple logo colors (`#7C3AED` / `#6D28D9` / `#581C87`), generous whitespace, and responsive layouts.

### Strict Content Preservation Rule
**Zero content invented.** Every course title, fee, duration, syllabus module, testimonial quote, published book link, founder career milestone, and contact detail was extracted directly from the verified client source of truth.

---

## 2. Tech Stack & Standards

- **Core**: React 18, Vite 5, JavaScript (ES Modules)
- **Styling**: Tailwind CSS 3.4 with custom design tokens derived strictly from the academy logo palette
- **Routing**: React Router DOM (`react-router-dom` v6)
- **Icons**: Lucide React (`lucide-react`)
- **Maps**: Embedded Google Maps with verified Pune location & "Get Directions" link
- **SEO & Geo**: Page-specific titles, meta descriptions, Geo tags (Pune, Maharashtra, India), Open Graph, Schema.org `EducationalOrganization` JSON-LD, `sitemap.xml`, and `robots.txt`

---

## 3. Project Structure

```
ThinkBuild-Task1/
├── public/
│   ├── assets/
│   │   ├── academy/
│   │   │   ├── logo.png                # Official purple academy logo badge
│   │   │   ├── logo_alt.png            # Alternate academy logo
│   │   │   ├── vidya.png               # Authentic founder photo
│   │   │   ├── books/                  # Authentic book covers
│   │   │   │   ├── cakewalk-ielts.jpg
│   │   │   │   ├── the-reading-detective.jpg
│   │   │   │   └── 101-management.jpg
│   │   │   └── courses/                # Authentic course graphics
│   │   │       ├── img1.png ~ img7.png
│   │   └── thinkbuild-logo.png         # Official ThinkBuild development credit logo
│   ├── robots.txt                      # Robots crawler instructions
│   └── sitemap.xml                     # XML sitemap with all routes
├── src/
│   ├── components/
│   │   ├── Button.jsx                  # Reusable button with variants & active states
│   │   ├── SectionHeading.jsx          # Reusable section title & badge
│   │   ├── Header.jsx                  # Sticky navigation, mobile menu & contact bar
│   │   ├── Footer.jsx                  # Multi-column footer & ThinkBuild credit
│   │   ├── TrustBar.jsx                # Concept 2 signature 4-pillar metrics ribbon
│   │   ├── CourseCard.jsx              # Course card with syllabus modal viewer
│   │   ├── ContactForm.jsx             # Validated form with prototype notice
│   │   ├── MapEmbed.jsx                # Google Maps embed with Get Directions link
│   │   ├── BookCard.jsx                # Book showcase with verified store links
│   │   └── TestimonialCard.jsx         # Real student band scores & destinations
│   ├── data/
│   │   └── academyData.js              # Complete, 100% authentic client database
│   ├── pages/
│   │   ├── Home.jsx                    # Concept 2 hero, trust bar, course preview, map
│   │   ├── Courses.jsx                 # Full course catalog + Kids series
│   │   ├── About.jsx                   # Founder bio & 2007–2025 career timeline
│   │   ├── Books.jsx                   # Published works by Vidya Wankhade
│   │   ├── Testimonials.jsx            # All 10 authentic student reviews & scores
│   │   ├── Contact.jsx                 # Direct contact, form & directions
│   │   ├── PrivacyPolicy.jsx           # Transparent privacy policy
│   │   └── NotFound.jsx                # Friendly 404 page with home link
│   ├── App.jsx                         # Main router & scroll-to-top handler
│   ├── main.jsx                        # React entry point
│   └── index.css                       # Tailwind base, utilities & scrollbar
├── index.html                          # Semantic HTML with SEO, Geo & Schema.org
├── tailwind.config.js                  # Logo-derived purple color palette
├── vite.config.js                      # Vite build configuration
└── package.json
```

---

## 4. Installation & Local Run Procedure

### Prerequisites
- Node.js v18+ (tested on Node v24.21.0)
- npm v9+

### Setup Commands
```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# The site is now live at: http://localhost:5173/

# 3. Create production build
npm run build

# 4. Preview production build
npm run preview
```

---

## 5. Content Migration Checklist (100% Client Content Preserved)

| Section / Content Block | Original Client Source | Redesigned Location | Preservation Status |
| :--- | :--- | :--- | :--- |
| **Founder Bio** | Vidya Wankhade (19+ yrs experience) | `/about`, `/` | ✅ Preserved accurately |
| **Career Timeline** | 2007 (Teaching) → 2025 (Academy & Books) | `/about` | ✅ Preserved accurately |
| **Published Books** | 3 Books with Amazon/Flipkart/Evincepub links | `/books`, `/` | ✅ Preserved accurately |
| **IELTS / PTE / CELPIP** | 20 Hours, ₹12,000/-, 4 Modules | `/courses`, `/` | ✅ Preserved accurately |
| **Corporate Survival** | 12 Hours, ₹6,000/-, 6 Modules | `/courses` | ✅ Preserved accurately |
| **Crack Your Interview** | 6 Hours, ₹3,000/-, 6 Modules | `/courses`, `/` | ✅ Preserved accurately |
| **Other Core Courses** | Dining, Leadership, Spoken English | `/courses` | ✅ Preserved accurately |
| **Kids Courses** | Elocution, Public Speaking, Grammar, etc. | `/courses` | ✅ Preserved accurately |
| **Real Testimonials** | 10 verified reviews (Ninoshka, Sucharita, etc.) | `/testimonials`, `/` | ✅ Preserved accurately |
| **Phone & Email** | `+91 77091 09830`, `theconsistentacademy@gmail.com` | Global Header, Footer, Contact | ✅ Clickable tel: & mailto: |
| **Physical Address** | Pune, Maharashtra | Footer, MapEmbed | ✅ Preserved accurately |
| **ThinkBuild Credit** | Mandatory footer link to thinkbuild.in | Footer | ✅ Implemented with logo |

---

## 6. QA Acceptance Checklist (Verified against Section 12)

- [x] **Preserved Content**: All existing client content preserved without fabricating any courses, reviews, or fees.
- [x] **Image Assets**: Client logos, book covers, founder photo, and course images stored locally in `public/assets/academy/`; zero hotlinking.
- [x] **Navigation & Links**: All header links, footer links, phone (`tel:+917709109830`), email (`mailto:theconsistentacademy@gmail.com`), and social links are fully operational.
- [x] **Contact & Map**: Google Maps embed renders Pune location with a visible "Get Directions" link.
- [x] **Form Validation**: Contact form validates required fields (name, email format, phone digits, privacy consent) and displays clear inline errors and demo prototype status.
- [x] **Responsiveness**: Mobile, tablet, and desktop layouts tested with zero horizontal overflow.
- [x] **Console & Build**: `npm run build` generates a clean bundle with zero compilation errors.
- [x] **Accessibility**: Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`), accessible form labels, visible focus rings.
- [x] **SEO & Metadata**: Page-specific titles, meta descriptions, Geo tags for Pune, Open Graph tags, Schema.org `EducationalOrganization` structured data, `robots.txt`, and `sitemap.xml`.
- [x] **Footer Credit**: Displays `© 2026 The Consistent Academy. All rights reserved. | Website developed by ThinkBuild` with link to `https://www.thinkbuild.in/`.
