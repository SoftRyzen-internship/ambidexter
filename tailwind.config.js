/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  mode: 'JIT',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      xl: '1440px',
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.25rem',
          md: '2.5rem',
          xl: '5rem',
        },
      },

      colors: {
        accent: '#7ED956',
        secondary: '#A1A1A1',
        bgColor: '#EFEFEF',
        white: '#FFF',
        black: '#222',
        activ_nav: '#a1a1a1',
        red: '#FF7272',
      },

      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },

      fontSize: {
        extraSmall: ['8px'],
        small: ['12px'],
        base: ['14px'],
        middle: ['16px'],
        medium: ['18px'],
        large: ['24px'],
        large36: ['36px'],
        large46: ['46px'],
        large48: ['48px'],
        large56: ['56px'],
        large62: ['62px'],
        large64: ['64px'],
        large70: ['70px'],
        large92: ['92px'],
        large124: ['124px'],
        large134: ['134px'],
        large140: ['140px'],
      },
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
};
