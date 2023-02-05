/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      screens: {
        phone: { max: "500px" },
      },
    },
  },
  plugins: [],
};
