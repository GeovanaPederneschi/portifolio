/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0F',
        card: '#1A1A2E',
        primary: '#F0EEF8',
        secondary: '#9B98B8',
        accent: '#7C5CFC',
        'accent-hover': '#9B7FFF',
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
