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
        mainBgLightBlue: "#d4def7",
        darkGreen: "#047356",
        lightGreen: "#7AAE3B",
        cardColor: "#FEE7DF",
        cardBg: "#F9F9F9",
        cardText: "#B7D9CF",
        btnBlue: '#2645B5',
        btnDarkBlue: '#1a307e',
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

