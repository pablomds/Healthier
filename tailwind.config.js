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
          DEFAULT: "#7e6cfd",
          light: "#7b6bf8",
          dark: "#191a1f",
          gray: '#EEEEEE'
        },
        secondary: {
          DEFAULT: "#181A20",
          medium: "#35383f",
          dark: "#1F222A"
        },
        errors: {
          DEFAULT: "#F75555"
        }
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
