/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],

  theme: {
    extend: {
      colors: {
        orangeCustom: '#F18519',
      },
      fontFamily: {
        iransans: ['IRANSansWebFaNum', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
