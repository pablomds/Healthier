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
          DEFAULT: "rgb(126, 109, 252)", // Equivalent à #7e6cfd
          light: "rgb(123, 107, 248)",  // Equivalent à #7b6bf8
          dark: "rgb(25, 26, 31)",     // Equivalent à #191a1f
        },
        secondary: {
          DEFAULT: "rgb(8, 8, 10)",  // Equivalent à #181A20
          medium: "rgb(53, 56, 63)",   // Equivalent à #35383f
          dark: "rgb(31, 34, 42)",     // Equivalent à #1F222A
        },
      },
      fontFamily: {
        "Urbanist-Black": ["Urbanist-Black"],
        "Urbanist-BlackItalic": ["Urbanist-BlackItalic"],
        "Urbanist-Bold": ["Urbanist-Bold"],
        "Urbanist-BoldItalic": ["Urbanist-BoldItalic"],
        "Urbanist-ExtraBold": ["Urbanist-ExtraBold"],
        "Urbanist-ExtraBoldItalic": ["Urbanist-ExtraBoldItalic"],
        "Urbanist-ExtraLight": ["Urbanist-ExtraLight"],
        "Urbanist-ExtraLightItalic": ["Urbanist-ExtraLightItalic"],
        "Urbanist-Italic": ["Urbanist-Italic"],
        "Urbanist-LightItalic": ["Urbanist-LightItalic"],
        "Urbanist-Medium": ["Urbanist-Medium"],
        "Urbanist-MediumItalic": ["Urbanist-MediumItalic"],
        "Urbanist-Regular": ["Urbanist-Regular"],
        "Urbanist-SemiBold": ["Urbanist-SemiBold"],
        "Urbanist-SemiBoldItalic": ["Urbanist-SemiBoldItalic"],
        "Urbanist-Thin": ["Urbanist-Thin"],
        "Urbanist-ThinItalic": ["Urbanist-ThinItalic"],
      },
    },
  },
  plugins: [],
  presets: [require("nativewind/preset")],
};
