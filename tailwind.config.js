/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{html,js,handlebars}"],
  theme: {
    extend:{
    colors: {
        'azulclaro': '#ADD8E6',
        'cinza': '#808080',
    },
  },
  }, 

  plugins: [],
}