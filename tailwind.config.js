/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-purple': '#6B46C1',
        'accent-purple': '#A855F7',
        'purple-bg': '#4C1D95',
        'secondary-blue': '#3B82F6',
        'active-light-blue': '#06B6D4',
        'alert-orange': '#F59EOB',
        'error-red': '#EF4444',
        'success-blue': '#10B981',
        'dark-black': '#0F0F23',
        shadow: '#1A1A2E',
        'glass-white': '#6B46C1',
        'light-white': '#F8FAFC'


      },
      screens: {
        'xs': {
          'max': '639px'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Orbitron', 'sans-serif'],
      },
    },
  },
  plugins: [],
}