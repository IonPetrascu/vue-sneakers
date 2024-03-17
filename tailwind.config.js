/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontSize: {
      sm: '11px',
      base: '14px',
      xl: '16px',
      '2xl': '20px',
      '3xl': '24px',
      '4xl': '32px'
    }
  },
  plugins: []
}
