/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        phonk: ['Phonk', 'sans-serif'],
      },
      animation: {
        slide: 'slide 10s linear infinite',
        'slide-reverse': 'slide-reverse 10s linear infinite',
      },
      keyframes: {
        slide: {
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
        'slide-reverse': {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            transform: 'translateX(0%)',
          },
        },
      }
    },
  },
  plugins: [],
}

