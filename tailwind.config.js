import { createThemes } from "tw-colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
  plugins: [
    createThemes(
      {
        light: {
          "main-color-background": "#e6e4d5",
          "main-color-background-static": "#e6e4d5",
          "main-black": "#23210f",
          "main-black-static": "#23210f",
          "main-color": "#fcff60",
        },
        dark: {
          "main-color-background": "#23210f",
          "main-color-background-static": "#e6e4d5",
          "main-black": "#e6e4d5",
          "main-black-static": "#23210f",
          "main-color": "#fcff60",
        },
      },
      {
        defaultTheme: "light",
      }
    ),
  ],
};
