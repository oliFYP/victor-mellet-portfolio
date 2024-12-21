/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f0f3f8",
          100: "#d9e1ed",
          200: "#b3c2db",
          300: "#8da4c9",
          400: "#6785b7",
          500: "#4167a5",
          600: "#345284",
          700: "#273e63",
          800: "#1a2942",
          900: "#0d1521",
        },
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(1rem)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out",
        "slide-up": "slide-up 0.6s ease-out",
      },
    },
  },
  plugins: [],
};
