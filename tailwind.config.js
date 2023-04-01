/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      "sm": '0.8rem',
      "base": '1rem',
      "xl": '1.25rem',
      "2xl": '1.563rem',
      "3xl": '1.953rem',
      "4xl": '2.441rem',
      "5xl": '3.052rem',
    },
    extend: {
      colors: {
        'primary': '#00b48c',
        'secondary': '#6c757d',
        'dark-grey': '#616e80',
        'warning': '#fc6510',
        'success': "#46c35f",
        '9c9fa6': "#9c9fa6",
        'afb1b6': "#afb1b6",
        '99a5b5': "#99a5b5"
      },
      
      fontFamily: {
        'pop': ['Poppins, sans-serif'],
      }
    },
  },
  plugins: [],
}
