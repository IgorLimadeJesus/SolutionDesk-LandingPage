/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F5EDFF",
          100: "#E9D6FF",
          200: "#D1ACFF",
          300: "#B97FFF",
          400: "#A460FF",
          500: "#8B3DFF",
          600: "#6D28D9",
          700: "#5B21B6",
          800: "#3B1A91",
          900: "#2A136D"
        }
      },
      boxShadow: {
        neon: "0 0 30px rgba(139, 61, 255, 0.45)",
      },
      borderRadius: {
        '2xl': '1rem',
      }
    },
  },
  plugins: [],
}
