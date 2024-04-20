/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#01EDED",
        secondary: "#00D4FC",
        dark: "#111"
      }
    },
  },
  plugins: [],
}