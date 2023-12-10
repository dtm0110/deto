/** @type {import('tailwindcss').Config} */
const dynamicColors = require("./colors")
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwindcss-animate"),
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("./plugins/dynamic-colors")(dynamicColors),
  ],
}
