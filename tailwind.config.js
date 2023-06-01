/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "1/2": "calc(100% - 10rem)",
        "1/4": "calc(100% - 15rem)",
      },
      boxShadow: {
        "3xl": "0px 4px 10px 2px rgba(0, 0, 0, 0.25)",
        "header-shadow": "0px 4px 20px rgba(0, 0, 0, 0.25)",
      },
      colors: {
        "sky-blue": "#1976D2",
        "dark-grey": "#B1B1B1",
        "light-grey": "#D9D9D9",
      },
    },
  },
  plugins: [],
};
