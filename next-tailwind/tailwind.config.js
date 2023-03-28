/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "primary-text": "var(--sys-color-content-primary)",
      'active': 'var(--sys-color-content-placeholder)',
      'error': 'var(--gl-color-shades-red-00)',
      'magenta': 'var(--gl-color-shades-magenta-100)',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
    },
    extend: {},
  },
  plugins: [],
};
