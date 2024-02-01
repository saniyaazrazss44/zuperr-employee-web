/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grayShade: "#7E7E7E",
        philippineGray: "#8C8C8C",
        brightGray: "#EEEEEE",
        darkGreen: "#047356",
        lightGreen: "#7AAE3B",
      }
    },
  },
  plugins: [],
}

