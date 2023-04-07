/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    colors: {
      transparent: "transparent",
      primary: "#058B94",
    },
    fontFamily: {
      Mukta: ["Roboto", "sans-serif"],
    },
    extend: {},
  },
  variant: { backgroundColor: ["active"] },
  plugins: [],
};
