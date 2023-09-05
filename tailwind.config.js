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
        black: "#000",
        gray: {
          "100": "#fffdfb",
          "200": "#020202",
          "300": "rgba(28, 24, 24, 0.4)",
        },
        goldenrod: "#fbc847",
        c1818: "#1c1818",
      },
      fontFamily: {
        "open-sans": "'Open Sans'",
      },
      borderRadius: {
        "81xl": "100px",
        "8xs": "5px",
        "mid-7": "17.7px",
      },
    },
    fontSize: {
      base: "16px",
      "6xl": "25px",
      xl: "20px",
      "11xl": "30px",
      lg: "18px",
      "31xl": "50px",
      mini: "15px",
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
      xl: {
        raw: "screen and (max-width: 1279px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
