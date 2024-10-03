/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
      },
      animation: {
        blink: 'blink 1.6s infinite', // Duration is 1 second, repeating infinitely
      },

      
    },
  },
  plugins: [],
}
