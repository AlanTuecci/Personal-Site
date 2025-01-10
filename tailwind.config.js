/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        agustina: ['"Agustina"', "cursive"],
        sans: ["GoogleSans", "sans-serif"],
        sansBold: ["GoogleSansBold", "sans-serif"],
        sansMedium: ["GoogleSansMedium", "sans-serif"]
      },
    },
  },
  plugins: [],
};
