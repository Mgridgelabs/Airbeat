/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black': '#000000',
        'white': '#ffffff',
        'gray': {
          600: '#4B5563',
        },
      },
    },
  },
  plugins: [
    require("daisyui"),  // This plugin is fine
  ],
}

