/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        slate950: '#020617',
        slate900: '#0f172a',
        emerald400: '#34d399',
        cyan400: '#22d3ee',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        glowEmerald: '0 0 28px rgba(52, 211, 153, 0.2)',
        glowCyan: '0 0 28px rgba(34, 211, 238, 0.2)',
      },
    },
  },
  plugins: [],
}
