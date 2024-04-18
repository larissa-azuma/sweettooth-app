/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brightColor: "#fb923c",
        backgroundColor: "FFEDD8",
        lightText: "#959595",
      
      },
    },
  },
  plugins: [],
};