/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          "dark-blue": "#0B0D17",
          purple: "#D0D6F9",
          "gray-dark": "#383B4B",
        },
      },
      fontFamily: {
        bellefair: "Bellefair",
        barlow: "Barlow",
      },
      fontSize: {
        15: "15px",
        28: "28px",
        32: "32px",
        56: "56px",
      },
      letterSpacing: {
        2.3: "2.3px",
        2.7: "2.7px",
        4.725: "4.725px",
      },
    },
  },
  plugins: [],
};
