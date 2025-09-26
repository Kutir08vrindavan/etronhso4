/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        cinematic: {
          '0%': { transform: 'scale(1.1) translate(0px, 0px)' },
          '50%': { transform: 'scale(1.2) translate(10px, 10px)' },
          '100%': { transform: 'scale(1.1) translate(0px, 0px)' },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        cinematic: 'cinematic 10s ease-in-out infinite',
        fadeInUp: 'fadeInUp 1s ease-out forwards',
      },
    },
  },
  plugins: [],
}
