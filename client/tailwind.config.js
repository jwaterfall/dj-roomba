/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "hsl(0, 0%, 100%)",
        textSecondary: "hsla(0, 0%, 100%, 0.5)",
        primary: "hsl(360,90%,55%)",
        background: "hsl(345, 100%, 1%)",
        darken: {
          0.1: "hsla(0,0%,0%,0.1)",
          0.2: "hsla(0,0%,0%,0.2)",
          0.3: "hsla(0,0%,0%,0.3)",
          0.4: "hsla(0,0%,0%,0.4)",
          0.5: "hsla(0,0%,0%,0.5)",
          0.6: "hsla(0,0%,0%,0.6)",
          0.7: "hsla(0,0%,0%,0.7)",
          0.8: "hsla(0,0%,0%,0.8)",
          0.9: "hsla(0,0%,0%,0.9)",
        },
        lighten: {
          0.025: "hsla(0,0%,100%,0.025)",
          0.05: "hsla(0,0%,100%,0.05)",
          0.1: "hsla(0,0%,100%,0.1)",
          0.15: "hsla(0,0%,100%,0.2)",
          0.2: "hsla(0,0%,100%,0.2)",
        },
      },
      fontFamily: {
        sans: ["Gothic A1", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
