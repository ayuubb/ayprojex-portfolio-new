/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        slate950: '#020617',
        slate900: '#0f172a',
        slate800: '#1e293b',
        accent: '#2dd4bf',
        accentHover: '#14b8a6',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        glowTeal: '0 0 28px rgba(45, 212, 191, 0.2)',
      },
    },
  },
  plugins: [],
}
