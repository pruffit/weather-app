/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',

  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        'weather-primary': '#00668A',
        'weather-secondary': '#004E71',
      },
    },
  },

  plugins: [],
};
