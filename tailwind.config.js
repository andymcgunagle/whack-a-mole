module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in-and-wiggle': 'fade-in-and-wiggle 7s ease-in',
      },
      keyframes: {
        'fade-in-and-wiggle': {
          '0%': { opacity: '0', transform: 'translatey(1rem)' },
          '10%': { opacity: '1', transform: 'translatey(0)' },
          '15%, 25%, 35%, 45%, 55%, 66%, 75%, 85%, 95%': { transform: 'rotate(5deg)' },
          '20%, 30%, 40%, 50%, 60%, 70%, 80%, 90%, 100%': { transform: 'rotate(-5deg)' },
        },
      },
    },
  },
  plugins: [],
};
