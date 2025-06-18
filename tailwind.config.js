/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
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
  plugins: [],
} 