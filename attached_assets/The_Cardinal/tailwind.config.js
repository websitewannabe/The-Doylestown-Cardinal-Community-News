/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cardinal-red': '#8B0000',
        'off-white': '#FAFAFA',
        'charcoal-gray': '#333333',
        'forest-green': '#4A6D57',
        'warm-gold': '#FFD700',
      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'open-sans': ['"Open Sans"', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
};