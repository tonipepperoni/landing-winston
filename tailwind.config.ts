import colors from "tailwindcss/colors";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: "0.8rem",
        base: "14px",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
      fontFamily: {
        primary: ["var(--font-dm)", "sans-serif"],
        space: ["var(--font-space)", "sans-serif"],
      },
      backgroundImage: {},
      colors: {
        ...colors,
        primary: "#00D2D2",
        secondary: "#282832",
        cream: "#F6F4F0",
        sand: "#E1D7C8",
      },
    },
  },
  plugins: [],
};
