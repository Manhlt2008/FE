/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        yellowgreen: "#8abb3e",
        gray: {
          "100": "#020202",
          "200": "rgba(28, 24, 24, 0.4)",
        },
        goldenrod: "#fbc847",
        c1818: "#000",
      },
      fontFamily: {
        "open-sans": "'Open Sans'",
      },
      borderRadius: {
        "81xl": "100px",
        "8xs": "5px",
      },
    },
    fontSize: {
      base: "16px",
      "6xl": "25px",
      xl: "20px",
      "11xl": "30px",
      lg: "18px",
      "21xl": "40px",
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
