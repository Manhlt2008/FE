/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellowgreen: "#8abb3e",
        black: "#000",
        gray: {
          "100": "#fffdf9",
          "200": "#020202",
          "300": "rgba(28, 24, 24, 0.4)",
        },
        goldenrod: "#fbc847",
        c1818: "#1c1818",
        white: "#fff",
        cef: "#627cef",
        darkslategray: "#343435",
        linen: "#efebe6",
        crimson: "#f63948",
      },
      fontFamily: {
        "open-sans": "'Open Sans'",
        "vampiro-one": "'Vampiro One'",
      },
      borderRadius: {
        "81xl": "100px",
        "8xs": "5px",
        mini: "15px",
        "11xl": "30px",
      },
    },
    fontSize: {
      base: "16px",
      "6xl": "25px",
      xl: "20px",
      "11xl": "30px",
      "base-2": "16.2px",
      "6xl-4": "25.4px",
      lg: "18px",
      "21xl": "40px",
      "4xl": "23px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
