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
        dimGrayShade: "#6D6D64",
        philippineGray: "#8C8C8C",
        brightGray: "#E3E8E7",
        darkGreen: "#047356",
        lightGreen: "#7AAE3B",
        cardColor: "#FEE7DF",
        cardBg: "#F9F9F9",
        cardText: "#B7D9CF",
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

