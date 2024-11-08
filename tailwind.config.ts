import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#344054',
        info: '#4A77FF',
        success: '#00C696',
        secondary: '#EFF1F6',
        blue: '#40E2E8',
        yellow: '#FBFF23',
        'dark-blue': '#2C599B',
        'light-gray': '#f3f4f6',
        'light-blue': '#3A5FCF',
        'light-dark': '#5E626F',
        whiteblue: '#FBFBFB',
        'light-success': '#00C696',
        'light-secondary': '#E8ECFF',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 500ms ease-out',
        fadeIn: 'fadeIn 500ms ease-out',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: false,
  },
};
export default config;
