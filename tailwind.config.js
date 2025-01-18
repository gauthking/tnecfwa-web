/** @type {import('tailwindcss').Config} */
import { defaultTheme } from "tailwindcss/defaultTheme"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        koulen: ["Koulen"],
        kufam: ["Kufam"],
        kumbhsansbold: ["KumbhSans-Bold"],
        kulimpark: ["KulimPark-Bold"],
        kulimparkregular: ["KulimPark-Regular"],
      },
    },
  },
  plugins: [],
}