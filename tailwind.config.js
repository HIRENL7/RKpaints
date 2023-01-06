/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public\index.html"],
  theme: {
    extend: {
      animation:{
        slideT:'slide 500sec linear'
      },
      keyframes:{
        slideT:{
          '0%':{transition:'opacity-0'},
          '100%':{transition:'opacity-1'}
        }
      }
    },
  },
  plugins: [],
}
