/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2D4356",
        onPrimary: "#EEEEEE",
        secondary: "#FAEAB1",
        onSecondary: "#2D4356",
        background: "#FFFFFF",
        onBackground: "#000000",
        elevation: "#f3f4f6",
        onElevation: "#000000",
        elevation2: "#d1d5db",
        onElevation2:  "#000000",
      },
      fontFamily:{
        "rubik": ["Rubik", "sans-serif"],
        "young": ["Young Serif", "serif"]
      }
    },
  },
  plugins: [],
}

