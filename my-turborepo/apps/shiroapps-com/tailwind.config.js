/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#DC0019',
          dark: '#B20014',
          light: '#fef2f2',
        },
        secondary: {
          DEFAULT: '#0a0a0a',
        },
        danger: '#DC2626',
      },
    },
  },
  plugins: [],
}
