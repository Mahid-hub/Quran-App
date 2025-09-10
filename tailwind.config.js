// tailwind.config.js
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
  extend: {
    fontFamily: {
      arabic: ["Amiri", "serif"],        // Regular Amiri
      quran: ["Amiri Quran", "serif"],  // Quran style Amiri
    },
  },
},
  plugins: [],
};
