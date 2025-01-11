/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./index.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#7b6bf8",
          DEFAULT: "#7e6cfd",
          dark: "#191a1f",
        },
        secondary: {
          DEFAULT: "#181A20",
          medium: "#35383f",
        },
      },
    },
  },
  plugins: [],
  presets: [require("nativewind/preset")],
};
