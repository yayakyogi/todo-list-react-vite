/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBlue: "#16ABF8",
        grey: "#4A4A4A",
        gray: "#F4F4F4",
        black: "#111111",
        red: "#ED4C5C",
        yellow: "#F8A541",
        green: "#00A790",
        darkBlue: "#428BC1",
        purple: "#8942C1",
      },
      fontFamily: {
        "poppins-regular": ["Poppins-Regular,sans serif"],
        "poppins-medium": ["Poppins-Medium,sans serif"],
        "poppins-semibold": ["Poppins-SemiBold,sans serif"],
        "poppins-bold": ["Poppins-Bold,sans serif"],
      },
    },
  },
  plugins: [],
};
