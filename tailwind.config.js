/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00FEE3",
        secondary: "#00D4FC",
        dark: "#111"
      }
    },
  },
  plugins: [],
}