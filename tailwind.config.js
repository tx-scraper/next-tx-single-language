const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ["InterVariable", ...defaultTheme.fontFamily.sans],
      // },
      colors: {
        primary: colors.teal,
        gray: colors.neutral,
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme("colors.blue.500"),
              "&:hover": {
                color: `${theme("colors.blue.600")} !important`,
              },
              code: { color: theme("colors.blue.400") },
            },
          },
        },
        dark: {
          css: {
            a: {
              color: theme("colors.blue.500"),
              "&:hover": {
                color: `${theme("colors.blue.600")} !important`,
              },
              code: { color: theme("colors.blue.400") },
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
