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
        'shiro-red': '#CC0000',
        'shiro-red-dark': '#990000',
        'shiro-black': '#1a1a1a',
        'shiro-gray': '#f5f5f5',
        'shiro-gray-dark': '#333333',
      },
      backgroundImage: {
        'gradient-cta': 'linear-gradient(135deg, #CC0000, #990000)',
        'gradient-hero': 'linear-gradient(135deg, #1a1a1a 0%, #333333 100%)',
      },
    },
  },
  plugins: [],
}
