/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xl: '1120px',
      },
      colors: {
        yellow: {
          DEFAULT: '#DBAC2C',
          light: '#F1E9C9',
          dark: '#C47F17',
        },
        purple: {
          DEFAULT: '#8047F8',
          light: '#EBE5F9',
          dark: '#4B2995',
        },
        base: {
          100: '#FAFAFA',
          200: '#F3F2F2',
          300: '#EDEDED',
          400: '#E6E5E5',
          500: '#D7D5D5',
          600: '#8D8686',
          700: '#574F4D',
          800: '#403937',
          900: '#272221',
        },
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        baloo: ['"Baloo 2"', 'sans-serif'],
      },
      fontSize: {
        xxs: '0.625rem',
        '3xl': '2rem',
      },
      lineHeight: {
        base: '1.3',
        high: '1.6',
      },
    },
  },
  plugins: [],
};
