/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['selector', '[data-mode="my-dark-style"]'],
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}'
  ],
  theme: {
    extend: {}
  },
  plugins: [require('tailwindcss-primeui')]
}
