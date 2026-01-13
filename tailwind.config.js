/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'main-purple': '#4731D3',
        'light-bg': '#F9F9F9',
        'dark-bg': '#252128',
      }
    },
  },
  plugins: [],
}