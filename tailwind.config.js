/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        accent: 'var(--accent)',
        'text-main': 'var(--text-main)',
        white: 'var(--white)',
        'bg-light': 'var(--bg-light)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
} 