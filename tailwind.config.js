/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FFA100',
        'secondary': '#F7FAFC',
        'tertiary': '#FFED00'
      },
      backgroundImage: {
        'gradient-yellow': 'linear-gradient(90deg, rgba(255,237,0,1) 0%, rgba(255,161,0,1) 100%)'
      }
    },
    
  },
  plugins: [],
}