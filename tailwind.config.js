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
        gray: "#1c1818",
      },
      fontFamily: {
        "open-sans": "'Open Sans'",
      },
    },
    fontSize: {
      xl: "20px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
