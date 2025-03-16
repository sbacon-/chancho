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
        //Triad Cannoli Cream (Baltic Amber)/
        pri3:     '#f0f0e5', 
        pri3dark: '#8b645a',
        //Triad Safari (Chocolate Martini)/
        pri2:     '#bbaa92',
        pri2dark: '#56453f',
        
        /*Pantone Color of the Year 2024 (PEACH FUZZ)
        //Triad Peach-Orange (ateneo blue)/
        pri1:   '#fbbe97',  
        pri1dark:'#044168',  
        //Triad Flavescent (navy blue)/
        pri3:     '#fbf097', 
        pri3dark: '#040f68',
        //Triad Salmon Pink (tropical rain forest)/
        pri2:     '#fb97a1',
        pri2dark: '#04685e',
	*/

        /*Neutral Colors - White & Black*/
        text:     '#000000',
        textdark: '#ffffff',
        /*contrast ratio
            pri3 - 18.01 
            pri3dark - 16.49
        */
        /*Neutral Backgrounds for text and a true neutral*/
        neu:      '#efefef',
        grey:     '#787878',
        neudark:  '#222222',

        /*
        sec1:     '#ffff00',
        sec1dark: '#ffff00',
        sec2:     '#ff00ff',
        sec2dark: '#ff00ff',
        sec3:     '#00ffff',
        sec3dark: '#00ffff',
        */
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
