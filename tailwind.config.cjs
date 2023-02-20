/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  
  darkMode: 'class',

  content: ['./src/**/*.{htmle,js,svelte,ts}'],
  theme: {
    extend: {
      minHeight:{
        '1/2':'50%',
      },
      colors: {
        text:     '#000000',
        textdark: '#ffffff',
        /*Neutral Colors - White & Black*/
        neu:      '#efefef',
        grey:     '#787878',
        neudark:  '#222222',
        /*Contrast Chart (WAGC AA Compliant)
        COLOR   LightN  LText     DarkN     DText
        Red     4.53:1  4.02:1    3.60:1    4.41:1 
        Blue    4.65:1  3.92:1    2.97:1    5.34:1  
        Yellow  1.69:1  11.14:1   9.67:1    1.64:1

        NormalSizeText 
        WAGC AA-4.5
        WAGC AAA-7 (O_o) 
        LargeTextSize (18pt or 14pt-BOLD) 
        WAGC AA-3
        WAGC AAA-4.5
        User & Graphical Input  
        WAGC AA-3
        */

        /*VIVA MAGENTA*/
        pri1:     '#d9013e',
        pri1dark: '#ed0852',
        /*TRIAD BLUE*/
        pri2:     '#046dbd',
        pri2dark: '#046dbd',
        /*TRIAD YELLOW*/
        pri3:     '#d9bc01',
        pri3dark: '#edc708',

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
        '3xl': '0 0 1px rgba(0,0,0,1)',
        '4xl': '0 0 1px rgba(255,255,255,1)' 
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
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
