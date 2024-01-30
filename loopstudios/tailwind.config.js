/** @type {import('tailwindcss').Config} */

const colors = {
  clr: {
    clrWhite: 'hsl(0, 0%, 100%)',
    clrBlack: 'hsl(0, 0%, 0%)',
    clrDarkGray: 'hsl(0, 0%, 55%)',
    clrVeryDarkGray: 'hsl(0, 0%, 41%)',
  },
};

const fontFamily = {
  josefin: ['Josefin Sans', 'serif'],
  alata: ['Alata', 'sans-serif'],
};

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors,
    },
    fontFamily,
  },
  plugins: [],
};
