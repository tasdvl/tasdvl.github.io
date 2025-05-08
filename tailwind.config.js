/** @type {import('tailwindcss').Config} */
export const content = [];
export const theme = {
  extend: {},
};
export const plugins = [];

module.exports = {
  content: [
      './src/**/*.{js,jsx,ts,tsx}', // The path to your React components/files
  ],
  theme: {
      extend: {
        animation: {
          blink: 'blink 1s steps(2, start) infinite',
        },
        keyframes: {
          blink: {
            '0%, 50%': { opacity: '1' },
            '50.01%, 100%': { opacity: '0' },
          },
        },
      
      },
  },
  plugins: [],
  }
