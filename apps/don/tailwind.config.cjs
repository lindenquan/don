/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ensure you're specifying where Tailwind should look for class names
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
