/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#5A2A84',
          'purple-dark': '#3E1C5A',
          orange: '#F7941E',
          'orange-light': '#FDBB2D',
          green: '#3FA449',
          blue: '#00AEEF',
        },
      },
    },
  },
  plugins: [],
}
