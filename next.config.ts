module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], // Adjust according to your project structure
  theme: {
    extend: {
      colors: {
        primary: "#121212", // Primary color (used for backgrounds)
        secondary: "#1e1e1f", // Secondary color (used for backgrounds)
        light: "#fafafa", // Light color (used for text)
        body: "#c0c0c0", // Body text color
        yellow: "#f2d06b", // Accent yellow (used for emphasis)
        subtle: "#868687", // Subtle text (like subtitles or muted text)
        borderLight: "#383838", // Light border color
      },
    },
  },
  plugins: [],
};
