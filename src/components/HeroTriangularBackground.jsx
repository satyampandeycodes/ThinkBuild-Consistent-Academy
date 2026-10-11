import React from 'react';

/**
 * HeroTriangularBackground
 * 
 * Continuous moving geometric triangular background for the hero section.
 * - Uses The Consistent Academy's official logo colors (Royal Purple / Violet #7C3AED, #6D28D9, #8B5CF6).
 * - Implemented using pure React + Tailwind CSS / Vanilla CSS (fully compliant with project PDF specifications).
 * - Runs continuous 60fps hardware-accelerated animations for smooth floating/drifting geometric facets.
 */
export default function HeroTriangularBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none -z-0">
      {/* Ambient background base glow in logo tint */}
      <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-gradient-to-br from-brand-primary/15 via-purple-400/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-20 left-1/4 w-[500px] h-[400px] bg-gradient-to-tr from-brand-200/20 via-brand-100/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* PRIMARY RIGHT TRIANGULAR FACET (Matches the user screenshot) */}
      <div className="absolute -top-12 -right-8 w-[60vw] max-w-[850px] min-w-[420px] h-[115%] animate-triangle-float-1 origin-top-right">
        <svg
          viewBox="0 0 600 600"
          className="w-full h-full drop-shadow-md"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Primary Logo Purple Gradient */}
            <linearGradient id="heroLogoTriangle1" x1="600" y1="0" x2="100" y2="450" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.28" />
              <stop offset="35%" stopColor="#8B5CF6" stopOpacity="0.20" />
              <stop offset="70%" stopColor="#A855F7" stopOpacity="0.14" />
              <stop offset="100%" stopColor="#EDE9FE" stopOpacity="0.06" />
            </linearGradient>

            {/* Glowing boundary line gradient */}
            <linearGradient id="heroTriangleStroke1" x1="600" y1="0" x2="100" y2="450" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#A855F7" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#C084FC" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* Large Triangular Facet pointing towards center-left */}
          <polygon
            points="600,0 95,190 380,590 600,560"
            fill="url(#heroLogoTriangle1)"
            stroke="url(#heroTriangleStroke1)"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* SECONDARY OVERLAPPING RIGHT TRIANGULAR FACET (Adds depth & parallax) */}
      <div className="absolute top-16 -right-16 w-[52vw] max-w-[720px] min-w-[360px] h-[105%] animate-triangle-float-2 origin-center">
        <svg
          viewBox="0 0 500 500"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="heroLogoTriangle2" x1="500" y1="50" x2="80" y2="350" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#6D28D9" stopOpacity="0.22" />
              <stop offset="50%" stopColor="#7C3AED" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#DDD6FE" stopOpacity="0.04" />
            </linearGradient>
            <linearGradient id="heroTriangleStroke2" x1="500" y1="50" x2="80" y2="350" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#6D28D9" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#A855F7" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          <polygon
            points="500,40 130,310 460,490"
            fill="url(#heroLogoTriangle2)"
            stroke="url(#heroTriangleStroke2)"
            strokeWidth="1"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* TOP-LEFT ACCENT TRIANGLE (Balances the composition) */}
      <div className="absolute -top-16 -left-12 w-[38vw] max-w-[500px] min-w-[260px] h-[85%] animate-triangle-float-3 origin-top-left">
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="heroLogoTriangle3" x1="0" y1="0" x2="350" y2="300" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.18" />
              <stop offset="60%" stopColor="#C084FC" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#FAF5FF" stopOpacity="0.02" />
            </linearGradient>
            <linearGradient id="heroTriangleStroke3" x1="0" y1="0" x2="350" y2="300" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#DDD6FE" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          <polygon
            points="0,0 340,40 110,320 0,220"
            fill="url(#heroLogoTriangle3)"
            stroke="url(#heroTriangleStroke3)"
            strokeWidth="1"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* FLOATING SUBTLE GEOMETRIC TRIANGLE PRISM 1 (Mid-right accent) */}
      <div className="absolute top-1/3 right-[32%] w-24 h-24 animate-triangle-float-2 opacity-70 hidden md:block">
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
          <polygon
            points="50,10 90,85 10,80"
            fill="rgba(124, 58, 237, 0.08)"
            stroke="rgba(124, 58, 237, 0.25)"
            strokeWidth="1"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* FLOATING SUBTLE GEOMETRIC TRIANGLE PRISM 2 (Bottom-left accent) */}
      <div className="absolute bottom-16 left-[12%] w-28 h-28 animate-triangle-float-1 opacity-60 hidden lg:block">
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
          <polygon
            points="20,15 85,35 45,90"
            fill="rgba(147, 51, 234, 0.06)"
            stroke="rgba(168, 85, 247, 0.20)"
            strokeWidth="1"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
