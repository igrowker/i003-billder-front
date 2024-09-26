/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customOrange: "#FFA100",
        customBlue: "#08121E",
        customYellow: "#FFED00",
        customWhite: "#F7FAFC",
      },
    },
  },
  plugins: [],
};
