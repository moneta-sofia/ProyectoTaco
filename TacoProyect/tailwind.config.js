/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        insanibc: ['Insanibc', 'sans-serif'],
        asimov: ['Asimov', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

