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
          "100": "#fffdfb",
          "200": "#fffdf9",
          "300": "#020202",
          "400": "rgba(28, 24, 24, 0.4)",
        },
        goldenrod: "#fbc847",
        c1818: "#1c1818",
        white: "#fff",
        royalblue: "#4f6fe0",
      },
      fontFamily: {
        "open-sans": "'Open Sans'",
      },
      borderRadius: {
        "81xl": "100px",
        "8xs": "5px",
        "11xl": "30px",
        xl: "20px",
      },
    },
    fontSize: {
      base: "16px",
      "6xl": "25px",
      xl: "20px",
      "11xl": "30px",
      lg: "18px",
      "4xl": "23px",
      "21xl": "40px",
      "5xl": "24px",
      "31xl": "50px",
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
