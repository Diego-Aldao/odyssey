/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-main-color": "#e6e4d5",
        "main-black": "#23210f",
        "main-white": "#e5e5e5",
        "main-color": "#fbff5a",
      },
      fontFamily: {
        chivo: ["Chivo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
