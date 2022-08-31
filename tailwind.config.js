/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
      keyframes:{
        cardimg: {
          '0%' : { height: '0%',},
          '100%' : { height : '100%'},
        },
      },

      animation: {
        cardimg : ' card_img .5s forwards',
      },

      grayscale: {
        50:"100%",
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}