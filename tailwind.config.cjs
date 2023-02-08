/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',

  content: ['./src/**/*.{htmle,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        bright: '#3d64d2',
        primary: '#4f3b57',
        secondary: '#857b6d',

      },

    },
  },
  plugins: [],
}
