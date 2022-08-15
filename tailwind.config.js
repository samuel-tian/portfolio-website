const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      default: ['"Open Sans"', "sans"],
    },
    color: {
      transparent: "transparent",
      current: "currentColor",
      background: colors.black,
      text: colors.white,
      "hover": "#f9fafb",
    },
  },
  plugins: [],
};
