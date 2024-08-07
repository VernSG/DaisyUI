/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: ['acid'], // Menyertakan tema "coffee" sebagai tema yang digunakan
  },
};
