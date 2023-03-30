/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    border: {},
    colors: {
      "shades-gray-00": "var(--gl-color-shades-gray-00)",
      "shades-gray-60": "var(--gl-color-shades-gray-60)",
      "shades-gray-70": "var(--gl-color-shades-gray-70)",
      "shades-gray-80": "var(--gl-color-shades-gray-80)",
      "shades-gray-90": "var(--gl-color-shades-gray-90)",
      "shades-gray-100": "var(--gl-color-shades-gray-100)",
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto"],
      },
      backgroundImage: {
        dayMovie: "url('/dayMovie.jpg')",
        weekMovie: "url('/weekMovie.jpg')",
      },
      boxShadow: {
        card: "10px 9px 9px -6px rgba(0,0,0,0.75)",
      },
    },
  },
  plugins: [],
};
