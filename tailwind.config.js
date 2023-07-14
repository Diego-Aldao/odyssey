/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-color-background": "#e6e4d5",
        "secondary-color-background": "#e7e3ce",
        "main-black": "#23210f",
        "main-white": "#efefef",
        "main-color": "#fcff60",
      },
      fontFamily: {
        chivo: ["Chivo", "sans-serif"],
      },
      screens: {
        xl: "1240px",
        xs: "580px",
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
    },
  },
  plugins: [],
};
