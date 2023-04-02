/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    border: {},
    colors: {
      "shades-turquoise-60": "var(--gl-color-shades-turquoise-60)",
      "shades-yellow-50": "var(--gl-color-shades-yellow-50)",
      "shades-gray-00": "var(--gl-color-shades-gray-00)",
      "shades-gray-70": "var(--gl-color-shades-gray-70)",
      "shades-gray-90": "var(--gl-color-shades-gray-90)",
      "shades-gray-100": "var(--gl-color-shades-gray-100)",

      "shades-magenta-50": "var(--gl-color-shades-magenta-50)",
      "shades-gray-10": "var(--gl-color-shades-gray-10)",

      "sys-color-surface-background-dark":
        "var(--sys-color-surface-background-dark)",
      "sys-color-surface-background-default":
        "var(--sys-color-surface-background-default)",
      warning: "#ffc107",
    },
    extend: {
      backgroundImage: {
        bannerImage: "url(/backgroundBanner.jpeg)",
      },
      boxShadow: {
        card: "10px 9px 9px -6px rgba(0,0,0,0.75)",
        "gl-shadow-level-1": "0.0px 4.0px 8.0px 0px rgba(0, 0, 0, 0.08)",
      },
      fontFamily: {
        inconsolata: ["Inconsolata"],
        poppins: ["Poppins"],
      },
      fontSize: {
        "gl-font-size-md": "var(--gl-font-size-md)",
        "gl-font-size-lg": "var(--gl-font-size-lg)",
        "gl-font-size-xl": "var(--gl-font-size-xl)",
        "gl-font-size-xxl": "var(--gl-font-size-xxl)",
      },
      fontWeight: {
        "gl-font-weight-light": "var(--gl-font-weight-light)",
        "gl-font-weight-regular": "var(--gl-font-weight-regular)",
        "gl-font-weight-medium": "var(--gl-font-weight-medium)",
        "gl-font-weight-semibold": "var(--gl-font-weight-semibold)",
      },
      spacing: {
        "gl-spacing-01": "var(--gl-spacing-01)",
        "gl-spacing-02": "var(--gl-spacing-02)",
        "gl-spacing-03": "var(--gl-spacing-03)",
        "gl-spacing-08": "var(--gl-spacing-08)",
        "gl-spacing-10": "var(--gl-spacing-10)",
        "gl-spacing-12": "var(--gl-spacing-12)",
      },
      borderWidth: {
        "gl-border-width-md": "var(--gl-border-width-md)",
      },
      borderRadius: {
        "gl-border-radius-xs": "var(--gl-border-radius-xs)",
        "gl-border-radius-sm": "var(--gl-border-radius-sm)",
      },
    },
  },
  plugins: [],
};
