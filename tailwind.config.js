/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        primary: "#fe6b7e",
        bradWhite: "#f5f9fc",
      },
      fontFamily:{
        poppins: ["Poppins", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEAFULT: "1rem",
          sn: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem"
        },
      }
    },
  },
  plugins: [],
}