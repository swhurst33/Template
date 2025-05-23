// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust to your folder structure
    "./pages/**/*.{js,ts,jsx,tsx}", // If you use a /pages directory
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff', // white background
        text: '#000000',       // black text
      },
    },
  },
  plugins: [],
  safelist: [], // Optional: add class names here that are generated dynamically
}

