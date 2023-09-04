/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
    colors: {
      orange: {
        primary: "#FF7369",
        dark: "#FF685F",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
