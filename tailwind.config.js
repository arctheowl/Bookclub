/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
          'fade-up': {
              '0%': {
                  opacity: '0',
                  transform: 'translateY(50px)'
              },
              '100%': {
                  opacity: '1',
                  transform: 'translateY(0)'
              },
          },
      },
      animation: {
          'fade-up': 'fade-up 1.5s ease-out',
      }
  },
  },
  plugins: [],
};
