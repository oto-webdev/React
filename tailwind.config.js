/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff8901",
        secondary: "#fb923c"
      },

      container: {
        center: true,
        padding: {
          default: "1rem",
          sm: "2rem",
          lg: "4xl",
          xl: "5xl",
          "2xl": "6rem"
        }
      }
    },
  },
  plugins: [],
}

