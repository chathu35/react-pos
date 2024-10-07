/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // Include all JS, TS, JSX, TSX files in the `pages` directory
    './components/**/*.{js,ts,jsx,tsx}', // Include all JS, TS, JSX, TSX files in the `components` directory
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


