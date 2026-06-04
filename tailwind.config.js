/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          400: '#00E676',
          500: '#00C853',
          600: '#00A843',
          700: '#007E33',
        },
        dark: {
          50:  '#2A2A2A',
          100: '#1E1E1E',
          200: '#181818',
          300: '#141414',
          400: '#111111',
          500: '#0D0D0D',
          600: '#0A0A0A',
        },
      },
      fontFamily: {
        sans: ['Sora', 'sans-serif'],
        display: ['Sora', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0,200,83,0.15), transparent)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'pulse-green': 'pulseGreen 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGreen: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(0,200,83,0.4)' },
          '50%':      { boxShadow: '0 0 0 12px rgba(0,200,83,0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
