/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        default: 'var(--font-segoe-ui)',
      },
      backgroundImage: {
        gradient:
          'linear-gradient(180deg, rgba(0,0,0,0.08) 90%, rgba(0,0,0,0.2) 100%)',
      },
    },
  },
  plugins: [],
}
