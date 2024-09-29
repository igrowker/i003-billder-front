/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customOrange: "#FFA100",
        customBlue: "#08121E",
        customYellow: "#FFED00",
        customWhite: "#F7FAFC",
      },
      screens: {
        'h-tall': { 'raw': '(min-height: 700px)' }
      },
      backgroundImage: {
        'gradient-yellow': 'linear-gradient(90deg, rgba(255,237,0,1) 0%, rgba(255,161,0,1) 100%)',
        'gradient-yellow-inverted': 'linear-gradient(180deg, rgba(255,237,0,1) 0%, rgba(255,161,0,1) 100%)'
      }
    },
    
  },
  plugins: [],
}
