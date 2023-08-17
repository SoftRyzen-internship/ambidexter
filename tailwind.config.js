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
        white: '#FFF',
        black: '#222',
        activ_nav: '#a1a1a1',
      },

      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },

      fontSize: {
        // little: ['12px', '24px'], // class="text-little"
        // small: ['18px', '24px'], // class="text-small"
      },
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
};
