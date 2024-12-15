/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#32373B",
        secondary: "#63A46C",
        background: "#F9F6F0",
      },
    },
  },
  plugins: [],
};
