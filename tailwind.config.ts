const colors = require('tailwindcss/colors');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      betOrbitMainDark: '#121826',
      betOrbitMainSilver: '#C0C0C0',

      orbitPurple: '#6366f1',
      orbitOrange: '#FF5722',
      orbitText: '#E0E0E0',
      orbitShadow: '#333333',

      orbitBlueGrey: '#607D8B',
      orbitBrightBlue: '#1E88E5',

      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      red: colors.red,
      green: colors.green,
      blue: colors.blue,
      amber: colors.amber,
    },
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      boxShadow: {
        red: '0 0 189px 90px #EC4899',
        blue: '0 0 189px 90px #8B5CF6',
      },
    },
  },
  plugins: [],
};
