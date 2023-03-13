/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        logo: ["Lato"],
        display: ["Satisfy", "cursive"],
        test: ["Oxygen", "sans-serif"],
      },
      colors: {
        primary: {
          900: "#742A2A",
          800: "#9B2C2C",
          700: "#AF1818",
          600: "#C12C27",
          500: "#DF5754",
          400: "#FC8181",
          300: "#FEB2B2",
          200: "#FED7D7",
          100: "#FFF5F5",
          50: "#FFFAFA",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
