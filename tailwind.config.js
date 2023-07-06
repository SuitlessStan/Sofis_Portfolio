/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#F1E3E9",
        secondary: "#DDC885",
        accent: "#1433E6",
        idk: "#604D53",
        grey: "#272727",
        salmon: "#ED6A5A",
        orange: "#D17B0F",
        vibrantBlue: "#0000DD",
      },
      fontFamily: {
        climateCrisis: ["Climate Crisis"],
        Sniglet: ["Sniglet"],
        Butler: ["Butler"],
        QuicheFlare: ["Quiche Flare"],
        fieldsDisplay: ["Fields Display"],
      },
    },
  },
  variants: {
    extend: {
      scale: ["hover"],
    },
  },
  plugins: [],
}
