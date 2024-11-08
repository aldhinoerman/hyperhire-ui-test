import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#344054',
        info: '#4A77FF',
        secondary: '#EFF1F6',
        'light-gray': '#f3f4f6',
        'light-blue': '#3A5FCF',
        'light-dark': '#5E626F',
        whiteblue: '#FBFBFB',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: false,
  },
};
export default config;
