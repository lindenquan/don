module.exports = {
  plugins: [
    require("@tailwindcss/postcss"), // Add this line
    require("autoprefixer"), // Ensure autoprefixer is also included
  ],
};
