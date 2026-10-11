/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#FAF5FF',
          100: '#F3E8FF',
          200: '#E9D5FF',
          300: '#D8B4FE',
          400: '#C084FC',
          500: '#A855F7',
          600: '#9333EA',
          700: '#7E22CE',
          800: '#6B21A8',
          900: '#581C87',
          950: '#3B0764',
          primary: '#7C3AED',
          deep: '#6D28D9',
          dark: '#581C87',
          light: '#8B5CF6',
          soft: '#F5F3FF',
          tint: '#EDE9FE',
          border: '#DDD6FE',
        },
        star: {
          amber: '#F59E0B',
          gold: '#FBBF24',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'brand': '0 10px 25px -5px rgba(124, 58, 237, 0.15), 0 8px 10px -6px rgba(124, 58, 237, 0.1)',
        'brand-lg': '0 20px 35px -5px rgba(124, 58, 237, 0.2), 0 10px 15px -5px rgba(124, 58, 237, 0.12)',
      }
    },
  },
  plugins: [],
}
