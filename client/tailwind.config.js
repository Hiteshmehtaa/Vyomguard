/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#2C3E50',
        'charcoal-light': '#34495E',
        'charcoal-dark': '#1C2833',
        orange: '#ff7b00',
        'orange-light': '#ff9933',
        'orange-dark': '#cc6200',
        // New cyan/blue theme
        'cyber-cyan': '#00ffff',
        'cyber-blue': '#00d4ff',
        'tech-blue': '#0099ff',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
