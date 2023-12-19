/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        koulen: ["Koulen", ...defaultTheme.fontFamily.sans],
        kufam: ["Kufam", ...defaultTheme.fontFamily.sans],
        kumbhsansbold: ["KumbhSans-Bold", ...defaultTheme.fontFamily.sans],
        kulimpark: ["KulimPark-Bold", ...defaultTheme.fontFamily.sans],
        kulimparkregular: ["KulimPark-Regular", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}