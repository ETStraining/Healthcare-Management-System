/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dc-blue": "#396cf0",
        "mut-blue": "#396cf01a",
        "muted": "#8492a6",
        "dark": "#212529",
        "light": "#f8f9fa",
        "light-gray": "#ced4da",
        "dark-blue": "#202942",
        "gray": "#adb5bd"
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        interVariable: ['InterVariable', 'sans-serif'],
        interDisplay: ['InterDisplay', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

