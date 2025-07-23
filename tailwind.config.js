/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'off-white': '#F8F9FA',
        'charcoal': '#212529',
        'primary': '#4361EE',
        'primary-dark': '#3A52D1',
      },
      keyframes: {
        glow: {
          '0%, 100%': { 'border-color': 'rgba(67, 97, 238, 0.4)', 'box-shadow': '0 0 5px rgba(67, 97, 238, 0.2)' },
          '50%': { 'border-color': 'rgba(67, 97, 238, 1)', 'box-shadow': '0 0 20px rgba(67, 97, 238, 0.6)' },
        }
      },
      animation: {
        glow: 'glow 2.5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
} 