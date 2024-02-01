/** @type {import('tailwindcss').Config} */

const colors = {
  clr: {
    DarkBlueIntro: 'hsl(217, 28%, 15%)',
    DarkBlueMain: 'hsl(218, 28%, 13%)',
    DarkBlueFooter: 'hsl(216, 53%, 9%)',
    DarkBlueTestimo: 'hsl(219, 30%, 18%)',
    Cyan: 'hsl(176, 68%, 64%)',
    Blue: 'hsl(198, 60%, 50%)',
    LightRed: 'hsl(0, 100%, 63%)',
    White: 'hsl(0, 0%, 100%)',
  },
};

const fontFamily = {
  Raleway: ['Raleway', 'sans-serif'],
  OpenSans: ['OpenSans', 'sans-serif'],
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
