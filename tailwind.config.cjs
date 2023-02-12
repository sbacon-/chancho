/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  
  darkMode: 'class',

  content: ['./src/**/*.{htmle,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        text:     '#000000',
        textdark: '#ffffff',
        link:     '#0000ff',
        linkdark: '#0000ff',
        neu:      '#dddddd',
        neudark:  '#222221',
        pri1:     '#ed0852',
        pri1dark:     '#ed0852',
        pri2:     '#0B53EF',
        pri2dark:     '#0B53EF',
        pri3:     '#53EF0B',
        pri3dark:     '#53EF0B',
        sec1:     '#ffff00',
        sec1dark: '#ffff00',
        sec2:     '#ff00ff',
        sec2dark: '#ff00ff',
        sec3:     '#00ffff',
        sec3dark: '#00ffff',
      },
      dropShadow: {
        '3xl': '0 0 1px rgba(0,0,0,1)',
        '4xl': '0 0 1px rgba(255,255,255,1)' 
      },
    },
  },
  variants: {
    extend: {
      dropShadow: ['dark']
    },
  },
  plugins: [],
}
