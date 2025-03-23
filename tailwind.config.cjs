/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',//Just in time
  darkMode: 'class',
  content: ['./src/**/*.{htmle,js,svelte,ts}'],
  theme: {
    extend: {
      minHeight:{
        '1/2':'50%',
      },
      colors: {
        /*Pantone Color of the Year 2024 (PEACH FUZZ)*/
        //Triad Cream Tan (Mocha Mousse)/
        pri1:     '#e4c7b8',  
        pri1dark: '#a47764',  
        //Triad Safari (Chocolate Martini)/
        pri2:     '#bbaa92',
        pri2dark: '#56453f',
        //Triad Gardenia (Baltic Amber)/
        pri3:     '#f0e9e0', 
        pri3dark: '#8b645a',

        /*Neutral Colors - White & Black*/
        text:     '#000000',
        textdark: '#ffffff',
        /*Neutral Backgrounds for text and a true neutral*/
        neu:      '#efefef',
        grey:     '#787878',
        neudark:  '#222222',

      },
      dropShadow: {
          /*Black shadow, white shadow*/
        '3xl': '0 0 1px rgba(0,0,0,1)',
        '4xl': '0 0 1px rgba(255,255,255,1)' 
      },
      animation: {
        'spin': 'spin 3s linear infinite',
      }
    },
  },
  variants: {
    extend: {
      dropShadow: ['dark']
    },
  },
  plugins: [],
}
