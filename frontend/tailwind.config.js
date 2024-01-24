/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-green": "var(--dark-green)",
        "light-green": "var(--light-green)",
      },
    },
  },
  plugins: [],
};
