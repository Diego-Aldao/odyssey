/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-color-background": "#e6e4d5",
        "main-black": "#23210f",
        "main-white": "#efefef",
        "main-color": "#fcff60",
      },
      fontFamily: {
        chivo: ["Chivo", "sans-serif"],
      },
      screens: {
        xl: "1240px",
      },
    },
  },
  plugins: [],
};
