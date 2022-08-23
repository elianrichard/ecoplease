/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./modules/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ecoRed: "#CB3233",
        darkRed: "#AC151A",
        totalDark: "#100D0C",
        skinCream: "#E5D2B6",
        lightYellow: "#E1C172",
        paleGreen: "#DFD9A8",
        lightGreen: "#839154",
        darkGreen: "#3F703B",
      },
      dropShadow: {
        perks: "0px 5px 50px 15px rgba(0, 0, 0, 0.5)",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
