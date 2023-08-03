/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      
      colors: {
        // black: '#757693',
        blue: {
          100: '#D0E7FE',
          200: '#A2CCFD',
          300: '#73ACFB',
          400: '#5091F8',
          500: '#1865F4',
          600: '#114DD1',
          700: '#0C39AF',
          800: '#07288D',
          900: '#041B75',
        },
        orange: {
          100: '#FFF8E6',
          200: '#FFE09B',
          300: '#FFCB6A',
          400: '#FFB645',
          500: '#FF9307',
          600: '#DB7405',
          700: '#A95002',
          800: '#934102',
          900: '#7A3001',
        },
        violet: {
          100: '#F7D5FC',
          200: '#EAACFA',
          300: '#D480F1',
          400: '#B95EE4',
          500: '#942ED3',
          600: '#7421B5',
          700: '#571797',
          800: '#3D0E7A',
          900: '#2B0865',
        },
      },
    },
  },
  plugins: [],
};
