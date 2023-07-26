/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
    colors: {
      "dark-primary": "#082043",
    },
  },
  plugins: [require("flowbite/plugin")],
};
