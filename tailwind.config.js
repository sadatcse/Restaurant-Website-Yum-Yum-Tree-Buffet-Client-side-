/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Kanit: ['Kanit', 'sans-serif'],
      },
      backgroundColor: {
        'cool-gray-900': '#121f21',
      },
    },
  },
  plugins: [require("daisyui")],
}