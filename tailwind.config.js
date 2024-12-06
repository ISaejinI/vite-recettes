/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/parts/**/*.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        overpass: ['Overpass', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

