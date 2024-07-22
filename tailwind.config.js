/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2FCCDB",
      },
      backgroundImage: {
        "background-start": "url('./src/assets/bg.webp')",
      },
      backgroundColor: {
        translucent: "rgba(255, 255, 255, 0.1)",
      },
      boxShadow: {
        'custom': '0px 0px 10px 3px rgba(47, 204, 219, 0.7)',
      }
    },
  },
  plugins: [],
};
