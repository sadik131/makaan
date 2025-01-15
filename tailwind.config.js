/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      hebbo: ["Heebo", "serif"],
      inter: ["Inter", "serif"],
    },
    extend: {
      borderRadius: {
        md:"5px"
      },
      container: {
        center: true,
        padding: '0px',
        screens: {
          'lg': '1366px',
        },
      },
      colors: {
        primary: "#00B98E",
        accent: "#0E2E50",
        text: "#666565",
        // text: "#EFFDF5",

      }
    },
  },
  plugins: [],
}

