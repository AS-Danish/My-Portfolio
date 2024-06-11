/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "#060417",
        "secondary": "#1C1C27",
        "card":"#171721"
      }
    },
    
  },
  plugins: [],
}