/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    extend: {
      backgroundImage:{
        'navimg':"url('/src/assets/Images/Rectangle.png')"
      }
    },
  },
  plugins: [],
}

